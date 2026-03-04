const perguntas = [
    {
        titulo: "O que significa a sigla LAN?",
        opcoes: ["Long Area Network", "Local Area Network", "Light Access Node"],
        correta: 1
    },
    {
        titulo: "Qual topologia usa um aparelho central (Switch)?",
        opcoes: ["Barramento", "Anel", "Estrela"],
        correta: 2
    },
    {
        titulo: "Qual é a velocidade comum do Gigabit Ethernet?",
        opcoes: ["100 Mega", "1000 Mega", "10 Mega"],
        correta: 1
    }
];

let indiceAtual = 0;
let acertos = 0;
let respondido = false;

function carregarPergunta() {
    respondido = false;
    const perguntaAtual = perguntas[indiceAtual];
    
    document.getElementById('pergunta-texto').innerText = perguntaAtual.titulo;
    document.getElementById('contador').innerText = `Pergunta ${indiceAtual + 1} de ${perguntas.length}`;
    
    const lista = document.getElementById('lista-opcoes');
    lista.innerHTML = "";
    
    perguntaAtual.opcoes.forEach((opcao, index) => {
        const li = document.createElement('li');
        li.className = "opcao-item";
        li.innerText = opcao;
        li.onclick = () => verificarResposta(index, li);
        lista.appendChild(li);
    });
}

function verificarResposta(escolha, elemento) {
    if (respondido) return; // Evita múltiplos cliques na mesma pergunta
    respondido = true;

    const correta = perguntas[indiceAtual].correta;
    
    if (escolha === correta) {
        acertos++;
        elemento.classList.add('correta');
    } else {
        elemento.classList.add('errada');
        // Mostra qual era a correta
        const opcoes = document.querySelectorAll('.opcao-item');
        opcoes[correta].classList.add('correta');
    }

    // Espera 1.5 segundos para passar para a próxima
    setTimeout(() => {
        indiceAtual++;
        if (indiceAtual < perguntas.length) {
            carregarPergunta();
        } else {
            mostrarResultado();
        }
    }, 1500);
}

function mostrarResultado() {
    document.getElementById('quiz-ativo').style.display = 'none';
    const areaResultado = document.getElementById('resultado-final');
    areaResultado.style.display = 'block';
    document.getElementById('texto-pontuacao').innerText = `Acertaste ${acertos} de ${perguntas.length} questões!`;
}

function reiniciarQuiz() {
    indiceAtual = 0;
    acertos = 0;
    document.getElementById('quiz-ativo').style.display = 'block';
    document.getElementById('resultado-final').style.display = 'none';
    carregarPergunta();
}

// Inicia o quiz ao carregar a página
window.onload = carregarPergunta;