export function dataValida(campos) {
  const dataAniversario = new Date(campos.value);
  const dataAtual = new Date();
  // console.log(dataAniversario.getDate() + 1);
  // console.log(dataAniversario.getMonth() + 1);
  // console.log(dataAniversario.getFullYear());

  // console.log(dataAtual.getDate());
  // console.log(dataAtual.getMonth() + 1);
  // console.log(dataAtual.getFullYear());

  // console.log(dataAtual);
  // console.log(dataAniversario);

  let idade = dataAtual.getFullYear() - dataAniversario.getFullYear();
  let mes = dataAtual.getMonth() - dataAniversario.getMonth();
  // console.log(idade);
  // console.log(mes);
  if (mes < 0 || (mes === 0 && dataAtual.getDate() < dataAniversario.getDate())) {
    campos.setCustomValidity("O usuario não é maior de idade");
  }
}
