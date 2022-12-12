gsap.from(".chucked", {
    duration: 5,
    rotation: 720,
    ease:'elastic',
    stagger: 0.5,
    x:-500,
    y:-500,
});

gsap.from(".headline", {
    duration: 2.5,
    stagger: 0.3,
    opacity: 0,
    y: 300,
})

gsap.from("#p1", {
    duration: 3.5,
    stagger: 0.3,
    opacity: 0,
    x: 300,
})
gsap.from("#p2", {
    duration: 4.5,
    stagger: 0.3,
    opacity: 0,
    x: 300,
})

gsap.from("#p3", {
    duration: 6.5,
    stagger: 0.3,
    opacity: 0,
    x: 300,
})



