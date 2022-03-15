$(function() {

  var $window = $(window),
      $mainNav = $('.main-nav'),
      $mobileNav = $('.mobile-nav'),
      $socialNav = $('.social-nav'),
      screenWidth = $window.width(),
      breakPoint = 600;

  function checkSize() {
    if (screenWidth < breakPoint) {
      $mainNav.hide();
      $socialNav.hide();
      $mobileNav.show();
    }
    else {
      $mainNav.removeAttr('style');
      $mobileNav.removeAttr('style');
      $socialNav.removeAttr('style');
    }
  }
  checkSize();

  $window.resize(function () {
    screenWidth = $window.width();
    checkSize();
  });

  $('#menu-icon').click(function (event) {
    event.preventDefault();
    $mainNav.slideToggle(400);
  });

});
