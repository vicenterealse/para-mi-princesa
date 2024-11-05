function verificarCodigo() {
    const codigoIngresado = document.getElementById('codigo').value;
    const codigoCorrecto = '1234'; // Cambia este valor por el código correcto que desees

    const resultado = document.getElementById('resultado');
    
    if (codigoIngresado === codigoCorrecto) {
        resultado.textContent = 'Te amo';
        resultado.style.color = 'green';
    } else {
        resultado.textContent = 'No me amas';
        resultado.style.color = 'red';
    }
}