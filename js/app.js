$(document).ready(function(){

  var header = $('#header'),
  introH = $('#intro').innerHeight(),
  scrollOffset = $(window).scrollTop()

  // Slider
  $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    centerMode: true,
    variableWidth: true
  });


  // Fixed Header
  checkScroll(scrollOffset)
$(window).on('scroll', function () {
  scrollOffset = $(this).scrollTop()
  checkScroll(scrollOffset)
})

function checkScroll(scrollOffset) {
  if (scrollOffset >= introH) {
      header.addClass('fixed')
  } else {
      header.removeClass('fixed')
  }
}
});