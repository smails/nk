import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

$('.banner__wrapper').each((index, item) => {
  const swiper = new Swiper($(item).find('.swiper')[0], {
    slidesPerView: 1,
    loop: true,
    navigation: {
      prevEl: $(item).find('.slider-arrow_prev')[0],
      nextEl: $(item).find('.slider-arrow_next')[0],
    },
    modules: [Navigation],
  });
})
