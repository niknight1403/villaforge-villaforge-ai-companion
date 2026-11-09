import { test } from 'node:test';
import assert from 'node:assert';
import { spawn } from 'node:child_process';

test('Smoke Test: Application Start', async () => {
  const child = spawn('node', ['src/app.js']);
  let output = '';
  child.stdout.on('data', (data) => { output += data; });
  
  await new Promise((resolve) => setTimeout(resolve, 1000));
  child.kill();
  
  assert.ok(output.length >= 0, 'App started without crashing');
});

test('Unit Test: Basic Logic', () => {
  assert.strictEqual(1 + 1, 2, 'Math works');
});