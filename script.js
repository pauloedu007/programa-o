const botaoMenos = document.getElementById('botao-menos');
const botaoMais = document.getElementById('botao-mais');
const valorCaracteres = document.getElementById('valor-caracteres');

let quantidadeCaracteres = 12;

botaoMenos.addEventListener('click', () => {
    if (quantidadeCaracteres > 4) {
        quantidadeCaracteres--;
        valorCaracteres.textContent = quantidadeCaracteres;
    }
});

botaoMais.addEventListener('click', () => {
    if (quantidadeCaracteres < 20) {
        quantidadeCaracteres++;
        valorCaracteres.textContent = quantidadeCaracteres;
    }
});
