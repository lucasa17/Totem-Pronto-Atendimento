const filaEl = document.getElementById("fila");
const historicoEl = document.getElementById("historico");
const senhaAtualEl = document.getElementById("senhaAtual");

let fila = ["N001", "N002", "P001", "N003"];
let historico = [];

function renderFila() {
  filaEl.innerHTML = "";
  fila.forEach(s => {
    const li = document.createElement("li");
    li.innerText = s;
    filaEl.appendChild(li);
  });
}

function renderHistorico() {
  historicoEl.innerHTML = "";
  historico.slice(-5).reverse().forEach(s => {
    const li = document.createElement("li");
    li.innerText = s;
    historicoEl.appendChild(li);
  });
}

function chamarProximo() {
  if (fila.length === 0) {
    senhaAtualEl.innerText = "---";
    mostrarMensagem("Erro, nenhuma senha na fila", "erro");
    return;
  }

  const senha = fila.shift();

  senhaAtualEl.innerText = senha;
  historico.push(senha);

  renderFila();
  renderHistorico();

  mostrarMensagem("Senha " + senha + " chamada com sucesso!", "sucesso");
}

function mostrarMensagem(texto, tipo) {
  const el = document.getElementById("mensagem");

  el.innerText = texto;
  el.className = "\tmensagem-box " + tipo;
  el.style.display = "flex";

  setTimeout(() => {
    el.style.display = "none";
  }, 4000);
}

function limparFila() {
  //fila = [];
  historico = [];

  senhaAtualEl.innerText = "---";

  renderFila();
  renderHistorico();

  mostrarMensagem("Histórico limpo com sucesso!", "sucesso");
}

renderFila();
renderHistorico();