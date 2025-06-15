const params = new URLSearchParams(window.location.search);
let nome = params.get("nome");
const tema = params.get("tema") || "1";

if (nome) {
  nome = nome
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Aplica classe do tema ao body
document.body.classList.add(`tema-${tema}`);

// Define o favicon com base no tema
document.querySelectorAll('link[rel="icon"]').forEach((link) => link.remove()); // Remove favicon anterior

const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.type = "image/svg+xml";
favicon.href = tema === "2" ? "heart-outline.svg" : "code-outline.svg"; // Define com base no tema

document.head.appendChild(favicon);

// Função que retorna a mensagem conforme o tema
function gerarMensagem(nome, tema) {
  switch (tema) {
    case "1": // Neutro / Carinhoso
      return `
            Hoje é um dia especial, <strong>${nome}</strong>, e ele merece ser celebrado com todo o carinho do mundo. <br />
            Que cada momento traga sorrisos sinceros, abraços calorosos e memórias que aqueçam o coração. <br />
            Que a felicidade caminhe ao seu lado hoje e em todos os dias que virão, porque você merece o melhor que a vida pode oferecer. 🎉💖
        `;
    case "2": // Romântico
      return `       
            Hoje é um daqueles dias que merecem ser celebrados com o coração: o seu aniversário, <strong>${nome}</strong>. <br />
            Que o seu dia seja tão encantador quanto o seu sorriso, e que este novo ciclo traga ainda mais motivos para sonhar e sorrir.<br />
            Estar perto de você faz tudo ganhar cor, <strong>${nome}</strong>. Feliz aniversário — que a vida te abrace com tudo de mais bonito! 🌹
        `;

    case "3": // Amizade
      return `
            Ei <strong>${nome}</strong>! Hoje o dia é todinho seu! 🥳<br />
            Que nunca te faltem motivos para sorrir, amigos para apoiar e momentos incríveis para viver.<br />
            Parabéns pela sua vida, que é um presente pra todo mundo que te conhece! 💙
        `;
    default:
      return `
            Ei, <strong>${nome}</strong>! Hoje o dia é todinho seu, e merece ser incrível do começo ao fim! 🥳<br />
            Que nunca faltem motivos para sorrir, amigos de verdade por perto e momentos que virem boas histórias.<br />
            Você é daquelas pessoas que iluminam tudo ao redor — que seu novo ano seja tão especial quanto a energia que você espalha! 💙
        `;
  }
}

// Define título e mensagem com base no nome e tema
const tituloEl = document.getElementById("titulo");
const mensagemEl = document.getElementById("mensagem");

if (tituloEl && mensagemEl) {
  if (nome) {
    tituloEl.textContent = `Parabéns pelo seu dia, ${nome}!`;
    mensagemEl.innerHTML = gerarMensagem(nome, tema);
  } else {
    tituloEl.textContent = "Parabéns!";
    mensagemEl.innerHTML = gerarMensagem("você", tema); // Fallback
  }
}

// 🎉 Confetes
function launchConfettiLoop() {
  const duration = 8000; // 8 segundos
  const pause = 5000; // 5 segundos entre ciclos
  const defaults = { startVelocity: 40, spread: 360, ticks: 200, zIndex: 1000 };

  function startConfettiCycle() {
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        clearInterval(interval);

        // Espera 5 segundos e inicia novamente
        setTimeout(startConfettiCycle, pause);
        return;
      }

      const particleCount = 40;

      // Esquerda
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: 0, y: Math.random() * 0.5 },
        })
      );

      // Direita
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: 1, y: Math.random() * 0.5 },
        })
      );

      // Centro (de baixo para cima)
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          angle: 270,
          spread: 70,
          origin: { x: 0.5, y: 1 },
        })
      );
    }, 300);
  }

  startConfettiCycle(); // inicia o loop
}

function iniciarCoroacoes() {
  const container = document.createElement("div");
  container.classList.add("heart-container");
  document.body.appendChild(container);

  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    // Posição horizontal aleatória
    heart.style.left = Math.random() * 100 + "vw";

    // Tamanho aleatório
    const size = Math.random() * 2 + 1; // de 1rem a 3rem
    heart.style.fontSize = `${size}rem`;

    // Duração da animação
    heart.style.animationDuration = `${Math.random() * 3 + 5}s`; // entre 5s e 8s

    container.appendChild(heart);

    // Remover após animação
    setTimeout(() => {
      heart.remove();
    }, 10000);
  }, 300); // Frequência de criação
}

window.onload = function () {
  if (tema === "2") {
    iniciarCoroacoes();
  } else {
    launchConfettiLoop();
  }
};
