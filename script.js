function verificarCodigo() {
    const codigoIngresado = document.getElementById('codigo').value;
    const codigoCorrecto = 'TODO'; // Cambia este valor por el código correcto que desees

    const resultado = document.getElementById('resultado');
    
    if (codigoIngresado === codigoCorrecto) {
        resultado.textContent = 'Exacto, mi amor, haces que mi vida sea totalmente mejor';
        resultado.style.color = 'green';
    } else {
        resultado.textContent = 'Te apesta la rayita amor';
        resultado.style.color = 'red';
    }
}
