const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function () {
  for (const item of reveals) {
    const {top, bottom} = item.getBoundingClientRect();
    if (bottom - 100 >= 0 && window.innerHeight - top - 120 >= 0) {
      item.classList.add('reveal_active');
      return;
    }
    item.classList.remove('reveal_active');
  }  
});