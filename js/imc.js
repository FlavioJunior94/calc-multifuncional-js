function imcResolv(){
    const resultado = document.querySelector('#resultado')
    const peso = Number(document.querySelector('#peso').value)
    const altura = Number(document.querySelector('#altura').value)
    isValid(peso,altura)
    if (altura>=3) return alert('Mentiroso! você não tem mais de 3 Metros 😤 !!!')
    let imc= peso / altura ** 2
    resultado.innerHTML=`IMC = ${imc.toFixed(2)}`
    nivelImc(imc)
}

function isValid(peso,altura){

    if (peso<1){
        alert('Peso Invalido!')
    }
    if (altura<1){
        alert('Altura Invalida!')
    }
}

function nivelImc(imc){
    const mensagem = document.querySelector('#mensagemImc')
    if (imc < 18.5){
        mensagem.innerHTML='Abaixo do peso !'
        mensagem.className = 'mensagemImc';
        mensagem.classList.add('nivel1');
    }
    else if(imc >= 18.5 && imc<24.9){
        mensagem.innerHTML='Peso Ideal !'
        mensagem.className = 'mensagemImc';
        mensagem.classList.add('nivel2');
    }
    else if(imc >= 24.9 && imc<29.9){
        mensagem.innerHTML='Sobrepeso !'
        mensagem.className = 'mensagemImc';
        mensagem.classList.add('nivel3');
    }
    else if(imc >= 29.9 && imc<34.9){
        mensagem.innerHTML='Obesidade grau 1 !'
        mensagem.className = 'mensagemImc';
        mensagem.classList.add('nivel4');
    }
    else if(imc >= 34.9 && imc< 39.9){
        mensagem.innerHTML='Obesidade grau 2 !'
        mensagem.className = 'mensagemImc';
        mensagem.classList.add('nivel5');
    }else{
        mensagem.innerHTML='Obesidade grau 3 !'
        mensagem.className = 'mensagemImc';
        mensagem.classList.add('nivel6');
    }

}