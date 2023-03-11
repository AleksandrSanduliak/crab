const mobildeWidth = window.matchMedia('(min-width:426.98px)').matches
if(mobildeWidth){
  document.addEventListener('DOMContentLoaded', ()=> {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from('.header', {
        opacity: 0.7, y: -120, duration: 1, delay: 0.5,
    })
      const timeln = gsap.timeline({defaults: {opacity:0, y: 30, duration: 0.6, delay: 0.2,}})
    timeln.from('.banner__title', {delay: 0.2})
    .from('.banner__subtitle', {duration: 0.3, delay: 0.2})
    .fromTo('.banner__btn', {opacity:0, x: -130, y:30, delay: 0.2} , {opacity:1, x:0, y:0, duration: 0.2})
  })
}
 