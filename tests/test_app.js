const test = require('node:test');
const assert = require('node:assert');
const app = require('../src/app.js');

test('App initialization test', () => {
  assert.strictEqual(typeof app.init, 'function', 'App should have an init function');
});

test('Core logic test', () => {
  const result = app.processContent({ type: 'text', data: 'hello' });
  assert.ok(result.success, 'Content processing should succeed');
});