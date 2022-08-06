const formElement = document.getElementById('form');
const progressElement = document.getElementById('progress');

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    const file = document.getElementById('file').files;
    const fileName = document.querySelector('.input__wrapper-desc');
    const formData = new FormData();
    formData.append(`${fileName.innerText}`, file[0]);
    xhr.upload.addEventListener('progress', function (event){
        progressElement.value = (event.loaded / event.total).toFixed(2);
    }, false);
    xhr.send(formData);
});