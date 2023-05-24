import Link from 'next/link'
import styles from '../../styles/cabecalhoEngenharia.module.css'

export default function CabecalhoEngenharia() {
    return (
        <div className={styles.ContainerGlobal}>
            <Link href="/" passHref>
                <h1>Engenharia</h1>
            </Link>
        </div>
    )
}