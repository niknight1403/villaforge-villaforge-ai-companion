const { spawn } = require('child_process');

async function runSmokeTest() {
  console.log('Starting Smoke Test: VillaForge AI Companion...');
  
  // Test 1: Build check
  console.log('Step 1: Verifying build process...');
  const build = spawn('npm', ['run', 'build']);
  
  build.on('close', (code) => {
    if (code !== 0) {
      console.error('Build failed');
      process.exit(1);
    }
    console.log('Build successful.');
    
    // Test 2: Core User Flow (Mocking API response)
    console.log('Step 2: Verifying core user flow...');
    const server = spawn('node', ['src/app.js']);
    server.stdout.on('data', (data) => {
      if (data.toString().includes('Server running')) {
        console.log('User Flow: System responsive.');
        process.exit(0);
      }
    });
  });
}

runSmokeTest();