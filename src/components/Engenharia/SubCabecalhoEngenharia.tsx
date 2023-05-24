import Link from 'next/link';
import { FaHome, FaFastForward, FaFastBackward } from 'react-icons/fa';
import styles from './../../styles/subCabecalhoEngenharia.module.css'

export default function SubCabecalhoEngenharia() {
    return (
        <div className={styles.ContainerGlobal}>
            <Link href={'/'} className={styles.link}>
                <h1><FaFastBackward /></h1>
            </Link>
            <Link href={'/'} className={styles.link}>
                <h1><FaHome /></h1>
            </Link>
            <Link href={'/Engenharia'} className={styles.link}>
                <h1><FaFastForward /></h1>
            </Link>
        </div>
    )
}