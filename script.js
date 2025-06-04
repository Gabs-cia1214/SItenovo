// Contador de cliques
let count = 0;
const btnContador = document.getElementById('btnContador');
const contador = document.getElementById('contador');

btnContador.addEventListener('click', () => {
  count++;
  contador.textContent = count;
});

// Troca de cor ao selecionar no dropdown
const colorSelect = document.getElementById('colorSelect');
const colorText = document.getElementById('colorText');

colorSelect.addEventListener('change', () => {
  const cor = colorSelect.value;
  if(cor) {
    colorText.textContent = `Você escolheu a cor: ${cor}`;
    colorText.style.color = cor;
    document.body.style.background = `linear-gradient(135deg, ${cor} 0%, #2575fc 100%)`;
  } else {
    colorText.textContent = 'Sua cor aparecerá aqui';
    colorText.style.color = 'white';
    document.body.style.background = 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)';
  }
});

// Saudar usuário pelo nome
const nomeInput = document.getElementById('nomeInput');
const btnSaudar = document.getElementById('btnSaudar');
const saudacao = document.getElementById('saudacao');

btnSaudar.addEventListener('click', () => {
  const nome = nomeInput.value.trim();
  if(nome) {
    saudacao.textContent = `Olá, ${nome}! Seja muito bem-vindo(a)! 👋`;
  } else {
    saudacao.textContent = 'Por favor, digite seu nome.';
  }
});