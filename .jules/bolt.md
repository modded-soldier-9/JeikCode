## 2025-05-18 - Optimize batch todo deletion O(N^2) splice loop
**Learning:** Mutating an array using splice inside a loop for batch deletion leads to quadratic time complexity O(N^2).
**Action:** Use a Set for constant time O(1) ID lookup and filter the array in linear time O(N).
