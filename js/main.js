$(document).ready(function () {

  //----------------------header slider ----------------------------
  var galleryThumbs = new Swiper('.header__gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: false,
    shortSwipes: false,
    longSwipes: false,
    followFinger: false,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    // watchSlidesVisibility: true,
    watchSlidesProgress: false,
  });
  var swiperHeader = new Swiper('.header__swiper-container', {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    shortSwipes: false,
    longSwipes: false,
    followFinger: false,
    effect: 'slide',
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: '.header__btn-next',
      prevEl: '.header__btn-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });



  //--surf-slider 
  var swiperSurf = new Swiper('.surf__swiper-container', {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    // centeredSlides: true,
    // slidesOffsetBefore: 0,
    // slidesOffsetAfter: 800,
    loopFillGroupWithBlank: false,
    slideToClickedSlide: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    navigation: {
      nextEl: '.surf__btn-next',
      prevEl: '.surf__btn-prev',
    },
  });

  $('.slider-dots').on('click', function () {
    var index = $(this).data('index');
    swiperSurf.slideTo(index);
    // console.log(swiperSurf.slideTo(index));
    // swiperSurf[1].slideTo(index);
  });

  var dots = $('.slider-dots__circle');
  // content = $('.slider-dots__content');

  dots.on('click', function () {
    var id = $(this).attr('data-tab'),
      content = $('.slider-dots__content[data-tab="' + id + '"]');

    $('.slider-dots__content.slider-dots__content--active').removeClass('slider-dots__content--active');
    $(this).addClass('slider-dots__content--active');

    $('.slider-dots__content.slider-dots__content--active').removeClass('slider-dots__content--active');
    content.toggleClass('slider-dots__content--active');

    // 

    // console.log('click', $(this))

    // content2 = $('.slider-dots__content');
    // $(content2).mouseup(function (event) {
    //   if ($(event.target).closest('.content2'.length)) {
    //     console.log('errrr');
    //   } else {

    //     $(this).removeClass('slider-dots__content--active');
    //     // modalReview.removeClass('review--visible');
    //     console.log('yes')
    //   }
    // });
  });




  var swiperTravel = new Swiper('.travel__swiper-container', {
    effect: 'slide',
    centeredSlides: true,
    shortSwipes: false,
    longSwipes: false,
    followFinger: false,
    // direction: 'vertical',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.travel__btn-next',
      prevEl: '.travel__btn-prev',
    },

  });



  var swiperSleep = new Swiper('.sleep__swiper-container', {
    effect: 'slide',
    centeredSlides: true,
    shortSwipes: false,
    longSwipes: false,
    followFinger: false,
    // direction: 'vertical',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.sleep__btn-next',
      prevEl: '.sleep__btn-prev',
    },

  });


  var swiperSleep = new Swiper('.shop__swiper-container', {
    effect: 'slide',
    centeredSlides: true,
    shortSwipes: false,
    longSwipes: false,
    followFinger: false,
    // direction: 'vertical',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.shop__btn-next',
      prevEl: '.shop__btn-prev',
    },

  });



});



// js rating sleep 
const textNight = document.querySelector('.sleep__info-text--js1');
const textGuest = document.querySelector('.sleep__info-text-guest--js1');
const textGuest2 = document.querySelector('.sleep__info-text-guest--js2');
const sleepBtnMinus = document.querySelector('.sleep__night-btn-minus');
const sleepBtnPlus = document.querySelector('.sleep__night-btn-plus');
const guestBtnMinus = document.querySelector('.sleep__guest-btn-minus');
const guestBtnPlus = document.querySelector('.sleep__guest-btn-plus');
const totalPrice = document.querySelector('.js-total-1');
const totalPrice2 = document.querySelector('.js-total-2');
let nights = 5;
let guests = 4;



sleepBtnMinus.addEventListener('click', function () {
  if (nights === 1) {
    textNight.textContent = '1 nights';
  } else {
    textNight.textContent = `${nights -= 1} nights`;
  }
  totalPrice.textContent = `${Math.round((nights * 36.111 + guests * 42))}`;
});

sleepBtnPlus.addEventListener('click', function () {
  if (nights === 20) {
    textNight.textContent = '20 nights'
  } else {
    textNight.textContent = `${nights += 1} nights`;
  }
  totalPrice.textContent = `${Math.round((nights * 36.111 + guests * 42))}`;
})

guestBtnMinus.addEventListener('click', function () {
  if (guests === 1) {
    textGuest.textContent = `1 guests`
  } else {
    textGuest.textContent = `${--guests} guests`
  }
  totalPrice.textContent = `${Math.round((nights * 36.111 + guests * 42))}`;
})

guestBtnPlus.addEventListener('click', function () {
  if (guests === 20) {
    textGuest.textContent = `20 guests`
  } else {
    textGuest.textContent = `${++guests} guests`
  }
  totalPrice.textContent = `${Math.round((nights * 36.111 + guests * 42))}`;
});



//--- SIRCLES 
const sircles = document.querySelectorAll('.sircles__item');
sircles.forEach(item => {

  item.addEventListener('click', function () {
    this.classList.toggle('active-circle');
  });
});
// console.log(sircles[1]);




