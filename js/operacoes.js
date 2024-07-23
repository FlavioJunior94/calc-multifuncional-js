function somar(){
    var sn1 = window.document.querySelector('input#num1')
    var sn2 = window.document.querySelector('input#num2')
    var resul = window.document.querySelector('div#resultado')
    var n1 = Number(sn1.value)
    var n2 = Number(sn2.value)
    soma= n1+n2

    resultado.innerHTML = 'Resultado: '+soma
}
function sub(){
    var sn1 = window.document.querySelector('input#num1')
    var sn2 = window.document.querySelector('input#num2')
    var resul = window.document.querySelector('div#resultado')
    var n1 = Number(sn1.value)
    var n2 = Number(sn2.value)
    soma= n1-n2

    resultado.innerHTML = 'Resultado: '+soma
}
function div(){
    var sn1 = window.document.querySelector('input#num1')
    var sn2 = window.document.querySelector('input#num2')
    var resul = window.document.querySelector('div#resultado')
    var n1 = Number(sn1.value)
    var n2 = Number(sn2.value)
    soma= n1/n2

    resultado.innerHTML = 'Resultado: '+soma
}
function mult(){
    var sn1 = window.document.querySelector('input#num1')
    var sn2 = window.document.querySelector('input#num2')
    var resul = window.document.querySelector('div#resultado')
    var n1 = Number(sn1.value)
    var n2 = Number(sn2.value)
    soma= n1*n2

    resultado.innerHTML = 'Resultado: '+soma
}