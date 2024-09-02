const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acaba de ouvir sobre uma nova tecnologia de armazenamento em nuvem que promete melhorar o gerenciamento de dados em larga escala. Qual é a sua reação inicial?",
        alternativas: [
            {
                texto: "Isso parece complicado!",
                afirmacao: "Ficou preocupado com a complexidade da nova tecnologia e o impacto que isso poderia ter na gestão dos dados da empresa."
            },
            {
                texto: "Isso é promissor!",
                afirmacao: "Ficou entusiasmado com a possibilidade de otimizar o armazenamento de dados e explorar novas funcionalidades oferecidas pela tecnologia."
            }
        ]
    },
    {
        enunciado: "Com o lançamento dessa nova tecnologia, o gerente de TI decide realizar um workshop para explicar suas funcionalidades. Ao final do workshop, você é solicitado a implementar um projeto utilizando a nova tecnologia. Qual abordagem você adota?",
        alternativas: [
            {
                texto: "Utiliza a documentação oficial e tutoriais online da tecnologia para entender como aplicar seus conceitos no projeto.",
                afirmacao: "Conseguiu aplicar com sucesso os conceitos da nova tecnologia no projeto, utilizando os recursos de aprendizagem disponíveis."
            },
            {
                texto: "Desenvolve o projeto com base no conhecimento adquirido no workshop, interagindo com colegas e usando suas experiências prévias.",
                afirmacao: "Sentiu-se mais confiante ao utilizar suas próprias estratégias e conhecimentos prévios para realizar o projeto."
            }
        ]
    },
    {
        enunciado: "Após a entrega do projeto, o gerente de TI organiza uma reunião para discutir as soluções adotadas e o impacto da nova tecnologia na infraestrutura. Como você contribui para a discussão?",
        alternativas: [
            {
                texto: "Defende a ideia de que a nova tecnologia pode aumentar a eficiência e a escalabilidade da infraestrutura.",
                afirmacao: "Acredita que a nova tecnologia pode impulsionar a inovação e otimizar processos dentro da infraestrutura de TI."
            },
            {
                texto: "Expõe preocupações sobre a curva de aprendizado e os desafios que a nova tecnologia pode representar para a equipe de TI.",
                afirmacao: "Levanta questões sobre a necessidade de suporte adicional para a equipe na adaptação à nova tecnologia."
            }
        ]
    },
    {
        enunciado: "Você precisa criar uma visualização gráfica para representar a arquitetura do sistema em seu projeto. Qual ferramenta você usa?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de design gráfico como o Microsoft Visio para criar o diagrama.",
                afirmacao: "Observou que muitos colegas não estão familiarizados com ferramentas de design e decidiu oferecer ajuda básica de design para iniciantes."
            },
            {
                texto: "Usa uma ferramenta automática de geração de diagramas para criar a visualização rapidamente.",
                afirmacao: "Aproveitou a rapidez das ferramentas automáticas para criar a visualização e agora pode ensinar outros a utilizá-las também."
            }
        ]
    },
    {
        enunciado: "Seu time está desenvolvendo um projeto de software e um membro decidiu usar uma ferramenta automática para gerar código. O código gerado está muito parecido com o exemplo da ferramenta. O que você faz?",
        alternativas: [
            {
                texto: "Aceita o código gerado pela ferramenta como está para acelerar o desenvolvimento, sem revisões adicionais.",
                afirmacao: "Tornou-se dependente da ferramenta automática e enfrenta dificuldades em ajustar o código manualmente quando necessário."
            },
            {
                texto: "Revisa e ajusta o código gerado pela ferramenta para garantir que atenda às necessidades do projeto e esteja alinhado com a visão do time.",
                afirmacao: "Reconhece a utilidade das ferramentas automáticas, mas acredita que o código gerado precisa ser adaptado para atender às especificidades do projeto."
            }
        ]
    }
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
