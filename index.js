/**
 * Transpile with babel using preset env
*/
require('babel-register')({
  presets: [
    ['env', {
      targets: {
        node: '8'
      }
    }
  ]],
});

// Import the rest of our application.
module.exports = require('./app');