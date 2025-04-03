import $ from 'jquery'

$('.placement__tab').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
  $('.placement__box').hide();
  $('.placement__box').eq($(this).index()).fadeIn();
})

$('.placement__btn').click(function () {
  $(this).toggleClass('active');
  $('.mini-filter').fadeToggle();
})


$('.placement-chess__frame_available').click((e) =>{
  $('.placement-chess__product-info').removeClass('open').css({
    left: e.clientX,
    top: e.clientY -($('.placement-chess__product-info').height() / 2),
  }).toggleClass('open')
})