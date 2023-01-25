import CabecalhoProgramming from "../../components/Programming/Cabecalho/CabecalhoProgramming";
import CorpoProgramming from "../../components/Programming/Corpo/CorpoProgramming";
import SubCabecalhoProgramming from "../../components/Programming/SubCabecalhoProgramming/SubCabecalhoProgramming";


export default function Programming() {
    return (
        <div className="container" style={{ paddingTop: '100px' }}>
            <CabecalhoProgramming />
            <SubCabecalhoProgramming />
            <CorpoProgramming />
        </div >
    )
}