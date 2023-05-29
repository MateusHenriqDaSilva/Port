
import styles from '../../styles/corpoInteligencia.module.css'
import CorpoBlogInteligencia from './CorpoBlogInteligencia'
import { conteudoBlogInteligencia } from './DadosPostInteligencia'


export default function CorpoInteligencia() {
    return (
        <div className={styles.ContainerGlobal}>
            {/* <SelecaoMenuEngenharia /> */}
            {
                conteudoBlogInteligencia.map((element, index) => (
                    <CorpoBlogInteligencia key={index} id={element.id} title={element.title} description={element.description} post={element.post} />
                ))
            }
        </div >
    )
}