//CÓDIGO DE VALIDAÇÃO DE EMAIL//---------------------------------------------------------------------------------------------------------//
 
function checarEmail() {
  // Verifica se o campo de e-mail está vazio, não contém o caractere '@', ou não contém o caractere '.'
  if (document.forms[0].email.value === "" || document.forms[0].email.value.indexOf('@') == -1 || document.forms[0].email.value.indexOf('.') == -1) {
      // Se alguma das condições acima for verdadeira, exibe um alerta para informar que o e-mail é inválido
      alert("Por favor, informe um e-mail válido");
      // Retorna falso para indicar que a validação falhou
      return false;
  } else {
      // Se o e-mail for válido, exibe um alerta confirmando que o e-mail foi informado com sucesso
      alert("E-mail informado com sucesso!");
  }
  // Exibe um alerta com a mensagem "E-mail informado" (parece ser redundante após o sucesso da validação)
  alert("E-mail informado");
  // Atualiza o conteúdo do elemento com o ID 'email' para exibir o valor do e-mail informado
  document.getElementById('email').innerHTML = document.forms[0].email.value;
}
