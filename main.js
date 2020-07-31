//#region Eventos de Tela
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

function ExibirManual() {
	var texto = `Simplex - Passo a Passo

1. Informe o número de variáveis (mínimo 1)
2. Informe o número de restrições (mínimo 1)
obs.: NÃO contar com a restrição Xi >= 0

3. Clique no botão "OK"
- Vai aparecer na tela o local para informar os valores dos coeficientes.

4. Informe os valores dos coeficientes das variáveis na função objetivo
5. Informe os valores dos coeficientes e da constante nas restrições
6. Clique no botão "Resolver"
- Vai aparecer na tela o passo a passo da resolução informando a operação realizada antes da tabela.
- No final é exibido os valores das variáveis e o valor resultante da função objetivo.
7. Clique no botão "Novo" para resolver outro problema.

Observações: O sistema só resolve problemas de maximização,
com restrições de sinal "<=" e com constantes maiores que zero.`;
	alert(texto);
}

function mouseIn(id) {
	document.getElementById("btnImg").src = "./src/imagens/info_azul.png"
}

function mouseOut(id) {
	document.getElementById("btnImg").src = "./src/imagens/info.png"
}

function atualizar() {
	document.location.reload(true);
}
//#endregion