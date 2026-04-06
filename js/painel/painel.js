// عناصر da tela
const senhaAtualEl = document.getElementById("senhaAtual");
const historicoEl = document.getElementById("historico");
const audio = document.getElementById("somChamada");

// dados simulados
let historico = ["N001", "N002", "P001"];
let atual = "N003";

// controle de áudio
let podeTocar = false;

// 🔓 desbloqueia o áudio no primeiro clique
function ativarSom() {
  audio.play().then(() => {
    audio.pause();
    audio.currentTime = 0;
    podeTocar = true;
  }).catch(() => {
    console.log("Clique necessário para ativar som");
  });
}

document.body.addEventListener("click", ativarSom);

// 🔄 atualiza painel
function atualizarPainel() {
  senhaAtualEl.innerText = atual;

  // animação da senha
  senhaAtualEl.classList.remove("animate");
  void senhaAtualEl.offsetWidth;
  senhaAtualEl.classList.add("animate");

  // histórico
  historicoEl.innerHTML = "";
  historico.slice(-5).reverse().forEach(s => {
    const li = document.createElement("li");
    li.innerText = s;
    historicoEl.appendChild(li);
  });
}

// 🔊 toca som
function tocarSom() {
  if (podeTocar) {
    audio.currentTime = 0;
    audio.play();
  }
}

// ⏱ simulação de chamadas
setInterval(() => {
  const numero = Math.floor(Math.random() * 1000);
  const tipo = Math.random() > 0.7 ? "P" : "N";

  const nova = tipo + numero.toString().padStart(3, "0");

  historico.push(atual);
  atual = nova;

  atualizarPainel();
  tocarSom();

}, 12000);

// inicializa
atualizarPainel();