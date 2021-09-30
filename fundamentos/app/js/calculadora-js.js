function anadir(numero, resultado) {
  if (resultado != "0" || isNaN(numero)) {
    return resultado + numero;
  } else {
    return numero;
  }
}

function anadirOp(operacion, resultado) {
  if (resultado != "0" || isNaN(operacion)) {
    return resultado + operacion;
  }
}

function resetActual() {
  return "0";
}
function resetOp() {
    return "";
  }

function calcular(operacion, actual) {
  let resultado = eval(operacion + actual);
  operacion = operacion.replace("=", "");
  return resultado;
}

function switchOperacion(operacion, actual) {
  let key = operacion.substring(operacion.length - 1);
  let resultado=operacion.substring(0,operacion.length-1);
  switch (key) {
    case "+":
    return operacion+(actual-resultado)+"=";
      break;

    case "-":
    return operacion+(resultado-actual)+"=";
      break;

    case "*":
    return operacion+(actual/resultado)+"=";
      break;

    case "/":
    return operacion+(resultado/actual)+"=";
      break;
  }
}

function cambiarSigno(actual) {
    return parseInt(actual)*(-1);
}