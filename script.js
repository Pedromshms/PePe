// Seleciona os elementos HTML que serão manipulados
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Array de objeto contendo as perguntas e alternativas
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
        botao.textContent = alternativa; // Define o texto do botão como a alternativa
        botao.addEventListener("click", () => verificaResposta(index));
        caixaAlternativas.appendChild(botao);
    });
}

// FUNÇÃO VERIFICAR RESPOSTA
function verificaResposta(selecionada) {
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

function mostrarResultado() {
    // Esconde a caixa de perguntas
    caixaPrincipal.style.display = "none";
    // Mostra a caixa de resultado
    caixaResultado.style.display = "block";

    setTimeout(() => caixaResultado.classList.add("mostrar"), 10);
    textoResultado.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;

    // Criar botão de reiniciar
    const botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "Reiniciar";

    // Adiciona um evento de click ao botão de reiniciar
    botaoReiniciar.addEventListener("click", () => {
        atual = 0;
        pontuacao = 0;
        caixaResultado.classList.remove("mostrar");
        caixaResultado.style.display = "none";
        caixaPrincipal.style.display = "block";
        mostrarPergunta();
    });

    caixaResultado.innerHTML = "";
    caixaResultado.appendChild(textoResultado);
    caixaResultado.appendChild(botaoReiniciar);
}

// Inicia o quiz
mostrarPergunta();
