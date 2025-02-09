import $ from 'jquery'


$('.product__tab').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
  $('.product__pic').hide();
  $('.product__pic').eq($(this).index()).fadeIn();
})

$('.product__more').click(function () {
  $('.product__item.hide').toggleClass('open');
})