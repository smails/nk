import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';


$('.offer').each((index, item) => {
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
      1500: {
        spaceBetween: '15px',
        slidesPerView: 4,
      },
    }
  });
})
