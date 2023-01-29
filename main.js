import './css/reset.css'
import './css/style.css'


gsap.registerPlugin(ScrollTrigger);


const vh = (coef) => window.innerHeight * (coef/100);
const vw = (coef) => window.innerWidth * (coef/100);

let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {

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
        
    });

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



    gsap.from(".intro__quota", {
        y: "20%",
        duration: 1,
        scrollTrigger:{
            trigger: ".intro__quota",
            start: "10% , bottom",
            toggleActions: "restart none reverse reset",
        }
    })
    
    gsap.from(".intro__text", {
        opacity: 0.2,
        duration: 1,
        scrollTrigger:{
            trigger: ".intro__text",
            start: "top, 50%",
            toggleActions: "restart none reverse reset",
        }
    })

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

});



    gsap.from(".history__title", {
        x: "-65%",
        duration: 1,
        scrollTrigger:{
            trigger: ".history__title",
            start: "top, 50%",
            toggleActions: "restart none reverse reset",
        }
    });

    gsap.from(".history__subtitle", {
        x: "65%",
        duration: 1,
        scrollTrigger:{
            trigger: ".history__title",
            start: "top, 50%",
            toggleActions: "restart none reverse reset",
        }
    });

    gsap.from(".history__whisper", {
        opacity: 0,
        duration: 1,
        scrollTrigger:{
            trigger: ".history__whisper",
            start: "top, 50%",
            toggleActions: "restart none reverse reset",
        }
    });

    









const stackTL = gsap.timeline({
    duration: 5,
    scrollTrigger:{
        trigger: ".image__stack",
        start: "top top",
        toggleActions: "restart none reverse reset",
        pin: true,
    }
});

mm.add("(max-width: 767px)", () => {
    stackTL.from(".image__stack__title", {
        x: "-150%",
        
    }, 1
    );
    stackTL.from(".image__stack__flag", {
        x: "180%",
        
    }, 1
    );
    stackTL.from(".image__stack__1", {
        x: "-150%",
        rotation:90,
    }, 2
    );
    stackTL.from(".image__stack__2", {
        x: "150%",
        rotation:-90,
    }, 3
    );
    stackTL.from(".image__stack__3", {
        x: "-150%",
        rotation:90,
    }, 4
    );


    gsap.from(".wood__1", {
        x: vw(-25),
        duration: 1,
        scrollTrigger:{
            trigger: ".history__title_1",
            start: "top, 50%",
            toggleActions: "restart none reverse reset",

        }
    });

    gsap.from(".wood__2", {
        x: vw(25),
        duration: 1,
        scrollTrigger:{
            trigger: ".history__title_2",
            start: "top, 50%",
            toggleActions: "restart none reverse reset",

        }
    });
    gsap.from(".wood__3", {
        x: vw(-25),
        duration: 1,
        scrollTrigger:{
            trigger: ".history__title_3",
            start: "top, 50%",
            toggleActions: "restart none reverse reset",

        }
    });
    gsap.from(".wood__4", {
        x: vw(25),
        duration: 1,
        scrollTrigger:{
            trigger: ".history__title_4",
            start: "top, 50%",
            toggleActions: "restart none reverse reset",

        }
    });
    gsap.from(".wood__5", {
        x: vw(-25),
        duration: 1,
        scrollTrigger:{
            trigger: ".history__title_5",
            start: "top, 50%",
            toggleActions: "restart none reverse reset",

        }
    });




    gsap.to("#overlay__1", {
        opacity: 0,
        duration: 1,
        scrollTrigger:{
            trigger: ".history__image__1",
            start: "50%, 50%",
            toggleActions: "restart none reverse reset",
        }
    });
    gsap.to("#overlay__2", {
        opacity: 0,
        duration: 1,
        scrollTrigger:{
            trigger: ".history__image__2",
            start: "50%, 50%",
            toggleActions: "restart none reverse reset",
        }
    });
    gsap.to("#overlay__3", {
        opacity: 0,
        duration: 1,
        scrollTrigger:{
            trigger: ".history__image__3",
            start: "50%, 50%",
            toggleActions: "restart none reverse reset",
        }
    });
    gsap.to("#overlay__4", {
        opacity: 0,
        duration: 1,
        scrollTrigger:{
            trigger: ".history__image__4",
            start: "50%, 50%",
            toggleActions: "restart none reverse reset",
        }
    });
    gsap.to("#overlay__5", {
        opacity: 0,
        duration: 1,
        scrollTrigger:{
            trigger: ".history__image__5",
            start: "50%, 50%",
            toggleActions: "restart none reverse reset",
        }
    });

    gsap.from(".intro__quota", {
        y: "20%",
        duration: 1,
        scrollTrigger:{
            trigger: ".intro__quota",
            start: "10% , bottom",
            toggleActions: "restart none reverse reset",
        }
    })
    
    gsap.from(".intro__text", {
        opacity: 0.2,
        duration: 1,
        scrollTrigger:{
            trigger: ".intro__text",
            start: "50%, 90%",
            toggleActions: "restart none reverse reset",
        }
    })
    

    

});

