footer.innerHTML = `<div class="footer-container" id="footer-content">
<div class="inner-footer-container">
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
