import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
/**
 * import Carousel effect module
 */
import EffectCarousel from './effect-carousel.esm';
/**
 * import Swiper styles
 */
import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import 'swiper/scss/virtual';
/**
 * import Carousel effect styles
 */
import './effect-carousel.scss';
/**
 * Custom local styles
 */
import './main.scss';
/**
 * Init Swiper
 *
 */
// eslint-disable-next-line
const swiper = new Swiper('.swiper', {
  // pass EffectCarousel module to modules
  modules: [Autoplay, Navigation, Pagination, EffectCarousel],
  // specify "carousel" effect
  effect: 'carousel',
  // carousel effect parameters
  carouselEffect: {
    // opacity change per side slide
    opacityStep: 0.33,
    // scale change per side slide
    scaleStep: 0.2,
    // amount of side slides visible, can be 1, 2 or 3
    sideSlides: 2,
  },
  grabCursor: true,
  loop: true,
  loopAdditionalSlides: 1,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
    delay: 3000,
  },
});
