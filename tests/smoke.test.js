const assert = require('assert');
const { execSync } = require('child_process');

async function runSmokeTest() {
  console.log('Starting Smoke Test: VillaForge AI Companion...');
  try {
    // Simulate core user flow: Content Generation Request
    const output = execSync('node src/app.js --action generate --type text --input "Test Content"').toString();
    assert(output.includes('SUCCESS'), 'Content generation failed');
    
    // Simulate error handling: Invalid type
    try {
      execSync('node src/app.js --action generate --type invalid');
    } catch (e) {
      assert(e.stderr.toString().includes('ERROR'), 'Error handling for invalid type failed');
    }
    
    console.log('Smoke Test Passed: Core user flow and error handling verified.');
  } catch (err) {
    console.error('Smoke Test Failed:', err.message);
    process.exit(1);
  }
}

runSmokeTest();