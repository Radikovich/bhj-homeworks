const sliderItems = document.querySelectorAll('.slider__item');
const sliderDots = document.querySelectorAll('.slider__dot');
const sliderArrowPrew = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');

let activeSlideIndex = 0;

window.addEventListener('load', function () {
    sliderDots.item(activeSlideIndex).classList.add('slider__dot_active');
});

function toggleActiveSlide(activeSlideIndex) {
  let activeSlide = document.querySelector('.slider__item_active');
  let activeDot = document.querySelector('.slider__dot_active');
  activeSlide.classList.remove('slider__item_active');
  sliderItems.item(activeSlideIndex).classList.add('slider__item_active');
  activeDot.classList.remove('slider__dot_active');
  sliderDots.item(activeSlideIndex).classList.add('slider__dot_active');
}

sliderArrowPrew.addEventListener('click', function () {
  activeSlideIndex--;
  if (activeSlideIndex < 0) {
    activeSlideIndex = sliderItems.length - 1;
  }
  toggleActiveSlide(activeSlideIndex);
  return activeSlideIndex;
});

sliderArrowNext.addEventListener('click', function () {
  activeSlideIndex++;
  if (activeSlideIndex === sliderItems.length) {
    activeSlideIndex = 0;
  }
  toggleActiveSlide(activeSlideIndex);
  return activeSlideIndex;
});

for (const index in sliderDots) {
    sliderDots.item(index).addEventListener('click', () => toggleActiveSlide(index));
}