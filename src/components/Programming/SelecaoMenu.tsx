import Link from 'next/link'
import styles from '../../styles/selecaoMenu.module.css'

const trabalhos = [
    {
        id: 1,
        titulo: 'Languages',
        data: '07/08/1997',
        horas: '20:30',
        url: '/programming/languages',
    },{
        id: 2,
        titulo: 'Framework',
        data: '07/08/1997',
        horas: '20:30',
        url: '/programming/framework',
    },{
        id: 3,
        titulo: 'Projects',
        data: '07/08/1997',
        horas: '20:30',
        url: '/programming/projects',
    },
]

export default function SelecaoMenu() {
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