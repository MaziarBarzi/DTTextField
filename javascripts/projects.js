(function() {
  var loadDiamonds;

  loadDiamonds = function() {
    var containerWidth, diamondLeft, diamondMargin, diamondMarginLeft, diamondSize, diamondTop;
    containerWidth = $('.diamond-container').width();
    diamondMargin = 10;
    diamondMarginLeft = 5;
    diamondTop = 0;
    diamondSize = containerWidth / 4;
    diamondLeft = diamondSize / 2 + diamondMarginLeft;
    $('.diamond-container').css({
      'height': diamondSize / 2 * 6 + 10
    });
    $('.diamond').each(function(index, element) {
      $(element).find('img').click(function() {
        $(this).parent().find('a').click();
      });
      $(element).css({
        'left': diamondLeft,
        'top': diamondTop,
        'width': diamondSize - diamondMargin * 2,
        'height': diamondSize - diamondMargin * 2
      });
      diamondLeft += diamondSize;
      switch (index) {
        case 0:
          diamondLeft += diamondSize;
          break;
        case 1:
          diamondLeft = diamondMarginLeft;
          diamondTop += diamondSize / 2;
          break;
        case 5:
          diamondLeft = diamondSize / 2 + diamondMarginLeft;
          diamondTop += diamondSize / 2;
          break;
        case 8:
          diamondLeft = diamondSize + diamondMarginLeft;
          diamondTop += diamondSize / 2;
          break;
        case 10:
          diamondLeft = diamondSize * 2 - (diamondSize / 2) + diamondMarginLeft;
          diamondTop += diamondSize / 2;
      }
    });
  };

  $(window).resize(function() {
    loadDiamonds();
  });

  $(function() {
    loadDiamonds();
  });

}).call(this);
