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