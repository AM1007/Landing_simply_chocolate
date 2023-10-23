import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

new Swiper('.swiper', {
  modules: [Navigation],

  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 19,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 19,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
