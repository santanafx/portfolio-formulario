export function cpfValido(campos) {
  let teste = 0;
  let cpf = campos.value.replace(/\.|-/g, "");

  let cpfRepetidos = ["00000000000", "11111111111", "22222222222", "33333333333", "44444444444", "55555555555", "66666666666", "77777777777", "88888888888", "99999999999"];

  for (let i = 0; i < cpfRepetidos.length; i++) {
    if (cpfRepetidos[i] === cpf) {
      teste = "cpf falso!";
      break;
    } else {
      teste = "cpf verdadeiro!";
    }
  }
  return teste;
}
