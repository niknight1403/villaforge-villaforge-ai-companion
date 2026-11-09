const assert = require('assert');
const app = require('../src/app.js');

async function runSmokeTest() {
  console.log('Starting Smoke Test...');
  try {
    const result = app.processContent({ type: 'text', data: 'hello' });
    assert.strictEqual(result.success, true);
    console.log('Smoke Test Passed!');
  } catch (err) {
    console.error('Smoke Test Failed:', err.message);
    process.exit(1);
  }
}
runSmokeTest();