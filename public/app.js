$(function() {
  // Weirdly, the function returns the element when initializing, but the
  // Sketch instance when already initialized. We want the instance.

  var params = DrawMixmax.utils.decodeParams(location.search)

  var canvas = document.getElementById('draw-on-this')
  if (params.data && params.data.src) {
    var img = document.createElement('img')
    img.src = params.data.src

    var context = canvas.getContext('2d')
    context.drawImage(img, 0, 0)
  }


  $(canvas).sketch()

  $('#cancel').click(function() {
    Mixmax.cancel()
  })

  $('#ok').click(function() {
    var src = canvas.toDataURL()
    Mixmax.done({
      src: src,
      width: 200
    })
  })
})
