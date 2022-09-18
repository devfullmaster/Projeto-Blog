var slide_podcast = new Swiper(".slide-podcast", {
  slidesPerView: 4,
  spaceBetween: 32,
  pagination: {
    el: ".s-podcast .top .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".s-podcast .top .btn-next",
    prevEl: ".s-podcast .top .btn-prev",
  },
  speed: 600,
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2.1
    },
    991: {
      slidesPerView: 2.5
    },
    1100: {
      slidesPerView: 3.5,
      spaceBetween: 32,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 32,
    }
  }
});

const btnScrollTop = document.getElementById('js-btn-scroll-top');


btnScrollTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})

const btnMobile = document.getElementById('js-btn-mobile');

btnMobile.addEventListener('click', () => {
  btnMobile.classList.toggle('is-active');
  document.documentElement.classList.toggle('menu-opened');
})