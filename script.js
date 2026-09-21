const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Antes de iniciar uma atividade de estudo, cada pessoa organiza suas tarefas de maneira diferente. Escolha a alternativa que mais representa você.",
        alternativas: [
          {
            texto: "Gosto de planejar meus estudos antes de começar",
            afirmacao:[ "Você demonstra organização e costuma definir metas e estratégias antes de começar.",
" Você costuma se organizar antes de estudar, definindo um caminho para alcançar seus objetivos."


          ]
          },
          {
            texto: "Prefiro começar logo, e organizar",
            afirmacao: ["Você prefere uma abordagem mais flexível, adaptando seu planejamento conforme a necessidade do momento.",
" Você prefere iniciar os estudos e organizar suas atividades conforme elas surgem."
          ]
          }
        ]
      },
    
      {
        enunciado: "Existem diferentes maneiras de aprender um novo conteúdo. Pense na estratégia que mais contribui para seu aprendizado.",
        alternativas: [
          {
            texto: "Aprendo melhor fazendo resumos, mapas mentais e anotações",
            afirmacao:[ "Você aprende melhor quando registra as informações e organiza o conteúdo com suas próprias palavras.",
"Você facilita seu aprendizado ao organizar e registrar as informações de forma visual e prática."]

          },
          {
            texto: "Aprendo melhor assistindo aulas, ouvindo explicações e discutindo o conteúdo",
            afirmacao: ["Você absorve melhor o conhecimento por meio da escuta, da observação e da interação com outras pessoas.",
            " Você aprende com mais facilidade por meio de explicações, conversas e diferentes formas de interação."]
          }
        ]
      },
    
      {
        enunciado: "Durante os estudos, é comum encontrar conteúdos mais desafiadores. Escolha a alternativa que melhor descreve sua atitude.",
        alternativas: [
          {
            texto: "Persisto até aprender o conteúdo, mesmo que leve mais tempo",
            afirmacao: ["Você é persistente e busca compreender o conteúdo antes de seguir para novos assuntos.",
" Você demonstra determinação e não desiste diante de conteúdos que exigem mais dedicação."]
          },
          {
            texto: "Busco ajuda de professores, colegas ou materiais complementares quando encontro dificuldades",
            afirmacao: ["Você reconhece a importância da colaboração e utiliza diferentes recursos para superar dificuldades.",
"Você sabe utilizar diferentes fontes de apoio para compreender melhor os conteúdos mais difíceis."]

          }
        ]
      },
    
      {
        enunciado: "Cada estudante possui motivos diferentes para dedicar seu tempo aos estudos.",
        alternativas: [
          {
            texto: "Estudo porque gosto de aprender e desenvolver novos conhecimentos.",
            afirmacao: ["Sua principal motivação é ampliar seus conhecimentos e desenvolver novas competências.",
            "Você estuda porque busca evoluir, aprender continuamente e se preparar para novas oportunidades."
        ]
          },
          {
            texto: "Estudo porque quero alcançar bons resultados e conquistar objetivos.",
            afirmacao:[ "Você se dedica aos estudos porque valoriza o alcance de objetivos e o bom desempenho.",
"Sua dedicação aos estudos está ligada à busca por bons resultados e à realização de seus objetivos."
          ]
          }
        ]
      },
    
      {
        enunciado: "A organização da rotina influencia a forma como cada pessoa aprende. Escolha a alternativa que melhor te representa.",
        alternativas: [
          {
            texto: "Procuro manter uma rotina consistente e disciplinada de estudos.",
            afirmacao: ["Você demonstra disciplina e constância, características que favorecem a aprendizagem contínua.",
            " Você valoriza a organização e a constância para manter seus estudos em dia."]
          },
          {
            texto: "Adapto minha rotina conforme o tempo disponível e as prioridades do momento.",
            afirmacao: ["Você possui flexibilidade para gerir seus hábitos de acordo com sua realidade e prioridades.",
            "Você consegue ajustar seus estudos de acordo com seu tempo e as necessidades de cada momento."]
        
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Portanto...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}


function aleatorio (Lista){
    const posicao = Math.floor(Math.random()*Lista.length)
}



mostraPergunta();