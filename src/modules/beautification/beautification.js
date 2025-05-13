import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation, Controller } from 'swiper/modules';


$('.beautification__wrapper').each((index, item) =>{
  const beautificationThumb = new Swiper($(item).next().find('.swiper')[0], {
    slidesPerView: 'auto',
    spaceBetween: '10px',
    slideToClickedSlide: true,
    modules: [Controller],
    breakpoints: {
      1023: {
        spaceBetween: '15px',
      },
    }
  });
  
  const beautificationBig = new Swiper($(item).find('.swiper')[0], {
    slidesPerView: 1,
    navigation: {
      nextEl: $(item).find('.slider-arrow_next')[0],
      prevEl: $(item).find('.slider-arrow_prev')[0],
    },
    modules: [Navigation, Controller],
    thumbs:{
      swiper: beautificationThumb
    }
  });
  
  beautificationBig.controller.control = beautificationThumb;
  beautificationThumb.controller.control = beautificationBig;
})
