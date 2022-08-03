'use strict'
const hasTooltip = document.querySelectorAll('.has-tooltip');

[...hasTooltip].map(function(elem) {
    elem.style.position = 'relative';
    elem.style.display = 'inline-block';
});

document.addEventListener('click', e => {
    e.preventDefault();
    if (document.querySelector('.tooltip_active')) {
        document.querySelector('.tooltip_active').remove();
    }

    if (e.target.classList.contains('has-tooltip')) {
        e.target.innerHTML += `<div class="tooltip tooltip_active"></div>`;
    }
    const tooltip = document.querySelector('.tooltip_active');
    tooltip.style.position = 'absolute';
    tooltip.innerText = e.target.title;
});