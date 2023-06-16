import styles from "../../styles/inteligencia.module.css"
import { conteudoBlogInteligencia } from "@/src/components/Inteligencia/DadosPostInteligencia";
import Cabecalho from "@/src/components/Programacao/Cabecalho";
import CorpoBlog from "@/src/components/Programacao/CorpoBlog";

export default function Inteligencia() {
    return (
        <div className={styles.container}>
            <Cabecalho titulo="Inteligencia" />
            <div className={styles.postagens}>
                {
                    conteudoBlogInteligencia.map((element, index) => (
                        <CorpoBlog key={index} id={element.id} title={element.title} description={element.description} link={element.link} post={element.post} />
                    ))
                }
            </div>
        </div >
    )
}