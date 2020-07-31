const aba0 = document.getElementById('tab0');
aba0.addEventListener('click', () => {
    DesacionaBotoes();
    aba0.classList.add('active');
    
    ExibirSecao(`${aba0.id}-conteudo`);
});

const aba1 = document.getElementById('tab1');
aba1.addEventListener('click', () => {
    DesacionaBotoes();
    aba1.classList.add('active');
    ExibirSecao(`${aba1.id}-conteudo`);
});

const aba2 = document.getElementById('tab2');
aba2.addEventListener('click', () => {
    DesacionaBotoes();
    aba2.classList.add('active');
    ExibirSecao(`${aba2.id}-conteudo`);
});


function ExibirSecao(conteudo) {
    EsconderSecoes();
    let secao = document.getElementById(conteudo);
    secao.classList.remove('desabilitar');
    secao.classList.add('habilitar');
}

function EsconderSecoes(){
    let main = document.querySelector('main');
    let secoes = main.getElementsByTagName('section')
    for (const secao of secoes) {
        secao.classList.remove('habilitar');
        secao.classList.add('desabilitar');
    }
}

function DesacionaBotoes() {
    const abasIndice = document.getElementById('tabs');
    const abas = abasIndice.getElementsByTagName('li');
    for (let aba of abas) {
        aba.classList.remove('active');
    }
}
