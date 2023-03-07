'use strict'
window.onload = () =>{
    const watch = document.querySelector('.about__video')
    const serv = new IntersectionObserver((entr, obs) =>{
        entr.forEach((entry) => {
            if(!entry.isIntersecting) return
            obs.unobserve(entry.target)
            const makeVideo = () => {
                const videoS = document.createElement('script')
                videoS.defer = true
                videoS.type = 'text/javascript'
                videoS.src="https://codegena.com/assets/js/youtube-embed.js"
                document.getElementsByTagName('head')[0].appendChild(videoS);
            }
            const makeElem = () => {
                const divElem = document.createElement('div')
                divElem.classList.add('youtube')
                divElem.setAttribute('src', '../../public/imgs/main/about/bcg.webp')
                divElem.setAttribute('id', '66_Rr32d1rw')
                divElem.style.height = '100%'
                divElem.style.width = '100%'
                watch.insertAdjacentElement('beforeend', divElem)
            }
            const promise = new Promise((resolve,reject) => {
                const asyncVideo = setInterval(makeVideo(), 1000)
                resolve()
                reject(new Error('ошибка video promise'))
            }).then(video => {
                makeElem()
                setTimeout(()=> {
                    const thumb = document.querySelector('.thumb').alt = 'Превью видео'
                    console.log(thumb)
                }, 500)
            }).catch(err => console.log(err))

        })
    })
    serv.observe(watch)
}