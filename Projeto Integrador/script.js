
document.addEventListener('DOMContentLoaded', function () {
    // Cadastro de Pessoa Física
    document.getElementById('cadastroPF').addEventListener('submit', function (event) {
        event.preventDefault();
        validarFormulario('cpfPF', 'cpfPFError', 'mensagemSucessoPF', 'Pessoa física cadastrada com sucesso!');
    });

    // Cadastro de Pessoa Jurídica
    document.getElementById('cadastroPJ').addEventListener('submit', function (event) {
        event.preventDefault();
        validarFormulario('cnpjPJ', 'cnpjPJError', 'mensagemSucessoPJ', 'Pessoa jurídica cadastrada com sucesso!');
    });

    // Cadastro de Professores
    document.getElementById('cadastroProfessor').addEventListener('submit', function (event) {
        event.preventDefault();
        validarFormulario('cpfProfessor', 'cpfProfessorError', 'mensagemSucessoProfessor', 'Professor cadastrado com sucesso!');
    });

    // Cadastro de Fornecedores
    document.getElementById('cadastroFornecedor').addEventListener('submit', function (event) {
        event.preventDefault();
        validarFormulario('cnpjFornecedor', 'cnpjFornecedorError', 'mensagemSucessoFornecedor', 'Fornecedor cadastrado com sucesso!');
    });

    // Cadastro de Alunos
    document.getElementById('cadastroAluno').addEventListener('submit', function (event) {
        event.preventDefault();
        validarFormulario('cpfAluno', 'cpfAlunoError', 'mensagemSucessoAluno', 'Aluno cadastrado com sucesso!');
    });
});

function validarFormulario(campoId, erroId, mensagemId, mensagemSucesso) {
    const campo = document.getElementById(campoId).value;
    const erro = document.getElementById(erroId);
    const mensagem = document.getElementById(mensagemId);

    erro.style.display = 'none';
    mensagem.style.display = 'none';

    if (campo.length !== 11 && campoId.includes('cpf')) {
        erro.textContent = 'CPF inválido. Deve conter 11 dígitos.';
        erro.style.display = 'block';
        return;
    }

    if (campo.length !== 14 && campoId.includes('cnpj')) {
        erro.textContent = 'CNPJ inválido. Deve conter 14 dígitos.';
        erro.style.display = 'block';
        return;
    }

    mensagem.textContent = mensagemSucesso;
    mensagem.style.display = 'block';
    limparFormulario(event.target.id);
}

function limparFormulario(formId) {
    document.getElementById(formId).reset();
}