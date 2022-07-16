const sliderItem = document.querySelectorAll('.slider__item');
const sliderDot = document.querySelectorAll('.slider__dot');
const sliderArrowPrew = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');

let activeSlideIndex = 0;

function toggleActiveSlide(activeSlideIndex) {
  let activeSlide = document.querySelector('.slider__item_active');
  let activeDot = document.querySelector('.slider__dot_active');
  activeSlide.classList.remove('slider__item_active');
  sliderItem.item(activeSlideIndex).classList.add('slider__item_active');
  sliderDot.item(activeSlideIndex).classList.add('slider__dot_active');
  activeDot.classList.remove('slider__dot_active');
}

sliderArrowPrew.addEventListener('click', function () {
  activeSlideIndex--;
  if (activeSlideIndex < 0) {
    activeSlideIndex = sliderItem.length - 1;
  }
  toggleActiveSlide(activeSlideIndex);
  return activeSlideIndex;
});

sliderArrowNext.addEventListener('click', function () {
  activeSlideIndex++;
  if (activeSlideIndex === sliderItem.length) {
    activeSlideIndex = 0;
  }
  toggleActiveSlide(activeSlideIndex);
  return activeSlideIndex;
});

for (let k = 0; k < sliderDot.length; k++) {
  sliderDot.item(k).addEventListener('mouseover', () => toggleActiveSlide(k));
}