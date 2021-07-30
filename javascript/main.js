window.addEventListener("load", function () {
  AOS.init({
    once: true,
  });
});

// hamburger on & off

var overlay = document.getElementById("overlay"),
  hamb = document.getElementById("toggle");

hamb.addEventListener("click", function () {
  hamb.classList.toggle("active"), overlay.classList.toggle("open");
});

// overlay animation

TweenMax.to(".first", 1, {
  delay: 1.4,
  left: "-200%",
  ease: Expo.easeInOut,
});

TweenMax.to(".second", 1, {
  delay: 1.4,
  left: "200%",
  ease: Expo.easeInOut,
});

TweenMax.to(".third", 1, {
  delay: 1.4,
  left: "-200%",
  ease: Expo.easeInOut,
});

TweenMax.from(".logo", 1.4, {
  delay: 1.6,
  opacity: 0,
  x: -50,
  ease: Expo.easeInOut,
});

TweenMax.staggerFrom(
  ".nav-btns a",
  1.5,
  {
    delay: 1.8,
    opacity: 0,
    x: -50,
    ease: Power4.easeInOut,
  },
  0.08
);

TweenMax.from(".shoping-btn", 1.4, {
  delay: 2,
  opacity: 0,
  y: -50,
  ease: Expo.easeInOut,
});

TweenMax.to(".line", 2, {
  delay: 2.4,
  width: "100%",
  ease: Expo.easeInOut,
});

TweenMax.from(".hero h1", 1.2, {
  delay: 2.6,
  y: -50,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".hero h6", 1.2, {
  delay: 2.8,
  y: -50,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".hero a", 1.2, {
  delay: 3.1,
  y: -50,
  opacity: 0,
  ease: Expo.easeInOut,
});
