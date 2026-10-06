

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

