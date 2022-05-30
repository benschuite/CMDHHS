
let text = document.getElementById('text');
let wolken = document.getElementById('wolken');
let lampen = document.getElementById('lampen');
let Stad = document.getElementById('Stad');
let Stad2 = document.getElementById('Stad2');
let vogel = document.getElementById('vogel');
let vogel2 = document.getElementById('vogel2');
let bosjes = document.getElementById('bosjes');
let gras = document.getElementById('gras');
let hek = document.getElementById('hek');
let tafelL = document.getElementById('tafelL');
let tafelR = document.getElementById('tafelR');
let btn = document.getElementById('btn');
let header = document.getElementById('header');

window.addEventListener('scroll', function(){
  let value = window.scrollY;

  text.style.top = 50 + value * -0.5 + '%';
  lampen.style.top = value * - 1.5 + 'px';
  vogel.style.top = value * 1.5 + 'px';
  vogel.style.left = value * -2 + 'px';
  vogel2.style.top = value * 1.5 + 'px';
  vogel2.style.left = value * 2 + 'px';
  btn.style.marginTop = value * 1.5 + 'px';
  wolken.style.top = value * - 1.5 + 'px';
  hek.style.top = value * -0.12 + 'px';
  tafelL.style.top = value * -0.12 + 'px';
  tafelR.style.top = value * -0.12 + 'px';
})



gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, );


gsap.to(".vogels", 1, {
  y: 20,
  repeat: -1,
  yoyo: true,
  delay: 0
});



const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".content1",
    start: "top 80%",
    end: "top 30%",
    scrub: 1
  }
});

tl.to(".content1", {x: "20%", duration: 1});

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".content2",
    start: "top 80%",
    end: "top 30%",
    scrub: 1
  }
});

tl2.to(".content2", {x: "-20%", duration: 1});

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".content3",
    start: "top 80%",
    end: "top 30%",
    scrub: 1
  }
});

tl3.to(".content3", {x: "20%", duration: 1});




const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".content4",
    start: "top 80%",
    end: "top 30%",
    scrub: 1
  }
});

tl4.to(".content4", {x: "-20%", duration: 1});



const tween = gsap.timeline();
tween.to(".vliegtuig", {
  duration: 1,
  ease: "power1.inOut",
  motionPath: {
    path: [  
    {x: "80vw", y:"20vh"},
    {x: "20vw", y:"50vh"},
    {x: "80vw", y:"80vh"},
    {x: "0vw", y:"90vh"},

    ],
    curviness: 2,
    autoRotate: true
  }
});

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: '.animation',
  duration: 1500,
})

.setTween(tween)
.addTo(controller);






