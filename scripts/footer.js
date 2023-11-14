let footer = document.getElementById("footerContent")
footer.innerHTML = 
`<div class = "titi" id = "footer1">
<h5>Kontakt Randi:</h5>
<p>&nbsp Mobil: 123 45 678 <br>&nbsp Email: randi@gmail.com</p><br>
<h5>Kontakt strikkeklubben:</h5>
<p>&nbsp Mobil: 123 45 678 <br>&nbsp Email: randi@gmail.com</p>
</div>

<div class = "titi" id = "footer2" >
<p><a href="hjemmesiden.html"><img src="img/Bilde1.png" alt="Hjem" id ="footerLogo"></a></p>
<p>2023 Randis strikkeklubb AS</p>
<p><a href="https://www.facebook.com/"><img src="img/facebook.svg" alt="Facebook" class ="sosialMedier" ></a> <a href="https://www.instagram.com/"><img src="img/instagram.svg" alt="Instagram" class ="sosialMedier"></a></p>
</div>

<div class = "titi" id = "footer3">
<p>Språk/region: Norway</p>
    <p>Meld deg på vårt nyhetsbrev</p>
    <form id="emailForm">
        <input type="email" name="email" placeholder="Skriv inn din e-post" required/>
        <button type="submit" id="email-button">Meld på</button>
    </form>
    <div id="admissionMessage">
        <p class="messageText">Du har blitt meldt på!</p>
    </div>
</div>`



const button = document.getElementById("email-button");
button.addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById('emailForm').style.display = 'none';
    let admissionMessage = document.getElementById('admissionMessage');
    admissionMessage.style.display = 'block';
});
