## 2024-05-14 - Memoizing Chat Message Components
**Learning:** In the Preact web UI, inline functions like `searchRef` passed to child components from `Chat.tsx` defeat standard `React.memo` (or `preact/compat`'s `memo`) because they have a new object identity on every parent render. This causes O(N) re-renders of the entire message history on every keystroke or streaming token.
**Action:** Always provide a custom equality function to `memo` for chat bubbles that explicitly ignores stable inline callbacks (like `searchRef`) while comparing primitive props and message identities.
