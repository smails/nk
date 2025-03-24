import $ from 'jquery'

$('.placement__tab').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
  $('.placement__box').hide();
  $('.placement__box').eq($(this).index()).fadeIn();
})
