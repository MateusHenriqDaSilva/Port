import styles from '../../styles/cabecalho.module.css'
import Link from 'next/link'

export default function Cabecalho() {
    return (
        <div className={styles.cabecalhoEspaco}>
            <Link href={'/'} className={styles.cabecalhoNome}>Mateus Henrique</Link>
        </div >
    );
}