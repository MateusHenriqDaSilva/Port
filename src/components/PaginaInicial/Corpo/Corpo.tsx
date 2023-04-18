import styles from './../../../styles/corpo.module.css'
import Image from 'next/image'
import imagem from '../../../../public/fotoMateus.png'
import Link from 'next/link'


export default function Corpo() {
    return (
        <div className={styles.imagemEspacoGlobal}>
            <div className={styles.imagemEspaco}>
                <Image className={styles.definicaoImagem}
                    alt='Mateus Henrique'
                    src={imagem}
                    width={800}
                    height={800}
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
                <Link href='/programming' className={styles.quadrado1}>Programming</Link>
                <Link href='/psychology' className={styles.quadrado2}>Piscicology</Link>
                <Link href='/communication' className={styles.quadrado3}>Communication</Link>
                <Link href='/digitalMarketing' className={styles.quadrado4}>Digital Marketing</Link>
                <Link href='/design' className={styles.quadrado5}>Design</Link>
                <Link href='/relationship' className={styles.quadrado6}>Relationship</Link>
            </div>
        </div>
    )
}
