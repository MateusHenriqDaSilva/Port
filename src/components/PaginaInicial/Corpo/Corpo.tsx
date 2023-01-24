import styles from '../../../styles/Corpo.module.css'
import Image from 'next/image'
import imagem from '../../../../public/fotoMateus.png'
import Link from 'next/link'


export default function Corpo() {
    return (
        <div className={styles.imagemEspacoGlobal}>
            <div className={styles.imagemEspaco}>
                <Image className={styles.definicaoImagem}
                    layout='responsive'
                    alt='Mateus Henrique'
                    src={imagem}
                />
            </div>
            <div className={styles.espacoLinha}>
                <div className={styles.linhaReta1}></div>
                <div className={styles.linhaReta2}></div>
                <div className={styles.linhaReta3}></div>
                <div className={styles.linhaReta4}></div>
                <div className={styles.linhaReta5}></div>
                <div className={styles.linhaReta6}></div>
            </div>
            <div className={styles.espacoQuadrado}>
                <button className={styles.quadrado1}><Link href='/programming'>Programming Skills</Link></button>
                <button className={styles.quadrado2}><Link href='/piscicology'>Piscicology</Link></button>
                <button className={styles.quadrado3}><Link href='/communication'>Communication</Link></button>
                <button className={styles.quadrado4}><Link href='/digitalMarketing'>Digital Marketing</Link></button>
                <button className={styles.quadrado5}><Link href='/design'>Design</Link></button>
                <button className={styles.quadrado6}><Link href='/relationship'>Relationship</Link></button>
            </div>
        </div>
    )
}