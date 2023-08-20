const tl = gsap.timeline();
tl.from('#main> nav> img, nav> div> h3, nav> div> button ', {
// gsap.from('nav', {
    y: -100,
    duration : 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.3
}).from('.content > h1', {
    y: 300,
    opacity: 0,
    duration: 0.5,

}).from('.content> img', {
    opacity: 0,
    duration: 0.5,
    scale: 0,
}).from('.content h5', {
    opacity: 0,
    duration: 1,
    y:200,
}).to('.content h5', {
    y: 30,
    repeat: -1,
    yoyo: true,
    duration: 0.8,
})