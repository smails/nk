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

$('.manufacure-tabs_border').each((index, item) => {
  const swiper = new Swiper($(item).find('.swiper')[0], {
    slidesPerView: 3,
    spaceBetween: '20px',
    loop: true,
    navigation: {
      nextEl: $(item).find('.slider-arrow_next')[0],
      prevEl: $(item).find('.slider-arrow_prev')[0],
    },
    modules: [Navigation],
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

function initGardenSlider() {
  $('.popup-info__wrapper').each((index, item) => {
    const swiper = new Swiper($(item).find('.swiper')[0], {
      slidesPerView: 'auto',
      spaceBetween: '5px',
      navigation: {
        nextEl: $(item).find('.slider-arrow_next')[0],
        prevEl: $(item).find('.slider-arrow_prev')[0],
      },
      modules: [Navigation],
    });
  })
}

function initPopupGallery(){
  const popupGalleryThumb = new Swiper($('.popup-gallery__thumbs').find('.swiper')[0], {
    slidesPerView: 'auto',
    spaceBetween: '2px',
    slideToClickedSlide: true,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: $('.popup-gallery__thumbs').find('.slider-arrow_next')[0],
      prevEl: $('.popup-gallery__thumbs').find('.slider-arrow_prev')[0],
    },
    modules: [Navigation],
    breakpoints: {
      1023: {
        spaceBetween: '2px',
      },
    },
  });
  
  const popupGalleryBig = new Swiper($('.popup-gallery__wrapper').find('.swiper')[0], {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: $('.popup-gallery__wrapper').find('.slider-arrow_next')[0],
      prevEl: $('.popup-gallery__wrapper').find('.slider-arrow_prev')[0],
    },
    modules: [Navigation, Controller, Thumbs],
    thumbs:{
      swiper: popupGalleryThumb
    },
  });
  
  popupGalleryBig.controller.control = popupGalleryThumb;
}

const practicumSpeakers = new Swiper($('.practicum-speakers').find('.swiper')[0], {
  slidesPerView: 'auto',
  spaceBetween: '30px',
  loop: true,
  navigation: {
    nextEl: $('.practicum-speakers').find('.slider-arrow_next')[0],
    prevEl: $('.practicum-speakers').find('.slider-arrow_prev')[0],
  },
  modules: [Navigation],
});

const practicumVideo = new Swiper($('.practicum-videos').find('.swiper')[0], {
  spaceBetween: '10px',
  slidesPerView: 1.15,
  loop: true,
  navigation: {
    nextEl: $('.practicum-videos').find('.slider-arrow_next')[0],
    prevEl: $('.practicum-videos').find('.slider-arrow_prev')[0],
  },
  modules: [Navigation],
  breakpoints: {
    767: {
      slidesPerView: 2.15,
    },
    1500: {
      spaceBetween: '20px',
      slidesPerView: 3.05,
    },
  }
});

const showroom = new Swiper($('.showroom-slider').find('.swiper')[0], {
  spaceBetween: '10px',
  slidesPerView: 1.15,
  loop: true,
  navigation: {
    nextEl: $('.showroom-slider').find('.slider-arrow_next')[0],
    prevEl: $('.showroom-slider').find('.slider-arrow_prev')[0],
  },
  modules: [Navigation],
  breakpoints: {
    767: {
      slidesPerView: 2.15,
    },
    1500: {
      spaceBetween: '20px',
      slidesPerView: 3.05,
    },
  }
});


$('.prospects-info__wrapper').each((index, item) =>{
  const prospectsThumb = new Swiper($(item).next().find('.swiper')[0], {
    slidesPerView: 'auto',
    spaceBetween: '10px',
    slideToClickedSlide: true,
    breakpoints: {
      1023: {
        spaceBetween: '15px',
      },
    }
  });
  
  const prospectsBig = new Swiper($(item).find('.swiper')[0], {
    slidesPerView: 1,
    navigation: {
      nextEl: $(item).find('.slider-arrow_next')[0],
      prevEl: $(item).find('.slider-arrow_prev')[0],
    },
    modules: [Navigation],
    thumbs:{
      swiper: prospectsThumb
    }
  });
  
  prospectsBig.control = prospectsThumb;
  prospectsThumb.control = prospectsBig;
})


$('.demo-slider').each((index, item) => {
  const swiper = new Swiper($(item).find('.swiper')[0], {
    slidesPerView: 1,
    spaceBetween: '20px',
    navigation: {
      nextEl: $(item).find('.slider-arrow_next')[0],
      prevEl: $(item).find('.slider-arrow_prev')[0],
    },
    modules: [Navigation],
  });
})

$('.popup-gallery__button').click(function () {
  $(this).toggleClass('hidden');
  $('.popup-gallery__thumbs').slideToggle();
})

$('.decoration-type__btn').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
  $('.decoration-type__box').hide();
  $('.decoration-type__box').eq($(this).index()).fadeIn();
})

$('.login__tab').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
  $('.login__action').hide();
  $('.login__action').eq($(this).index()).fadeIn();
})

$('.login__link').click(function () {
  $('.login__action').hide();
  if($(this).data('type') == 'reset'){
    $('.login__action').eq(2).fadeIn();
  } else if($(this).data('type') == 'back'){
    $('.login__action').eq(1).fadeIn();
  }
})


$('.js-open-modal').click((e) => {
  e.preventDefault();
  $('.popup').hide();
  const modal = e.target.getAttribute('href') != null ? e.target.getAttribute('href') : e.target.parentElement.getAttribute('href');
  $('body').addClass("hidden");
  if(modal === '#garden'){
    initGardenSlider();
  }
  if(modal === '#gallery'){
    initPopupGallery();
  }
  $(`[data-type="${modal}"]`).fadeIn();
});

$('.js-close-modal').click((e) => {
  e.preventDefault();
  $('.popup').fadeOut();
  $('body').removeClass('hidden');
});


$(document).ready(() => {
  if(window.location.pathname == '/'){
    setTimeout(() => {
      $(`[data-type="#sale-month"]`).fadeIn();
    }, 10000);
  }
  if(window.location.pathname == '/sales.html'){
    setTimeout(() => {
      $(`[data-type="#sale-timer"]`).fadeIn();
    }, 10000);
  }
})