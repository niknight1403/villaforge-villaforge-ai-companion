const assert = require('assert');
const app = require('../src/app');

console.log('Running core tests...');
// Simple test case to verify processing logic
const mockReq = { body: { type: 'text', content: 'hello' } };
const mockRes = { json: (data) => { 
    assert.strictEqual(data.status, 'success');
    console.log('Test passed: Content processed successfully.');
}};

app.handle(mockReq, mockRes);
