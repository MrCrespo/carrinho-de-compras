document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
  
    // Simular cadastro (substitua por lógica real de registro)
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html';
  });
  