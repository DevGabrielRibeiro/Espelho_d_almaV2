function createProfissional(event) {

    // Previne o comportamento padrão do formulário
    // Obtém os valores dos campos do formulário
    const name = document.getElementById('nomeCompleto').value;
    const cpf = document.getElementById('cpf').value;
    const codigocrp = document.getElementById('crp').value;
    const atuacao = document.getElementById('tempo_atuante').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('senha').value;
    const confirmaSenha  = document.getElementById('confirmarSenha').value;
    const descricao = document.getElementById('descricao').value;

    if(password !== confirmaSenha ) {
        const mensagem = document.getElementById('text-cad');
        mensagem.textContent = 'As senhas não coincidem!';
        mensagem.style.color = 'red'
    }

    // Cria um objeto com os dados do formulário
    const userData = {
        nome: name,
        cpf: cpf,
        codigo_crp: codigocrp,
        email: email,
        senha: password,
        descricao: descricao,
        atuacao: atuacao
    };

    // Realiza a requisição POST para a API
    fetch('http://localhost:3000/api/prof', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'  // Envia os dados como JSON
        },
        body: JSON.stringify(userData)  // Converte o objeto em JSON
    })
    .then(response => {
        if (response.ok) {
            return response.json();  // Retorna a resposta em formato JSON
        } else {
            throw new Error('Erro ao criar usuário');
        }
    })
    .then(data => {
        const mensagem = document.getElementById('text-cad');
        mensagem.textContent = 'Usuário cadastrado com sucesso!';
        mensagem.style.color = 'green';
    
        // Definir um intervalo para redirecionar após 3 segundos
        setTimeout(() => {
            window.location.href = 'login.html';  // Redireciona para outra página
        }, 2000);  // Redireciona após 2000ms (2 segundos)
    
        return data;
    })
    .catch(error => {
        console.error("Erro:", error);
    });    
}