// VALIDAÇÃO DE CPF DIRETO NO JAVASCRIPT
 
// Adicionando escutador ao formulário
document.getElementById('cpfForm').addEventListener('submit', function(event){
    event.preventDefault(); // Impede o envio do formulário para que a validação possa ser feita
 
    console.log('teste'); // Imprime "teste" no console, usado para depuração
 
    const cpf = document.getElementById('cpf').value; // Obtém o valor do campo de CPF
    const msg = document.getElementById('message'); // Obtém o elemento onde a mensagem de validação será exibida
 
    // Verifica se o CPF é válido usando a função validarCPF
    if (validarCPF(cpf)) {
        msg.textContent = 'O CPF é válido!'; // Define a mensagem de sucesso
        msg.style.color = 'green'; // Define a cor do texto como verde para indicar sucesso
    } else {
        msg.textContent = 'O CPF é inválido!'; // Define a mensagem de erro
        msg.style.color = 'red'; // Define a cor do texto como vermelho para indicar erro
    }
});
 
// Função para validar o CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos do CPF
 
    // Estrutura de decisão para verificar quantidade de dígitos e se todos os dígitos são iguais
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false; // Retorna falso se o CPF não tem 11 dígitos ou se todos os dígitos são iguais
    }
 
    let soma = 0;
    let resto;
 
    // Validando o 10º dígito do CPF - o primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i); // Calcula a soma para o primeiro dígito verificador
    }
 
    resto = (soma * 10) % 11; // Calcula o resto da divisão para o primeiro dígito verificador
 
    if (resto === 10 || resto === 11) {
        resto = 0; // Ajusta o resto se for 10 ou 11
    }
 
    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false; // Retorna falso se o primeiro dígito verificador não corresponder
    }
 
    // Validando o 11º dígito do CPF - o segundo dígito verificador
    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i); // Calcula a soma para o segundo dígito verificador
    }
 
    resto = (soma * 10) % 11; // Calcula o resto da divisão para o segundo dígito verificador
 
    if (resto === 10 || resto === 11) {
        resto = 0; // Ajusta o resto se for 10 ou 11
    }
 
    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false; // Retorna falso se o segundo dígito verificador não corresponder
    }
 
    return true; // Retorna verdadeiro se ambos os dígitos verificadores forem válidos
}