# Preloader Component

A beautiful animated preloader component with smooth transitions and interactive features.

## Features

- **Smooth Loading Animation**: Uses GSAP for smooth percentage counting animation
- **Curved Transition**: Beautiful curved SVG path animation on exit
- **Interactive Skip**: Click anywhere or press any key to skip the loading
- **Responsive Design**: Adapts to different screen sizes
- **Framer Motion**: Smooth animations using Framer Motion
- **Context Provider**: Provides loading state to child components

## Usage

```jsx
import Preloader from "./components/preloader";

function App() {
  return <Preloader>{/* Your app content */}</Preloader>;
}
```

## Props

- `children`: React nodes to render after loading
- `disabled`: Boolean to disable the preloader (default: false)

## Context Hook

Use the `usePreloader` hook to access loading state in child components:

```jsx
import { usePreloader } from "./components/preloader";

function ChildComponent() {
  const { isLoading, loadingPercent, bypassLoading } = usePreloader();

  return <div>{isLoading && <p>Loading: {loadingPercent}%</p>}</div>;
}
```

## Customization

- **Loading Time**: Modify `LOADING_TIME` constant in `index.jsx` (default: 2.5s)
- **Colors**: Update CSS variables in `style.module.css`
- **Animations**: Modify animation configurations in `anim.js`

## Keyboard Shortcuts

- Press any key to skip the loading animation
- Click anywhere on the preloader to skip

## Dependencies

- `framer-motion`: For smooth animations
- `gsap`: For percentage counting animation
- `react`: Core React functionality
