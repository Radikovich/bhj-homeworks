const rotatorCases = document.querySelectorAll('.rotator__case');
let textColor = rotatorCases[0].dataset.color; 
rotatorCases[0].setAttribute('style', "color: " + textColor);
let flag = true;

function motivationalSlides() {
  if (flag) {
    flag = false;
    let element;
    const rotatorCaseActive = document.querySelector('.rotator__case_active');
    let nextTextBlock = rotatorCaseActive.nextElementSibling;
    nextTextBlock ? element = nextTextBlock : element = rotatorCases[0];
    timeOut = element.dataset.speed;    
    rotatorCaseActive.classList.remove('rotator__case_active');
    textColor = element.dataset.color;
    element.classList.add('rotator__case_active');
    element.setAttribute('style', "color: " + textColor);
    const slideSpeed = setTimeout(() => {
      flag = true;
    }, timeOut);
  }
}

const timer = setInterval(() => motivationalSlides(), 1);