// Seleciona os elementos HTML que serão manipulados
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Array de objetos contendo as perguntas e alternativas
const perguntas = [
    {
        enunciado: "Qual a idade máxima que um cachorro pode chegar?",
        alternativas: [
            "15 anos",
            "20 anos"
        ],
        correta: 0 // A primeira alternativa é a correta
    },
    {
        enunciado: "Qual é a raça de cachorro mais conhecida por sua lealdade?",
        alternativas: [
            "Labrador Retriever",
            "Pastor Alemão"
        ],
        correta: 0 // A segunda alternativa é a correta
    },
    {
        enunciado: "Qual é a melhor maneira de treinar um cachorro?",
        alternativas: [
            "maltratando",
            "com reconpensas"
        ],
        correta: 1
    },
    {
        enunciado: "Qual é a alimentação mais adequada para um cachorro?",
        alternativas: [
            "Apenas ração",
            "Ração e comida caseira balanceada"
        ],
        correta: 1
    },
    {
        enunciado: "Qual é o maior cachorro do mundo?",
        alternativas: [
            "Grande Pireneu",
            "Dogue Alemão"
        ],
        correta: 1
    }
];

let atual = 0;
let perguntaAtual;
let pontuacao = 0;

// FUNÇÃO MOSTRAR PERGUNTAS
function mostrarPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";

    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement("button");
        botao.textContent = alternativa; // Adicionando texto ao botão
        botao.addEventListener("click", () => verificarResposta(index));
        caixaAlternativas.appendChild(botao);
    });
}

// FUNÇÃO VERIFICAR RESPOSTA
function verificarResposta(selecionada) {
    if (selecionada === perguntaAtual.correta) {
        pontuacao++;
    }
    atual++;

    if (atual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

// FUNÇÃO MOSTRAR RESULTADO
function mostrarResultado() {
    caixaPerguntas.style.display = "none";
    caixaAlternativas.style.display = "none";
    caixaResultado.style.display = "block";
    textoResultado.textContent = `Sua pontuação é ${pontuacao} de ${perguntas.length}.`;
}

// Inicializa o jogo chamando a função para mostrar a primeira pergunta
mostrarPergunta();
