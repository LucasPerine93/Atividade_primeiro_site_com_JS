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
        mensagemErro.classList.add('mostrar-mensagem');
        mensagemSucesso.classList.remove('mostrar-mensagem');
        return false;

    } else {
        mensagemErro.classList.remove('mostrar-mensagem');
        mensagemSucesso.classList.add('mostrar-mensagem');
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
        
        let textoAntigo = texto;

        btnEditar.addEventListener('click', function() {
            if (btnEditar.textContent === 'Editar') {

                const inputEdicao = document.createElement('input');
                inputEdicao.type = 'text';
                inputEdicao.value = spanTexto.textContent;
                inputEdicao.classList.add('input-edicao');

                li.replaceChild(inputEdicao, spanTexto);
                
                btnEditar.textContent = 'Salvar';
                btnEditar.classList.add('btn-salvar'); 
                inputEdicao.focus();
                
            } else {

                const inputEdicao = li.querySelector('.input-edicao');
                const novoTexto = inputEdicao.value.trim();
                
                if (novoTexto !== '') {

                    const index = tarefas.indexOf(textoAntigo);
                    if (index !== -1) tarefas[index] = novoTexto;
                    
                    spanTexto.textContent = novoTexto;
                    textoAntigo = novoTexto;
                }
                

                li.replaceChild(spanTexto, inputEdicao);
                
                btnEditar.textContent = 'Editar';
                btnEditar.classList.remove('btn-salvar'); 
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