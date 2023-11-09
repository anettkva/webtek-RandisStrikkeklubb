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

footercontainer.innerHTML = `<div class="inner-footer-container">
<div class="footer-content">
  <div class="footer-contact">
    <div class="footer-contact1">
      <h4>Kontakt Randi</h4>
      <p>Mobil: 123 45 678</p>
      <p>Mail: randi@gmail.com</p>
    </div>
    <div class="footer-contact1">
      <h4>Kontakt Randisstrikkeklubb</h4>
      <p>Mobil: 456 98 362</p>
      <p>Mail: randistrikkeklubb@gmail.com</p>
    </div>
  </div>
  <div class="footer-logo"><img src="img/logo.png" alt="Logo" /></div>
  <div class="footer-language">
    <p class="language-text">Språk/region: Norway</p>
    <div id="modal-container">
      <div class="footer-newsletter" id="footer-newsletter">
        <p>Meld deg på vårt nyhetsbrev</p>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Skriv inn din e-post"
            required
          />
          <button type="submit" id="email-button">OK</button>
        </form>
      </div>
    </div>
  </div>
</div>
<div class="footer-divider"></div>
<div class="footer-bottom">
  <p>2023 Randistrikkeklubb AS</p>
  <div class="footer-social-icons">
    <img
      src="img/facebook.svg"
      alt="Icon 1"
      width="20px"
      height="20px"
    />
    <img
      src="img/instagram.svg"
      alt="Icon 2"
      width="20px"
      height="20px"
    />
  </div>
</div>
</div>`

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