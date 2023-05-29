import Link from 'next/link'
import styles from '../../styles/cabecalhoInteligencia.module.css'

export default function CabecalhoInteligencia() {
    return (
        <div className={styles.ContainerGlobal}>
            <Link href="/" passHref>
                <h1>Inteligencia</h1>
            </Link>
        </div>
    )
}