const fs = require('fs');
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}
fs.writeFileSync('dist/app.js', fs.readFileSync('src/app.js'));
console.log('Build erfolgreich: Artefakt erstellt.');