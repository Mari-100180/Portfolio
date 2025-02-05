let slideIndex = 0;
showSlides(slideIndex);

// Function to change the slide
function moveSlide(n) {
    showSlides(slideIndex += n);
}

// Function to show slides
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) slideIndex = 0;  // Loop back to first slide
    if (n < 0) slideIndex = slides.length - 1;  // Loop back to last slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }
    slides[slideIndex].style.display = "block";  // Show current slide
}
