import { useState } from 'react';
import styles from '../../../styles/subCabecalhoCorpoProgramminglanguages.module.css'
import EstruturaSelecao from '../EstruturaSelecao'

const languages = [
    {
        id: 1,
        title: "HTML",
        skills: [
            {
                id: 1,
                description: "Sintaxe do HTML",
                link: "http://localhost:3000/programming/post/1",
            }, {
                id: 2,
                description: "Estrutura do documento",
                link: "http://localhost:3000/programming/post/2",
            }, {
                id: 3,
                description: "Tags e atributos",
                link: "http://localhost:3000/programming/post/3",
            }, {
                id: 4,
                description: "Semântica do HTML",
                link: "http://localhost:3000/programming/post/4",
            }, {
                id: 5,
                description: "CSS",
                link: "http://localhost:3000/programming/post/7",
            }, {
                id: 6,
                description: "Acessibilidade",
            }, {
                id: 7,
                description: "SEO",
            }, {
                id: 8,
                description: "Responsividade",
                link: "http://localhost:3000/programming/post/8",
            }, {
                id: 9,
                description: "Boas práticas de programação:",
            }
        ]
    }, {
        id: 2,
        title: "CSS",
        skills: [
            {
                id: 1,
                description: "Box model",
            }, {
                id: 2,
                description: "Seletores",
            }, {
                id: 3,
                description: "Propriedades CSS",
            }, {
                id: 4,
                description: "Layouts",
            }, {
                id: 5,
                description: "Posicionamento",
            }, {
                id: 6,
                description: "Flexbox",
            }, {
                id: 7,
                description: "Animações e transições",
            }, {
                id: 8,
                description: "Pré-processadores CSS",
            }, {
                id: 9,
                description: "Metodologias CSS",
            }, {
                id: 10,
                description: "Boas práticas de programação",
            },
        ]
    }, {
        id: 3,
        title: "Javascript",
        skills: [
            {
                id: 1,
                description: "DOM",
            }, {
                id: 2,
                description: "Eventos",
            }, {
                id: 3,
                description: "Manipulação de elementos HTML",
            }, {
                id: 4,
                description: "AJAX",
            }, {
                id: 5,
                description: "jQuery",
            }, {
                id: 6,
                description: "JSON",
            }
        ]
    }, {
        id: 4,
        title: "Typescript",
        skills: [
            {
                id: 1,
                description: "JavaScript",
            }, {
                id: 2,
                description: "Sintaxe do TypeScript",
            }, {
                id: 3,
                description: "Tipos de dados e declarações de tipos",
            }, {
                id: 4,
                description: "Interfaces e classes",
            }, {
                id: 5,
                description: "Módulos e namespaces",
            }, {
                id: 6,
                description: "Generics",
            }, {
                id: 7,
                description: "Decoradores",
            }, {
                id: 8,
                description: "Ferramentas de desenvolvimento",
            }, {
                id: 9,
                description: "Conhecimento de bibliotecas e frameworks",
            }, {
                id: 10,
                description: "Boas práticas de programação",
            }
        ]
    }, {
        id: 5,
        title: "Python",
        skills: [
            {
                id: 1,
                description: "Sintaxe básica de Python",
            }, {
                id: 2,
                description: "Bibliotecas e módulos padrão do Python",
            }, {
                id: 3,
                description: "Estruturas de dados em Python",
            }, {
                id: 4,
                description: "Programação orientada a objetos em Python",
            }, {
                id: 5,
                description: "Bibliotecas populares em Python",
            }, {
                id: 7,
                description: "Testes e depuração em Python",
            }, {
                id: 8,
                description: "Boas práticas de codificação em Python",
            }
        ]
    }, {
        id: 6,
        title: "Java",
        skills: [
            {
                id: 1,
                description: "Sintaxe básica de Java",
            }, {
                id: 2,
                description: "Programação orientada a objetos em Java",
            }, {
                id: 1,
                description: "Estruturas de dados em Java",
            }, {
                id: 1,
                description: "Bibliotecas padrão do Java",
            }, {
                id: 1,
                description: "Desenvolvimento de aplicativos da web em Java",
            }, {
                id: 1,
                description: "Desenvolvimento de aplicativos desktop em Java",
            }, {
                id: 1,
                description: "Concorrência e paralelismo em Java",
            }, {
                id: 1,
                description: "Testes e depuração em Java",
            }, {
                id: 1,
                description: "Boas práticas de codificação em Java",
            },
        ]
    }
]

