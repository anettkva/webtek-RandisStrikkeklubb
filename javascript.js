navbar.innerHTML = `<li><a href="tips_og_triks.html">Tips og triks</a></li>
<li><a href="arrangementer.html">Påmelding</a></li>
<li><a href="hjemmesiden.html"><img src="imgh/Bilde1.png" alt="Hjem" id = "logo"></a></li>
<li><a href="oppskrifter.html">Oppskrifter</a></li>
<li class="dropdown">
    <a href="inspirasjon.html">Inspirasjon</a>
    <div class="dropdown-content">
        <a href="blogg.html">Blogg</a>
        <a href="bildeside.html">Bildeside</a>
    </div>
</li>`

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