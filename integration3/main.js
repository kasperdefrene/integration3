import './css/reset.css'
import './css/style.css'


gsap.registerPlugin(ScrollTrigger);


const vh = (coef) => window.innerHeight * (coef/100);
const vw = (coef) => window.innerWidth * (coef/100);


window.addEventListener('DOMContentLoaded', () => {
    gsap.from(".fold__background", {
        opacity: 0,
        duration: 1,
    });

    gsap.from(".fold__title",{
        opacity: 0,
        duration: 2,
    });

    gsap.from(".fold__image",{
        opacity: 0,
        duration: 2,
    });

    gsap.from(".navigation",{
        y: vh(-10),
        duration: 1,
    });

    gsap.from(".fold__scroll",{
        y: vh(10),
        duration: 1,
    });

    gsap.from(".fold__arrows",{
        opacity: 0,
        duration: 5,
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
            start: vw(3) + ' top',
            toggleActions: "restart none reverse reset",
            scrub: 2,
            pin: true,
        }
    });

    stackTL.from(".image__stack__title", {
        x: vw(-20),
    }, 1
    );
    stackTL.from(".image__stack__flag", {
        x: vw(20),
    }, 1
    );
    stackTL.from(".image__stack__1", {
        x: vw(65),
        rotation:90,
    }, 2
    );
    stackTL.from(".image__stack__2", {
        x: vw(-65),
        rotation:-90,
    }, 3
    );
    stackTL.from(".image__stack__3", {
        x: vw(65),
        rotation:90,
    }, 4
    );
    
}

const history = () => {
    gsap.from(".wood__1", {
        x: vw(-25),
        duration: 1,
        scrollTrigger:{
            trigger: ".history",
            start: vw(20) + ' bottom',
            toggleActions: "restart none reverse reset",
        }
    });

    gsap.from(".wood__2", {
        x: vw(25),
        duration: 1,
        scrollTrigger:{
            trigger: ".history",
            start: vw(40) + ' bottom',
            toggleActions: "restart none reverse reset",
        }
    });
    gsap.from(".wood__3", {
        x: vw(-25),
        duration: 1,
        scrollTrigger:{
            trigger: ".history",
            start: vw(60) + ' bottom',
            toggleActions: "restart none reverse reset",
        }
    });
    gsap.from(".wood__4", {
        x: vw(25),
        duration: 1,
        scrollTrigger:{
            trigger: ".history",
            start: vw(80) + ' bottom',
            toggleActions: "restart none reverse reset",
        }
    });
    gsap.from(".wood__3", {
        x: vw(-25),
        duration: 1,
        scrollTrigger:{
            trigger: ".history",
            start: vw(100) + ' bottom',
            toggleActions: "restart none reverse reset",
        }
    });
}






let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(max-width: 767px)", () => {

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
            x: -400,
        }, 1
        );
        stackTL.from(".image__stack__flag", {
            x: 400,
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

    

  return () => { // optional
    // custom cleanup code here (runs when it STOPS matching)
  };
});

// later, if we need to revert all the animations/ScrollTriggers...
mm.revert();


// jukebox
let playing = false;

let trackOne = document.querySelector(".turntable__playlist__item__1");
let trackTwo = document.querySelector(".turntable__playlist__item__2");
let trackThree = document.querySelector(".turntable__playlist__item__3");
let trackFour = document.querySelector(".turntable__playlist__item__4");

let coverPlaying = document.querySelector(".cover__playing");
let vinylPlaying = document.querySelector(".turntable__vinyl");
let trackPlaying = document.querySelector(".track__playing");
let artistPlaying = document.querySelector(".artist__playing");
 
let playBtn = document.querySelector(".play__button");
let pauseBtn = document.querySelector(".pause__button");

let trackList = [
    {
      name: "Valse à Ludmilla",
      artist: "Gus Viseur",
      image: "cover_1.jpg",
      vinyl: "disc1.png",
      path: "music/gus_viseur.mp3"
    },
    {
        name: "Valse à Ludmilla",
        artist: "Gus Viseur",
        image: "cover_2.jpg",
        vinyl: "disc2.png",
        path: "music/gus_viseur.mp3"
      },
      {
        name: "Valse à Ludmilla",
        artist: "Gus Viseur",
        image: "cover_3.jpg",
        vinyl: "disc3.png",
        path: "music/gus_viseur.mp3"
      },
      {
        name: "Valse à Ludmilla",
        artist: "Gus Viseur",
        image: "cover_4.jpg",
        vinyl: "disc4.png",
        path: "music/gus_viseur.mp3"
      },
];

