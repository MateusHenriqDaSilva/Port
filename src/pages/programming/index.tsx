import CabecalhoProgramming from "../../components/Programming/Cabecalho/CabecalhoProgramming";
import CorpoProgramming from "../../components/Programming/Corpo/CorpoProgramming";
import SubCabecalhoProgramming from "../../components/Programming/SubCabecalhoProgramming/SubCabecalhoProgramming";


export default function Programming() {
    return (
        <div className="container" style={{ display: 'flex', padding: '20px', justifyContent: 'center', width: '100%', height: '700px', alignItems: 'center', 
        textAlign: 'center', flexDirection: 'column' }}>
            <CabecalhoProgramming />
            <SubCabecalhoProgramming />
            <CorpoProgramming />
        </div>
    )
}