import styles from '../../styles/corpoEngenharia.module.css'
import CorpoBlogEngenharia from './CorpoBlogEngenharia'
import { conteudoBlogEngenharia } from './DadosPostEngenharia'

export default function CorpoEngenharia() {
    return (
        <div className={styles.ContainerGlobal}>
            {/* <SubCabecalhoEngenharia />  */}
            {/* <SelecaoMenuEngenharia /> */}
            {
                conteudoBlogEngenharia.map((element, index) => (
                    <CorpoBlogEngenharia key={index} id={element.id} title={element.title} description={element.description} link={element.link} post={element.post} />
                ))
            }
        </div >
    )
}