## 2025-05-18 - String Concatenation vs Array Joining in V8 / Node.js
**Learning:** V8 optimizes simple string concatenation (`+=`) via "Rope" data structures, making repeated string `+=` highly competitive or faster for moderate numbers of string fragments, while `array.push()` followed by `array.join('')` avoids repeated intermediate allocations and is standard idiomatic JavaScript for aggregation.
**Action:** Replace loop `+=` with `push` + `join('')` for clean readability and idiom, while recognizing V8 engine rope optimizations in micro-benchmarks.
