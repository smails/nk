import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation, thumbs } from 'swiper/modules';


const beautificationThumb = new Swiper($('.beautification__thumbs').find('.swiper')[0], {
  slidesPerView: 'auto',
  spaceBetween: '10px',
  slideToClickedSlide: true,
  breakpoints: {
    1023: {
      spaceBetween: '15px',
    },
  }
});

const beautificationBig = new Swiper($('.beautification__wrapper').find('.swiper')[0], {
  slidesPerView: 1,
  navigation: {
    nextEl: $('.beautification__wrapper').find('.slider-arrow_next')[0],
    prevEl: $('.beautification__wrapper').find('.slider-arrow_prev')[0],
  },
  modules: [Navigation],
  thumbs:{
    swiper: beautificationThumb
  }
});

beautificationBig.params.control = beautificationThumb;
beautificationThumb.params.control = beautificationBig;