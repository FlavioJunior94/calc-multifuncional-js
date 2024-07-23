const links ={
    operacoes:"html/operacoes.html",
    menu:"../index.html",
    base:"html/base.html",
    link:"html/operacoes.html",
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

/*for (let key in links){
    console.log(links[key]);
}*/