import Link from 'next/link';
import { FaHome, FaFastForward, FaFastBackward } from 'react-icons/fa';
import styles from './../../../styles/subCabecalhoFramework.module.css'

export default function SubCabecalhoFramework() {
    return (
        <div className={styles.ContainerGlobal}>
            <Link href={'/Programacao/Linguagens'} className={styles.link}>
                <h1><FaFastBackward /></h1>
            </Link>
            <Link href={'/Programacao'} className={styles.link}>
                <h1><FaHome /></h1>
            </Link>
            <Link href={'/Programacao/Projetos'} className={styles.link}>
                <h1><FaFastForward /></h1>
            </Link>
        </div>
    )
}