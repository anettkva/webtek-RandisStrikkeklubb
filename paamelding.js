function meldPå(id) {
    var element = document.getElementById(id);
    var value = parseInt(element.innerHTML);
    value++;
    element.innerHTML = value;