export function nomeValida(campos) {
  if (campos.value.length < 2) {
    return "Nome inválido";
  } else {
    return "Nome válido";
  }
}
