const numeroSenha = document.querySelector('.parametro-senha__texto');
const campoSenha = document.querySelector('#campo-senha');
const botoes = document.querySelectorAll('.parametro-senha__botao');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');
const valorEntropia = document.querySelector('.entropia');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';
let tamanhoSenha = 12;

function classificaSenha(tamanhoAlfabeto) {
    forcaSenha.classList.remove('fraca', 'media', 'forte');

    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);

    if (entropia > 57) {
        forcaSenha.classList.add('forte');
    } else if (entropia > 35 && entropia < 57) {
        forcaSenha.classList.add('media');
    } else if (entropia <= 35) {
        forcaSenha.classList.add('fraca');
    }

    let tempoQuebra = Math.floor((2 ** entropia) / (100e6 * 60 * 60 * 24));
    valorEntropia.textContent = `Um computador pode levar até ${tempoQuebra} dias para descobrir essa senha.`;
}

function geraSenha() {
    let alfabeto = '';

    if (checkbox[0].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }

    if (checkbox[1].checked) {
        alfabeto = alfabeto + letrasMinusculas;
    }

    if (checkbox[2].checked) {
        alfabeto = alfabeto + numeros;
    }

    if (checkbox[3].checked) {
        alfabeto = alfabeto + simbolos;
    }

    let senha = '';

    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }

    campoSenha.value = senha;
    classificaSenha(alfabeto.length);
}

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = geraSenha;
}

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

geraSenha();
