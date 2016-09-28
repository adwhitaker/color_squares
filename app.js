// when a square is clicked on a color class is added
// when it is clicked anytime thereafter the current color class is removed and a new class is added
$(document).ready(function () {
  $('table').on('click', 'td', function() {
    var $box = $(this).children();
    if ( $box.hasClass('beige') ) {
      $box.removeClass('beige');
      $box.addClass('blue');
    } else if ( $box.hasClass('blue') ) {
      $box.removeClass('blue');
      $box.addClass('green');
    } else if ( $box.hasClass('green') ) {
      $box.removeClass('green');
      $box.addClass('purple');
    } else if ( $box.hasClass('purple') ) {
      $box.removeClass('purple');
      $box.addClass('beige');
    }
  })
});
