document.addEventListener('DOMContentLoaded', ()=> {
  gsap.registerPlugin(ScrollTrigger)
  gsap.from('.header', {
      opacity: 0.7, y: -120, duration: 1, delay: 0.5,
  })
    const timeln = gsap.timeline({defaults: {opacity:0, y: 30, duration: 1}})
  timeln.from('.banner__title', {delay: 0.5} )
  .from('.banner__subtitle', {duration: 0.5, delay: 0})
  .fromTo('.banner__btn', {opacity:0, y:30, duration: 0.2, delay: 0} , {opacity:1, y:0, duration: 0.3})
  
  // gsap.to('.banner__title',{
  //     scrollTrigger:{
  //         trigger: '.banner',
  //         start: '-100px 0',
  //         scrub: true,
  //     },
  //     yPercent: -100,
  //     duration: 0.5,
  // })
  // gsap.to('.banner__subtitle',{
  //     scrollTrigger:{
  //         trigger: '.banner',
  //         start: '-120px 0',
  //         scrub: true,
  //     },
  //     yPercent: -130,
  //     duration: 0.3,
  // })
  // gsap.to('.banner__btn',{
  //     scrollTrigger:{
  //         trigger: '.banner',
  //         start: '0px 0',
  //         scrub: true,
  //     },
  //     // x: 50,
  //     yPercent: 120,
  //     // duration: 1,
  //     scale: 1.2,
  // })
  
  
})
 