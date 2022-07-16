const modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');

const modalButtons = document.getElementsByClassName('modal__close')
const closuerButton = modalButtons.item(0);
const successButton = modalButtons.item(1);
const successModalClosure = modalButtons.item(2);
const modalSuccess = document.getElementById('modal_success');

const modalClosure = () => modalMain.classList.remove('modal_active');
const modalAccept = () => {
    modalClosure();
    modalSuccess.classList.add('modal_active');
    return false;
}

successButton.onclick = modalAccept;
closuerButton.onclick = modalClosure;

const successModalClick = () => { 
    modalSuccess.classList.remove('modal_active');
    return false;
}
const successBtnGreen = document.getElementsByClassName('btn_success').item(0);

successModalClosure.onclick = successModalClick;
successBtnGreen.onclick = successModalClick;

