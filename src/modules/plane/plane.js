import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';



$('.plane').each((index, item) => {
  const swiper = new Swiper($(item).find('.swiper')[0], {
    slidesPerView: 1.15,
    spaceBetween: 30,
    navigation: {
      nextEl: $(item).find('.slider-arrow_next')[0],
      prevEl: $(item).find('.slider-arrow_prev')[0],
    },
    modules: [Navigation],
    breakpoints: {
      767: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      900: {
        spaceBetween: 30,
        grabCursor: true,
        slidesPerView: 3,
      },
      1200: {
        spaceBetween: 30,
        grabCursor: true,
        slidesPerView: 4,
      },
      1500: {
        spaceBetween: 50,
        grabCursor: true,
        slidesPerView: 4,
      },
    }
  });
})