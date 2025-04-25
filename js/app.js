document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Troca visibilidade das páginas
    document.getElementById('login-page').classList.remove('active');
    document.getElementById('treino-page').classList.add('active');
  });
function voltarParaLogin() {
    document.getElementById('treino-page').classList.remove('active');
    document.getElementById('login-page').classList.add('active');
  }
  
  function mostrarDescricaoExercicios() {
    // Esconde a área do treino e exibe a descrição dos exercícios
    document.querySelector('.treino-dia').style.display = 'none';
    document.querySelector('.descricao-exercicios').classList.add('active');
  }
  
  function voltarParaTreino() {
    // Esconde a descrição dos exercícios e exibe a área do treino novamente
    document.querySelector('.descricao-exercicios').classList.remove('active');
    document.querySelector('.treino-dia').style.display = 'flex';
  }
  