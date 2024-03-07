// eslint-disable-next-line
const swiper = new Swiper(".swiper", {
  // pass EffectCarousel module to modules
  modules: [EffectCarousel],
  // specify "carousel" effect
  effect: "carousel",
  // carousel effect parameters
  carouselEffect: {
    // opacity change per side slide
    opacityStep: 0.33,
    // scale change per side slide
    scaleStep: 0.2,
    // amount of side slides visible, can be 1, 2 or 3
    sideSlides: 1,
  },
  grabCursor: true,
  loop: true,
  loopAdditionalSlides: 0,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },

  autoplay: {
    delay: 4000,
  },
});
