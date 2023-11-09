navbar.innerHTML = `<li><a href="tips_og_triks.html">Tips og triks</a></li>
<li><a href="paamelding.html">Påmelding</a></li>
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



const button = document.getElementById("email-button");
const modalContainer = document.getElementById("modal-container");
console.log(modalContainer);

button.addEventListener("click", () => {
  /* const response = await fetch("some-url") */
  modalContainer.removeChild(document.getElementById("footer-newsletter"))
  const section = document.createElement("section")
  section.classList.add("modal-container")
  /* const div = document.createElement("div")
  div.classList.add("inner-modal-container") */

  const p = document.createElement("p")
  p.textContent = "Takk for din påmelding!"
  p.classList.add("modal-text")
  modalContainer
    .appendChild(section)
    /* .appendChild(div) */
    .appendChild(p)
});