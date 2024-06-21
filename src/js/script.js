const formulario = document.querySelector(".formulario");
const inputs = document.querySelectorAll(".input, .textarea");
const campoObrigatório = document.querySelectorAll(".campo-obrigatorio");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((input) => {
    const paragrafo = input.nextElementSibling;
    if (input.value === "") {
      input.style.border = "2px solid red";
      paragrafo.style.color = "red"
      paragrafo.classList.remove("esconder");
    } else {
      input.style.border = "2px solid green";
      paragrafo.classList.add("esconder");
    }
  });
});
