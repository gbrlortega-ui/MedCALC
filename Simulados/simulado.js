// Lê configurações vindas do index (salvas no localStorage)
const areaSelecionada = localStorage.getItem('simuladoArea') || 'todas';
const qtdQuestoes = parseInt(localStorage.getItem('simuladoQtd') || '20', 10);

// Map bonitinho pra mostrar nome de área
const areaLabels = {
  todas: 'Todas as especialidades',
  cirurgia: 'Cirurgia',
  ginecologiaObstetricia: 'Ginecologia & Obstetrícia',
  clinicaMedica: 'Clínica Médica',
  pediatria: 'Pediatria',
  medicinaPreventiva: 'Medicina Preventiva / SUS',
  medicinaLegal: 'Medicina Legal',
  infectologia: 'Infectologia',
  neurologia: 'Neurologia',
  ortopedia: 'Ortopedia',
  psiquiatria: 'Psiquiatria'
};

// ---------- UTIL ----------

// shuffle simples
function embaralhar(array){
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// monta o pool de questões a partir da área
function montarPool(area){
  let pool = [];
  if (area === 'todas'){
    Object.values(window.questionBank).forEach(lista => {
      pool = pool.concat(lista);
    });
  } else {
    pool = window.questionBank[area] ? [...window.questionBank[area]] : [];
  }
  return pool;
}

// ---------- ESTADO ----------

let todasQuestoes = montarPool(areaSelecionada);
todasQuestoes = embaralhar(todasQuestoes);
const selectedQuestions = todasQuestoes.slice(0, qtdQuestoes);

let indiceAtual = 0;
let score = 0;
let jaRespondeu = false;

// ---------- ELEMENTOS DOM ----------

const simTitleEl = document.getElementById('sim-title');
const simSubEl = document.getElementById('sim-sub');
const badgeAreaEl = document.getElementById('badge-area');
const progressLabelEl = document.getElementById('progress-label');
const scoreLabelEl = document.getElementById('score-label');
const progressBarInnerEl = document.getElementById('progress-bar-inner');

const questionNumberEl = document.getElementById('question-number');
const areaMiniEl = document.getElementById('area-label-mini');
const enunciadoEl = document.getElementById('enunciado');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');

const btnProxima = document.getElementById('btn-proxima');
const btnVoltar = document.getElementById('btn-voltar');

const resultCardEl = document.getElementById('result-card');
const resultTextEl = document.getElementById('result-text');

// ---------- INICIALIZAÇÃO HEADER ----------

const labelArea = areaLabels[areaSelecionada] || 'Simulado';

simTitleEl.textContent = 
  areaSelecionada === 'todas' 
    ? 'Simuladão Geral' 
    : `Simulado – ${labelArea}`;

badgeAreaEl.textContent = labelArea;
areaMiniEl.textContent = `Área: ${labelArea}`;

if (selectedQuestions.length === 0){
  enunciadoEl.textContent = 'Não há questões cadastradas para esta área ainda.';
}

// ---------- RENDER DE QUESTÃO ----------

function atualizarProgresso(){
  const atual = indiceAtual + 1;
  const total = selectedQuestions.length;
  progressLabelEl.textContent = `Questão ${atual} de ${total}`;
  scoreLabelEl.textContent = `Acertos: ${score}`;
  const pct = (atual - 1) / total * 100;
  progressBarInnerEl.style.width = `${pct}%`;
}

function renderQuestao(){
  jaRespondeu = false;
  feedbackEl.textContent = '';
  feedbackEl.className = 'feedback';

  btnProxima.disabled = true;

  const q = selectedQuestions[indiceAtual];
  const numero = indiceAtual + 1;

  questionNumberEl.textContent = `Questão ${numero}`;
  enunciadoEl.textContent = q.enunciado;

  // limpa alternativas
  optionsEl.innerHTML = '';

  // cria cópia das alternativas com índice original
  const alternativas = q.alternativas.map((texto, idx) => ({
    texto,
    idx
  }));

  // Embaralha as alternativas na tela, mas mantém o índice correto original
  const alternativasEmbaralhadas = embaralhar(alternativas);

  alternativasEmbaralhadas.forEach((alt, posicaoVisual) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option-btn';
    btn.textContent = alt.texto;
    btn.dataset.indexOriginal = String(alt.idx); // índice da alternativa no objeto
    btn.dataset.posicaoVisual = String(posicaoVisual);

    btn.addEventListener('click', () => {
      if (jaRespondeu) return;
      tratarResposta(btn, q);
    });

    optionsEl.appendChild(btn);
  });

  atualizarProgresso();
}

function tratarResposta(botaoClicado, questao){
  jaRespondeu = true;

  const indiceCorreta = questao.correta;
  const indiceEscolhida = parseInt(botaoClicado.dataset.indexOriginal, 10);

  const todosBtns = Array.from(optionsEl.querySelectorAll('.option-btn'));

  // marca seleção do usuário
  botaoClicado.classList.add('selected');

  // pinta todas (correto/errado)
  todosBtns.forEach(btn => {
    const idx = parseInt(btn.dataset.indexOriginal, 10);
    if (idx === indiceCorreta){
      btn.classList.add('correct');
    }
    if (btn === botaoClicado && idx !== indiceCorreta){
      btn.classList.add('wrong');
    }
    // desabilita clique depois de responder
    btn.disabled = true;
  });

  if (indiceEscolhida === indiceCorreta){
    score++;
    feedbackEl.textContent = 'Correto! ' + (questao.explicacao || '');
    feedbackEl.classList.add('correct');
  } else {
    feedbackEl.textContent = 'Incorreto. ' + (questao.explicacao || '');
    feedbackEl.classList.add('wrong');
  }

  scoreLabelEl.textContent = `Acertos: ${score}`;
  btnProxima.disabled = false;

  // se foi a última, já prepara label do botão
  if (indiceAtual === selectedQuestions.length - 1){
    btnProxima.textContent = 'Finalizar simulado';
  } else {
    btnProxima.textContent = 'Próxima';
  }
}

// ---------- NAVEGAÇÃO ----------

btnProxima.addEventListener('click', () => {
  if (!jaRespondeu) return;

  if (indiceAtual < selectedQuestions.length - 1){
    indiceAtual++;
    renderQuestao();
  } else {
    mostrarResultadoFinal();
  }
});

btnVoltar.addEventListener('click', () => {
  if (indiceAtual === 0) return;
  indiceAtual--;
  renderQuestao();
});

// tecla Enter = próxima
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter'){
    if (!btnProxima.disabled){
      btnProxima.click();
    }
  }
});

// ---------- RESULTADO FINAL ----------

function mostrarResultadoFinal(){
  const total = selectedQuestions.length;
  const porcentagem = Math.round((score / total) * 100);

  resultCardEl.style.display = 'block';
  resultTextEl.innerHTML = `
    Você acertou <strong>${score}</strong> de <strong>${total}</strong> questões 
    (${porcentagem}%).<br>
    <br>
    Dica: refaça o simulado para ver novas combinações de questões. Se quiser focar em uma área,
    volte à tela inicial e escolha a especialidade específica.
  `;

  // Preenche barra de progresso como 100%
  progressBarInnerEl.style.width = '100%';
}

// ---------- START ----------

if (selectedQuestions.length > 0){
  renderQuestao();
} else {
  feedbackEl.textContent = 'Banco de questões vazio para esta área.';
}
