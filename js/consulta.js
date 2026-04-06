const calendarioEl = document.getElementById("calendario");
const detalhesEl = document.getElementById("detalhes");

const agenda = {
  cardio: {
    5: "Dr. João - 14:00",
    10: "Dr. João - 16:00",
    15: "Dr. João - 10:00"
  },
  dermato: {
    3: "Dra. Ana - 09:00",
    8: "Dra. Ana - 13:00",
    20: "Dra. Ana - 15:00"
  },
  ortopedia: {
    7: "Dr. Carlos - 11:00",
    12: "Dr. Carlos - 14:00",
    25: "Dr. Carlos - 17:00"
  }
};

let diaSelecionado = null;

function carregarAgenda() {
  const esp = document.getElementById("especialidade").value;

  calendarioEl.innerHTML = "";
  detalhesEl.style.display = "none";
  diaSelecionado = null;

  if (!esp) return;

  for (let i = 1; i <= 30; i++) {
    const dia = document.createElement("div");
    dia.classList.add("dia");

    const numero = document.createElement("div");
    numero.innerText = i;

    const info = document.createElement("div");
    info.classList.add("dia-info");

    dia.appendChild(numero);
    dia.appendChild(info);

    if (agenda[esp][i]) {
      dia.classList.add("disponivel");

      dia.onclick = () => {

        if (diaSelecionado) {
          diaSelecionado.classList.remove("ativo");
        }

        dia.classList.add("ativo");
        diaSelecionado = dia;

        // coloca info dentro
        info.innerHTML = agenda[esp][i];
      };
    }

    calendarioEl.appendChild(dia);
  }
}
