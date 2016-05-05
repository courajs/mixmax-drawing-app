(function() {
  var root = this;

  var decode_params= function() {
    return 50
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = decode_params
  } else {
    if (typeof root.DrawMixmax === 'undefined') {
      root.DrawMixmax = {}
    }
    root.DrawMixmax.decode_params = decode_params
  }
}())
