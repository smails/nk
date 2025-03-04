import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation, Pagination, Controller, Thumbs } from 'swiper/modules';



$('.manufacure-tabs__wrapper').each((index, item) => {
  const swiper = new Swiper($(item).find('.swiper')[0], {
    slidesPerView: 1,
    navigation: {
      nextEl: $(item).find('.slider-arrow_next')[0],
      prevEl: $(item).find('.slider-arrow_prev')[0],
    },
    pagination: {
      el: $(item).find('.slider-dots')[0],
    },
    modules: [Navigation, Pagination],
  });
})


$('.share__btn').click((e) => {
  const text = $(e.target).prev().val();
  navigator.clipboard.writeText(text).then(function() {
    $(e.target).addClass('click').text('Ссылка скопирована!')
    $(e.target).prev().addClass('click')
  }, function(err) {
    console.error(err);
  });
})


const newsGalleryThumb = new Swiper($('.news-gallery__thumbs').find('.swiper')[0], {
  slidesPerView: 'auto',
  spaceBetween: '10px',
  slideToClickedSlide: true,
  loop: true,
  breakpoints: {
    1023: {
      spaceBetween: '15px',
    },
  },
});

const newsGalleryBig = new Swiper($('.news-gallery__wrapper').find('.swiper')[0], {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: $('.news-gallery__wrapper').find('.slider-arrow_next')[0],
    prevEl: $('.news-gallery__wrapper').find('.slider-arrow_prev')[0],
  },
  modules: [Navigation, Controller, Thumbs],
  thumbs:{
    swiper: newsGalleryThumb
  },
});

newsGalleryBig.controller.control = newsGalleryThumb;

$('.decoration-type__btn').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
  $('.decoration-type__box').hide();
  initFinishingSliderInTabs();
  $('.decoration-type__box').eq($(this).index()).fadeIn();
})
