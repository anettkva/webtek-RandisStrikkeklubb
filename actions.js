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
