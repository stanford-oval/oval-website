export default function CarouselSlider({ swiper, on, extendParams }) {
  extendParams({
    carouselEffect: {
      opacityStep: 0.33,
      scaleStep: 0.2,
      sideSlides: 2,
    },
  });
  on("beforeInit", () => {
    if (swiper.params.effect !== "carousel") return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}carousel`);
    const overwriteParams = {
      watchSlidesProgress: true,
      centeredSlides: true,
    };

    Object.assign(swiper.params, overwriteParams);
    Object.assign(swiper.originalParams, overwriteParams);
  });
  on("progress", () => {
    if (swiper.params.effect !== "carousel") return;
    const { scaleStep, opacityStep } = swiper.params.carouselEffect;
    const sideSlides = Math.max(
      Math.min(swiper.params.carouselEffect.sideSlides, 3),
      1
    );
    const modifyMultiplier = {
      1: 2,
      2: 1,
      3: 0.2,
    }[sideSlides];
    const translateModifier = {
      1: 50,
      2: 50,
      3: 67,
    }[sideSlides];

    const zIndexMax = swiper.slides.length;

    for (let i = 0; i < swiper.slides.length; i += 1) {
      const slideEl = swiper.slides[i];
      const slideProgress = swiper.slides[i].progress;
      const absProgress = Math.abs(slideProgress);
      let modify = 1;

      if (absProgress > 1) {
        modify = (absProgress - 1) * 0.3 * modifyMultiplier + 1;
      }
      const opacityEls = slideEl.querySelectorAll(
        ".swiper-carousel-animate-opacity"
      );
      const translate = `${
        slideProgress *
        modify *
        translateModifier *
        (swiper.rtlTranslate ? -1 : 1)
      }%`;

      const scale = 1 - absProgress * scaleStep;
      const zIndex = zIndexMax - Math.abs(Math.round(slideProgress));
      slideEl.style.transform = `translateX(${translate}) scale(${scale})`;
      slideEl.style.zIndex = zIndex;
      if (absProgress > sideSlides + 1) {
        slideEl.style.opacity = 0;
      } else {
        slideEl.style.opacity = 1;
      }

      opacityEls.forEach((opacityEl) => {
        opacityEl.style.opacity = 1 - absProgress * opacityStep;
      });
    }
  });

  on("setTransition", (s, duration) => {
    if (swiper.params.effect !== "carousel") return;
    for (let i = 0; i < swiper.slides.length; i += 1) {
      const slideEl = swiper.slides[i];
      const opacityEls = slideEl.querySelectorAll(
        ".swiper-carousel-animate-opacity"
      );
      slideEl.style.transitionDuration = `${duration}ms`;
      opacityEls.forEach((opacityEl) => {
        opacityEl.style.transitionDuration = `${duration}ms`;
      });
    }
  });
}
