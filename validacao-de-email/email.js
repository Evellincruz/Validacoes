// Função para checar o email
function checarEmail() {
  // Verifica se o valor do campo de email está vazio
  // Ou se não contém '@' ou '.' no valor do campo
  if (document.forms[0].email.value == "" || 
      document.forms[0].email.value.indexOf('@') == -1 ||
      document.forms[0].email.value.indexOf('.') == -1) {
      
      // Se alguma das condições acima for verdadeira,
      // exibe um alerta solicitando um email válido
      alert("Por favor, informe um e-mail válido");
      return false; // Retorna falso para impedir o envio do formulário
  } else {
      // Se o email for válido (contém '@' e '.'),
      // exibe um alerta confirmando o email informado
      alert("E-mail informado");
      
      // Define o valor do email no elemento com id 'email'
      document.getElementById('email').innerHTML = document.forms[0].email.value;
  }
}
