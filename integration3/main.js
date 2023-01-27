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
            start: "top, 50%",
            toggleActions: "restart none reverse reset",

        }
    });

    gsap.from(".wood__2", {
        x: vw(25),
        duration: 1,
        scrollTrigger:{
            trigger: ".history__text_2",
            start: "top, 50%",
            toggleActions: "restart none reverse reset",

        }
    });
    gsap.from(".wood__3", {
        x: vw(-25),
        duration: 1,
        scrollTrigger:{
            trigger: ".history__text_3",
            start: "top, 50%",
            toggleActions: "restart none reverse reset",

        }
    });
    gsap.from(".wood__4", {
        x: vw(25),
        duration: 1,
        scrollTrigger:{
            trigger: ".history__text_4",
            start: "top, 50%",
            toggleActions: "restart none reverse reset",

        }
    });
    gsap.from(".wood__5", {
        x: vw(-25),
        duration: 1,
        scrollTrigger:{
            trigger: ".history__text_5",
            start: "top, 50%",
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

    const history = () => {

        gsap.to("#overlay", {
            opacity: 0,
            duration: 1,
            scrollTrigger:{
                trigger: ".history",
                start: "top, 50%",
                toggleActions: "restart none reverse reset",
            }
        });
    }

    

  return () => { // optional
    // custom cleanup code here (runs when it STOPS matching)
  };
});

// later, if we need to revert all the animations/ScrollTriggers...
mm.revert();


// jukebox
let playing = false;
let song = "gus";

let trackOne = document.querySelector(".turntable__playlist__item__1");
let trackTwo = document.querySelector(".turntable__playlist__item__2");
let trackThree = document.querySelector(".turntable__playlist__item__3");
let trackFour = document.querySelector(".turntable__playlist__item__4");

let coverPlaying = document.querySelector(".cover__playing");
let vinylPlaying = document.querySelector(".turntable__vinyl");
let trackPlaying = document.querySelector(".track__playing");
let artistPlaying = document.querySelector(".artist__playing");
let aboutPlaying = document.querySelector(".about__playing");
 
let playBtn = document.querySelector(".play__button");
let pauseBtn = document.querySelector(".pause__button");

let trackList = [
    {
      name: "Valse à Ludmilla",
      artist: "Gus Viseur",
      about: "Dit is een van de meest bekende musettes van Gus Viseur, een van de grootste accordeonisten uit de gouden eeuw van de musette.",
      image: "cover_1.jpg",
      vinyl: "disc1.png",
      path: "music/gus_viseur.mp3"
    },
    {
        name: "La Java Bleue",
        artist: "Joseph Colombo",
        about:"Deze klassieker werd geschreven door Joseph Colombo, een andere bekende accordeonist uit de jaren 20 en 30.",
        image: "cover_2.jpg",
        vinyl: "disc2.png",
        path: "music/joseph_colombo.mp3"
      },
      {
        name: "Valse Musette",
        artist: "Tony Murena",
        about:"Deze wals werd geschreven door Tony Murena, die bekend staat als een van de grootste accordeonisten aller tijden.",
        image: "cover_3.jpg",
        vinyl: "disc3.png",
        path: "music/tony_murenamp3"
      },
      {
        name: "Bourrée d'Auvergne",
        artist: "Roger Riffard",
        about: "Dit is een traditionele bourrée uit de Auvergne regio gespeeld door Roger Riffard, een accordeonist die zich specialiseert in de traditionele Franse muziek.",
        image: "cover_4.jpg",
        vinyl: "disc4.png",
        path: "music/roger_riffard.mp3"
      },
];

const playTrack1 = (event) => {
    new Audio(trackList[0].path).play();

    coverPlaying.removeAttribute("src");
    coverPlaying.src = trackList[0].image;
    vinylPlaying.removeAttribute("src");
    vinylPlaying.src = trackList[0].vinyl;
    trackPlaying.textContent = trackList[0].name;
    artistPlaying.textContent = trackList[0].artist;
    aboutPlaying.textContent = trackList[0].about;

    playing = true;
    song = "gus";
    spinningVinyl();
}

const playTrack2 = (event) => {
    new Audio(trackList[1].path).play();

    coverPlaying.removeAttribute("src");
    coverPlaying.src = trackList[1].image;
    vinylPlaying.removeAttribute("src");
    vinylPlaying.src = trackList[1].vinyl;
    trackPlaying.textContent = trackList[1].name;
    artistPlaying.textContent = trackList[1].artist;
    aboutPlaying.textContent = trackList[1].about;

    playing = true;
    song = "joseph";
    spinningVinyl();
}

const playTrack3 = (event) => {
    new Audio(trackList[2].path).play();

    coverPlaying.removeAttribute("src");
    coverPlaying.src = trackList[2].image;
    vinylPlaying.removeAttribute("src");
    vinylPlaying.src = trackList[2].vinyl;
    trackPlaying.textContent = trackList[2].name;
    artistPlaying.textContent = trackList[2].artist;
    aboutPlaying.textContent = trackList[2].about;

    playing = true;
    song = "tony";
    spinningVinyl();
}

const playTrack4 = (event) => {
    new Audio(trackList[3].path).play();

    coverPlaying.removeAttribute("src");
    coverPlaying.src = trackList[3].image;
    vinylPlaying.removeAttribute("src");
    vinylPlaying.src = trackList[3].vinyl;
    trackPlaying.textContent = trackList[3].name;
    artistPlaying.textContent = trackList[3].artist;
    aboutPlaying.textContent = trackList[3].about;

    playing = true;
    song = "roger";
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