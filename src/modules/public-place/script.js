import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation, Controller } from 'swiper/modules';


const publicPlaceThumb = new Swiper($('.public-place__thumbs').find('.swiper')[0], {
  slidesPerView: 'auto',
  spaceBetween: '10px',
  slideToClickedSlide: true,
  modules: [Controller],
});

const publicPlaceBig = new Swiper($('.public-place__wrapper').find('.swiper')[0], {
  slidesPerView: 1,
  navigation: {
    nextEl: $('.public-place__wrapper').find('.slider-arrow_next')[0],
    prevEl: $('.public-place__wrapper').find('.slider-arrow_prev')[0],
  },
  modules: [Navigation, Controller],
  thumbs:{
    swiper: publicPlaceThumb
  }
});

publicPlaceBig.controller.control = publicPlaceThumb;
publicPlaceThumb.controller.control = publicPlaceBig;