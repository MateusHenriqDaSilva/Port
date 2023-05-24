import Link from 'next/link'
import styles from './../../../styles/cabecalhoProgramminglanguages.module.css'

export default function CabecalhoFramework() {
    return (
        <div className={styles.ContainerGlobal}>
            <Link href="/Programacao" passHref>
                <h1>Framework</h1>
            </Link>
        </div>
    )
}