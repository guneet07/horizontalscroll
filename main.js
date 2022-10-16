gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.set('.section--02', {xPercent:100})
gsap.set('.section--03', {xPercent:100})

var action = gsap.timeline({
  scrollTrigger: {
    trigger: ".sections",
    pin:true,
    scrub:0.3,
    start: "top top",
    end: "+=1500"
  }
})
.to('.section--02', {xPercent:0, duration:2})
.to('.section--03', {xPercent:0, duration:2})
//.to({},{duration:0.5}) // an empty tween to generate a pause at the end