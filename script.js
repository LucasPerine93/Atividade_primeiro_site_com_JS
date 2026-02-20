const tarefas = [];

const InputBotao = document.querySelector('#inserir');
const BotaoAdd = document.querySelector('#btn-adicionar');
const mensagens = document.querySelector('#mensagens');
const mensagemErro = document.querySelector('#mensagem-erro');
const mensagemSucesso = document.querySelector('#mensagem-sucesso');
const tasks = document.querySelector('#lista-de-tarefas');

function validarTexto() {
    const texto = inputIserir.value.trim();

    if(texto === '' ) {
        mensagemErro.style.display = 'block';
        mensagemSucesso.style.display = 'none';
        return false;

    } else {
        mensagemErro.style.display = 'none';
        mensagemSucesso.style.display = 'block';
        return true;
    }
}