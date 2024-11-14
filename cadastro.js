function carregarSelect() {
    // URL da API (substitua com a URL real da API)
    const apiURL = 'http://localhost:3000/api/unit/all'; // Altere para a URL da sua API
    
    // Fazendo a requisição para a API
    fetch(apiURL)
        .then(response => {
            // Verifica se a resposta foi bem-sucedida
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            return response.json(); // converte a resposta em JSON
        })
        .then(data => {
            // Pega o select no DOM
            const select = document.getElementById('unidade');
            
            // Limpa a opção de "Carregando..."
            select.innerHTML = '';
            
            // Itera sobre os dados da API e cria novas opções
            data.unit.createUnit.forEach(item => {

                // Cria um elemento option
                const option = document.createElement('option');
                option.value = item.id_unidade;   // Altere para o campo que você deseja como valor
                option.textContent = item.nome;  // Altere para o campo que você deseja exibir
                
                // Adiciona a opção no select
                select.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os dados da API:', error);
            // Se houver um erro, coloca uma opção padrão de erro
            const select = document.getElementById('unidade');
            select.innerHTML = '<option>Erro ao carregar dados</option>';
        });
}

// Chama a função quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', carregarSelect);

function createUser(event) {

    // Previne o comportamento padrão do formulário
    // Obtém os valores dos campos do formulário
    const name = document.getElementById('nomeCompleto').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const unit = document.getElementById('unidade').value;
    const password = document.getElementById('senha').value;
    const confirmaSenha  = document.getElementById('confirmarSenha').value;

    if(password !== confirmaSenha ) {
        return alert("Senha não são iguais")
    }

    // Cria um objeto com os dados do formulário
    const userData = {
        nome: name,
        cpf: cpf,
        email: email,
        unidade: unit,
        senha: password
    };

    // Realiza a requisição POST para a API
    fetch('http://localhost:3000/api/create', {
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
        console.log('Usuário criado com sucesso:', data);
        alert('Usuário cadastrado com sucesso!');
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao cadastrar o usuário.');
    });
}

