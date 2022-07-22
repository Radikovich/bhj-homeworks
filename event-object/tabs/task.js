const tabNavigation = document.querySelectorAll("div.tab__navigation > div");
const tabContents = document.querySelectorAll("div.tab__contents > div");
const menuListArr = [];

for (i = 0; i < tabNavigation.length; i++) {
  menuListArr.push(tabNavigation[i].innerText);
}

for (i = 0; i < tabNavigation.length; i++) {
  tabNavigation[i].addEventListener('click', function (event) {
    let tabActive = document.querySelector('.tab_active');
    let tabContentActive = document.querySelector('.tab__content_active');
    if (tabActive.innerText != event.target.innerText) {
      tabActive.classList.remove('tab_active');
      tabContentActive.classList.remove('tab__content_active');
      event.target.classList.add('tab_active');
      let menu = menuListArr.indexOf(event.target.innerText);  
      tabContents[menu].classList.add('tab__content_active');
      return;
    }
  });
}