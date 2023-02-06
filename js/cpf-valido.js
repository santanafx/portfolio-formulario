export function cpfValido(campos) {
  let teste = "";
  const cpf = campos.value.replace(/\.|-/g, "");

  const cpfRepetidos = ["00000000000", "11111111111", "22222222222", "33333333333", "44444444444", "55555555555", "66666666666", "77777777777", "88888888888", "99999999999"];

  for (let i = 0; i < cpfRepetidos.length; i++) {
    if (cpfRepetidos[i] === cpf) {
      teste = "CPF falso!";
      break;
    } else {
      teste = "CPF verdadeiro!";
    }
  }
  return teste;
}
