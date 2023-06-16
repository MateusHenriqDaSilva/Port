import styles from "../../styles/corpoBlog.module.css"
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
    video?: string
    post: MyNestedObject[];
}

export default function CorpoBlog(props: MyObject) {
    return (
        <Link href={`${props.link}${props.id}`} passHref>
            <div className={styles.containerItem}>
                <h1 className={styles.title}>{props.title}</h1>
                <h1 className={styles.description}>{props.description}</h1>
            </div>
        </Link>
    )
}

