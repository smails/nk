import $ from 'jquery'
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';



// $('.sp-prod-card__slider').each((index, item) => {
//   const swiper = new Swiper($(item).find('.swiper'), {
//     slidesPerView: 1,
//       pagination: {
//         el: $(item).find('.slider-dots')[0],
//       },
//       modules: [Pagination],
//   });
// })

$('.filter__full-filter').click(() => {
  $('body').addClass('fixed')
  $('.filter').addClass('fixed')
})

$('.filter__close').click(() => {
  $('.filter').removeClass('fixed')
  $('body').removeClass('fixed')
})