export const githubProjects = [
  {
    name: "mcp-safe-actions",
    repo: "techsaurabh-394/mcp-safe-actions",
    tagline: "Human approval for destructive MCP tools",
    description:
      "TypeScript library. Asks the human through MCP elicitation when the client supports it, otherwise uses a one-time token bound to the exact arguments, and keeps an audit log. 49 tests, 100% line coverage, mutation-checked.",
    stack: ["TypeScript", "MCP", "zod", "GitHub Actions"],
    topics: ["mcp", "ai-agents", "ai-safety", "human-in-the-loop"],
    featured: true,
    published: true,
  },
  {
    name: "rag-docs-chat",
    repo: "techsaurabh-394/rag-docs-chat",
    tagline: "Chat with your PDFs, every answer cites its source",
    description:
      "Upload PDFs and ask questions; answers cite the source passage. Hybrid BM25 + vector retrieval, a faithfulness check, a retrieval evaluation script (hit@k, MRR), Docker and a GitHub Actions deploy.",
    stack: ["Python", "FastAPI", "RAG", "Docker"],
    topics: ["rag", "llm", "fastapi", "retrieval-augmented-generation"],
    featured: true,
    published: true,
  },
  {
    name: "mcp-notes-server",
    repo: "techsaurabh-394/mcp-notes-server",
    tagline: "A searchable notes memory for AI assistants",
    description:
      "TypeScript MCP server with four typed tools (add, list, search, delete notes), validated inputs, atomic writes and tests.",
    stack: ["TypeScript", "MCP"],
    topics: ["mcp", "claude", "typescript"],
    featured: false,
    published: false,
  },
  {
    name: "ai-engineer-roadmap",
    repo: "techsaurabh-394/ai-engineer-roadmap",
    tagline: "Learn LLMs, RAG, agents and MCP step by step",
    description:
      "A beginner-friendly roadmap with runnable code, animated diagrams, tests and interview questions.",
    stack: ["Python", "TypeScript"],
    topics: ["ai-engineer", "roadmap", "rag", "mcp"],
    featured: false,
    published: false,
  },
  {
    name: "claude-skills",
    repo: "techsaurabh-394/claude-skills",
    tagline: "Reusable Claude Skills",
    description:
      "Skills for SEO and GEO audits, technical blogging and building MCP servers.",
    stack: ["Claude Skills"],
    topics: ["claude", "seo", "mcp"],
    featured: false,
    published: false,
  },
  {
    name: "macclean",
    repo: "techsaurabh-394/mac-storage-cleaner",
    tagline: "Free Mac storage cleaner for the terminal",
    description:
      "Clears caches, old downloads and unused apps. Dry run first, asks before it deletes, JSON output for AI agents.",
    stack: ["Python", "CLI"],
    topics: ["macos", "cli", "ai-agents"],
    featured: false,
    published: false,
  },
];

export const publishedGitHubProjects = githubProjects.filter(
  (project) => project.published,
);
