import $ from 'jquery'


$(document).on('click', '.nav-mobile__title', function() {
  if($(this).hasClass('open')){
    $(this).removeClass('open');
    $(this).next().slideUp();
    return
  } else{
    $(this).addClass('open');
    $(this).next().slideDown();
  }
})
$(document).on('click', '.header__open-mobile', function() {
  if($(this).hasClass('open')){
    $(this).removeClass('open');
    $('.nav-mobile').slideUp();
    return
  } else{
    $(this).addClass('open');
    $('.nav-mobile').slideDown();
  }
})


$(document).on('mouseover', '.header__item, .header__dropdown', function() {
  $('body').css({
    'height': '100%',
    'overflow': 'hidden'
  });
  if($('main').find('.stub').length) return;
  $('main').append('<div class="stub"><div>')
})
$(document).on('mouseout', '.header__item, .header__dropdown', function() {
  $('body').removeAttr('style');
  $('main .stub').remove();
})