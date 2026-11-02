
## 2024-05-24 - Memoizing chat message timeline
**Learning:** In LLM chat interfaces, chat messages and their markdown outputs represent heavy render payloads. A naive map over messages that passes a global `busy` state or inline arrow functions for refs will break React/Preact memoization. Passing `isLast && busy` as a targeted `streaming` prop and extracting the inline `ref` assignment allows `preact/compat` `memo` to correctly bail out for historical messages while the current one continues to stream.
**Action:** Always verify if a chat message loop passes anonymous functions or rapidly changing top-level state (like `input` or `busy`) before applying `memo`. Extract or localize these props to ensure the memoization actually works.
