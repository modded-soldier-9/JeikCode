
## 2024-05-18 - Preact Memoization

**Learning:** The frontend uses Preact rather than React. While React concepts apply, specific utilities like `memo` must be imported from `preact/compat`. Memoizing expensive components like `Markdown` (which handles parsing and sanitization) is critical in list views (like Chat) to prevent unnecessary re-renders when parent components update.

**Action:** Always verify the correct import paths for React-like hooks/utilities in a Preact codebase. Use `memo` defensively on components doing heavy lifting, especially inside lists.
