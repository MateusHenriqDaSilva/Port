
import Link from 'next/link'
import styles from '../../../../styles/corpoProjects.module.css'
import AngularIcone from '../../../../../public/AngularIcone.png'
import Image from 'next/image'

// Typagem
type projects = [{
    name: string
    description: string
    url: string
    img: any
}]

//List Object
const listaOfProject: projects = [
    {
        name: 'Angular Project initail components',
        description: 'LOGIN: teste SENHA: 1234',
        url: 'https://project-angular-film.vercel.app/',
        img: AngularIcone
    }
]

export default function CorpoProjects() {
    //Return Interface
    return (
        <div className={styles.containerGlobal}>
            {
                listaOfProject.map((elemento, key) => {
                    return (
                        <Link href={elemento.url} passHref>
                            <div className={styles.containerCardSession} key={key}>
                                <Image className={styles.imagem}
                                    src={elemento.img}
                                    alt="Picture of the author"
                                    width={80}
                                    height={80}
                                />
                                <div className={styles.containerCabecalho}>
                                    {elemento.name}
                                </div>
                                <div className={styles.containerCorpo}>
                                    {elemento.description}
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div >
    )
}