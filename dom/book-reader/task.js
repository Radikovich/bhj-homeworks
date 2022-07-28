const textSize = document.querySelectorAll('.font-size');
textSize[1].dataset.size = 'original';
const controlButtons = document.querySelectorAll('div.book__controls > div');
const contentBox = document.querySelector('.book__content');

for (let styleButton of controlButtons) {
  styleButton.addEventListener('click', function (event) {
    event.preventDefault();
    let keyStyles = event.target.dataset;
    for (let value in keyStyles) {
      if (value === 'textColor') {
        let actualTextcolor = document.querySelector('div.book__control_color > .color_active');
        actualTextcolor.classList.remove('color_active');
        event.target.classList.add('color_active');
        contentBox.style.color = keyStyles[value];
      }
      if (value === 'bgColor') {
        let actualBackGroundColor = document.querySelector('div.book__control_background > .color_active');
        actualBackGroundColor.classList.remove('color_active');
        event.target.classList.add('color_active');
        contentBox.style.backgroundColor = keyStyles[value];
      }
      if (value === 'size') {
        let actualTextSize = document.querySelector('.font-size_active');
        actualTextSize.classList.remove('font-size_active');
        event.target.classList.add('font-size_active');
        switch (keyStyles[value]) {
          case "big":
            if (contentBox.classList.contains(`font-size_small`)) {
              contentBox.classList.remove('font-size_small');
            }
            contentBox.classList.add('font-size_big');
            break;
          case "small":
            if (contentBox.classList.contains(`font-size_big`)) {
              contentBox.classList.remove('font-size_big');
            }
            contentBox.classList.add('font-size_small');
            break;
          case "original":
            if (contentBox.classList.contains(`font-size_small`)) {
              contentBox.classList.remove('font-size_small');
            }
            if (contentBox.classList.contains(`font-size_big`)) {
              contentBox.classList.remove('font-size_big');
            }
            break;
        }
      }
    }
  });
}