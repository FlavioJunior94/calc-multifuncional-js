const links ={
    operacoes:"html/operacoes.html",
    menu:"../index.html",
    base:"html/base.html",
    conversor:"html/conversor.html",
    bhaskara:"html/bhaskara.html",
    gerador:"html/gerar.html",
};

function operacoes(){
    window.location.href = links.operacoes;
}

function menu(){
    window.location.href = links.menu;
}

function base(){
    window.location.href = links.base;
}
function conversor(){
    window.location.href = links.conversor;
}

function bhaskara(){
    window.location.href = links.bhaskara;
}

function gerador(){
    window.location.href = links.gerador;
}

function muda_mascote(){
    const imagem =document.getElementById("mascote");
    if(imagem.src.includes("img/mascote2.png")){
        imagem.src="img/mascote1.png";
    }else{
        imagem.src="img/mascote2.png";
    }
}