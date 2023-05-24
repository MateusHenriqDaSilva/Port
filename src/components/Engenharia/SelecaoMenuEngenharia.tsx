import Link from 'next/link'
import styles from '../../styles/SelecaoMenuEngenharia.module.css'

const trabalhos = [
    {
        id: 1,
        titulo: 'Linguagens',
        url: '/Programacao/Linguagens',
    }, {
        id: 2,
        titulo: 'Framework',
        url: '/Programacao/Framework',
    }, {
        id: 3,
        titulo: 'Projetos',
        url: '/Programacao/Projetos',
    },
]

export default function SelecaoMenuEngenharia() {
    return (
        <div className={styles.cartaoEspaco}>
            {
                trabalhos.map((elemento, key) => {
                    return (
                        <Link href={elemento.url} passHref key={key}>
                            <div className={styles.cartao} key={key}>
                                <h1 className={styles.cartaoLetras} key={elemento.id}>{elemento.titulo}</h1>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}