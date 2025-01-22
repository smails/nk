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