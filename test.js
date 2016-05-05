var assert = require('assert')
var utils = require('./public/utils.js')

function success() {
  console.log('\u001b[32m✔︎\u001b[39m')
}


// splitOnce
var result = utils.splitOnce('hello x world', ' x ')
assert.deepEqual(result, ['hello', 'world'])



// decodeParams
var search = "?user=aaron%40sikes.io&data=%7B%22src%22%3A%22data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABUklEQVRoQ%2B2X4W3CMBBGHxuwAR2hbMAGtBu0E5QN2g0QG3SDthO0I8AEiA3KBugkI6GQRM4l9jnR%2Bbft3PveOXFmTGTMJsKBg5Rm0o24kUQJeGslCla9rRtRR5dooRtJFKx6Wzeiji7RQjeSKFj1tm5EHV2ihWMwMgfeAv8O%2BK%2FLonSQR%2BAXEBgZe2A5NpAqxLX%2BV%2BCzClOqkSYIqX80IG0QJ%2BBhDK3VBnEGVuGc3LGU1FpqCKEqBaQXRCkgvSFKABkEwhpEPnLHm4%2Fd7QFuPdilvbW%2BgXVNUZ0hLI08AV9DQViBNLWUysQ1DIvX7wbY1th4BqTdVMMC5AN4r1T7A0i7qYcFiNyV%2FoBFqPoQrh61%2FxmxZBYgUpuck5dwARRDvSCsDntsyJ3mWRnpVGTMZAeJSSnnHDeSM%2B2YZ7mRmJRyznEjOdOOeZYbiUkp55zJGLkAVrUuMyh2f8wAAAAASUVORK5CYII%3D%22%2C%22width%22%3A50%7D"

var decoded = utils.decodeParams(search)
assert.deepEqual(decoded, {
  user: 'aaron@sikes.io',
  data: {
    src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABUklEQVRoQ+2X4W3CMBBGHxuwAR2hbMAGtBu0E5QN2g0QG3SDthO0I8AEiA3KBugkI6GQRM4l9jnR+bft3PveOXFmTGTMJsKBg5Rm0o24kUQJeGslCla9rRtRR5dooRtJFKx6Wzeiji7RQjeSKFj1tm5EHV2ihWMwMgfeAv8O+K/LonSQR+AXEBgZe2A5NpAqxLX+V+CzClOqkSYIqX80IG0QJ+BhDK3VBnEGVuGc3LGU1FpqCKEqBaQXRCkgvSFKABkEwhpEPnLHm4/d7QFuPdilvbW+gXVNUZ0hLI08AV9DQViBNLWUysQ1DIvX7wbY1th4BqTdVMMC5AN4r1T7A0i7qYcFiNyV/oBFqPoQrh61/xmxZBYgUpuck5dwARRDvSCsDntsyJ3mWRnpVGTMZAeJSSnnHDeSM+2YZ7mRmJRyznEjOdOOeZYbiUkp55zJGLkAVrUuMyh2f8wAAAAASUVORK5CYII=',
    width: 50
  }
})


success()
