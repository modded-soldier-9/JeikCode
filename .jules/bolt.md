## 2023-10-27 - Preact instead of React
**Learning:** The frontend uses Preact, not React. Therefore, optimization techniques like `memo` must be imported from `preact/compat` (e.g. `import { memo } from 'preact/compat';`) rather than `react`.
**Action:** Always check the package.json dependencies and existing imports to determine the specific framework being used (React vs Preact) before applying standard React optimizations.
