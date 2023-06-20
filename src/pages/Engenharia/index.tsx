import styles from "../../styles/estrutura.module.css"
import { conteudoBlogEngenharia } from "@/src/components/Engenharia/DadosPostEngenharia";
import Cabecalho from "@/src/components/Programacao/Cabecalho";
import CorpoBlog from "@/src/components/Programacao/CorpoBlog";

export default function Engenharia() {
    return (
        <div className={styles.container}>
            <Cabecalho titulo="Engenharia"/>
            <div className={styles.postagens}>
                {
                    conteudoBlogEngenharia.map((element, index) => (
                        <CorpoBlog key={index} id={element.id} title={element.title} description={element.description} link={element.link} post={element.post} />
                    ))
                }
            </div>
        </div>
    )
}