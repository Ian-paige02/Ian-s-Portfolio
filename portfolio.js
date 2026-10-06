// Fade in intro text
window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".intro").style.opacity = 1;
});

// Fade in work section on scroll
window.addEventListener("scroll", () => {
  const workSection = document.querySelector(".work");
  const sectionTop = workSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight * 0.8;

  if (sectionTop < triggerPoint) {
    workSection.style.opacity = 1;
  }
});

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".intro").classList.add("visible");
});

// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Select both paragraphs
  const topLeftParagraph = document.querySelector('.top-left');
  const bottomRightParagraph = document.querySelector('.bottom-right');
  const bottomRightTopParagraph = document.querySelector('.bottom-right-top');

  // Add a fade-in effect by changing opacity
  topLeftParagraph.style.opacity = 1;
  bottomRightParagraph.style.opacity = 1;
  bottomRightTopParagraph.style.opacity = 1;
});


const images = [
  "images/Sports.png",
  "images/music.png",
  "images/wardrodejpg.png"
];

const texts = [
  "SPORTS",
  "MUSIC",
  "FASION"
];

let currentIndex = 0;

function changeContent() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("interest-img").src = images[currentIndex];
  document.getElementById("interest-text").textContent = texts[currentIndex];
}

setInterval(changeContent, 2000);




// Select all elements with the class 'detail'
const details = document.querySelectorAll('.detail');

// Function to check if each element is in the viewport
function checkVisibility() {
    const windowHeight = window.innerHeight; // Height of the window
    const scrollPosition = window.scrollY;  // Current scroll position

    // Iterate through each detail element
    details.forEach((detail) => {
        const detailPosition = detail.getBoundingClientRect().top + scrollPosition; // Position of the element

        // Check if the element is visible in the viewport
        if (scrollPosition + windowHeight > detailPosition + 100) { // Add 100px offset to trigger earlier
            detail.classList.add('visible'); // Add the visible class to make it appear
        } else {
            detail.classList.remove('visible'); // Remove the visible class if it's out of view
        }
    });
}

// Event listener to check visibility whenever the user scrolls
window.addEventListener('scroll', checkVisibility);

// Call the function initially in case content is already in view
checkVisibility();

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("text").classList.add("slide-in-left");
    document.getElementById("image").classList.add("slide-in-right");
});



//==============Hamburger Menu ====================

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", function() {
    nav.classList.toggle("active");
});

