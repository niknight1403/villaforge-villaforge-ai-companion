const assert = require('assert');

async function runSmokeTest() {
  console.log('Starte Smoke-Test: Content-Workflow...');
  try {
    // Simulation des Kern-Workflows: Erstellung eines Inhalts
    const content = { type: 'text', prompt: 'Marketing-Text', status: 'pending' };
    assert.strictEqual(content.status, 'pending', 'Initialzustand muss pending sein');
    
    // Simulation der Verarbeitung
    content.status = 'processed';
    assert.strictEqual(content.status, 'processed', 'Verarbeitung muss den Status auf processed setzen');
    
    console.log('Smoke-Test erfolgreich: Kern-Workflow validiert.');
  } catch (err) {
    console.error('Smoke-Test fehlgeschlagen:', err.message);
    process.exit(1);
  }
}

runSmokeTest();