const playTrack1 = (event) => {
    new Audio(trackList[0].path).play();

    coverPlaying.setAttribute("src", trackList[0].image);
    vinylPlaying.removeAttribute("src");
    vinylPlaying.src = trackList[0].vinyl;
    trackPlaying.textContent = trackList[0].name;
    artistPlaying.textContent = trackList[0].artist;

    playing = true;
    spinningVinyl();
}

const playTrack2 = (event) => {
    new Audio(trackList[1].path).play();

    coverPlaying.setAttribute("src", trackList[1].image);
    vinylPlaying.setAttribute("src", trackList[1].vinyl);
    trackPlaying.textContent = trackList[1].name;
    artistPlaying.textContent = trackList[1].artist;

    playing = true;
    spinningVinyl();
}

const playTrack3 = (event) => {
    new Audio(trackList[2].path).play();

    coverPlaying.setAttribute("src", trackList[2].image);
    vinylPlaying.setAttribute("src", trackList[2].vinyl);
    trackPlaying.textContent = trackList[2].name;
    artistPlaying.textContent = trackList[2].artist;

    playing = true;
    spinningVinyl();
}

const playTrack4 = (event) => {
    new Audio(trackList[3].path).play();

    coverPlaying.setAttribute("src", trackList[3].image);
    vinylPlaying.setAttribute("src", trackList[3].vinyl);
    trackPlaying.textContent = trackList[3].name;
    artistPlaying.textContent = trackList[3].artist;

    playing = true;
    spinningVinyl();
}

const spinningVinyl = () => {
    if (playing == true) {
        document.querySelector(".turntable__vinyl").classList.add("spin");
    }
}

// top function

const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const init = () => {
    let topButton = document.querySelector(".top__button");
    topButton.addEventListener("click", topFunction);
    
    imageStack();

    trackOne.addEventListener("click", playTrack1);
    trackTwo.addEventListener("click", playTrack2);
    trackThree.addEventListener("click", playTrack3);
    trackFour.addEventListener("click", playTrack4);

    history();
}

init();


// let track_index = 0;

// let trackOne = document.querySelector(".turntable__playlist__item__1");
// let trackTwo = document.querySelector(".turntable__playlist__item__2");
// let trackThree = document.querySelector(".turntable__playlist__item__3");
// let trackFour = document.querySelector(".turntable__playlist__item__4");

// let coverPlaying = document.querySelector(".cover__playing");
// let vinylPlaing = document.querySelector(".turntable__vinyl");
// let trackPlaying = document.querySelector(".track__playing");
// let artistPlaying = document.querySelector(".artist__playing");
 
// let playBtn = document.querySelector(".play__button");
// let pauseBtn = document.querySelector(".pause__button");

// let currentTrack = document.createElement('audio');
 


// const loadTrack = (track_index) => {

// currentTrack.src = trackList[track_index].path;
// currentTrack.load();


// coverPlaying.setAttribute("src", track_list[track_index].image);
// vinylPlaying.setAttribute("src", track_list[track_index].vinyl);
// trackPlaying.textContent = track_list[track_index].name;
// artistPlaying.textContent = track_list[track_index].artist;


// }




// const setTrackIndexOne = (track_index) => {
//     track_index = 0;
//     console.log(track_index);
//     loadTrack();
// }
// const setTrackIndexTwo = (track_index) => {
//     track_index = 1;
//     console.log(track_index);
//     loadTrack();
// }
// const setTrackIndexThree = (track_index) => {
//     track_index = 2;
//     loadTrack();
// }
// const setTrackIndexFour = (track_index) => {
//     track_index = 3;
//     loadTrack();
// }






// trackOne.addEventListener("click", setTrackIndexOne);
//     trackTwo.addEventListener("click", setTrackIndexTwo);
//     trackThree.addEventListener("click", setTrackIndexThree);
//     trackFour.addEventListener("click", setTrackIndexFour);

//     setTrackIndexOne();
//     setTrackIndexTwo();
//     setTrackIndexThree();
//     setTrackIndexFour();