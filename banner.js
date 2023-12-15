let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots-container');
let autoSlideInterval;

// Create dots for each slide
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        goToSlide(index);
        resetAutoSlideTimer();
    });
    dotsContainer.appendChild(dot);
});

// Highlight the current dot
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Go to a specific slide
function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateSlider();
    updateDots();
}

// Update the slider position
function updateSlider() {
    const newTransformValue = -currentSlide * 100 + '%';
    document.querySelector('.slider').style.transform = `translateX(${newTransformValue})`;
}

// Open a page associated with the clicked slide
function openPage(pageUrl) {
    window.location.href = pageUrl;
}

// Highlight the first dot initially
updateDots();

// Automatic slide change
function autoSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
    updateDots();
}

// Reset the auto slide timer
function resetAutoSlideTimer() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 5000);
}

// Set the first dot as active initially
resetAutoSlideTimer();
