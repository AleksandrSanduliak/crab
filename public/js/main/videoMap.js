'use strict'
const delay = (time) => {
    return new Promise((resolve, reject) => setTimeout(resolve, time))
 }
window.onload = () =>{
    //VIDEO
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

    // MAP
    let WatchElem = document.getElementById('map')
    let scriptLoad = () => {
        const script = document.createElement('script')
        script.defer = true
        script.src = 'https://api-maps.yandex.ru/2.1/?apikey=9959df46-8a46-4b4f-b808-4e0c9957f678&lang=ru_RU'
        script.type = 'text/javascript'
        document.getElementsByTagName('head')[0].appendChild(script);
        console.log('script load')
    }
    function init() {
        var myMap = new ymaps.Map("map", {
                center: [55.75, 37.66],
                zoom: 10
            }, {
                searchControlProvider: 'yandex#search'
            }),
            myPieChart = new ymaps.Placemark([55.75, 37.66], {
                balloonContent: 'Crab System'
            }, {
                preset: 'islands#icon',
                iconColor: '#0095b6',
                suppressMapOpenBlock: true
            });
            
        myMap.geoObjects
            .add(myPieChart)
        myMap.controls.remove('searchControl')
        myMap.controls.remove('trafficControl')
        myMap.controls.remove('typeSelector')
        myMap.controls.remove('fullscreenControl')
        myMap.controls.remove('rulerControl')
        myMap.controls.remove('button')
        myMap.controls.remove('listBox')
        myMap.controls.remove('listBox')
        myMap.behaviors.disable('scrollZoom');
        myMap.events.add('click', function () {
            myMap.behaviors.enable('scrollZoom');
        });
    //    ymaps.ready(init)
    }   

    let observ = new IntersectionObserver(function (entr, obs) {
        entr.forEach((entry) => {
            if (!entry.isIntersecting) return
            obs.unobserve(entry.target)
            const promise = new Promise((resolve, reject) => {
                resolve(scriptLoad())
            }).then(() => {
                return delay(1300)
            }).then(()=>{
                init()
            })
            .catch(err => console.log(err))
        })
    })
    observ.observe(WatchElem)
}