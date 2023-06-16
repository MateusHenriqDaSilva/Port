import styles from "../../styles/corpoBlogEngenharia.module.css"
import Link from 'next/link'

interface MyNestedObject {
    header?: string
    text: string
    code?: string
}

interface MyObject {
    id: string
    title?: string
    description?: string
    link?: string
    post: MyNestedObject[];
}

export default function CorpoBlogEngenharia(props: MyObject) {
    return (
        <div className={styles.containerItem}>
            <Link href={`/Engenharia/Post/${props.id}`} passHref>
                <div className={styles.containerText} >
                    <h1 className={styles.title}>{props.title}</h1>
                    <h1 className={styles.description}>{props.description}</h1>
                </div>
                {/* teste */}
            </Link>
        </div>
    )
}

