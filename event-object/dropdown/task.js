const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownValue.onclick = function() {
  dropdownList.classList.add('dropdown__list_active');
  for (const item in dropdownItems) {
    dropdownItems[item].addEventListener('click', function (event) {
      event.preventDefault();
      dropdownValue.textContent = event.target.textContent;
      dropdownList.classList.remove('dropdown__list_active');
      return;
    });  
  }
}