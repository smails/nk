import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


function initSliderLocation() {
  $('.landscaping__slider').each((index, item) => {
    const swiper = new Swiper($(item).find('.swiper')[0], {
      slidesPerView: 1.05,
      spaceBetween: '10px',
      navigation: {
        nextEl: $(item).find('.slider-arrow_next')[0],
        prevEl: $(item).find('.slider-arrow_prev')[0],
      },
      modules: [Navigation, Pagination],
      breakpoints: {
        1500: {
          spaceBetween: '15px',
          slidesPerView: 1.3,
        },
      }
    });
  })
}
initSliderLocation();


$('.landscaping__btn').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
  $('.landscaping__box').hide();
  $('.landscaping__box').eq($(this).index()).fadeIn('slow');
  initSliderLocation();
})