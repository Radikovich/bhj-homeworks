const subscribeModal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');
subscribeModal.classList.add('modal_active');

const getCookie = name => {
    const value = '; ' + document.cookie;
    let parts = value.split('; ' + name + '=');
    if (parts.length === 2)
      return parts.pop().split(';').shift();
}

modalClose.addEventListener ('click', () => {
    subscribeModal.classList.remove('modal_active');
    let date = new Date(Date.now() + 86400e3);
    date = date.toUTCString();
    document.cookie = 'modal=close; expires=' + date;
})

if (getCookie('modal') !== 'close') subscribeModal.classList.add('modal_active');