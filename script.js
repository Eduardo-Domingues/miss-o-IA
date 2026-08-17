const caixaPrincipal = document.querySelector(".caixaPrincipal");
const caixaPerguntas = document.querySelector(".caixaPerguntas");
const caixaAlternativas = document.querySelector(".caixaAlternativas");
const caixaresultado = document.querySelector(".caixaResultado");
const textoResultado = document.querySelector(".textoResultado");


const perguntas = [
  {  
  enunciado:  "Antes de iniciar uma atividade de estudo, cada pessoa organiza suas tarefs de maneira diferente. Escolha a alternativa que mais represnta você.",
    alternativas: [
        "Gosto de planejar meus estudos antes de começar"
    , "Prefiro começar logo, e organizar"
]
  },
  {  
    enunciado:  "Existem diferentes maneiras de aprender um novo conteúdo. Pense na estratégia que mais contribui para seu aprendizado.",
      alternativas: [
          "Aprendo melhor  fazendo resumos, mapas mentais e anotações"
      , "Aprendo melhor assistindo aulas, ouvindo explicações e discutindo o conteúdo"
  ]
    },
    {  
        enunciado:  "Durante os estudos, é comum encontrar conteúdos mais desafiadores. Escolha a alternativa que melhor descreve sua atitude.",
          alternativas: [
              "Persisto até aprender o conteúdo ,mesmo que leve mais tempo "
          , "Busco ajuda de professores, colegas ou materiais complementares quando encontro dificuldades"
      ]
        },
        {  
            enunciado:  "Cada estudante possui motivos diferentes para dedicar o tempo aos estudos",
              alternativas: [
                  "Alternativa 1"
              , "Alternativa 2"
          ]
            },
            {  
                enunciado:  "pergunta 5",
                  alternativas: [
                      "Alternativa 1"
                  , "Alternativa 2"
              ]
                }
];