import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation, thumbs } from 'swiper/modules';


const flatThumb = new Swiper($('.flat__thumbs').find('.swiper')[0], {
  slidesPerView: 'auto',
  spaceBetween: '10px',
  slideToClickedSlide: true,
  breakpoints: {
    1023: {
      spaceBetween: '15px',
    },
  }
});

const flatBig = new Swiper($('.flat__wrapper').find('.swiper')[0], {
  slidesPerView: 1,
  navigation: {
    nextEl: $('.flat__wrapper').find('.slider-arrow_next')[0],
    prevEl: $('.flat__wrapper').find('.slider-arrow_prev')[0],
  },
  modules: [Navigation],
  thumbs:{
    swiper: flatThumb
  }
});

flatBig.params.control = flatThumb;
flatThumb.params.control = flatBig;