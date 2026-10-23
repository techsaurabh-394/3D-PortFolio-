import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { get } from 'node:https'
import { githubProjects } from './src/data/githubProjects.js'

const virtualModuleId = 'virtual:github-showcase-stats'
const resolvedVirtualModuleId = `\0${virtualModuleId}`

function requestGitHubJson(url, headers) {
  return new Promise((resolve, reject) => {
    const request = get(url, { headers }, (response) => {
      let body = ''
      response.setEncoding('utf8')
      response.on('data', (chunk) => {
        body += chunk
      })
      response.on('end', () => {
        if (response.statusCode < 200 || response.statusCode >= 300) {
          resolve(null)
          return
        }

        try {
          resolve(JSON.parse(body))
        } catch (error) {
          reject(error)
        }
      })
    })

    request.setTimeout(10000, () => {
      request.destroy(new Error('GitHub API request timed out'))
    })
    request.on('error', reject)
  })
}

function githubShowcaseStatsPlugin(githubToken) {
  let statsPromise

  async function fetchRepositoryStats(project) {
    const headers = {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    }
    if (githubToken) {
      headers.Authorization = `Bearer ${githubToken}`
    }

    try {
      const repository = await requestGitHubJson(
        `https://api.github.com/repos/${project.repo}`,
        headers,
      )
      if (!repository) return null
      let readmeUrl
      try {
        const readme = await requestGitHubJson(
          `https://api.github.com/repos/${project.repo}/readme`,
          headers,
        )
        if (readme) {
          const readmePath = readme.path
            .split('/')
            .map((segment) => encodeURIComponent(segment))
            .join('/')
          readmeUrl = `https://github.com/${project.repo}/blob/${encodeURIComponent(
            repository.default_branch,
          )}/${readmePath}`
        }
      } catch {
        // README metadata is optional; repository stats can still be used.
      }

      return [
        project.repo,
        {
          stars: repository.stargazers_count,
          updatedAt: repository.updated_at,
          ...(readmeUrl ? { readmeUrl } : {}),
        },
      ]
    } catch {
      return null
    }
  }

  return {
    name: 'github-showcase-stats',
    resolveId(id) {
      if (id === virtualModuleId) return resolvedVirtualModuleId
    },
    async load(id) {
      if (id !== resolvedVirtualModuleId) return
      if (!statsPromise) {
        statsPromise = Promise.all(
          githubProjects
            .filter((project) => project.published)
            .map(fetchRepositoryStats),
        ).then((results) =>
          Object.fromEntries(results.filter((result) => result !== null)),
        )
      }
      return `export default ${JSON.stringify(await statsPromise)}`
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      githubShowcaseStatsPlugin(env.GITHUB_TOKEN || process.env.GITHUB_TOKEN),
    ],
  }
})
