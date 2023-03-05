// Get the name from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('mengundang') || "KALIAN SEMUA";

// set the name upper before update
document.querySelector(".name").textContent = `${name.toUpperCase()}`;
// Set the name in the invitation card
// document.querySelector(".name").textContent = `${name}`;

// Get the button element and add click event listener to hide the card
const button = document.querySelector(".button");
button.addEventListener("click", function() {
  document.querySelector(".card").style.display = "none";
});

// Set up the slideshow
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(n) {
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Show the specified slide
  slides[n].style.display = "block";
}

// Show the first slide
showSlide(currentSlide);

// Set up automatic slide change
setInterval(function() {
  // Hide the current slide
  slides[currentSlide].style.display = "none";
  // Move to the next slide
  currentSlide = (currentSlide + 1) % slides.length;
  // Show the next slide
  showSlide(currentSlide);
}, 3000);

// Set up the countdown timer
const countdown = document.querySelector(".countdown");
const deadline = new Date("2023-03-17T12:00:00Z");

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function updateCountdown() {
  const t = getTimeRemaining(deadline);
  document.getElementById("days").innerHTML = t.days + "d";
  document.getElementById("hours").innerHTML = ("0" + t.hours).slice(-2) + "h";
  document.getElementById("minutes").innerHTML = ("0" + t.minutes).slice(-2) + "m";
  document.getElementById("seconds").innerHTML = ("0" + t.seconds).slice(-2) + "s";

  if (t.total <= 0) {
    clearInterval(timeinterval);
  }
}

updateCountdown();
const timeinterval = setInterval(updateCountdown, 1000);

const openBtn = document.querySelector(".open-btn");
const cardContainer = document.querySelector(".card-container");

openBtn.addEventListener("click", () => {
  cardContainer.classList.add("active");
});

const attendeesList = document.querySelector(".attendees ul");

// Wait for the DOM to fully load before executing the code
document.addEventListener("DOMContentLoaded", () => {
  // Check if the attendees list and its first child exist before trying to scroll
  if (attendeesList && attendeesList.firstElementChild) {
    let currentPosition = 0;
    const step = attendeesList.firstElementChild.clientWidth;
    const maxPosition = attendeesList.scrollWidth - attendeesList.clientWidth;

    setInterval(() => {
      currentPosition += step;
      if (currentPosition >= maxPosition) {
        currentPosition = 0;
      }
      attendeesList.scrollLeft = currentPosition;
    }, 2000);
  }
});