export default function SubCabecalhoCorpoProgramminglanguages() {
    const [popUp1, setPopUp1] = useState(true);
    const [popUp2, setPopUp2] = useState(false);
    const [popUp3, setPopUp3] = useState(false);
    const [popUp4, setPopUp4] = useState(false);
    const [popUp5, setPopUp5] = useState(false);
    const [popUp6, setPopUp6] = useState(false);

    const divStyles1 = {
        boxShadow: popUp1 ? "0px 0px 6px black" : "none",
    };
    const divStyles2 = {
        boxShadow: popUp2 ? "0px 0px 6px black" : "none",
    };
    const divStyles3 = {
        boxShadow: popUp3 ? "0px 0px 6px black" : "none",
    };
    const divStyles4 = {
        boxShadow: popUp4 ? "0px 0px 6px black" : "none",
    };
    const divStyles5 = {
        boxShadow: popUp5 ? "0px 0px 6px black" : "none",
    };
    const divStyles6 = {
        boxShadow: popUp6 ? "0px 0px 6px black" : "none",
      };

    function movimentoBotao1() {
        setPopUp1(!popUp1);
        setPopUp2(false);
        setPopUp3(false);
        setPopUp4(false);
        setPopUp5(false);
        setPopUp6(false);
    };
    function movimentoBotao2() {
        setPopUp1(false);
        setPopUp2(!popUp2);
        setPopUp3(false);
        setPopUp4(false);
        setPopUp5(false);
        setPopUp6(false);
    };
    function movimentoBotao3() {
        setPopUp1(false);
        setPopUp2(false);
        setPopUp3(!popUp3);
        setPopUp4(false);
        setPopUp5(false);
        setPopUp6(false);
    };
    function movimentoBotao4() {
        setPopUp1(false);
        setPopUp2(false);
        setPopUp3(false);
        setPopUp4(!popUp4);
        setPopUp5(false);
        setPopUp6(false);
    };
    function movimentoBotao5() {
        setPopUp1(false);
        setPopUp2(false);
        setPopUp3(false);
        setPopUp4(false);
        setPopUp5(!popUp5);
        setPopUp6(false);
    };
    function movimentoBotao6() {
        setPopUp1(false);
        setPopUp2(false);
        setPopUp3(false);
        setPopUp4(false);
        setPopUp5(false);
        setPopUp6(!popUp6);
    };

    return (
        <div className={styles.containerGlobal}>
            <div className={styles.borda}></div>
            <h1 className={styles.titulo}></h1>
            <div className={styles.containerEspaco}>
                <div className={styles.containerLabels}>
                    <div className={styles.coluna1}>
                        {
                            languages.map((elemento) => (<h1 key={elemento.id} className={styles.label}>{elemento.title}</h1>))
                        }
                    </div>
                    <div className={styles.coluna2}>
                        <div style={divStyles1} className={styles.barras} onClick={movimentoBotao1}><div className={styles.porcentagemBarra1}></div></div>
                        <div style={divStyles2} className={styles.barras} onClick={movimentoBotao2}><div className={styles.porcentagemBarra2}></div></div>
                        <div style={divStyles3} className={styles.barras} onClick={movimentoBotao3}><div className={styles.porcentagemBarra3}></div></div>
                        <div style={divStyles4} className={styles.barras} onClick={movimentoBotao4}><div className={styles.porcentagemBarra4}></div></div>
                        <div style={divStyles5} className={styles.barras} onClick={movimentoBotao5}><div className={styles.porcentagemBarra5}></div></div>
                        <div style={divStyles6} className={styles.barras} onClick={movimentoBotao6}><div className={styles.porcentagemBarra6}></div></div>
                    </div>
                </div>
                <div className={styles.containerSkills}>
                    {popUp1 &&
                        <EstruturaSelecao id={languages[0].id} title={languages[0].title} skills={languages[0].skills} />
                    }{popUp2 &&
                        <EstruturaSelecao id={languages[1].id} title={languages[1].title} skills={languages[1].skills} />
                    }{popUp3 &&
                        <EstruturaSelecao id={languages[2].id} title={languages[2].title} skills={languages[2].skills} />
                    }{popUp4 &&
                        <EstruturaSelecao id={languages[3].id} title={languages[3].title} skills={languages[3].skills} />
                    }{popUp5 &&
                        <EstruturaSelecao id={languages[4].id} title={languages[4].title} skills={languages[4].skills} />
                    }{popUp6 &&
                        <EstruturaSelecao id={languages[5].id} title={languages[5].title} skills={languages[5].skills} />
                    }
                </div>
            </div >
        </div>
    )
}


