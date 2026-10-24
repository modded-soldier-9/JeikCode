import test from 'node:test';
import assert from 'node:assert';
import { applyTodoAction, TodoItem } from './todos.js';

test('benchmark todo batch delete performance', () => {
  const N = 20000;
  const initialList: TodoItem[] = [];
  for (let i = 1; i <= N; i++) {
    initialList.push({ content: `Item ${i}`, status: 'pending' });
  }

  // Delete every odd-numbered item: 1, 3, 5, ..., 19999 (10,000 items)
  const actions: Array<{ action: string; id: number }> = [];
  for (let i = 1; i <= N; i += 2) {
    actions.push({ action: 'delete', id: i });
  }

  const start = performance.now();
  const result = applyTodoAction(initialList, JSON.stringify({ actions }));
  const elapsed = performance.now() - start;

  assert.strictEqual(result.length, N / 2);
  console.log(`[Benchmark] Batch deleting ${actions.length} items from ${N} items took ${elapsed.toFixed(2)} ms`);
});
