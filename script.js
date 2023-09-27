var slideIndex = 0;
var slides = document.getElementsByClassName("slide");

// Auto-run slideshow
function startSlideshow() {
  showSlide(slideIndex);
  slideIndex = (slideIndex + 1) % slides.length;
  setTimeout(startSlideshow, 10000); // Change the interval time to 3000 milliseconds (3 seconds)
}

// Show selected slide
function showSlide(index) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
}

// Start the slideshow
startSlideshow();