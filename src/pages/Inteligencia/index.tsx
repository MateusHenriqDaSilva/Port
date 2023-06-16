import styles from "../../styles/inteligencia.module.css"
import CabecalhoInteligencia from "../../components/Inteligencia/CabecalhoInteligencia";
import { conteudoBlogInteligencia } from "@/src/components/Inteligencia/DadosPostInteligencia";
import CorpoBlogInteligencia from "@/src/components/Inteligencia/CorpoBlogInteligencia";

export default function Inteligencia() {
    return (
        <div className={styles.container}>
            <CabecalhoInteligencia />
            <div className={styles.postagens}>
                {
                    conteudoBlogInteligencia.map((element, index) => (
                        <CorpoBlogInteligencia key={index} id={element.id} title={element.title} description={element.description} post={element.post} />
                    ))
                }
            </div>
        </div >
    )
}