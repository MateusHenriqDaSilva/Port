import styles from "../../styles/programming.module.css"
import SelecaoMenu from "../../components/Programacao/SelecaoMenuProgramacao";
import CorpoBlog from "@/src/components/Programacao/CorpoBlog";
import { contentBlog } from "@/src/components/Programacao/DadosPost";
import CabecalhoProgramacao from "@/src/components/Programacao/CabecalhoProgramacao";

export default function Programacao() {
    return (
        <div className={styles.container}>
            <CabecalhoProgramacao />
            <SelecaoMenu />
            <div className={styles.postagens}>
                {
                    contentBlog.map((element, index) => (
                        <CorpoBlog key={index} id={element.id} title={element.title} description={element.description} link={element.link} post={element.post} />
                    ))
                }
            </div>
        </div>
    )
}