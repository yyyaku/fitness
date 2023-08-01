const sliderCoaches = document.querySelector('.coaches__swiper');
const buttonNext = document.querySelector('.coaches__button--next');
const buttonPrev = document.querySelector('.coaches__button--prev');

const initSliderCoaches = () => {
  if (sliderCoaches) {
    // eslint-disable-next-line
    new Swiper(sliderCoaches, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      loop: true,

      breakpoints: {
        1300: {
          slidesPerView: 4,
          spaceBetween: 40,
        },

        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
  }
};

export {initSliderCoaches};
