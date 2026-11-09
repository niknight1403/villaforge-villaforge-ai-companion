const assert = require('assert');
const { execSync } = require('child_process');

async function runSmokeTest() {
  console.log('Starting Smoke Test: User Flow Verification...');
  try {
    // Simulate core workflow: Content Generation -> Marketing Optimization
    const output = execSync('node src/app.js --simulate-flow').toString();
    assert.ok(output.includes('Content generated'), 'Content generation failed');
    assert.ok(output.includes('Marketing metrics optimized'), 'Marketing optimization failed');
    console.log('Smoke Test Passed: Core workflow operational.');
  } catch (error) {
    console.error('Smoke Test Failed:', error.message);
    process.exit(1);
  }
}

runSmokeTest();