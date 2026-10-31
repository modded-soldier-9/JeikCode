
## 2024-11-20 - Memoizing the Markdown Component
**Learning:** In Preact, components that receive complex or large string props (like `Markdown` with `content`) can cause significant rendering overhead if they are re-rendered frequently (e.g. during typing or streaming), especially when the component parses and sanitizes HTML. The `Markdown` component in `webui/src/components/Markdown.tsx` was not memoized, leading to potentially expensive and unnecessary re-renders of the DOM parser and sanitization logic when the parent component updates.
**Action:** Use `memo` from `preact/compat` to wrap expensive components like `Markdown` to prevent unnecessary re-renders when their props (`content` and `search`) haven't changed.
