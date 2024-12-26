const carouselImages = document.querySelector('.carousel-images');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
let autoSlideInterval;

// Function to update carousel position
function updateCarousel() {
    const offset = -currentIndex * 100; // Shift by 100% per item
    carouselImages.style.transform = `translateX(${offset}%)`;
}

// Function to show the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length; // Loop to the first slide after the last one
    updateCarousel();
}

// Function to show the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Loop to the last slide if at the first
    updateCarousel();
}

// Function to start auto-slide
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
}

// Function to stop auto-slide
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Add event listeners for navigation buttons
document.querySelector('.next').addEventListener('click', () => {
    stopAutoSlide(); // Stop auto-slide on manual interaction
    nextSlide();
    startAutoSlide(); // Restart auto-slide
});
document.querySelector('.prev').addEventListener('click', () => {
    stopAutoSlide(); // Stop auto-slide on manual interaction
    prevSlide();
    startAutoSlide(); // Restart auto-slide
});

// Initialize carousel
updateCarousel();
startAutoSlide();

const joinedCountElement = document.getElementById("joined-count");

// Starting number
let currentCount = 1234;

// Function to update the count dynamically
function updateCount() {
    currentCount += Math.floor(Math.random() * 10) + 1; // Increment the count randomly
    joinedCountElement.textContent = currentCount; // Update the displayed number
}

// Update the count every 2 seconds
setInterval(updateCount, 2000);

// Open the donation form
function openDonateForm() {
    document.getElementById("donateForm").style.display = "flex";
}

// Close the donation form
function closeDonateForm() {
    document.getElementById("donateForm").style.display = "none";
}

// Handle the donation form submission (for demonstration purposes)
document.getElementById("donationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    alert("Thank you for your donation!");
    closeDonateForm(); // Close the form after submission
});

// Open the "Join Us" form
function openJoinUsForm() {
    document.getElementById("joinUsForm").style.display = "flex";
}

// Close the "Join Us" form
function closeJoinUsForm() {
    document.getElementById("joinUsForm").style.display = "none";
}

// Handle the "Join Us" form submission (for demonstration purposes)
document.getElementById("joinForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    alert("Thank you for joining the NGFAM community!");
    closeJoinUsForm(); // Close the form after submission
});
