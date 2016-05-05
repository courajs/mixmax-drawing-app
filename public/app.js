$(function() {
  // Weirdly, the function returns the element when initializing, but the
  // Sketch instance when already initialized. We want the instance.
  $('#draw-on-this').sketch()

  $('#cancel').click(function() {
    Mixmax.cancel()
  })

  $('#ok').click(function() {
    var canvas = document.getElementById('draw-on-this')
    var src = canvas.toDataURL()
    Mixmax.done({
      src: src,
      width: 50
    })
  })
})
