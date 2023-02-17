
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

}
ymaps.ready(init);