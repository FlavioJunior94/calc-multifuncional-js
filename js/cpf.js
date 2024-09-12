class ValidaCpf{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo',{
            writable:false,
            enumerable:true,
            configurable:false,
            value:cpfEnviado.replace(/\D+/g,'')
        })
    }

    éSequência(){
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0,-2);
        const digito1 = ValidaCpf.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCpf.geraDigito(cpfSemDigitos+digito1);
        this.novoCpf = cpfSemDigitos + digito1 + digito2;
    }

    static geraDigito(cpfSemDigitos){
        let total=0;
        let reverso=cpfSemDigitos.length+1;

        for(let stringNumerica of cpfSemDigitos){
            total+= reverso * Number(stringNumerica);
            reverso --;
        }

        const digito= 11 - (total % 11);
        return digito <=9 ? String(digito) : '0';
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length!==11) return false;
        if(this.éSequência()) return false;
        this.geraNovoCpf();
        

        return this.novoCpf === this.cpfLimpo;
    }
}



function valCpf(){
    const cpfRecebido = String(document.querySelector('input#icpf').value);
    const resultado = document.querySelector('div#resultado');

    let validaCpf = new ValidaCpf(cpfRecebido);
    
    if(validaCpf.valida()){
        resultado.innerHTML=`<p class="cpf valido">CPF VALIDO</p>`;
        
    } else{
        resultado.innerHTML=`<p class="cpf invalido">CPF INVALIDO</p>`;
        
    }
}


