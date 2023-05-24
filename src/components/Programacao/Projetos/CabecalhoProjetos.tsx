import Link from 'next/link'
import styles from '../../../styles/cabecalhoFramework.module.css'

export default function CabecalhoProjetos() {
    return (
        <div className={styles.ContainerGlobal}>
            <Link href="/Programacao" passHref>
                <h1>Projetos</h1>
            </Link>
        </div>
    )
}