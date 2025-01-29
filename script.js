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
$(document).ready(function () {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
  });
});
// Explore button
// Example JS to change text on click (if needed)
document.getElementById("e-link").addEventListener("click", function () {
  this.textContent = "You Clicked Me!";
  setTimeout(() => {
    this.textContent = "Hover Over Me";
  }, 2000);
});
// footer dropdown
document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the link from navigating

    const dropdown = toggle.nextElementSibling;

    // Toggle the dropdown's visibility
    if (dropdown.style.maxHeight) {
      dropdown.style.maxHeight = null; // Collapse dropdown
    } else {
      dropdown.style.maxHeight = dropdown.scrollHeight + "px"; // Expand dropdown
    }
  });
});
