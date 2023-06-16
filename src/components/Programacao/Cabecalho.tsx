import Link from 'next/link'
import styles from '../../styles/cabecalho.module.css'

interface ICabecalho {
    titulo: string
}

export default function Cabecalho(props: ICabecalho) {
    return (
        <div className={styles.containerGlobal}>
            <Link href="/" passHref>
                <h1 className={styles.titulo}>{props.titulo}</h1>
            </Link>
        </div>
    )
}
