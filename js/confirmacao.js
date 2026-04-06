const params = new URLSearchParams(window.location.search);
const cpf = params.get("cpf");

const pacientes = {
  "12345678900": {
    nome: "Maria A****",
    medico: "Dra. Ana Souza",
    horario: "10:00"
  }
};

const paciente = pacientes[cpf];

function mostrarErro(msg) {
  const el = document.getElementById("mensagem");

  el.innerHTML = `
    <div class="icon erro-icon">⚠️</div>
    ${msg}
  `;

  el.classList.add("show");
}

function mostrarErro(msg) {
  const el = document.getElementById("mensagem");

  el.innerHTML = `
    <div class="icon erro-icon">⚠️</div>
    ${msg}
  `;

  el.classList.add("show");
}

const conteudo = document.getElementById("conteudo");
const loading = document.getElementById("loading");

setTimeout(() => {

  loading.classList.remove("active");

  if (paciente) {
    document.getElementById("nome").innerText = paciente.nome;
    document.getElementById("medico").innerText = paciente.medico;
    document.getElementById("horario").innerText = paciente.horario;

    conteudo.style.display = "block";
    conteudo.classList.add("fade-in");

  } else {
    mostrarErro("Agendamento não encontrado!</br>Tente novamente");

    setTimeout(() => {
      window.location.href = "../view/cpf.html";
    }, 2500);
  }

}, 1000);

function confirmarDados() {
  window.location.href = "../view/senha.html";
}