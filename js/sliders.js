let projectSoftSlider = new Swiper(".psft-slider", {
  slidesPerView: 6,
  spaceBetween: 60,
  centeredSlides: true,
  initialSlide: 3,
  pagination: {
    el: ".psft-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
});