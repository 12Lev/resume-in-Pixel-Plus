$(document).ready(function(){


 var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    setWrapperSize: true,
    autoHeight: true,
    autoplay: {
      delay: 4000,
    },
    effect: 'fade',

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: false,
      hide: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
    },
    
  }); 

  let contentMenu = '.content-menu__title';
  let feedback = '.feedback';
  let feedbackClose = '.feedback__close';


  $(contentMenu).on('click', function(){
    $(this).next('ul').slideToggle();
  });

  $('.top-contacts__order').on('click', function(){
    $(feedback).addClass('feedback--active');
  });

  $(feedbackClose).on('click', function(){
    $(feedback).removeClass('feedback--active');
  });

});