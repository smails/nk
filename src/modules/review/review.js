import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';


$('.review').each((index, item) => {
  const swiper = new Swiper($(item).find('.swiper')[0], {
    slidesPerView: 4.1,
    spaceBetween: '15px',
    navigation: {
      nextEl: $(item).find('.slider-arrow_next')[0],
      prevEl: $(item).find('.slider-arrow_prev')[0],
    },
    modules: [Navigation],
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      1500: {
        slidesPerView: 4.1,
      }
    }
  });
})
