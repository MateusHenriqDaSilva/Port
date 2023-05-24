import Link from 'next/link'
import styles from './../../../styles/cabecalhoProgramminglanguages.module.css'

export default function CabecalhoProgramacaoLinguagens() {
    return (
        <div className={styles.ContainerGlobal}>
            <Link href="/Programacao" passHref>
                <h1>Programação Linguagens</h1>
            </Link>
        </div>
    )
}