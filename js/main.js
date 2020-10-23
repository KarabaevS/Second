var swiper = new Swiper('.prices .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: '.prices .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      768:{
        slidesPerView: 2,
      },
      320:{
        slidesPerView: 1,
      }
    }

  });

  
//   const menuBtn = document.querySelector('.humburger_btn');
//   const wrapper = document.querySelector('.humburger_menu');
//   const body = document.querySelector('body');
//   wrapper.addEventListener('click', function() {
//       wrapper.classList.toggle('change');
 

// });

$('.humburger_btn').on('click', function(e){
  e.preventDefault();
  $('.humburger_menu').toggleClass('change');
  $('body').toggleClass('change-active');
})