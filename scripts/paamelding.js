const button1 = document.getElementById("knapp1");
button1.addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById('pluss1').style.display = 'none';
    let admissionMessage = document.getElementById('admissionMessages');
    admissionMessage.style.display = 'block';
    let antall = parseInt(document.getElementById("tallSomSkalØkes1").textContent.trim());
    nyAntall = antall +1
    document.getElementById("tallSomSkalØkes1").textContent = nyAntall;
});

const button2 = document.getElementById("knapp2");
button2.addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById('pluss2').style.display = 'none';
    let admissionMessage = document.getElementById('admissionMessage2');
    admissionMessage.style.display = 'block';
    let antall = parseInt(document.getElementById("tallSomSkalØkes2").textContent.trim());
    nyAntall = antall +1
    document.getElementById("tallSomSkalØkes2").textContent = nyAntall;
});

const button3 = document.getElementById("knapp3");
button3.addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById('pluss3').style.display = 'none';
    let admissionMessage = document.getElementById('admissionMessage3');
    admissionMessage.style.display = 'block';
    let antall = parseInt(document.getElementById("tallSomSkalØkes3").textContent.trim());
    nyAntall = antall +1
    document.getElementById("tallSomSkalØkes3").textContent = nyAntall;
});

const buttonKlubb = document.getElementById("buttonKlubb");
buttonKlubb.addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById('klubb').style.display = 'none';
    let admissionMessageKlubb = document.getElementById('admissionMessageKlubb');
    admissionMessageKlubb.style.display = 'block';
});