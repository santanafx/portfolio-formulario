import { cpfValido } from "./js/cpf-valido.js";
import { dataValida } from "./js/data-valida.js";

const camposRequired = document.querySelectorAll("[required]");

camposRequired.forEach((campos) => {
  campos.addEventListener("blur", () => {
    verificaCampo(campos);
  });
  campos.addEventListener("invalid", (evento) => {
    evento.preventDefault();
  });
});

function verificaCampo(campos) {
  if (campos.name == "cpf" && campos.value.length >= 11) {
    const formularioCampo = campos.parentNode;
    const msgErro = formularioCampo.querySelector(".mensagem__erro");
    msgErro.innerHTML = cpfValido(campos);
    // console.log(formularioCampo);
  }
  if (campos.name == "data" && campos.value != "") {
    dataValida(campos);
  }
}
