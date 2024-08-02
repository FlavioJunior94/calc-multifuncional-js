function converterNumero() {
    const base = document.getElementById("bases").value;
    const numero = document.getElementById("numero").value;
    const resultado = document.getElementById("resultado");
    
    let numeroBase;

    try {
        numeroBase = parseInt(numero, base);
        if (isNaN(numeroBase)) {
            throw new Error("Número inválido para a base selecionada.");
        }

        const binario = numeroBase.toString(2);
        const decimal = numeroBase.toString(10);
        const hexadecimal = numeroBase.toString(16).toUpperCase();

        resultado.innerHTML = `
            Binário: ${binario}<br>
            Decimal: ${decimal}<br>
            Hexadecimal: ${hexadecimal}
        `;
        resultado.innerHTML+="_______________"
    } catch (error) {
        resultado.textContent = error.message;
    }
}