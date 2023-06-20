import Cabecalho from '@/src/components/Programacao/Cabecalho';
import style from '../../../styles/linguagens.module.css'
import CorpoProgramacaoLinguagens from "@/src/components/Programacao/Linguagens/CorpoLinguagens";

export default function Programminglanguages() {
    return (
        <div className={style.containerGlobal}>
            <Cabecalho titulo="Linguagens" />
            <CorpoProgramacaoLinguagens />
        </div>
    )
}