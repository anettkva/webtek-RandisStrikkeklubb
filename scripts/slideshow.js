let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let markør = document.getElementsByClassName("markør");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < markør.length; i++) {
    markør[i].className = markør[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  markør[slideIndex-1].className += " active";
}