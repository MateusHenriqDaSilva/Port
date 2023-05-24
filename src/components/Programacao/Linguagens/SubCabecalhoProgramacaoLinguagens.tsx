import Link from 'next/link';
import { FaHome, FaFastForward, FaFastBackward } from 'react-icons/fa';
import styles from './../../../styles/subCabecalhoProgramacao.module.css'

export default function SubCabecalhoProgramacaoLinguagens() {
    return (
        <div className={styles.ContainerGlobal}>

            <Link href={'/Programacao/Linguagens'} className={styles.link}>
                <h1><FaFastBackward /></h1>
            </Link>
            <Link href={'/Programacao'} className={styles.link}>
                <h1><FaHome /></h1>
            </Link>
            <Link href={'/Programacao/Framework'} className={styles.link}>
                <h1><FaFastForward /></h1>
            </Link>
        </div>
    )
}