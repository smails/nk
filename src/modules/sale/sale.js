import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

$('.sales-room__slider').each((index, item) => {
  const swiper = new Swiper($(item).find('.swiper')[0], {
    slidesPerView: 1,
    navigation: {
      nextEl: $(item).find('.slider-arrow_next')[0],
      prevEl: $(item).find('.slider-arrow_prev')[0],
    },
    modules: [Navigation],
  });
})