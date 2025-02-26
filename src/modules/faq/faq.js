import $ from 'jquery'

$('.faq__head').click(function () {
  $(this).find('.faq__icon').toggleClass('open');
  $(this).next().slideToggle();
})