import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';


function initGallerySlider() {
  $('.gallery-collection__box').each((index, item) => {
    const swiper = new Swiper($(item).find('.swiper')[0], {
      slidesPerView: 1.15,
      spaceBetween: '10px',
      navigation: {
        nextEl: $(item).find('.slider-arrow_next')[0],
        prevEl: $(item).find('.slider-arrow_prev')[0],
      },
      modules: [Navigation],
      breakpoints: {
        767: {
          slidesPerView: 2.15,
        },
        1500: {
          spaceBetween: '15px',
          slidesPerView: 4,
        },
      }
    });
  })
}

initGallerySlider()


$('.gallery-collection__tab').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
  $('.gallery-collection__box').hide();
  initGallerySlider();
  $('.gallery-collection__box').eq($(this).index()).fadeIn();
})
