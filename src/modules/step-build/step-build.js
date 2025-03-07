import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';


$('.step-build').each((index, item) => {
  const swiper = new Swiper($(item).find('.swiper')[0], {
    slidesPerView: 1.15,
    spaceBetween: '10px',
    navigation: {
      nextEl: $(item).find('.slider-arrow_next')[0],
      prevEl: $(item).find('.slider-arrow_prev')[0],
    },
    modules: [Navigation],
    breakpoints: {
      767: {
        slidesPerView: 2.15,
      },
      1200: {
        slidesPerView: 3,
      },
      1500: {
        spaceBetween: '15px',
        slidesPerView: 4,
      },
    }
  });
})

$(window).scroll(() => {
  if($('.step-build__line_sticky').length){
    if(window.pageYOffset > $('.step-build__line_sticky').offset().top - 100){
      $('.step-build__over-tabs').addClass('open')
      return
    }
    $('.step-build__over-tabs').removeClass('open')
  }
})

$('.step-build__tab').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
  $('.step-build__box').hide();
  $('.step-build__box').eq($(this).index()).fadeIn();
})
