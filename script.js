"use strict";

// Mobile nav
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const blurBackground = document.querySelector(".blur-background");

// Add event listener to hamburger icon
hamburger.addEventListener("click", () => {
  // Toggle nav menu visibility
  navMenu.classList.toggle("animate");
  navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";

  // Toggle hamburger icon animation
  hamburger.classList.toggle("active");

  // Toggle blur background visibility
  blurBackground.classList.toggle("active");
  blurBackground.style.opacity =
    blurBackground.style.opacity === "1" ? "0" : "1";
  blurBackground.style.pointerEvents =
    blurBackground.style.pointerEvents === "auto" ? "none" : "auto";
});

const text = "Welcome to Ishaperfectbeauty";
const textContainer = document.getElementById("animatedText");

function animateText() {
  // Reset the container before each loop
  textContainer.innerHTML = text
    .split("")
    .map((char) => `<span style="opacity:0">${char}</span>`)
    .join("");

  // Start the animation
  anime({
    targets: "#animatedText span",
    opacity: [0, 1], // Fade-in effect
    translateY: [10, 0], // Slide-up effect
    easing: "easeOutExpo",
    duration: 1500,
    delay: anime.stagger(100), // Delay each letter
    complete: function () {
      setTimeout(animateText, 1000); // Restart after a pause
    },
  });
}

animateText(); // Start animation

// CAROUSEL
let index = 0;
const slides = document.querySelectorAll(".carousel-slide");
const track = document.querySelector(".carousel-track");
const totalSlides = slides.length;

function moveSlide(step) {
  index = (index + step + totalSlides) % totalSlides;
  updateSlide();
}

function updateSlide() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

// Auto-slide every 3 seconds
setInterval(() => {
  moveSlide(1);
}, 3000);
