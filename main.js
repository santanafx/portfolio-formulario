import { cpfValido } from "./js/cpf-valido.js";
import { dataValida } from "./js/data-valida.js";
import { nomeValida } from "./js/nome-valido.js";
import { emailValida } from "./js/email-valido.js";

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
  }
  if (campos.name == "data" && campos.value != "") {
    const formularioCampo = campos.parentNode;
    const msgErro = formularioCampo.querySelector(".mensagem__erro");
    msgErro.innerHTML = dataValida(campos);
  }
  if (campos.name == "nome" && campos.value != "") {
    const formularioCampo = campos.parentNode;
    const msgErro = formularioCampo.querySelector(".mensagem__erro");
    msgErro.innerHTML = nomeValida(campos);
  }
  if (campos.name == "email" && campos.value != "") {
    const formularioCampo = campos.parentNode;
    const msgErro = formularioCampo.querySelector(".mensagem__erro");
    msgErro.innerHTML = emailValida(campos);
  }
}
