console.log('VillaForge AI Companion: Smoke Test gestartet.');
const fs = require('fs');
if (fs.existsSync('src/app.js')) {
    console.log('Test bestanden: App-Struktur vorhanden.');
    process.exit(0);
} else {
    console.error('Test fehlgeschlagen: App-Struktur fehlt.');
    process.exit(1);
}