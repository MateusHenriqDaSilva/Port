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
}

export const contentBlog: IContentBlog[] = [
    {
        id: '9',
        title: "C# Codigos Flexiveis com Polimorfismo",
        description: "Polimorfismo é a capacidade de um objeto assumir muitas formas. Em C#, isso é feito através de herança e interfaces. O polimorfismo permite que um objeto seja tratado como um objeto de sua classe base ou como um objeto de uma de suas classes derivadas. Isso significa que, em vez de escrever código separado para cada classe derivada, você pode escrever um código genérico para a classe base e usá-lo com todas as classes derivadas",
        link: "/programming/post",
        post: [
            {
                text: `Aprender polimorfismo em C# é importante porque é um conceito fundamental da programação orientada a objetos e permite criar um código mais flexível, modular e reutilizável`,
            }, {
                text: `Polimorfismo em C# é importante porque ajuda a escrever código mais flexível, modular e reutilizável, economizando tempo de codificação e facilitando a manutenção`,
            }, {
                text: `Para isso utilizamos os seguintes comandos abaixo dentro de Program.cs`,
                code: `# Lendo c# do zero
                ## Dotnet sdk download
                Link: https://dotnet.microsoft.com/en-us/download
                Terminal: dotnet new console
                Executar codigo: dotnet run
                `
            }, {
                text: `Primeiro programa inicial C# Polimorfismo`,
                code: `using System;

                namespace Funcoes
                {
                    \tclass Exemplos
                    \t{
                        \t\tstatic void Main(string[] args)
                        \t\t{
                            \t\t\t// Polimorfismo
                            \t\t\tConsole.WriteLine("Sons de diferentes Tipos de Pessoas");
                            \t\t\t// Objeto Humano Instanciado
                            \t\t\tIPessoa humano = new Humano();
                            \t\t\thumano.Som();
                            \t\t\t// Objeto Ogro
                            \t\t\tIPessoa ogro = new Ogro();
                            \t\t\togro.Som();
                            \t\t\t// Objeto Elfo
                            \t\t\tIPessoa elfo = new Elfo();
                            \t\t\telfo.Som();
                
                            \t\t\t// Definindo sons de diferentes pessoas 
                            \t\t\tConsole.WriteLine("Sons aleatorios de diferentes pessoas");
                            \t\t\t// Criando uma fabrica de pessoas aleatoriamente
                            \t\t\tIPessoa pessoa = PessoaProducao.GetPessoa();
                            \t\t\tConsole.WriteLine("aleatorio: 1");
                            \t\t\t// chamando funcao interna para criar som 
                            \t\t\tPessoaProducao.CriarSom(pessoa);
                            \t\t\tConsole.WriteLine("aleatorio: 2");
                            \t\t\tpessoa = PessoaProducao.GetPessoa();
                            \t\t\t// chamando funcao interna para criar som 
                            \t\t\tPessoaProducao.CriarSom(pessoa);
                            \t\t\tConsole.WriteLine("aleatorio: 3");
                            \t\t\tpessoa = PessoaProducao.GetPessoa();
                            \t\t\t// chamando funcao interna para criar som 
                            \t\t\tPessoaProducao.CriarSom(pessoa);
                
                            \t\t\tConsole.ReadKey();
                    \t\t}
                
                    \t\t\t// Definindo Interface Super Types
                    \t\t\tinterface IPessoa
                    \t\t\t{
                        \t\t\t\t  void Som();
                        \t\t\t}
                        \t\t\t// Criando a classe pessoa de forma abstrata e os metodos abstratos
                        \t\t\tabstract class Pessoa {
                            \t\t\t\tpublic abstract void Som();
                            \t\t\t}
                            \t\t\t// Classes abstratas de Tipos de Pessoas 
                            \t\t\t// Difinicao da Classe humano e override nas classes
                
                            \t\t\t// Ao usar override, estamos dizendo ao compilador que o método na subclasse deve substituir o comportamento do método da superclasse, 
                            \t\t\t// em vez de simplesmente ocultá-lo. Dessa forma, a subclasse herda a funcionalidade do método da superclasse, 
                            \t\t\t// mas também pode adicionar ou modificar comportamentos específicos, de acordo com as necessidades da subclasse.
                            \t\t\tclass Humano : IPessoa
                            \t\t\t{
                                \t\t\t\tpublic void Som()
                                \t\t\t{
                                    \t\t\t\tConsole.WriteLine("Inteligencia educação resolve tudo !!!");
                                    \t\t\t}
                                    \t\t\t}
                                    \t\t\t// Definicao da classe Ogro
                                    \t\t\tclass Ogro : IPessoa
                                    \t\t\t\t{
                                        \t\t\t\tpublic void Som()
                                        \t\t\t{
                                            \t\t\t\tConsole.WriteLine("Ola seres inferiores !!!");
                                            \t\t\t}
                                            \t\t}
                                            \t\t// Definicao da classe Elfo
                                            \t\tclass Elfo : IPessoa
                                            \t\t{
                                                \t\t\tpublic void Som()
                                                \t\t{
                                                    \t\t\tConsole.WriteLine("Humanos Fracos e inuteis !!!");
                                                    \t\t}
                        \t\t}
                        \t\t// Criando a classe abstrata de producao de pessoas 
                        \t\tclass PessoaProducao
                        \t\t{
                            \t\t\t// Definindo um metodo STATIC dentro da classe pessoa
                            \t\t\tinternal static IPessoa GetPessoa()
                            \t\t\t{
                                \t\t\t\tIPessoa pessoa;
                                \t\t\t\t// Instanciando uma classe random
                                \t\t\t\tRandom random = new Random();
                                \t\t\t\t// Definindo temporariamente os numeros aleatorios
                                \t\t\t\tint temporario = random.Next(0, 3);
                                \t\t\t\t// Verificação da criação de fabrica aleatoria utilizando switch
                                \t\t\t\tpessoa = temporario switch
                                \t\t\t{
                                    \t\t\t\t0 => new Humano(),
                                    \t\t\t\t1 => new Ogro(),
                                    \t\t\t\t_ => new Elfo()
                                    \t\t\t};
                                    \t\t\t// verificação de fabrica aleatoria utilizando IF
                                    \t\t\t// if (temporario == 0)
                                    \t\t\t// {
                                        \t\t\t\t//     pessoa = new Humano();
                                        \t\t\t// }
                                        \t\t\t// else if (temporario == 1)
                                        \t\t\t// {
                                            \t\t\t\t//     pessoa = new Ogro();
                                            \t\t\t// }
                                            \t\t\t// else
                                            \t\t\t// {
                                                \t\t\t\t//     pessoa = new Elfo();
                                                \t\t\t// }
                
                                                \t\t\t// Retorna o objeto criado
                                                \t\t\t\treturn pessoa;
                                                \t\t\t}
                                                \t\t\t// Funcao interna da classe estatica para criar som de pessoas 
                            
                                                \t\t\tinternal static void CriarSom(IPessoa pessoa)
                                                \t\t\t{
                                                    \t\t\t\tpessoa.Som();
                                                    \t\t\t}
                                                    \t\t}
                    \t}
                }
                `
            }
        ]
    }, {
        id: '8',
        title: "Responsive",
        description: "A responsividade é uma técnica de desenvolvimento de interfaces que permite que um site ou aplicativo se adapte a diferentes tamanhos de tela e dispositivos, garantindo que o conteúdo seja exibido de maneira clara e legível em todas as resoluções",
        link: "/programming/post",
        post: [
            {
                text: `Aumento do uso de dispositivos móveis para navegar na internet, a responsividade tornou-se uma necessidade para garantir que seu site ou aplicativo seja acessível a todos os usuários`,
            }, {
                text: `Se adapta às telas de diferentes tamanhos e orientações, tornando-o mais fácil de navegar e interagir com o conteúdo, para isso copie o exemplo de HTML abaixo:`,
                code: `<!DOCTYPE html>
                <html lang="en">
                <head>
                    \t<meta charset="UTF-8">
                    \t<meta http-equiv="X-UA-Compatible" content="IE=edge">
                    \t<meta name="viewport" content="width=device-width, initial-scale=1.0">
                    \t<link rel="stylesheet" href="Teste7.css">
                    \t<title>Document</title>
                </head>
                <body>
                \t<div class="cabecalho">
                  \t  \t    <ul class="containerLista">
                  \t\t  \t      <li class="lista item1">Item 1</li>
                  \t\t\t  <li class="lista item2">Item 2</li>
                  \t\t\t    <li class="lista item3">Item 3</li>
                  \t\t\t    <li class="lista item4">Item 4</li>
                  \t\t\t    <li class="lista item5">Item 5</li>
                  \t\t</ul>
                  \t</div>
                  \t<div class="espacoDoBanner">
                  \t\t    <img class="banner"src="img/exampleBanner.jpg" alt="" />
                  \t</div>
                  \t<div class="conteudo">
                  \t\t    <div class="quadrado">
                  \t\t\t        <h1 class="titulo">Titulo</h1>
                  \t\t\t    <h2 class="descricao">Descricao do conteudo</h2>
                  \t\t</div>
                  \t\t    <div class="quadrado">
                  \t\t\t      <h1 class="titulo">Titulo</h1>
                  \t\t\t    <h2 class="descricao">Descricao do conteudo</h2>
                  \t\t</div>
                  \t\t  <div class="quadrado">
                  \t\t\t      <h1 class="titulo">Titulo</h1>
                  \t\t\t    <h2 class="descricao">Descricao do conteudo</h2>
                  \t\t</div>
                  \t\t  <div class="quadrado">
                  \t\t\t      <h1 class="titulo">Titulo</h1>
                  \t\t\t    <h2 class="descricao">Descricao do conteudo</h2>
                  \t\t</div>
                  \t</div>
                  \t<!-- Criando uma tabela  -->
                  \t<div class="espacoTabela">
                  \t\t<table class="tabela">
                  \t\t\t<thead class="cabecalhoTabelaContainer">
                  \t\t\t\t<tr class="linhaTabelaCabecalho">
                  \t\t\t\t\t<th class="cabecalhoTabela">Cabecalho 1</th>
                  \t\t\t\t\t<th class="cabecalhoTabela">Cabecalho 2</th>
                  \t\t\t\t\t<th class="cabecalhoTabela">Cabecalho 3</th>
                  \t\t\t\t</tr>
                  \t\t\t</thead>
                  \t\t\t<tbody>
                  \t\t\t\t<tr class="linhaTabelaCorpo">
                  \t\t\t\t\t<td class="corpoTabela">Corpo 1</td>
                  \t\t\t\t\t<td class="corpoTabela">Corpo 2</td>
                  \t\t\t\t\t<td class="corpoTabela">Corpo 3</td>
                  \t\t\t\t</tr>
                  \t\t\t</tbody>
                  \t\t</table>
    \t</div>
                </body>
                </html>`
            }, {
                header: "Aumento do uso de dispositivos móveis para navegar na internet, a responsividade tornou-se uma necessidade para garantir que seu site ou aplicativo seja acessível a todos os usuários",
                text: `Fornecem uma experiência de usuário melhor e mais consistente em todas as plataformas`,
                code: `*{
                    \t/* Container Global do CSS */
                    \tpadding: 0;
                    \tmargin: 0;
                }
                
                body {
                    \t/* container do corpo em HTML */
                    \tpadding: 0;
                    \tmargin: 0;
                }
                
                .cabecalho{
                    \tbackground: black;
                    \tcolor: white;
                    \theight: 80px;
                    \t/* Sombra do cabecalho na pagina */
                    \tbox-shadow: 0px 0px 10px black
                }
                
                .containerLista{
                    \t/* Deixa o container flexivel */
                    \tdisplay: flex;
                    \t/* Alinha o container no centro */
                    \tjustify-content: center;
                    \t/* Tira a marcacao de estilo no <li> */
                    \tlist-style: none;
                    \tcolor: white;
                }
                
                .lista{
                    \tpadding: 20px 20px;
                }
                
                .conteudo{
                    \tdisplay: flex;
                    \twidth: 100%;
                    \tjustify-content: center;
                    \ttext-align: center;
                }
                
                .quadrado{
                    \theight: 500px;
                    \twidth: 500px;
                    \tmargin: 20px;
                    \tmargin-top: -200px;
                    \tbackground: black;
                    \tbox-shadow: 0px 0px 10px black;
                    \t/* Deixando a borda redonda */
                    \tborder-radius: 10px;
                    \tcolor: white;
                }
                
                .descricao{
                    \tdisplay: flex;
                    \t/* Espacamento interno no componente */
                    \tpadding: 30px;
                    \tjustify-content: center;
                    \t/* Alinha texto no centro */
                    \ttext-align: center;
                    \ttext-transform: uppercase;
                }
                
                .quadrado:hover{
                    \theight: 500px;
                    \tbackground: rgb(35, 131, 35);
                    \tbox-shadow: 0px 0px 10px black;
                    \t/* Deixando a borda redonda */
                    \tborder-radius: 10px;
                    \tcolor: white;
                }
                
                
                .banner {
                    \theight: 500px;
                    \twidth: 100%;
                }
                
                .espacoTabela{
                    \theight: 500px;
                    \twidth: 100%;
                    \tdisplay: flex;
                    \tjustify-content: center;
                    \ttext-align: center;
                    \tmargin-bottom: 300px;
                }
                
                .tabela{
                    \theight: 500px;
                    \twidth: 800px;
                    \tborder: 1px solid black;
                }
                
                .linhaTabelaCabecalho{
                    \theight: 80px;
                    \tbackground: rgb(216, 216, 216);
                }
                
                .cabecalhoTabela{
                    \tborder: 1px solid black;
                }
                
                .linhaTabelaCorpo{
                    \tborder: 1px solid black;
                }
                
                .corpoTabela{
                    \tborder: 1px solid black;
                }
                
                /* Deixando a pagina resposiva conforme o parametro de tamanho */
                @media only screen and (max-width: 768px) {
                    \t.conteudo{
                        \t\tdisplay: flex;
                        \t\tflex-direction: column;
                        \t\talign-items: center;
                        \t\tjustify-content: center;
                        \t\tmargin: 0px;
                    }
                    .quadrado{
                        \tmargin: 30px 0px;
                    }
                }`
            }
        ]
    }, {
        id: '7',
        title: "CSS",
        description: "É uma ferramenta poderosa que pode ajudá-lo a levar o design do seu website para o próximo nível",
        link: "/programming/post",
        post: [
            {
                header: "Benefícios do CSS é que ele permite separar o design e o layout do seu site do próprio conteúdo",
                text: `isso significa que você pode fazer alterações no design do seu site sem ter que editar cada página individualmente`,
            }, {
                text: `Siga abaixo conforme o codigo HTML`,
                code: `<!DOCTYPE html>
                <html lang="en">
                <head>
                    \t<meta charset="UTF-8">
                    \t<meta http-equiv="X-UA-Compatible" content="IE=edge">
                    \t<meta name="viewport" content="width=device-width, initial-scale=1.0">
                    \t<link rel="stylesheet" href="Teste7.css">
                    \t<title>Document</title>
                </head>
                <body>
                \t<div class="cabecalho">
                  \t  \t    <ul class="containerLista">
                  \t\t  \t      <li class="lista item1">Item 1</li>
                  \t\t\t  <li class="lista item2">Item 2</li>
                  \t\t\t    <li class="lista item3">Item 3</li>
                  \t\t\t    <li class="lista item4">Item 4</li>
                  \t\t\t    <li class="lista item5">Item 5</li>
                  \t\t</ul>
                  \t</div>
                  \t<div class="espacoDoBanner">
                  \t\t    <img class="banner"src="img/exampleBanner.jpg" alt="" />
                  \t</div>
                  \t<div class="conteudo">
                  \t\t    <div class="quadrado">
                  \t\t\t        <h1 class="titulo">Titulo</h1>
                  \t\t\t    <h2 class="descricao">Descricao do conteudo</h2>
                  \t\t</div>
                  \t\t    <div class="quadrado">
                  \t\t\t      <h1 class="titulo">Titulo</h1>
                  \t\t\t    <h2 class="descricao">Descricao do conteudo</h2>
                  \t\t</div>
                  \t\t  <div class="quadrado">
                  \t\t\t      <h1 class="titulo">Titulo</h1>
                  \t\t\t    <h2 class="descricao">Descricao do conteudo</h2>
                  \t\t</div>
                  \t\t  <div class="quadrado">
                  \t\t\t      <h1 class="titulo">Titulo</h1>
                  \t\t\t    <h2 class="descricao">Descricao do conteudo</h2>
                  \t\t</div>
                  \t</div>
                </body>
                </html>`
            }, {
                header: "Siga abaixo conforme o codigo CSS",
                text: `Todos os passo a passo para execução estão nas aulas anterior ou no video`,
                code: `*{
                    \t/* Container Global do CSS */
                    \tpadding: 0;
                    \tmargin: 0;
                }
                
                body {
                    \t/* container do corpo em HTML */
                    \tpadding: 0;
                    \tmargin: 0;
                }
                
                .cabecalho{
                    \tbackground: black;
                    \tcolor: white;
                    \theight: 80px;
                    \t/* Sombra do cabecalho na pagina */
                    \tbox-shadow: 0px 0px 10px black
                }
                
                .containerLista{
                    \t/* Deixa o container flexivel */
                    \tdisplay: flex;
                    \t/* Alinha o container no centro */
                    \tjustify-content: center;
                    \t/* Tira a marcacao de estilo no <li> */
                    \tlist-style: none;
                    \tcolor: white;
                }
                
                .lista{
                    \tpadding: 20px 20px;
                }
                
                .conteudo{
                    \tdisplay: flex;
                    \tjustify-content: center;
                }
                
                .quadrado{
                    \theight: 500px;
                    \twidth: 500px;
                    \tmargin: 20px;
                    \tmargin-top: -200px;
                    \tbackground: black;
                    \tbox-shadow: 0px 0px 10px black;
                    \t/* Deixando a borda redonda */
                    \tborder-radius: 10px;
                    \tcolor: white;
                    \tz-index: 1;
                }
                
                .quadrado:hover{
                    \theight: 500px;
                    \twidth: 500px;
                    \tbackground: rgb(35, 131, 35);
                    \tbox-shadow: 0px 0px 10px black;
                    \t/* Deixando a borda redonda */
                    \tborder-radius: 10px;
                    \tcolor: white;
                }
                
                .titulo{
                    \tdisplay: flex;
                    \tjustify-content: center;
                }
                
                .descricao{
                    \tdisplay: flex;
                    \t/* Espacamento interno no componente */
                    \tpadding: 30px;
                    \tjustify-content: center;
                    \t/* Alinha texto no centro */
                    \ttext-align: center;
                    \ttext-transform: uppercase;
                }
                
                .banner {
                    \theight: 500px;
                    \twidth: 100%;
                }`
            },
        ]
    }, {
        id: '6',
        title: "Lendo atributos HTML com CSS",
        description: "Os atributos CSS de um elemento, é possível identificar quais estilos estão sendo aplicados e quais não estão. Isso pode ajudar a resolver problemas de layout e de compatibilidade entre diferentes navegadores",
        link: "/programming/post",
        post: [
            {
                header: "Ao ler os atributos CSS, é possível criar animações em JavaScript ou em outras bibliotecas para manipular a aparência do elemento",
                text: `Lendo os atributos CSS, é possível personalizar a aparência de um elemento em tempo de execução, como alterar a cor do texto ou a largura de um elemento`,
                code: `<div class="quadrado">
                \tQuadrado
            </div>`
            }, {
                header: "Definindo dois atributos:",
                text: `Lendo os atributos CSS, é possível modificar a aparência de um elemento em resposta a eventos, como quando o mouse passa sobre o elemento ou quando o usuário clica nele`,
                code: `<div class="quadrado verde">
                \tQuadrado
            </div>`
            }, {
                header: "Chamando os atributos dentro do CSS sendo possivel chamar os atributos em JAVASCRIPT",
                text: `Porem o foco é mais no HTML e um pouco de CSS mais para frente irei ensinar detalhadamente, lendo atributos HTML com CSS"`,
                code: `<div class="quadrado verde">
                \tQuadrado
            </div>`
            }, {
                text: `HTML completo`,
                code: `<!DOCTYPE html>
                <html lang="en">
                <head>
                \t<meta charset="UTF-8">
                    \t<meta http-equiv="X-UA-Compatible" content="IE=edge">
                    \t<meta name="viewport" content="width=device-width, initial-scale=1.0">
                    \t<link rel="stylesheet" href="Aula6.css">
                    \t<title>Document</title>
                </head>
                <body>
                \t<!-- div com o atributo quadrado -->
                    \t<div class="quadrado">
                    \t\tQuadrado
                    \t</div>
                    \t<!-- div com o atributo quadrado verde-->
                    \t<div class="quadrado verde">
                    \t\tQuadrado Verde
                    \t</div>
                </body>
                </html>`
            }, {
                text: `CSS completo`,
                code: `.quadrado{
                    \theight: 100px;
                    \twidth: 100px;
                    \tfont-size: 20px;
                    \tbackground: blue;
                    \tcolor: white;
                }
                
                .verde{
                    \tbackground: green;
                    \tcolor: white;
                }`
            }
        ]
    }, {
        id: '5',
        title: "Trabalhando com imagens e videos em HTML",
        description: "Imagens e os vídeos são partes essenciais do mundo digital em que vivemos atualmente. Esses elementos visuais têm o poder de transmitir mensagens e informações de maneira mais clara e eficaz do que o texto simples",
        link: "/programming/post",
        post: [
            {
                text: `Adicionando imagem na sua pagina`,
                code: `tag: \t<img></img>
                \tTipos de dados:
                \t\t.gif
                \t\t.jpg
                \t\t.jpeg
                \t\t.png
                \t\t.svg
                
                <figure>
                \t<img src="/images/logo.png" alt="descricao" title="logo">
                \t<figcaption>Caption text</figcaption>
            </figure>`
            }, {
                text: `Link em imagens ao clicar na imagens navega para uma nova pagina`,
                code: `<a href="url"><img src="/images/logo.png" alt=”descricao”></a>`
            }, {
                text: `Utilizando imagem dentro do CSS`,
                code: `ul {
                    \tlist-style-image: url(/images/logo.png)
                }
                
                <ul>
                    \t<li>descricao 1</li>
                    \t<li>descricao 2</li>
                    \t<li>descricao 3</li>
                </ul>`
            }, {
                text: `Alinhamento de imagens e textos`,
                code: `element {
                    \tvertical-align: baseline | bottom | middle | top
                }`
            }, {
                text: `Colocando imagem na pagina pelo CSS`,
                code: `element{
                    \tbackground-image: url(file)
                    \twidth: 500px;
                    \theight: 200px;
                    \ttext-align: center;
                }`
            }, {
                text: `Html uilizado para o exemplo`,
                code: `<div class="image">
                \t<h1>Bem Vindo!</h1>
                \t<h2>Texto de exemplo</h2>
            </div>
            <div class="main">
            \tCentro da pagina aqui.
            </div>`
            }, {
                text: `Exemplo de uma pagina com imagem centralizada CSS`,
                code: `image {
                    \twidth: 100vw;
                    \theight: 100vh;
                    \tbackground-image: url(/images/toronto.jpg);
                    \tbackground-position: center center;
                    \tbackground-size: cover;
                }`
            }, {
                text: `Exemplo com video:`,
                code: `<video src="/videos/movie.mp4"
                \tposter="/images/movie-poster.jpg"
                \twidth="625"
                \theight="480"
                \tcontrols
                \tautoplay
                \tloop>
            </video>`
            }, {
                text: `Exemplo utilizando audio:`,
                code: `<audio controls
                autoplay
                loop>
            <source src="/audio/music.mp3"
                \ttype="audio/mp3">
            <source src="/audio/music.wav"
            \ttype="audio/wav">
            <source src="/audio/music.webm"
            \ttype="audio/webm">
            <source src="/audio/music.ogg"
            \ttype="audio/ogg">
            <source src="/audio/music.m4a"
            \ttype="audio/mp4">
            </audio>`
            }
        ]
    }, {
        id: '4',
        title: "Semantica do HTML",
        description: "Garantir que o conteúdo da sua página seja compreensível, acessível e indexável, resultando em uma melhor experiência do usuário e maior alcance da sua mensagem",
        link: "/programming/post",
        post: [
            {
                header: "Fornecer significado e estrutura para o conteúdo de uma página web",
                text: `Para isso crie os arquivo teste.html e teste.css link o css a pagina conforme a postagem anterior`,
            }, {
                text: `Crie a estrutura conforme o codigo abaixo: `,
                code: `<!DOCTYPE html>
                <html lang="en">
                <head>
                    \t<meta charset="UTF-8">
                    \t<meta http-equiv="X-UA-Compatible" content="IE=edge">
                    \t<meta name="viewport" content="width=device-width, initial-scale=1.0">
                    \t<title>Document</title>
                    \t<!-- Vinculação do CSS na pagina -->
                    \t<link rel="stylesheet" href="./Aula4.css">
                </head>
                <body>
                \t<!-- Cabecalho da pagina "HEADER" -->
                \t<div class="header">
                \t\t<ul class="lista">
                \t\t\t<li class="conteudo"><a href="https://www.youtube.com/">Youtube</a></li>
                \t\t\t<li class="conteudo"><a href="https://www.facebook.com/">Facebook</a></li>
                \t\t\t<li class="conteudo"><a href="https://www.instagram.com/">Instagram</a></li>
                \t\t</ul>
                \t</div>
                \t  <!-- FIM do Cabecalho da pagina -->
                \t  <!-- Corpo da pagina "MAIN" -->
                \t  <div class="main">
                \t\t      <ul class="listaConteudo">
                \t\t\t        <li class="item">Lista de temas 1</li>
                \t\t\t      <li class="item">Lista de temas 2</li>
                \t\t\t      <li class="item">Lista de temas 3</li>
                \t\t  </ul>
                \t</div>
                \t  <!-- FIM do corpo da pagina -->
                \t  <!-- Rodape da pagina "FOOTER" -->
                \t  <div class="footer">
                \t\t      &copy; Finalizando o fim da pagina
                \t</div>
                \t\t  <!-- FIM do Rodape da pagina -->
                </body>
                </html>
                `,
            }, {
                text: `Utilize o seguinte codigo dentro do seu CSS`,
                code: `*{
                    \tpadding: 0px;
                    \tmargin: 0px;
                    \twidth: 100%;
                }
                
                body{
                    \tpadding: 0px;
                    \tmargin: 0px;
                }
                
                .header{
                    \tdisplay: flex;
                    \tpadding: 0px;
                    \tmargin: 0px;
                }
                
                .lista{
                    \tdisplay: flex;
                    \tjustify-content: center;
                    \tflex-direction: row;
                    \tcolor: white;
                    \theight: 80px;
                    \talign-items: center;
                    \tbackground-color: rgb(216, 216, 216);
                }
                
                .conteudo{
                    \tjustify-content: center;
                    \ttext-align: center;
                    \tmargin: 0px;
                    \tpadding: 0px;
                    \tlist-style: none;
                }
                
                a{
                    \ttext-decoration: none;
                    \tcolor: rgb(0, 19, 105);
                    \tfont-size: 20px;
                }
                
                .main{
                    \tdisplay: flex;
                    \ttext-align: center;
                    \talign-items: center;
                    \tjustify-content: center;
                }
                
                .listaConteudo{
                    \tdisplay: flex;
                    \tflex-direction: column;
                    \tpadding: 60px;
                    \tlist-style: none;
                }
                
                .item{
                    \tfont-size: 20px;
                    \tpadding: 20px 0px;
                    \tmargin: 0px;
                }
                
                .footer{
                    \tdisplay: flex;
                    \tjustify-content: center;
                    \tfont-size: 13px;
                    \tfont-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                }`
            }
        ]
    }, {
        id: '3',
        title: "Tags e Atributos",
        description: "Com as tags, podemos estruturar o conteúdo de nossas páginas, definindo seções, parágrafos, títulos, imagens e muito mais",
        link: "/programming/post",
        post: [
            {
                header: "Alterando os textos em sua pagina",
                text: `Para isso crie os arquivo teste.html e teste.css link a pagina conforme a postagem anterior`,
            }, {
                header: "Acesse o site do Google Fonts: ",
                text: `Clique sobre a fonte desejada, No canto direito da tela clique em IMPORT Copie o codigo e cole dentro do CSS`,
                code: `<!DOCTYPE html>
                <html lang="en">
                <head>
                    \t<meta charset="UTF-8">
                    \t<meta http-equiv="X-UA-Compatible" content="IE=edge">
                    \t<meta name="viewport" content="width=device-width, initial-scale=1.0">
                    \t<title>Document</title>
                    \t<!-- Linkando css na pagina -->
                    \t<link rel="stylesheet" href="Aula3.css">
                </head>
                <body>
                    \t<h1>
                    \t\tteste copiado do google fonts
                    \t</h1>
                    \t<h2>
                    \t\tteste atributo 1
                    \t</h2>
                    \t<h3>
                    \t\tteste atributo 2
                    \t</h3>
                    \t<!-- Alinhamento de estrutura de texto -->
                    \t<!-- Espacamento de div 1 -->
                    \t<div>
                    \t\t<h1 style="text-align: left;">texto teste 1</h1>
                    \t</div>
                    \t<!-- Espacamento de div 2 -->
                    \t<div>
                    \t\t<h1 style="text-align: center;">texto teste 2</h1>
                    \t</div>
                    \t<!-- Espacamento de div 3 -->
                    \t<div>
                    \t\t<h1 style="text-align: right;">texto teste 2</h1>
                    \t</div>
                    \t<div style="text-indent: 1em">
                    \t<!-- Identa o espacamento na DIV -->
                    \t<h1>teste indent 1</h1>
                    \t</div>
                </div>  
                </body>
                </html>`,
            }, {
                text: `Estilo utilizando dentro do CSS para o exemplo:`,
                code: `/* Importado do GOOGLE FONTS: https://fonts.google.com/specimen/Sigmar */
                @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap');
                
                h1 {
                    \t/* Copiando do Google Fonts */
                    \t\tfont-family: 'Rajdhani', sans-serif; 
                    \t/* Font font-weight deixa o texto em formato bold */
                    \t\tfont-weight: 200;
                    /* Alinha o texto a esquerda */
                    \t\ttext-align: left;
                    /* Alinha o texto no centro */
                    \t\ttext-align: center;
                    \t/* Alinha o texto a direita */
                    \t\ttext-align: right;
                    \t/* Alinha o texto conforme o espacamento da div anterior */
                    \t\ttext-align: justify;
                }
                h2, h3{
                    \t/* Utilizando CSS com 2 atributos */
                    \t\ttext-align: center;
                }
                `
            }
        ]
    }, {
        id: '2',
        title: "Estrutura de página em HTML",
        description: "Organizar seu conteúdo em seções lógicas e hierarquias claras, garantindo que seu site seja fácil de navegar e usar",
        link: "/programming/post",
        post: [
            {
                header: "Criar páginas mais acessíveis e amigáveis para motores de busca",
                text: `Crie o arquivo teste.html e o teste.css dentro de uma pasta ou apenas contiue conforme a postagem anterior`,
                code: `<!DOCTYPE html>
                <html lang="en">
                <head>
                \t<meta charset="UTF-8">
                \t<meta http-equiv="X-UA-Compatible" content="IE=edge">
                \t<meta name="viewport" content="width=device-width, initial-scale=1.0">
                \t<title>Document</title>
                \t<!-- Link para linkar seu componente CSS na pagina HTML -->
                \t\t<link rel="stylesheet" type="text/css" href="Aula2.css">
                </head>
                \t<body>
                \t\t<!-- Container da pagina -->
                \t\t<div>
                \t\t\t<h1>Titulo dentro do container DIV</h1>
                \t\t</div>
                \t\t<!-- <ul> para estrutura para lista "NÃO ORDENADA" -->
                \t\t<ul>
                \t\t<!-- Item do componente da Lista -->
                \t\t\t<li>Componente 1</li>
                \t\t\t<li>Componente 2</li>
                \t\t\t<li>Componente 3</li>
                \t\t\t<li>Componente 4</li>
                \t\t</ul>
                \t\t<!-- Puchando o campo spam com estilo em CSS aplicado -->
                \t\t<span>teste</span>
                \t\t<!-- Container de espacamento da pagina 1 -->
                \t\t<div>
                \t\t\tTeste1 teste1 
                \t\t</div>
                \t\t<!-- Hr para tracar uma linha de separacao na pagina -->
                \t\t<hr>
                \t\t<div>
                \t\t\t<!-- Container de espacamento da pagina 2 -->
                \t\t\tTeste2 teste2
                \t\t</div>
                \t\t<!-- lista ordenada -->
                \t\t<ol>
                \t\t\t<li>teste 1</li>
                \t\t\t<li>teste 2</li>
                \t\t\t<li>teste 3</li>
                \t\t\t<li>teste 4</li>
                \t\t\t<li>teste 5</li>
                \t\t</ol>
                \t</body>
                </html>`
            }, {
                text: `Estilo utilizando dentro do CSS para o exemplo:`,
                code: `span {
                    \tbackground-color: black;
                    \tfont-size: 50px;
                    \tcolor: white;
                }`
            }
        ]
    }, {
        id: '1',
        title: "Iniciando HTML",
        description: "Primeiros passos com HTML do zero",
        link: "/programming/post",
        post: [
            {
                header: "Cabecalho / Titulo",
                text: `Usando h1 dentro do seu codigo HTML para fazer isso crie um arquivo teste.html`,
                code: `<!DOCTYPE html>
                <html lang="en">
                <head>
                \t\t<meta charset="UTF-8">
                    \t\t<meta http-equiv="X-UA-Compatible" content="IE=edge">
                    \t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">
                    \t\t<title>Document</title>
                </head>
                \t<body>
                \t\t<!-- Utilize o codigo abaixo para cabecalho na estrutura do seu site -->
                    \t\t<h1>Cabecalho para textos</h1>
                    \t</body>
                </html>`
            }, {
                header: "Estilizando o componente de texto com CSS",
                text: "Para estilizar crie um arquivo teste.css",
                code: `h1 {
                    /* Font size aumenta letra */
                    \tfont-size: 20px;
                    /* Color muda a cor da letra */
                    \tcolor: white;
                    /* Background Altera o fundo do container */
                    \tbackground: black;
                    /* Alinha o texto no centro da pagina */
                    \t text-align: center
                    /* alterar o estilo da fonte, na qual todas as letras minúsculas são transformadas em maiúsculas */
                    \t font-variant: small-caps;
                }`
            }, {
                text: "Utilizando Css direto no componente ",
                code: `\t<h1 style="font-size: 20px; font-variant: small-caps;">cabecalho para textos<h1>
                \t <a href="https://www.youtube.com/">Deixa um texto e faz com que voce link para a pagina</a>
                \t <blockquote>paragrafo e linha no texto</blockquote>`
            }
        ]
    }
]