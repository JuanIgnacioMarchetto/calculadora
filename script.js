let resultadoActual = '';

function agregarNumero(numero) {
  resultadoActual += numero;
  document.getElementById('resultado').value = resultadoActual;
}

function agregarOperador(operador) {
  resultadoActual += operador;
  document.getElementById('resultado').value = resultadoActual;
}

function calcular() {
  try {
    const resultado = eval(resultadoActual);
    document.getElementById('resultado').value = resultado;
    resultadoActual = resultado.toString();
  } catch (error) {
    document.getElementById('resultado').value = 'Error';
    resultadoActual = '';
  }
}

function borrarResultado() {
  resultadoActual = '';
  document.getElementById('resultado').value = '';
}
