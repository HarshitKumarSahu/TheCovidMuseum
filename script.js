const lenis = new Lenis({
    duration: 3,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical', 
    gestureDirection: 'vertical',
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


let tl = gsap.timeline()
let fixed = document.getElementById("fixed")


document.querySelectorAll(".elem").forEach(elem => {
    let image = elem.querySelector("img")
    let xTransform = gsap.utils.random(-100,100);
    tl
        .set(image , {
            transformOrigin : `${xTransform < 0 ? 0 : "100%"}`
        }, "a")
        .to(image , {
            scale : 0 ,
            ease: "none",
            scrollTrigger : {
                trigger : image,
                start : "top top",
                end : "bottom top" , 
                scrub : true
            }
        }, "a")
        .to(elem , {
            xPercent : xTransform, 
            ease: "none",
            scrollTrigger : {
                trigger : image,
                start : "top top",
                end : "bottom top" , 
                scrub : true
            }
        }, "a")
})
