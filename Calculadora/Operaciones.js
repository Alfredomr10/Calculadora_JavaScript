function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacionSeleccionada = document.getElementById('operacion').value;
    let resultado = 0;
    switch (operacionSeleccionada) {
      case 'sumar':
        resultado = num1 + num2;
        break;
      case 'restar':
        resultado = num1 - num2;
        break;
      case 'multiplicar':
        resultado = num1 * num2;
        break;
      case 'dividir':
        resultado = num1 / num2;
        break;
      default:
        console.error('Operación no válida');
    }
    document.getElementById('resultado').value = resultado;
  }