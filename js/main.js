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







});