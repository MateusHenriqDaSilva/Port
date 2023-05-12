import CabecalhoProgramming from "../../components/Programming/CabecalhoProgramming";
import styles from "../../styles/programming.module.css"
import SelecaoMenu from "../../components/Programming/SelecaoMenu";
import CorpoBlog from "@/src/components/Programming/CorpoBlog";
import SubCabecalhoProgramming from "@/src/components/Programming/Projects/SubCabecalhoProgramming";
import { contentBlog } from "@/src/components/Programming/dadosPost";

export default function Programming() {
    return (
        <div className={styles.container}>
            <CabecalhoProgramming />
            <SubCabecalhoProgramming />
            <SelecaoMenu />
            {
                contentBlog.map((element, index) => (
                    <CorpoBlog key={index} id={element.id} title={element.title} description={element.description} link={element.link} post={element.post} />
                ))
            }
        </div>
    )
}