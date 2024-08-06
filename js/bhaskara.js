function bhaskara(){
    
    const valorA = Number(window.document.querySelector('input#numA').value)
    const valorB = Number(window.document.querySelector('input#numB').value)
    const valorC = Number(window.document.querySelector('input#numC').value)

    const resultado = window.document.querySelector('div#resultado')

    const discriminante = (valorB ** 2) - (4 * valorA * valorC);

    if (discriminante < 0) {
        resultado.innerHTML = `<strong>Resultado:</strong> Não há raízes reais`;
        return;
    }

    const raizDiscriminante = Math.sqrt(discriminante);
    const denominador = 2 * valorA;

    const x1 = (-valorB + raizDiscriminante) / denominador;
    const x2 = (-valorB - raizDiscriminante) / denominador;

    resultado.innerHTML = `
    <strong>Resultado</strong><br>
    x1 = ${x1}<br>
    x2 = ${x2}
    `;
    
}