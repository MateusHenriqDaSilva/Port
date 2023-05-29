import imagem1 from "../../../public/imagem1.png"

type IContentBlog = {
    id: string
    title: string
    description: string
    link?: string
    post: MyNestedObject[]

}

type MyNestedObject = {
    header?: string
    text: string
    code?: string
    img?: any
}

export const conteudoBlogEngenharia: IContentBlog[] = [
    {
        id: '2',
        title: "Desvendando as Engrenagens: Um Perfil Operacional que Impulsiona a Sinergia em Sistemas Multiagentes Normativos",
        description: "Parte 1 - Introdução: Na fascinante jornada da Engenharia de Software, testemunhamos uma evolução constante, repleta de mudanças significativas e um crescimento exponencial. Essa transformação está moldando um impacto profundo em nosso futuro. Mas como podemos garantir que essa revolução seja justa e cativante?",
        link: "/programming/post",
        post: [
            {
                header: "Desvendando a Confiabilidade: A Busca por Software Impecável",
                text: `No mundo da engenharia de software, a confiabilidade é uma pedra angular. Medir a confiabilidade de um software é essencial para garantir seu desempenho consistente e livre de falhas. É nesse contexto que entram os casos de teste de confiabilidade de software, que nos permitem avaliar sua capacidade de funcionar de forma estável e previsível em diversas situações.
                Em busca da excelência, o objetivo é aumentar a produtividade, melhorar a confiabilidade e tornar os testes mais rápidos, alocando recursos de forma eficiente. Afinal, cada minuto economizado em testes é um passo adiante na jornada rumo a um software robusto e confiável.
                `,
                img: imagem1
            },{
                header: "E como podemos testar a confiabilidade de um software?",
                text: `Aqui, entra a importância de desenvolver uma metodologia sólida para criar um perfil operacional para sistemas multiagentes normativos (NorMAS). Essa abordagem nos permite compreender como o software interage em diferentes cenários, identificar possíveis pontos de falha e tomar medidas preventivas para garantir sua confiabilidade em todas as circunstâncias.`,
            },{
                header: "À medida que desvendamos os segredos da confiabilidade do software, embarcamos em uma jornada de aprendizado constante.",
                text: `Cada teste realizado, cada perfil operacional desenvolvido, nos aproxima da visão de um software impecável, capaz de superar expectativas e oferecer uma experiência confiável aos usuários.
                Portanto, prepare-se para explorar as fronteiras da confiabilidade do software, desafiando limites e construindo um futuro em que a excelência seja a norma. Junte-se a nós nessa jornada emocionante em busca do software mais confiável e robusto que podemos imaginar.`,
            },{
                text: `1. Processo de desenvolvimento contém cinco etapas: perfil do cliente,
                perfil do usuário, perfil do modo do sistema, perfil funcional e perfil operacional.
                2. Conjunto de testes existente e classificar o impacto dos defeitos na operação do software contribuindo para a precificação dos defeitos, abordagem de desenvolvimento orientada por comportamento
                Encontre o perfil da função do cliente NorMAS, identifique a função do usuário NorMAS
                perfil, Definir o perfil do modo NorMAS, Determinar o perfil do objetivo NorMAS e
                determinar o perfil operacional NorMAS
                3. Desafiando os Limites: Um Intrincado Bailado de Missões em Sistemas Multiagentes Normativos`,
            },{
                text: `No palco da pesquisa e educação, testemunhamos um espetáculo impressionante de obrigações e metas entrelaçadas. O 1.Professor-Pesquisador assume a missão de ensinar, avaliar e conduzir pesquisas, tudo isso enquanto mantém o respeito aos regulamentos. Um verdadeiro 2. Líder do Projeto, navegando nas águas da permissão, busca ocupar uma posição de destaque, guiado por sua visão. Enquanto isso, os 3.alunos têm a obrigação de buscar a prática autônoma, passar por avaliações de aprovação e respeitar as regras estabelecidas.
                Um elo essencial nesta dança é a 4.Missão de Recomendação do Aluno-S, que incentiva a participação em cursos que enriquecem o conhecimento. O 1.Professor-Pesquisador, guiando com maestria, desempenha seu papel como um farol de sabedoria. Por outro lado, a Missão de Obrigação do 3.Pesquisador Nor5-R exige colaboração com outros pesquisadores, avanços em pesquisas e a participação em seminários, tudo isso enquanto se mantém dentro dos limites estabelecidos.
                Enquanto as cortinas se abrem, o Líder do Projeto assume a missão de liderança com responsabilidades empolgantes: pesquisa, estabelecimento de contatos industriais, assinatura de contratos, proposição de abordagens inovadoras e supervisão de investigadores. Tudo isso, é claro, sempre com o devido respeito às regras. A permissão para ocupar uma posição de destaque é concedida pela administração, reconhecendo o potencial e a capacidade do líder.
                Por fim, a administração exerce sua missão de permissão, com o poder de punir ou recompensar, garantindo a ordem e incentivando o progresso. Todo esse espetáculo em constante movimento desafia os limites convencionais e nos lembra da complexidade envolvida na 7. Orquestração desses sistemas multiagentes normativos.
                Em cada ato, uma nova camada é revelada, desvendando a teia intricada de deveres e objetivos entrelaçados. É nesse palco que a sinfonia da colaboração, conhecimento e respeito aos regulamentos se desenrola, impulsionando a busca pelo crescimento e excelência.
                Prepare-se para se encantar, pois a jornada de sistemas multiagentes normativos está apenas começando.
                Embarcando em uma Jornada Colaborativa: Revelando as Funções dos Usuários em um Empolgante Ensemble
                Conforme mergulhamos no fascinante mundo das funções dos usuários, uma emocionante história se desenrola, destacando as probabilidades de cada grupo geral. O Professor-Pesquisador assume o palco com uma probabilidade de 0,13, trazendo sua expertise para iluminar o caminho. Os Alunos, com uma probabilidade de 0,7, se destacam como personagens centrais, ansiosos para absorver conhecimento e explorar novas fronteiras. Os Pesquisadores, com uma probabilidade de 0,06, trazem sua curiosidade inabalável e sede de descoberta.
                Um personagem raro e especial, o Líder de Projeto, entra em cena com uma probabilidade de 0,01, carregando consigo a visão e a determinação para guiar e inspirar a equipe. Por fim, a Administração, com uma probabilidade de 0,1, desempenha um papel crucial na coordenação e no suporte, garantindo que todos os atores tenham as ferramentas necessárias para brilhar.
                Nesse envolvente ensemble, cada função de usuário desempenha um papel fundamental na trama, criando uma sinfonia de colaboração e crescimento. Juntos, eles enfrentam desafios, buscam conhecimento e constroem um futuro promissor.
                Prepare-se para se encantar, pois essa jornada repleta de personagens cativantes está prestes a começar.`,
            },{
                header: "Explorando os Modos do Sistema: Uma Jornada entre Cursos e Pesquisas",
                text: `Nesta emocionante jornada pelo mundo dos sistemas, deparamo-nos com diferentes modos que moldam a sua essência. Com uma probabilidade de ocorrência de 0,854, encontramos o estimulante Modo de Curso, onde o aprendizado e o compartilhamento de conhecimento são os pilares fundamentais. É nesse cenário que professores inspiram, alunos absorvem e a busca pelo crescimento é constantemente estimulada.
                No entanto, também nos deparamos com o intrigante Modo de Pesquisa, com uma probabilidade de ocorrência de 0,146. Nesse ambiente, a curiosidade e a exploração de novas fronteiras são as estrelas do show. Pesquisadores apaixonados desvendam mistérios, buscam soluções inovadoras e desafiam o status quo.
                É nessa interação entre os dois modos que a magia acontece. O Modo de Curso nutre a base do conhecimento, preparando terreno para a transformação e o avanço. Por sua vez, o Modo de Pesquisa traz as descobertas e insights que impulsionam a evolução do sistema como um todo.
                Prepare-se para embarcar nessa jornada que transita entre cursos e pesquisas, onde a busca pelo saber e a exploração do desconhecido se entrelaçam em uma sinfonia harmoniosa. Desvende novos horizontes, desafie-se e permita-se explorar o melhor que cada modo tem a oferecer.
                O mundo dos sistemas aguarda, repleto de oportunidades e promessas. Venha, junte-se a nós, e descubra as maravilhas que aguardam aqueles que estão dispostos a abraçar o poder transformador dos cursos e das pesquisas.
                Navegando pelos Objetivos: Descobrindo o Papel dos Agentes no Modo Curso
                À medida que exploramos os objetivos que impulsionam o modo Curso, mergulhamos em um universo fascinante de agentes e suas responsabilidades. Com uma probabilidade de ocorrência de 0,854, esse modo revela a importância do aprendizado e da educação como elementos-chave para o crescimento do sistema.
                Dentre os agentes envolvidos nessa jornada, destacamos o Professor-Pesquisador, cujo papel é essencial para a meta1 de ensinar, com uma probabilidade de ocorrência de 0,2. Sua missão é compartilhar conhecimento, inspirar e moldar as mentes em busca do saber. Além disso, a meta2 de avaliar também recai sobre o Professor-Pesquisador, com uma probabilidade de 0,1. É ele quem observa, analisa e avalia o progresso dos alunos.
                Falando em alunos, eles desempenham um papel crucial no modo Curso, com uma probabilidade geral de ocorrência de 1,708. O objetivo6 de ser guiado e praticar autonomamente, com uma probabilidade de 0,2, destaca a importância do autodesenvolvimento e da aplicação prática do conhecimento. A meta7 de avaliação de aprovação, com uma probabilidade de 0,1, e a meta8 de frequentar cursos, com uma probabilidade de 0,1, incentivam os alunos a se esforçarem e buscarem a excelência acadêmica.
                Por fim, a administração também desempenha um papel significativo no modo Curso, com uma probabilidade de ocorrência de 0,06405. Sua responsabilidade inclui a meta16 de punir, com uma probabilidade de 0,075, e a meta17 de recompensar, também com uma probabilidade de 0,075. Eles garantem que as regras sejam seguidas, proporcionando um ambiente justo e incentivando o sucesso dos agentes.
                À medida que nos aprofundamos nos objetivos que impulsionam o modo Curso, uma teia complexa de interações e responsabilidades se revela. Professores, alunos e administração trabalham em conjunto para criar um ambiente propício à aprendizagem, ao crescimento e ao sucesso.
                Prepare-se para se inspirar e descobrir as maravilhas que o modo Curso reserva. Junte-se a nós nessa emocionante jornada em busca de conhecimento, autodesenvolvimento e excelência acadêmica.`,
            },{
                header: "Desvendando as Metas e Variáveis do NorMAS: Um Desafio Ambiental",
                text: `No contexto do NorMAS, nos deparamos com uma série de metas e variáveis que influenciam o funcionamento desse sistema multiagente normativo. Essas metas e variáveis moldam o ambiente em que os agentes NorMAS operam, apresentando desafios únicos e oportunidades de crescimento.
                A meta1 de ensinar é afetada pela ausência do papel de aluno (Abs-SR), o que pode trazer desafios na transmissão efetiva de conhecimento. Além disso, os problemas de recursos do NorMAS (NorMAS-RP) podem impactar a capacidade de alcançar a meta2 de avaliar e a meta3 de pesquisa, limitando os recursos disponíveis para essas atividades.
                Em relação ao objetivo4 de respeitar regulamentos, essa meta não está ligada a uma variável específica, indicando a importância de manter a conformidade normativa como um princípio fundamental dentro do NorMAS.
                A meta5 de ocupar uma posição sênior e o objetivo6 de prática autônoma são afetados pela ausência do papel de professor-pesquisador (Abs-TR), o que pode dificultar a progressão e o desenvolvimento dos agentes no sistema.
                As metas7 de avaliação de aprovação, 8 de participar de cursos e 9 de colaborar com pesquisadores são afetadas por variáveis não especificadas. No entanto, o objetivo10 de avanço na pesquisa é afetado pela ausência da função de líder do projeto (Abs-LR), o que pode limitar a capacidade de avançar na pesquisa de forma efetiva.
                Além disso, as metas11 de participar de seminários, 12 de estabelecer contatos industriais, 13 de assinar contratos, 14 de propor abordagens e 15 de supervisionar investigadores também podem enfrentar desafios devido à ausência de funções específicas dentro do NorMAS.
                Por fim, a meta16 de punir é afetada pela ausência das funções de aluno e professor-pesquisador (Abs-SR&TR), o que pode impactar a capacidade de manter a disciplina e a conformidade normativa no sistema.
                Ao enfrentar esses desafios ambientais, o NorMAS deve buscar soluções criativas e estratégias adaptativas para superar as limitações e alcançar suas metas. É através desses desafios que surgem oportunidades para inovação e crescimento, fortalecendo a resiliência do sistema e promovendo uma abordagem mais eficaz e eficiente para alcançar seus objetivos.
                Adentre o mundo do NorMAS, onde os agentes se adaptam e se reinventam em face dos desafios ambientais. Descubra como o equilíbrio entre metas e variáveis pode moldar o sucesso e o progresso desse sistema multiagente normativo.
                `,
            },{
                header: "Perfil de Objetivo do Modo de Curso",
                text: `Nesta tabela, apresentamos o perfil de objetivo final do modo de curso, levando em consideração os fatores ambientais. Utilizamos a multiplicação da lista de metas inicial com as variáveis ​​ambientais para obter esses resultados.
                Objetivo1 (Ensinar): Como obrigação do Professor-Pesquisador, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de ocorrência de 0,01, a ocorrência geral é calculada como 0,001708. Além disso, consideramos a ausência do papel de aluno (Abs-SR) com uma probabilidade de ocorrência de 0,01, resultando em uma ocorrência geral de 0,001708 nas condições normais (probabilidade de 0,98).
                Meta2 (Avaliar): Levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de ocorrência de 0,01, a ocorrência geral é calculada como 0,000854. Também consideramos a ausência do papel de aluno (Abs-SR) com uma probabilidade de ocorrência de 0,01, resultando em uma ocorrência geral de 0,000854 nas condições normais (probabilidade de 0,98).
                Objetivo4 (Respeito aos regulamentos): Considerando tanto o Professor-Pesquisador quanto o Estudante, levamos em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de ocorrência de 0,01. A ocorrência geral é calculada como 0,000854 nas condições normais (probabilidade de 0,99).
                Meta5 (Ocupar uma posição sênior): Como permissão do Professor-Pesquisador, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de ocorrência de 0,01, a ocorrência geral é calculada como 0,000427 nas condições normais (probabilidade de 0,99).
                Objetivo6 (Prática Guiada e Autônoma): Como obrigação do Aluno, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de ocorrência de 0,01, a ocorrência geral é calculada como 0,001708. Também consideramos a ausência do papel de professor-pesquisador (Abs-TR) com uma probabilidade de ocorrência de 0,01, resultando em uma ocorrência geral de 0,001708 nas condições normais (probabilidade de 0,98).
                Goal7 (Aprovação): Como obrigação do Aluno, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de ocorrência de 0,01, a ocorrência geral é calculada como 0,000854. Também consideramos a ausência do papel de professor-pesquisador (Abs-TR) com uma probabilidade de ocorrência de 0,01, resultando em uma ocorrência geral de 0,000854 nas condições normais (probabilidade de 0,98).
                Goal8 (Participar de cursos): Como recomendação, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de ocorrência.`,
            },{
                header: "Ações da Função do Agente no Modo de Curso:",
                text: `Nesta tabela, apresentamos as ações da função do agente (operações) no modo de curso, levando em consideração as variáveis ambientais.
                Objetivo1 do Professor-Pesquisador (Ensinar):
                Preparar o curso: Com uma probabilidade de ocorrência de 0,2, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01 e a ausência do papel de aluno (Abs-SR) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,0003416 nas condições normais (probabilidade de 0,98).
                Curso atual: Com uma probabilidade de ocorrência de 0,3, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01 e a ausência do papel de aluno (Abs-SR) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,0005124 nas condições normais (probabilidade de 0,98).
                Prática Guiada: Com uma probabilidade de ocorrência de 0,3, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01 e a ausência do papel de aluno (Abs-SR) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,0005124 nas condições normais (probabilidade de 0,98).
                Preparar Prática Autônoma: Com uma probabilidade de ocorrência de 0,2, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01 e a ausência do papel de aluno (Abs-SR) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,0003416 nas condições normais (probabilidade de 0,98).
                Objetivo2 do Professor-Pesquisador (Avaliar):
                Preparar o trabalho de avaliação: Com uma probabilidade de ocorrência de 0,2, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01 e a ausência do papel de aluno (Abs-SR) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,0001708 nas condições normais (probabilidade de 0,98).
                Preparar resposta típica: Com uma probabilidade de ocorrência de 0,2, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01 e a ausência do papel de aluno (Abs-SR) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,0001708 nas condições normais (probabilidade de 0,98).
                Corrigir trabalho de avaliação: Com uma probabilidade de ocorrência de 0,5, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01 e a ausência do papel de aluno (Abs-SR) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,000427 nas condições normais (probabilidade de 0,98).
                Atribuir marcas: Com uma probabilidade de ocorrência de 0,1, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01 e a ausência do papel de aluno (Abs-SR) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,0000854 nas condições normais (probabilidade de 0,98).
                Objetivo4 (Respeitar os regulamentos):
                Conhecer os regulamentos: Com uma probabilidade de ocorrência de 0,2, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,0001708 nas condições normais (probabilidade de 0,99).
                Direitos de prática: Com uma probabilidade de ocorrência de 0,4, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,0003416 nas condições normais (probabilidade de 0,99).
                Aplicar direitos: Com uma probabilidade de ocorrência de 0,4, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,0003416 nas condições normais (probabilidade de 0,99).
                Meta5 do Professor-Pesquisador (Ocupar um cargo superior):
                Ocupar uma posição sênior: Com uma probabilidade de ocorrência de 1, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,000427 nas condições normais (probabilidade de 0,99).
                Objetivo6 do Aluno (Prática Guiada e Autônoma):
                Alcançar prática guiada: Com uma probabilidade de ocorrência de 0,6, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01 e a ausência do papel de professor-pesquisador (Abs-TR) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,0010248 nas condições normais (probabilidade de 0,98).
                Alcançar prática autônoma: Com uma probabilidade de ocorrência de 0,4, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01 e a ausência do papel de professor-pesquisador (Abs-TR) com uma probabilidade de 0,01, a ocorrência geral é calculada como 0,0006832 nas condições normais (probabilidade de 0,98).
                Goal7 (Avaliação de Aprovação):
                Responder à avaliação: Com uma probabilidade de ocorrência de 1, levando em conta os problemas de recursos do NorMAS (NorMAS-RP) com uma probabilidade de 0,01 e a ausência do papel de professor-pesquisador (Abs-TR) com uma probabilidade de 0,01`,
            }
        ]
    },{
        id: '1',
        title: "Engenharia de Software IA: Construindo um Futuro Justo e Inovador",
        description: "Parte 1 - Introdução: Na fascinante jornada da Engenharia de Software, testemunhamos uma evolução constante, repleta de mudanças significativas e um crescimento exponencial. Essa transformação está moldando um impacto profundo em nosso futuro. Mas como podemos garantir que essa revolução seja justa e cativante?",
        link: "/programming/post",
        post: [
            {
                header: "Dizemos adeus às crenças baseadas em boatos, dando lugar a fatos e dados concretos.",
                text: `Os modelos de negócios estão sendo reinventados, adaptando-se habilmente a um macroambiente dinâmico e em constante mudança. Tornou-se uma tarefa complexa conceber a ideia de vender produtos ou prestar serviços, a menos que a tecnologia esteja presente em todos os estágios dessa incrível jornada.`,
            },{
                header: "As pessoas anseiam por surpresas, por algo novo e diferente, e querem isso agora!",
                text: `buscam facilidade de acesso e simplificação de suas tarefas diárias. Talvez não seja o produto ou serviço que precise mudar, mas sim a maneira como a experiência do usuário/consumidor utiliza o produto ou serviço.`,
            },{
                header: "A transformação constante do modelo de negócio tornou-se uma obrigação para sobreviver nesse cenário em rápida evolução.",
                text: `Estratégias de negócios digitais e inovação são, portanto, elementos indispensáveis para criar uma vantagem competitiva sustentável. No âmbito das inteligências artificiais, a qualidade é crucial. Um software de IA injusto é considerado de má qualidade. Precisamos de sistemas de IA que sejam justos, responsáveis e transparentes. Surgem grandes questões sobre o que significa exatamente ter um software de IA justo.`,
            },{
                header: "No âmbito das inteligências artificiais, a qualidade é crucial.",
                text: `Um software de IA injusto é considerado de má qualidade. Precisamos de sistemas de IA que sejam justos, responsáveis e transparentes. Surgem grandes questões sobre o que significa exatamente ter um software de IA justo.`,
            },{
                header: "Imagine um sistema de software utilizando ML/AI sem um design, implementação e testes adequados.",
                text: `Isso pode resultar em consequências graves e prejudiciais. Fatores sensíveis, como raça, sexo, cor da pele, entre outros, devem ser considerados no pré-processamento, no processamento e no pós-processamento dos modelos de IA.`,
            },{
                header: "A justiça abrange diferentes campos e subcampos da inteligência artificial.",
                text: `Ela assume várias formas, desde a justiça individual e de grupo até a justiça híbrida. Reconhecemos que a saída de um modelo de ML pode ser injusta para uma ou mais variáveis protegidas e/ou subgrupos dentro dessas variáveis, e é aí que entra o estágio de pós-processamento.`,
            },{
                header: "Nossa busca por justiça não compromete o acesso às previsões e informações de atributos confidenciais, sem exigir acesso aos algoritmos e modelos de ML reais.",
                text: `Desenvolvemos um algoritmo de correção chamado RBA (Redução da Amplificação do Viés) para retificar quaisquer viéses indesejados.`,
            },{
                header: "Porém, enfrentamos desafios.",
                text: `Conceituar justiça é um deles, especialmente no contexto do software. Avaliar a imparcialidade dos dados e alcançar equidade e desempenho são demandas complexas, exigindo definições quantitativas claras de justiça. Estabelecer requisitos de imparcialidade na engenharia de IA tornou-se um requisito de qualidade para o software AI/ML.`,
            },{
                header: "Nossa abordagem abrange três etapas cruciais:",
                text: `pré-processamento, processamento e pós-processamento. Aprendizado de máquina justo, representação justa e processamento justo de linguagem natural são nossos objetivos. Utilizamos técnicas avançadas de avaliação de probabilidade para garantir a justiça em nosso software de IA, sempre encontrando soluções apropriadas.`,
            },{
                header: "Estamos determinados a verificar a imparcialidade em nossos produtos de IA, construindo definições adequadas de justiça.",
                text: `Nosso compromisso é garantir a justiça sem afetar outros requisitos essenciais do software AI. Na Engenharia de Software IA, estamos construindo um futuro cativante, onde a inovação e a justiça caminham de mãos dadas. Junte-se a nós nessa jornada emocionante rumo a um mundo melhor e mais equitativo.`,
            },
        ]
    }
]