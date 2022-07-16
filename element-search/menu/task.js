const links = document.querySelectorAll('.menu__item');

for (const i in links) {
  links.item(i).addEventListener('click', function (event) {
    let activeMenu = document.querySelector('.menu_active');
    let subMenuItem = this.querySelector('.menu_sub');
    if (!event.target.getAttribute('href')) {
      event.preventDefault();
    }

    if (subMenuItem === activeMenu && activeMenu) {
      activeMenu.classList.remove('menu_active');
      return;
    }

    if (subMenuItem) {
      if (activeMenu) {
        activeMenu.classList.remove('menu_active');
      }
      subMenuItem.classList.add('menu_active');
      return;
    }
    return;
  }); 
}

