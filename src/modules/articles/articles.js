import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';


$('.articles-slider').each((index, item) => {
  const swiper = new Swiper($(item).find('.swiper')[0], {
    slidesPerView: 1.5,
    spaceBetween: '15px',
    navigation: {
      nextEl: $(item).find('.slider-arrow_next')[0],
      prevEl: $(item).find('.slider-arrow_prev')[0],
    },
    modules: [Navigation],
    breakpoints: {
      1200: {
        slidesPerView: 2,
      },
      1500: {
        slidesPerView: 2.4,
      }
    }
  });
})
