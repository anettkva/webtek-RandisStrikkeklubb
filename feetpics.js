let footer = document.getElementById("footerContent")
footer.innerHTML = 
`<div class = "titi" id = "footer1">
<h5>Kontakt Randi:</h5>
<p>&nbsp Mobil: 123 45 678 <br>&nbsp Email: randi@gmail.com</p><br>
<h5>Kontakt strikkeklubben:</h5>
<p>&nbsp Mobil: 123 45 678 <br>&nbsp Email: randi@gmail.com</p>
</div>

<div class = "titi" id = "footer2" >
<p><a href="hjemmesiden.html"><img src="img/Logo.png" alt="Hjem" id ="footerLogo"></a></p>
<p>2023 Randis strikkeklubb AS</p>
<p><a href="https://www.facebook.com/"><img src="img1/facebook.svg" alt="Facebook" class ="sosialMedier" ></a> <a href="https://www.instagram.com/"><img src="img1/instagram.svg" alt="Instagram" class ="sosialMedier"></a></p>
</div>

<div class = "titi" id = "footer3">
<p>Språk/region: Norway</p>
    <p>Meld deg på vårt nyhetsbrev</p>
    <form>
        <input type="email" name="email" placeholder="Skriv inn din e-post" required/>
        <button type="submit" id="email-button">OK</button>
    </form>
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
