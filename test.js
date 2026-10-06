test.js
window.addEventListener("load", () => {
    const header = document.querySelector("header");
    const welcomeText = document.getElementById("welcomeText");
    const ianText = document.getElementById("ianText");
  
    // Add class to make text appear after loading
    setTimeout(() => {
      header.classList.add("scrolled");
    }, 500); // Delay for smooth animation
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, { threshold: 0.2 }); // Adjust the threshold to determine when it triggers

    elements.forEach(el => observer.observe(el));
});

const downArrow = document.getElementById('downArrow');

window.addEventListener('scroll', function() {
  const scrollDown = document.getElementById('scrollDown');
  if (window.scrollY > 50) {
      scrollDown.classList.add('hidden');
  } else {
      scrollDown.classList.remove('hidden');
  }
});

const backToTop = document.getElementById("backToTop");
        window.addEventListener("scroll", function () {
            if (window.scrollY > 200) {
                backToTop.classList.remove("hidden");
                backToTop.textContent = "";
            } else {
                backToTop.classList.add("hidden");
            }
        });
        backToTop.addEventListener("mouseenter", function () {
            backToTop.textContent = "BACK TO TOP";
        });
        backToTop.addEventListener("mouseleave", function () {
            backToTop.textContent = "";
        });
        backToTop.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });