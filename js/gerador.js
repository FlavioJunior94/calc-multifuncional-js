function gerarSenha() {
    const tamSenha = parseInt(document.querySelector('input#tamSenha').value);
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    const resultado = document.querySelector('div#resultado');
    let senha = '';
    
    if (isNaN(tamSenha) || tamSenha <= 0){
        window.alert('Escolha um valor acima de 0 !')
    }else{
    for (let i = 0; i < tamSenha; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[randomIndex];
        
    }

    }
    resultado.innerHTML = `
    <p>${senha}</p>
    `
    /*console.log(senha.length)*/

}

