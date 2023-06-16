import CabecalhoProgramacaoLinguagens from "@/src/components/Programacao/Linguagens/CabecalhoProgramacaoLinguagens";
import SubCabecalhoCorpoProgramacaoLinguagens from "@/src/components/Programacao/Linguagens/SubCabecalhoCorpoProgramacaoLinguagens";
import style from '../../../styles/linguagens.module.css'

export default function Programminglanguages() {
    return (
        <div className={style.containerGlobal}>
            <CabecalhoProgramacaoLinguagens />
            <SubCabecalhoCorpoProgramacaoLinguagens />
        </div>
    )
}