const tarefas = [];

const InputInserir = document.querySelector('#inserir');
const BotaoAdd = document.querySelector('#btn-adicionar');
const mensagens = document.querySelector('#mensagens');
const mensagemErro = document.querySelector('#mensagem-erro');
const mensagemSucesso = document.querySelector('#mensagem-sucesso');
const tasks = document.querySelector('#lista-de-tarefas');

function validarTexto() {
    const texto = InputInserir.value.trim();

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

function adicionarTarefa () {
    if (validarTexto()) {
        const texto = InputInserir.value.trim();

        tarefas.push(texto);

        const li = document.createElement('li');
        li.textContent = texto;

        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.addEventListener('click', function() {
            const index = tarefas.indexOf(texto);
            tarefas.splice(index, 1);
            li.remove();
        });

        li.appendChild(btnRemover)
        tasks.appendChild(li);

        InputInserir.value = '';
    }
}

BotaoAdd.addEventListener('click', adicionarTarefa);