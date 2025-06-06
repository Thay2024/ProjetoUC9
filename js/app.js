document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  mostrarTreino();
});

function esconderPaginas() {
  // Esconde todas as páginas principais
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.style.display = 'none';
  });

  // Esconde seções internas da página treino
  const treinoDia = document.querySelector('.treino-dia');
  const ficha = document.getElementById('ficha');
  const descMmii = document.getElementById('descricao-exercicios');
  const descMmss = document.getElementById('descricao-exercicios-mmss');
  const indicadoresPage = document.getElementById('indicadores-page');
  const perfilPage = document.getElementById('perfil-page'); 

  if (treinoDia) treinoDia.style.display = 'none';
  if (ficha) ficha.style.display = 'none';
  if (descMmii) descMmii.style.display = 'none';
  if (descMmss) descMmss.style.display = 'none';
  if (indicadoresPage) indicadoresPage.style.display = 'none'; 
  if (perfilPage) perfilPage.style.display = 'none'; 
}

function mostrarIndicadores() {
    esconderPaginas(); // Esconde todas as outras páginas e sub-seções
    const indicadoresPage = document.getElementById('indicadores-page');
    if (indicadoresPage) {
        indicadoresPage.classList.add('active');
        indicadoresPage.style.display = 'flex'; // Use flex para o layout da página
    }
}

function mostrarPerfil() {
    esconderPaginas(); // Esconde todas as outras páginas e sub-seções
    const perfilPage = document.getElementById('perfil-page');
    if (perfilPage) {
        perfilPage.classList.add('active');
        perfilPage.style.display = 'flex'; // Use flex para o layout da página
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // ... seus outros event listeners existentes ...

    // Seleciona TODOS os elementos com a classe 'usuario-icone'
    const usuarioIcones = document.querySelectorAll('.usuario-icone');

    // Itera sobre cada um deles e adiciona o event listener
    usuarioIcones.forEach(icone => {
        icone.addEventListener('click', mostrarPerfil);
    });
});

function mostrarTreino() {
  esconderPaginas();
  document.getElementById('treino-page').classList.add('active');
  document.getElementById('treino-page').style.display = 'block';

  const treinoDia = document.querySelector('.treino-dia');
  if (treinoDia) treinoDia.style.display = 'flex';
}

function mostrarFicha() {
  esconderPaginas();
  document.getElementById('treino-page').classList.add('active');
  document.getElementById('treino-page').style.display = 'block';

  const ficha = document.getElementById('ficha');
  if (ficha) ficha.style.display = 'flex';
}

function mostrarDescricaoExercicios() {
  esconderPaginas();
  document.getElementById('treino-page').classList.add('active');
  document.getElementById('treino-page').style.display = 'block';

  const desc = document.getElementById('descricao-exercicios');
  if (desc) desc.style.display = 'block';
}

function mostrarDescricaoExerciciosMMSS() {
  esconderPaginas();
  document.getElementById('treino-page').classList.add('active');
  document.getElementById('treino-page').style.display = 'block';

  const desc = document.getElementById('descricao-exercicios-mmss');
  if (desc) desc.style.display = 'block';
}

function mostrarQuemSomos() {
  esconderPaginas();
  const quemSomos = document.getElementById('quem-somos');
  if (quemSomos) {
    quemSomos.classList.add('active');
    quemSomos.style.display = 'block';
  }
}

function mostrarAulas() {
  esconderPaginas();
  const aulasPage = document.getElementById('aulas-page');
  if (aulasPage) {
    aulasPage.classList.add('active');
    aulasPage.style.display = 'flex';
  }
}

function voltarParaLogin() {
  esconderPaginas();
  document.getElementById('login-page').classList.add('active');
  document.getElementById('login-page').style.display = 'block';
}

window.addEventListener('load', () => {
  esconderPaginas();
  document.getElementById('login-page').classList.add('active');
  document.getElementById('login-page').style.display = 'block';
});

// Botões de ação
const playButtonMain = document.querySelector('.treino-dia .play-button');
if (playButtonMain) {
  playButtonMain.addEventListener('click', function () {
    mostrarDescricaoExercicios();
  });
}

const playMmiiButton = document.getElementById('play-mmii');
if (playMmiiButton) {
  playMmiiButton.addEventListener('click', function () {
    mostrarDescricaoExercicios();
  });
}

const playMmssButton = document.getElementById('play-mmss');
if (playMmssButton) {
  playMmssButton.addEventListener('click', function () {
    mostrarDescricaoExerciciosMMSS();
  });
}

// Envio do formulário de contato
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
