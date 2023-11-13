function toggleImageSize(element) {
    const imageContainers = document.querySelectorAll('.image-container');
    imageContainers.forEach((container) => {
        container.classList.remove('active');
    });

    element.classList.add('active');
}



function endreStørrelse(element) {
    const imageContainers = document.querySelectorAll('.image-container');
    
    imageContainers.forEach((container) => {
        container.classList.remove('active');
    });

    const img = element.querySelector('img');
    const tekstElement = element.querySelector('.bildebeskrivelse');

    if (element.classList.contains('enlarged')) {
        
        img.style.width = "270px";
        tekstElement.style.display = "none";
        element.classList.remove('enlarged');
    } else {
        
        img.style.width = "400px";
        tekstElement.style.display = "block";
        element.classList.add('enlarged');
    }

    element.classList.add('active');
}



