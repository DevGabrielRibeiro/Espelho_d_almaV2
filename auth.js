async function login() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const response = await fetch('http://localhost:3000/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, senha })
    });
  
    if (response.ok) {
      const data = await response.json();
      const token = data.token; // Supondo que o token seja retornado em data.token
      localStorage.setItem('token', token);
      window.location.href = "index.html";

      console.log('Token armazenado:', token);
    } else {
      const mensagem = document.getElementById('text-login');
      mensagem.textContent = 'Email ou senha inválidos!';
      mensagem.style.color = 'red'
      console.error('Falha no login');
    }
  }
  