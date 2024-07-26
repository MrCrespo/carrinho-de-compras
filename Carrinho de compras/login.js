document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
  
    // Simular login (substitua por lógica real de autenticação)
    if (email === 'usuario@example.com' && senha === 'senha123') {
      alert('Login bem-sucedido!');
      window.location.href = 'catalogo.html';
    } else {
      alert('Email ou senha inválidos.');
    }
  });
  