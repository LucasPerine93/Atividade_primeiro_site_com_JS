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

        const spanTexto = document.createElement('span');
        spanTexto.textContent = texto;
        li.appendChild(spanTexto);

        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.classList.add('btn-editar');
        btnEditar.addEventListener('click', function() {
            const novoTexto = prompt('Edite sua tarefa:', spanTexto.textContent);
            if (novoTexto !== null && novoTexto.trim() !== '') {
                const index = tarefas.indexOf(spanTexto.textContent);
                tarefas[index] = novoTexto;
                spanTexto.textContent = novoTexto;
            }
        });

        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.classList.add('btn-remover');
        btnRemover.addEventListener('click', function() {
            const index = tarefas.indexOf(texto);
            tarefas.splice(index, 1);
            li.remove();
        });

        li.appendChild(btnEditar);
        li.appendChild(btnRemover);
        tasks.appendChild(li);

        InputInserir.value = '';
    }
}

BotaoAdd.addEventListener('click', adicionarTarefa);