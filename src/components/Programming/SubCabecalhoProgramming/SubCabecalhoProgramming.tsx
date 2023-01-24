import Link from 'next/link';
import { FaHome, FaFastForward, FaFastBackward } from 'react-icons/fa';
import styles from './../../../styles/subCabecalhoProgramming.module.css'

export default function SubCabecalhoProgramming() {
    return (
        <div className={styles.ContainerGlobal}>
            <Link href={'/'} className={styles.link}>
                <h1 className={styles.cursor}><FaFastBackward /></h1>
            </Link>
            <Link href={'/'} className={styles.link}>
                <h1 className={styles.cursor}><FaHome /></h1>
            </Link>
            <Link href={'/piscicology'} className={styles.link}>
                <h1 className={styles.cursor}><FaFastForward /></h1>
            </Link>
        </div>
    )
}