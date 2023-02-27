'use strict'
const pad = () =>{
    try{
        const getHeight = document.querySelector('.header').offsetHeight
        // await getHeight
        const main = document.querySelector('.main')
        main.style.paddingTop = `${getHeight}px`
    }
    catch{
        console.log('Ошибка padding.js')
    }
}
setInterval(pad, 0)