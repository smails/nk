import $ from 'jquery'

$('.live__tab').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
  $('.live__box').hide();
  $('.live__box').eq($(this).index()).fadeIn();
})
