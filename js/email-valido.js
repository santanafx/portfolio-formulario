export function emailValida(campos) {
  if (campos.value.includes("@")) {
    return "Email válido";
  } else {
    return "Email inválido";
  }
}
