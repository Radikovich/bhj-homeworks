const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');

const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const signinBtn = document.getElementById('signin__btn');


signinForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(signinForm);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');

    xhr.addEventListener('readystatechange', function() {
        if (this.readyState !== this.DONE)  
          return;
              
          switch (this.status) {
            case 0:
              alert('Нет ответа от сервера');
              break;
                    
            case 200:
              const answer = JSON.parse(this.responseText);
              if (!answer.success) {
                alert('Неверный логин/пароль');
                return;
              }
              if (!answer.user_id) {
                alert('Ошибка ответа сервера');
                return;
              }
              
              localStorage.userId = answer.user_id;
              userId.innerText = localStorage.userId;
              signin.classList.remove('signin_active');
              welcome.classList.add('welcome_active');          
              
              break;
                  
            default:
              alert(`Ошибка, код ответа ${this.status} (${this.statusText})`); 
          }
    
      });
    xhr.send(formData);

    for (const input of signinForm.querySelectorAll('input'))
    input.value = '';    
});

signinBtn.addEventListener('click', () => {
    delete localStorage.userId;
    welcome.classList.remove('welcome_active'); 
    signin.classList.add('signin_active');  
});

if (localStorage.userId !== undefined) {
    userId.innerText = localStorage.userId;
    welcome.classList.add('welcome_active');  
} else {
    signin.classList.add('signin_active');
}

window.addEventListener("load", () =>
    welcome.classList.remove('welcome_active')); 
  
