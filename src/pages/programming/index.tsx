import CabecalhoProgramming from "../../components/Programming/Cabecalho/CabecalhoProgramming";
import CorpoProgramming from "../../components/Programming/Corpo/CorpoProgramming";
import SubCabecalhoProgramming from "../../components/Programming/SubCabecalhoProgramming/SubCabecalhoProgramming";
import styles from "../../styles/programming.module.css"


export default function Programming() {
    return (
        <div className={styles.container}>
            <CabecalhoProgramming />
            <SubCabecalhoProgramming />
            <CorpoProgramming />
        </div>
    )
}