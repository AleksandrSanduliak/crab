'use strict'
const items = document.querySelectorAll('[data-menu-item]')
console.log(items)
items.forEach(e => {
    e.addEventListener('click', (item) => {
        item.preventDefault()
        const hrefLink = e.children[0].getAttribute('href').slice(1)
        const findElem = document.getElementById(hrefLink)
        findElem.scrollIntoView({
            block: "start",
            behavior: "smooth",
        })
    })
})