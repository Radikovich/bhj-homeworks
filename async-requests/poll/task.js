const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener('readystatechange', function() {
    if (xhr.status === 200 && xhr.readyState === xhr.DONE) {
        let quizObject = JSON.parse(xhr.responseText).data;
        pollTitle.innerText = quizObject.title;
        for (let option of quizObject.answers) {
            pollAnswers.innerHTML +=  
                `<button class="poll__answer" style="margin: 3px">
                    ${option}
                </button>`;
        }
    }
})
pollAnswers.addEventListener('click', () => {
    const body = document.querySelector('body');
    body.insertAdjacentHTML("beforeEnd",
    `<div class="modal_mask">
       <div class="modal">
            <div class="modal_msg">Спасибо, ваш голос засчитан!</div>
            <button class="close_btn">Закрыть</button>
        </div>
    </div>`
    );
    const closeBtn = document.querySelector('.close_btn');
    closeBtn.addEventListener('click', (event) => event.target.closest('div.modal_mask').remove());
});