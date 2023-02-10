'use strict';
(async function () {
    // fetch('../../../../public/js/main/advantages/external/advantages.json').then(res => res.json()).then(data => console.log(data))
    let response = await fetch('../../../../public/external/advantages.json')
    let result = await response.json()
    const ul = document.querySelector('.advantages__list')
    for (let key in result) {
        ul.innerHTML += `<li class="item advantages__item">
        <img src="${result[key].img}" alt="Иконка списка" class="item--img advantages__item--img">
        <div class="item--text advantages__item--text">
            <p class="item--title advantages__item--title">${result[key].title}</p>
            <p class="item--body advantages__item--body">${result[key].text}</p>
        </div>
    </li>`
    }
})()