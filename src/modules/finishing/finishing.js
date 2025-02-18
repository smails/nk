import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';



$('.finishing__wrapper').each((index, item) => {
  const swiper = new Swiper($(item).find('.swiper')[0], {
    slidesPerView: 1.05,
    spaceBetween: '10px',
    navigation: {
      nextEl: $(item).find('.slider-arrow_next')[0],
      prevEl: $(item).find('.slider-arrow_prev')[0],
    },
    pagination: {
      el: '.slider-dots',
    },
    modules: [Navigation, Pagination],
    breakpoints: {
      1500: {
        spaceBetween: '15px',
        slidesPerView: 1.3,
      },
    }
  });
})

function initFinishingSliderInTabs() {
  $('.finishing-tabs__slider').each((index, item) => {
    const swiper = new Swiper($(item).find('.swiper')[0], {
      slidesPerView: 1,
      navigation: {
        nextEl: $(item).find('.slider-arrow_next')[0],
        prevEl: $(item).find('.slider-arrow_prev')[0],
      },
      pagination: {
        el: $(item).find('.slider-dots')[0],
      },
      modules: [Navigation, Pagination],
    });
  })
}

initFinishingSliderInTabs();


$('.finishing-tabs__btn').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
  $('.finishing-tabs__box').hide();
  initFinishingSliderInTabs();
  $('.finishing-tabs__box').eq($(this).index()).fadeIn();
})
