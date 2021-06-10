loadDiamonds = ->
  containerWidth = $('.diamond-container').width()
  diamondMargin = 10
  diamondMarginLeft = 5
  diamondTop = 0
  diamondSize = containerWidth / 4
  diamondLeft = diamondSize / 2 + diamondMarginLeft
  $('.diamond-container').css 'height': diamondSize / 2 * 6 + 10
  $('.diamond').each (index, element) ->
    $(element).find('img').click ->
      $(this).parent().find('a').click()
      return
    $(element).css
      'left': diamondLeft
      'top': diamondTop
      'width': diamondSize - diamondMargin * 2
      'height': diamondSize - diamondMargin * 2
    diamondLeft += diamondSize
    switch index
      when 0
        diamondLeft += diamondSize
      when 1
        diamondLeft = diamondMarginLeft
        diamondTop += diamondSize / 2
      when 5
        diamondLeft = diamondSize / 2 + diamondMarginLeft
        diamondTop += diamondSize / 2
      when 8
        diamondLeft = diamondSize + diamondMarginLeft
        diamondTop += diamondSize / 2
      when 10
        diamondLeft = diamondSize * 2 - (diamondSize / 2) + diamondMarginLeft
        diamondTop += diamondSize / 2
    return

  return

$(window).resize ->
  loadDiamonds()
  return
$ ->
  loadDiamonds()
  return