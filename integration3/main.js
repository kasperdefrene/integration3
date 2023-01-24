import './css/reset.css'
import './css/style.css'


gsap.registerPlugin(ScrollTrigger);



window.addEventListener('DOMContentLoaded', () => {
    gsap.from(".fold__background", {
        opacity: 0,
        duration: 1,
    });

    gsap.from(".fold__title",{
        opacity: 0,
        duration: 2,
    });
});

// const loadTL = gsap.timeline({
//     duration: 5,
//     scrollTrigger:{
//         scroller: ".container",
//         trigger: ".j2018",
//         start: "top top",
//         toggleActions: "restart none reverse reset",
//         scrub: 2,
//     }
// });

// loadTL.from(".fold__background", {
//     opacity: 0,
//     ease: Power2.easeOut,
//     duration: 1,
// },1
// );
// loadTL.from(".fold__title", {
//     opacity: 0,
//     ease: Power2.easeOut,
//     duration: 1,
// },2
// );

const imageStack = () => {
    const stackTL = gsap.timeline({
        duration: 5,
        scrollTrigger:{
            trigger: ".image__stack",
            start: "-=200 top",
            toggleActions: "restart none reverse reset"
        }
    });

    stackTL.from(".image__stack__title", {
        x: -200,
    }, 1
    );
    stackTL.from(".image__stack__flag", {
        x: 200,
    }, 1
    );
    stackTL.from(".image__stack__1", {
        x: 1000,
    }, 2
    );
    stackTL.from(".image__stack__2", {
        x: -1000,
    }, 3
    );
    stackTL.from(".image__stack__3", {
        x: 1000,
    }, 4
    );
    
}




const playing = false;

const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const spinningVinyl = () => {
    if (playing == true) {
        document.querySelector(".turntable__vinyl").classList.add("spin");
    }
}

// let mm = gsap.matchMedia();

// // add a media query. When it matches, the associated function will run
// mm.add("(min-width: 800px)", () => {

//   // this setup code only runs when viewport is at least 800px wide
//   //gsap.to(...);
//   //gsap.from(...);
//   //ScrollTrigger.create({...}); 

//   return () => { // optional
//     // custom cleanup code here (runs when it STOPS matching)
//   };
// });

// // later, if we need to revert all the animations/ScrollTriggers...
// mm.revert();


const init = () => {
    let topButton = document.querySelector(".top_button");
    topButton.addEventListener("click", topFunction);
    spinningVinyl();
    imageStack();
}

init();