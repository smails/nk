import $ from 'jquery'

$(window).on('load resize', () => {
  if(window.innerWidth < 1023){
    $('.footer__list').addClass('hidden');
    $('.footer__list').prev().addClass('open-nav');
    return
  }
  $('.footer__list').removeClass('hidden');
  $('.footer__list').prev().removeClass('open-nav');
})


$(document).on('click', '.footer__title.open-nav', function() {
  if($(this).hasClass('open')){
    $(this).removeClass('open');
    $(this).next().addClass('hidden');
    return
  } else{
    $(this).addClass('open');
    $(this).next().removeClass('hidden');
  }
})