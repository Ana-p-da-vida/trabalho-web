// Matriz para armazenar os dados de múltiplos usuários
let dadosFormulario = [];

function enviarFormulario() {
    // Coleta os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const sugestao = document.getElementById('sugestao').value;

    // Salva os dados de um usuário em um vetor
    const dadosUsuario = [nome, email, cpf, dataNascimento, sugestao];

    // Adiciona os dados do usuário à matriz
    dadosFormulario.push(dadosUsuario);

    // Exibe uma mensagem de confirmação
    alert(`Obrigado, ${nome}! Seus dados foram roubados.`);

    // Exemplo: Exibir os dados de todos os usuários no console
    console.log(dadosFormulario);
}
