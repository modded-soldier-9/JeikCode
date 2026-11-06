## 2025-02-12 - Re-renders in large message lists
**Learning:** In the Preact frontend, the main Chat component holds the `input` state for the chat box. Every keystroke triggers a state update, causing a re-render of the entire timeline of `UserMessageView` and `AssistantMessageView` components.
**Action:** Use `preact/compat`'s `memo` on expensive timeline items (`AssistantMessageView` and `UserMessageView`). Provide a custom `areEqual` function to ignore inline function props like `searchRef` which change on every render but are functionally identical.
