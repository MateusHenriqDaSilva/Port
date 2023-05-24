import Link from 'next/link'
import styles from '../../styles/cabecalhoProgramacao.module.css'

export default function CabecalhoProgramacao() {
    return (
        <div className={styles.ContainerGlobal}>
            <Link href="/" passHref>
                <h1 className={styles.Titulo}>Programação</h1>
            </Link>
        </div>
    )
}
