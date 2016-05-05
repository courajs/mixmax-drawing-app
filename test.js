var assert = require('assert')
var decode_params = require('./public/decode-params.js')

function success() {
  console.log('\u001b[32m✔︎\u001b[39m')
}

assert(typeof decode_params === 'function')

success()
