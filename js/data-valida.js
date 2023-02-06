export function dataValida(campos) {
  const dataAniversario = new Date(campos.value);
  const dataAtual = new Date();
  let idade = dataAtual.getFullYear() - dataAniversario.getFullYear();
  let mes = dataAtual.getMonth() - dataAniversario.getMonth();
  if (mes <= 0 && dataAtual.getDate() <= dataAniversario.getDate() && idade < 18) {
    return "O usuario não é maior de idade";
  } else {
    return "O usuario é maior de idade";
  }
}
