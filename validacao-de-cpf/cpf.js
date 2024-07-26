// Adiciona um evento de escuta para o envio do formulário com id 'cpfForm'
document.getElementById('cpfForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão de enviar o formulário

    const cpf = document.getElementById('cpf').value; // Obtém o valor do campo CPF
    const msg = document.getElementById('message'); // Obtém o elemento de mensagem de validação

    // Chama a função validarCPF e verifica se o CPF é válido
    if (validarCPF(cpf)) {
        msg.textContent = "O CPF é válido"; // Define o texto da mensagem como válido
        msg.style.color = 'green'; // Define a cor do texto como verde
    } else {
        msg.textContent = "O CPF não é válido"; // Define o texto da mensagem como inválido
        msg.style.color = 'red'; // Define a cor do texto como vermelho
    }
});

// Função para validar CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos do CPF

    // Verifica se o CPF não possui 11 dígitos ou se todos os dígitos são iguais
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false; // Retorna falso se o CPF não estiver no formato correto
    }

    let soma = 0;
    let resto;

    // Validação do primeiro dígito verificador (10º dígito do CPF)
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i); // Calcula a soma ponderada
    }

    resto = (soma * 10) % 11; // Calcula o resto da divisão por 11

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false; // Retorna falso se o primeiro dígito verificador não for válido
    }

    // Validação do segundo dígito verificador (11º dígito do CPF)
    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i); // Calcula a soma ponderada
    }

    resto = (soma * 10) % 11; // Calcula o resto da divisão por 11

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false; // Retorna falso se o segundo dígito verificador não for válido
    }

    return true; // Retorna verdadeiro se o CPF for válido
}
