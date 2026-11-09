const assert = require('assert');
const { VillaForgeApp } = require('../src/app.js');

async function runSmokeTest() {
  console.log('Starting Smoke Test...');
  try {
    const app = require('../src/app.js');
    const result = await app.processContent({ type: 'text', data: 'Hello World' });
    assert.strictEqual(result.status, 'success', 'App should process content successfully');
    
    const errorResult = await app.processContent({ type: 'invalid', data: null });
    assert.strictEqual(errorResult.status, 'error', 'App should handle invalid input gracefully');
    
    console.log('Smoke Test Passed: Core user flow and error handling verified.');
    process.exit(0);
  } catch (err) {
    console.error('Smoke Test Failed:', err);
    process.exit(1);
  }
}

runSmokeTest();