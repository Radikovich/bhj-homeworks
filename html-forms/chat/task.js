const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector( '.chat-widget__messages' );
const clientInputField = document.querySelector('.chat-widget__input');

const botResponses = ['Добрый день!',
                      'Уточните, пожалуйста, Ваш вопрос', 
                      'Перевожу на специалиста...',
                      'Попробуйте задать Ваш вопрос более подробно',
                      'Ваш вопрос несовсем понятен',
                      'Доброе утро',
                      'Проверяю...',
                      'Сейчас все специалисты заняты. Вам ответит первый освободившийся специалист',
                      'К сожалению, этот товар уже продан', 
                      'Для продолжения нажмите Enter', 
                      'В данный момент мы не работаем, мы сможем ответить Вам завтра.'
                    ];

chatWidget.onclick = () => chatWidget.classList.add('chat-widget_active');                    
addZero = (digit) => (digit < 10) ? '0' + digit : digit;

function answerSelector(arr,idx) {
  let messageTime = new Date();
  messages.innerHTML += `
    <div class="message">
      <div class="message__time">
        ${addZero(messageTime.getHours())}:${addZero(messageTime.getMinutes())}
      </div>
      <div class="message__text">
        ${arr[idx]}
      </div>
    </div>
  `;
}

function autoAnswer() {
  let newMessage = messages.lastElementChild;
  let idx = Math.floor(Math.random() * 10);
  let messageTime = new Date();
  if (newMessage.classList.contains('message_client')) {
    (messageTime.getHours() > 18 || messageTime.getHours() < 9) ? answerSelector(botResponses, 10) : answerSelector(botResponses, idx);
  }
}

clientInputField.addEventListener('keypress', function(event){
  if (event.key === 'Enter' && clientInputField.value) {
    let messageTime = new Date();
    messages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">
          ${addZero(messageTime.getHours())}:${addZero(messageTime.getMinutes())}
        </div>
        <div class="message__text">
          ${clientInputField.value}
        </div>
      </div>
    `;
    clientInputField.value = null; 
    setTimeout(autoAnswer, 500);
  }
});