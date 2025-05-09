document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    mostrarTreino();
  });

  // EXIBE APENAS UMA PÁGINA
  function esconderPaginas() {
    document.querySelectorAll('.page').forEach(p => {
      p.classList.remove('active');
      p.style.display = 'none';
    });
  }

  function mostrarTreino() {
    esconderPaginas();
    document.getElementById('treino-page').classList.add('active');
    document.getElementById('treino-page').style.display = 'block';

    // reset visibilidade
    document.querySelector('.treino-dia').style.display = 'flex';
    document.getElementById('descricao-exercicios').style.display = 'none';
    document.getElementById('ficha').style.display = 'none';
  }

  function mostrarFicha() {
    document.getElementById('ficha').style.display = 'flex';
    document.querySelector('.treino-dia').style.display = 'none';
    document.getElementById('descricao-exercicios').style.display = 'none';
  }

  function voltarParaLogin() {
    esconderPaginas();
    document.getElementById('login-page').classList.add('active');
    document.getElementById('login-page').style.display = 'block';
  }

  function mostrarDescricaoExercicios() {
    document.querySelector('.treino-dia').style.display = 'none';
    document.getElementById('descricao-exercicios').style.display = 'block';
  }

  window.addEventListener('load', () => {
    esconderPaginas();
    document.getElementById('login-page').classList.add('active');
    document.getElementById('login-page').style.display = 'block';
  });

// Lida com o envio do formulário de login
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
 
  // Mostra a página de treino do dia
  document.getElementById('login-page').classList.remove('active');
  document.getElementById('treino-page').classList.add('active');
 
  // Garante que a descrição de exercícios fique escondida ao logar
  document.querySelector('.treino-dia').style.display = 'flex';
  const desc = document.getElementById('descricao-exercicios');
  if (desc) desc.style.display = 'none';
});
 
// Função para sair e voltar para o login
function voltarParaLogin() {
  esconderPaginas(); // Esconde todas as páginas com classe 'page'
  
  // Mostra somente o login
  const loginPage = document.getElementById('login-page');
  loginPage.classList.add('active');
  loginPage.style.display = 'block';

  // Esconde qualquer conteúdo interno do treino-page que possa ter ficado visível
  const treinoDia = document.querySelector('.treino-dia');
  const descricao = document.getElementById('descricao-exercicios');
  const ficha = document.getElementById('ficha');

  if (treinoDia) treinoDia.style.display = 'none';
  if (descricao) descricao.style.display = 'none';
  if (ficha) ficha.style.display = 'none';
}

 
// Clica no botão play para ver a descrição dos exercícios
const playButton = document.querySelector('.play-button');
if (playButton) {
  playButton.addEventListener('click', function () {
    document.querySelector('.treino-dia').style.display = 'none';
    document.getElementById('descricao-exercicios').style.display = 'block';
  });
}

function mostrarQuemSomos() {
    esconderTodasAsPaginas();
    document.getElementById('quem-somos').style.display = 'block';
  }
  
  function esconderTodasAsPaginas() {
    document.querySelectorAll('.page').forEach(pagina => {
      pagina.style.display = 'none';
    });
  }
  
  // Enviar formulário de contato (simulado)
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contato");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Mensagem enviada com sucesso!");
        this.reset();
      });
    }
  });

  function mostrarPagina(pagina) {
    const paginas = document.querySelectorAll('.page');
    paginas.forEach(p => p.style.display = 'none');
  
    const paginaAtiva = document.getElementById(`${pagina}-page`);
    if (paginaAtiva) {
      paginaAtiva.style.display = 'block';
    } else {
      console.error(`Página "${pagina}-page" não encontrada`);
    }
  }
  
