'use strict'
const getList = document.querySelectorAll('.menu__cities--item')
const city = document.querySelector('.city')
const phone = document.querySelector('.phone')
console.log(getList)
getList.forEach(ev => {
    ev.addEventListener('click', e => {
            // console.log(ev.textContent)
            city.innerHTML = ev.textContent
            phone.innerHTML = ev.dataset.phone
    })
})