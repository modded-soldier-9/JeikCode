## 2025-05-20 - Optimize todo batch delete complexity from O(N^2) to O(N)
**Learning:** Using `Array.prototype.splice()` inside a loop over an array causes $O(N^2)$ quadratic runtime complexity due to element re-indexing and array memory shifts on each deletion iteration.
**Action:** Replace sequential `.splice()` operations in loops with a single-pass `Array.prototype.filter()` and $O(1)$ lookup via `Set` to maintain $O(N)$ linear performance.
