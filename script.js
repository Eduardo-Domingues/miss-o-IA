const caixaPrincipal = document.querySelector(".caixaPrincipal");
const caixaPerguntas = document.querySelector(".caixaPerguntas");
const caixaAlternativas = document.querySelector(".caixaAlternativas");
const caixaResultado = document.querySelector(".caixaResultado");
const textoResultado = document.querySelector(".textoResultado");

const perguntas = [
  {
    enunciado: "Antes de iniciar uma atividade de estudo, cada pessoa organiza suas tarefas de maneira diferente. Escolha a alternativa que mais representa você.",
    alternativas: [
      {
        texto: "Gosto de planejar meus estudos antes de começar",
        afirmacao: "Você demonstra organização e costuma definir metas e estratégias antes de começar."
      },
      {
        texto: "Prefiro começar logo, e organizar",
        afirmacao: "Você prefere uma abordagem mais flexível, adaptando seu planejamento conforme a necessidade do momento."
      }
    ]
  },

  {
    enunciado: "Existem diferentes maneiras de aprender um novo conteúdo. Pense na estratégia que mais contribui para seu aprendizado.",
    alternativas: [
      {
        texto: "Aprendo melhor fazendo resumos, mapas mentais e anotações",
        afirmacao: "Você aprende melhor quando registra as informações e organiza o conteúdo com suas próprias palavras."
      },
      {
        texto: "Aprendo melhor assistindo aulas, ouvindo explicações e discutindo o conteúdo",
        afirmacao: "Você absorve melhor o conhecimento por meio da escuta, da observação e da interação com outras pessoas."
      }
    ]
  },

  {
    enunciado: "Durante os estudos, é comum encontrar conteúdos mais desafiadores. Escolha a alternativa que melhor descreve sua atitude.",
    alternativas: [
      {
        texto: "Persisto até aprender o conteúdo, mesmo que leve mais tempo",
        afirmacao: "Você é persistente e busca compreender o conteúdo antes de seguir para novos assuntos."
      },
      {
        texto: "Busco ajuda de professores, colegas ou materiais complementares quando encontro dificuldades",
        afirmacao: "Você reconhece a importância da colaboração e utiliza diferentes recursos para superar dificuldades."
      }
    ]
  },

  {
    enunciado: "Cada estudante possui motivos diferentes para dedicar seu tempo aos estudos.",
    alternativas: [
      {
        texto: "Estudo porque gosto de aprender e desenvolver novos conhecimentos.",
        afirmacao: "Sua principal motivação é ampliar seus conhecimentos e desenvolver novas competências."
      },
      {
        texto: "Estudo porque quero alcançar bons resultados e conquistar objetivos.",
        afirmacao: "Você se dedica aos estudos porque valoriza o alcance de objetivos e o bom desempenho."
      }
    ]
  },

  {
    enunciado: "A organização da rotina influencia a forma como cada pessoa aprende. Escolha a alternativa que melhor te representa.",
    alternativas: [
      {
        texto: "Procuro manter uma rotina consistente e disciplinada de estudos.",
        afirmacao: "Você demonstra disciplina e constância, características que favorecem a aprendizagem contínua."
      },
      {
        texto: "Adapto minha rotina conforme o tempo disponível e as prioridades do momento.",
        afirmacao: "Você possui flexibilidade para gerir seus hábitos de acordo com sua realidade e prioridades."
      }
    ]
  }
];

let atual = 0;
let perguntaAtual;
let respostas = [];

function mostraPerguntas() {
  perguntaAtual = perguntas[atual];

  caixaPerguntas.textContent = perguntaAtual.enunciado;

  // Limpa as alternativas anteriores
  caixaAlternativas.innerHTML = "";

  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");

    botaoAlternativa.textContent = alternativa.texto;

    botaoAlternativa.addEventListener("click", function () {
      respostas.push(alternativa.afirmacao);

      atual++;

      if (atual < perguntas.length) {
        mostraPerguntas();
      } else {
        mostraResultado();
      }
    });

    caixaAlternativas.appendChild(botaoAlternativa);
  }
}

function mostraResultado() {
  caixaPerguntas.style.display = "none";
  caixaAlternativas.style.display = "none";
  caixaResultado.style.display = "block";

  textoResultado.innerHTML = respostas
    .map(resposta => `<p>${resposta}</p>`)
    .join("");
}

mostraPerguntas();