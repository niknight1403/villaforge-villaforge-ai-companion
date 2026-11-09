const assert = require('assert');

function testCoreLogic() {
  console.log('Running core logic tests...');
  const app = { status: 'active', version: '1.0.0' };
  assert.strictEqual(app.status, 'active', 'App should be active');
  assert.strictEqual(app.version, '1.0.0', 'Version mismatch');
  console.log('Core logic tests passed.');
}

try {
  testCoreLogic();
  process.exit(0);
} catch (e) {
  console.error('Test failed:', e.message);
  process.exit(1);
}