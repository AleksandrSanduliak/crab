document.addEventListener('DOMContentLoaded', () => {
    const thumb = document.querySelector('.thumb').alt = 'Превью видео'
})
window.onload = () => {
    let scriptLoad = () => {
        const script = document.createElement('script')
        script.async = true
        script.src = 'https://api-maps.yandex.ru/2.1/?apikey=9959df46-8a46-4b4f-b808-4e0c9957f678&lang=ru_RU'
        script.type = 'text/javascript'
        document.getElementsByTagName('head')[0].appendChild(script);
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
        // ymaps.ready(init)
    }
    let WatchElem = document.getElementById('map')
    let observer = new IntersectionObserver(function (entr, obs) {

        entr.forEach((entry) => {
            if (!entry.isIntersecting) return
            obs.unobserve(entry.target)
            const promise = new Promise((resolve, reject) => {
                resolve(scriptLoad())
                reject(err)
            }).then(resolve => {
                setTimeout(init, 1000)
            }).catch(err => console.log(err))
        })
    })
    observer.observe(WatchElem)

}