// later, if we need to revert all the animations/ScrollTriggers...

//parts

const accordeon = document.querySelector(".accordeon__overview");
const close = document.querySelectorAll(".close");

const knoppen = document.querySelector(".knoppen__container");
const klavier = document.querySelector(".klavier__container");
const bellow = document.querySelector(".bellow__container");

const knoppenOverlay = document.querySelector(".overlay__knoppen");
const klavierOverlay = document.querySelector(".overlay__klavier");
const bellowOverlay = document.querySelector(".overlay__bellow");


const knoppenInfo = () => {
    knoppenOverlay.classList.toggle("overlay__knoppen--active");
}

const klavierInfo = () => {
    klavierOverlay.classList.toggle("overlay__klavier--active");
}

const bellowInfo = () => {
    bellowOverlay.classList.toggle("overlay__bellow--active");
}

const closeTab = () => {
    klavierOverlay.classList.remove("overlay__klavier--active");
    bellowOverlay.classList.remove("overlay__bellow--active");
    knoppenOverlay.classList.remove("overlay__knoppen--active");
}


const knoppenImage = () => {
    accordeon.src = "knoppen.png";
}

const klavierImage = () => {
    accordeon.src = "klavier.png";
}

const bellowImage = () => {
    accordeon.src = "bellow.png";
}


// jukebox
let playing = false;

let index = 0;

const trackOne = document.querySelector(".turntable__playlist__item__1");
const trackTwo = document.querySelector(".turntable__playlist__item__2");
const trackThree = document.querySelector(".turntable__playlist__item__3");
const trackFour = document.querySelector(".turntable__playlist__item__4");

const coverPlaying = document.querySelector(".cover__playing");
const vinylPlaying = document.querySelector(".turntable__vinyl");
const trackPlaying = document.querySelector(".track__playing");
const artistPlaying = document.querySelector(".artist__playing");
const aboutPlaying = document.querySelector(".about__playing");
 
const playBtn = document.querySelector(".turntable__play");
const pauseBtn = document.querySelector(".turntable__pause");

const trackList  = [
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
        path: "music/tony_murena.mp3"
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

let myAudio

const playTrack = (index) => {
    myAudio?.pause();

   myAudio =  new Audio(trackList[index].path)
   
   myAudio.play();

    coverPlaying.removeAttribute("src");
    coverPlaying.src = trackList[index].image;
    vinylPlaying.removeAttribute("src");
    vinylPlaying.src = trackList[index].vinyl;
    trackPlaying.textContent = trackList[index].name;
    artistPlaying.textContent = trackList[index].artist;
    aboutPlaying.textContent = trackList[index].about;

    playing = true;
    console.log(playing);
    spinningVinyl();
}

const play = (index) => {
    myAudio.play();
    spinningVinyl();
}

const pause = () => {
    myAudio.pause();
    stopSpinningVinyl();
}

const spinningVinyl = () => {
    if (playing = true) {
        document.querySelector(".turntable__vinyl").classList.add("spin");
    }
}

const stopSpinningVinyl = () => {
        document.querySelector(".turntable__vinyl").classList.remove("spin");
}

// top function

const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const init = () => {
    let topButton = document.querySelector(".top__button");
    topButton.addEventListener("click", topFunction);


    knoppen.addEventListener("mouseover", knoppenImage);
    klavier.addEventListener("mouseover", klavierImage);
    bellow.addEventListener("mouseover", bellowImage);

    knoppen.addEventListener("mouseout", () => {
        accordeon.src = "accordeon__parts.png";
    });

    klavier.addEventListener("mouseout", () => {
        accordeon.src = "accordeon__parts.png";
    });

    bellow.addEventListener("mouseout", () => {
        accordeon.src = "accordeon__parts.png";
    });

    knoppen.addEventListener("click", knoppenInfo);
    klavier.addEventListener("click", klavierInfo);
    bellow.addEventListener("click", bellowInfo);

    close[0].addEventListener("click", closeTab);
    close[1].addEventListener("click", closeTab);
    close[2].addEventListener("click", closeTab);

    trackOne.addEventListener("click", () =>{
        playTrack(0);
    });
    trackTwo.addEventListener("click", () =>{
        playTrack(1);
    });
    trackThree.addEventListener("click", () =>{
        playTrack(2);
    });
    trackFour.addEventListener("click", () =>{
        playTrack(3);
    });
    playBtn.addEventListener("click", play);
    pauseBtn.addEventListener("click", pause);
}

init();