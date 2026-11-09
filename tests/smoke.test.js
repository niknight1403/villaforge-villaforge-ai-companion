const fs = require('fs');

function runSmokeTest() {
  console.log('Starte Smoke-Test...');
  if (fs.existsSync('src/app.js')) {
    console.log('Test bestanden: src/app.js existiert.');
    process.exit(0);
  } else {
    console.error('Test fehlgeschlagen: src/app.js fehlt.');
    process.exit(1);
  }
}

runSmokeTest();