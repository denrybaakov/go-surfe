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

  var dots = $('.slider-dots');
  content = $('.slider-dots__content');

  dots.on('click', function () {
    content.toggleClass('disable');
  })



});