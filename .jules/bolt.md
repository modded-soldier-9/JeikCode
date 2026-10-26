## 2024-05-18 - Markdown Memoization
**Learning:** `Markdown` component in `webui/src/components/Markdown.tsx` does not use React.memo, despite rendering complex HTML (sanitized, parsed). In Preact, we must import `memo` from `preact/compat`.
**Action:** Always import `memo` from `preact/compat` and wrap expensive components like `Markdown`.
