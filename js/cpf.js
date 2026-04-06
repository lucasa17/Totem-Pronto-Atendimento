let cpf = "";

function addNumber(num) {
  if (cpf.length < 11) {
    cpf += num;
    updateCPF();
  }
}

function clearCPF() {
  cpf = "";
  updateCPF();
}

function deleteLast() {
  cpf = cpf.slice(0, -1);
  updateCPF();
}

function updateCPF() {
  let formatted = cpf
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  document.getElementById("cpfDisplay").innerText =
    formatted || "___.___.___-__";
}

function confirmCPF() {
  limparMensagem();

  if (cpf.length < 11) {
    mostrarErro("CPF incompleto!");
    return;
  }
  window.location.href = "confirmacao.html?cpf=" + cpf;
}

function mostrarErro(msg) {
  const el = document.getElementById("mensagem");
  el.innerText = msg;
  el.classList.add("show");
}

function limparMensagem() {
  const el = document.getElementById("mensagem");
  el.classList.remove("show");
}
