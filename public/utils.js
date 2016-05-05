(function() {
  var root = this;


  var decodeParams = function(search) {
    var chunks = decodeURIComponent(search.substr(1)).split('&')
    var result = {}
    chunks.forEach(function(chunk) {
      // '=' is used in base64 encode, so only split on the key/value separator
      var pieces = splitOnce(chunk, '=')
      var key = pieces[0]
      var value = pieces[1]

      if (key === 'data') {
        value = JSON.parse(value)
      }

      result[key] = value
    })

    return result
  }


  function splitOnce(string, separator) {
    var splitPoint = string.indexOf(separator)
    var splitLength = separator.length

    var left = string.substr(0, splitPoint)
    var right = string.substr(splitPoint + splitLength)
    
    return [left, right]
  }


  var utils = {
    splitOnce: splitOnce,
    decodeParams: decodeParams
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = utils
  } else {
    if (typeof root.DrawMixmax === 'undefined') {
      root.DrawMixmax = {}
    }
    root.DrawMixmax.utils = utils
  }
}())
