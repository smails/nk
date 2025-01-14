import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';



$('.finishing__wrapper').each((index, item) => {
  const swiper = new Swiper($(item).find('.swiper')[0], {
    slidesPerView: 1,
    spaceBetween: '15px',
    navigation: {
      nextEl: $(item).find('.slider-arrow_next')[0],
      prevEl: $(item).find('.slider-arrow_prev')[0],
    },
    pagination: {
      el: '.slider-dots',
    },
    modules: [Navigation, Pagination],
  });
})