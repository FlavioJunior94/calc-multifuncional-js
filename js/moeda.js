
function moeda(){
    const moedaBase = document.getElementById("moeda_bases").value;
    const numero = document.getElementById("numero").value;
    const resultado = document.getElementById("resultado");

    const urlApi = `https://open.er-api.com/v6/latest/${moedaBase}`;
    const moedas = ['BRL','USD','EUR','GBP']; 
    const nome_moedas = {
        'BRL': 'Real Brasileiro: R$',
        'USD': 'Dólar Americano: US$',
        'EUR': 'Euro: €',
        'GBP': 'Libra Esterlina: £'
    };

    fetch(urlApi)
        .then(response=>response.json())
        .then(data => {
            if (data.result ==='success'){
                let resultHtml = '';
                moedas.forEach(currency =>{
                    const exchangeRate = data.rates[currency];
                    const convertedValue = (exchangeRate * numero).toFixed(2)
                    resultHtml += `
                             (${currency}) ${nome_moedas[currency]} ${convertedValue} <br>
                        `;
                });
                resultado.innerHTML = resultHtml;
            }else{
                console.error('Erro ao obter a cotação de moeda:', data['error-type']);
            }
        })
        .catch(error => {
            console.error('Erro ao obter a cotação de moeda:', error);
        });
}