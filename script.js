const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual das seguintes opções é uma fonte de energia renovável?",
        alternativas: [
            {
                texto: "Carvão",
                afirmacao: "errada"
            },
            {
                texto: "Energia Solar",
                afirmacao: "correta"
            }
        ]
    },
    {
        enunciado: "Qual das seguintes práticas contribui para a conservação da água?",
        alternativas: [
            {
                texto: "Deixar a torneira aberta enquanto escova os dentes",
                afirmacao: "errada"
            },
            {
                texto: "Tomar banhos mais curtos",
                afirmacao: "correta"
            }
        ]
    },
    {
        enunciado: "Qual das seguintes atividades é prejudicial para os oceanos?",
        alternativas: [
            {
                texto: "Reciclar plástico",
                afirmacao: "correta"
            },
            {
                texto: "Descartar lixo plástico no mar",
                afirmacao: "errada"
            }
        ]
    },
    {
        enunciado: "Qual das seguintes opções é um dos principais gases de efeito estufa?",
        alternativas: [
            {
                texto: "Nitrogênio",
                afirmacao: "correta"
            },
            {
                texto: "Dióxido de carbono",
                afirmacao: "errada"
            }
        ]
    },
    {
        enunciado: "Qual das seguintes ações contribui para a preservação da biodiversidade?",
        alternativas: [
            {
                texto: " Desmatamento de florestas",
                afirmacao: "errada"
            },
            {
                texto: "Criação de áreas protegidas para animais selvagens",
                afirmacao: "correta"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();