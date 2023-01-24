import styles from '../../../styles/CabecalhoLayout.module.css'
import Link from 'next/link'

export default function Cabecalho() {
    return (
        <div className={styles.cabecalhoEspaco}>
            <h1 className={styles.cabecalhoNome}><Link href={'/'}>Mateus Henrique</Link></h1>
        </div >
    );
}