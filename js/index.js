let div_do_modal=document.createElement('div')
let corpo_da_pagina=document.querySelector('body')
let titulo_do_elemento=document.createElement('h1')
let fechar= document.createElement('h3')
let pa_elemento=document.createElement('p')
let info1=document.createElement('p')
let info2=document.createElement('p')
let info3=document.createElement('p')
let info4=document.createElement('p')
fechar.innerHTML='X'

const modalDinamico=(titulo,pa,inf1,inf2,inf3,inf4,cor)=>{
        titulo_do_elemento.innerHTML=titulo
        pa_elemento.innerHTML='Configuração eletrônca: '+pa
        info1.innerHTML='Número atômico: '+inf1
        info2.innerHTML='Massa atômica: '+inf2
        info3.innerHTML='Ponto de fusão: '+inf3
        info4.innerHTML='Ponto de ebulição: '+inf4
        div_do_modal.classList.add('modal');
        div_do_modal.append(fechar)
        document.querySelector('table').classList.add('escondeFundo')
        div_do_modal.append(titulo_do_elemento)
        div_do_modal.append(pa_elemento)
        div_do_modal.append(info1)
        div_do_modal.append(info2)
        corpo_da_pagina.appendChild(div_do_modal)
}
/*Função para fechar o modal*/
fechar.addEventListener('click',function fechar_modal(){
        titulo_do_elemento.innerHTML=''
        pa_elemento.innerHTML=''
        info1.innerHTML=''
        info2.innerHTML=''
        info3.innerHTML=''
        info4.innerHTML=''
    document.querySelector('table').classList.remove('escondeFundo')
    corpo_da_pagina.removeChild(div_do_modal)
})
