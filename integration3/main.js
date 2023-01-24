import './css/reset.css'
import './css/style.css'


gsap.registerPlugin(ScrollTrigger);



const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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
}

init();