import CorpoBlogEngenharia from "@/src/components/Engenharia/CorpoBlogEngenharia";
import CabecalhoEngenharia from "../../components/Engenharia/CabecalhoEngenharia";
import styles from "../../styles/engenharia.module.css"
import { conteudoBlogEngenharia } from "@/src/components/Engenharia/DadosPostEngenharia";

export default function Engenharia() {
    return (
        <div className={styles.container}>
            <CabecalhoEngenharia />
            <div className={styles.postagens}>
                {
                    conteudoBlogEngenharia.map((element, index) => (
                        <CorpoBlogEngenharia key={index} id={element.id} title={element.title} description={element.description} link={element.link} post={element.post} />
                    ))
                }
            </div>
        </div>
    )
}