const loader = document.getElementById('loader');
const items = document.getElementById('items');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.addEventListener('readystatechange', function() {
    if (xhr.status === 200 && xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');
        const valuteObjList = JSON.parse(xhr.responseText).response.Valute;
        for (const item in valuteObjList) {
            let newRow = document.createElement('div');
            newRow.classList.add('item');
            newRow.innerHTML = 
                `<div class="item__code">
                    ${valuteObjList[item].CharCode}
                </div>
                <div class="item__value">
                    ${valuteObjList[item].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>`;
            items.append(newRow);
        }       
    }   
});