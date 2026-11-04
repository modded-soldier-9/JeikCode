## 2024-11-04 - Memoize Markdown Component

**Learning:** Unnecessary re-renders of the Markdown component were happening when chat messages updated. Because this is a heavy component that parses markdown and hydrates mermaid diagrams, doing this on every render can cause frame drops on large chats.

**Action:** Wrap the Markdown component in `memo` from `preact/compat` to prevent it from re-rendering unless its content or search props change. This optimization reduces the computational load and makes scrolling smoother in long conversations.
