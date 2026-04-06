const params = new URLSearchParams(window.location.search);
const tipo = params.get("tipo") || "A";

const loading = document.getElementById("loading");
const resultado = document.getElementById("resultado");
const senhaEl = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");
const titulo = document.getElementById("titulo");
const senhaBox = document.getElementById("senhaBox");

function gerarSenha(tipo) {
  const numero = Math.floor(Math.random() * 1000);
  return tipo + numero.toString().padStart(3, "0");
}

setTimeout(() => {

  loading.classList.remove("active");
  resultado.style.display = "block";

  const senhaGerada = gerarSenha(tipo);
  senhaEl.innerText = senhaGerada;

  // animação
  setTimeout(() => {
    senhaEl.classList.add("show");
  }, 100);

  if (tipo === "P") {
    titulo.innerText = "Senha Prioritária";
    mensagem.innerHTML = "⚠️ Atendimento prioritário<br>Aguarde o chamado";
    senhaBox.classList.add("prioritario");

  } else if (tipo === "N") {
    titulo.innerText = "Senha de Atendimento";
    mensagem.innerText = "Atendimento normal. Aguarde o chamado.";
    senhaBox.classList.add("normal");

  } else {
    titulo.innerText = "Check-in realizado";
    mensagem.innerText = "Aguarde o chamado.";
    senhaBox.classList.add("normal");
  }

}, 1200);

setTimeout(() => {
  mensagem.innerHTML += "<br><br>✔️ Senha impressa!";
}, 3000);

setTimeout(() => {
  window.location.href = "../index.html";
}, 7000);