import styles from "../../styles/estruturaSelecao.module.css"

interface MyNestedObject {
    id: number;
    description: string;
    link?: string
}

interface MyObject {
    id: number;
    title: string;
    skills: MyNestedObject[];
}

export default function EstruturaSelecao(props: MyObject) {

    return (
        <div className={styles.container}>
            <div key={props.id}>
                <h2 className={styles.title}>{props.title}</h2>
                <ul className={styles.listaSelecionado}>
                    {props.skills.map((element) => (
                        <>
                            <a className={styles.link} href={element.link}>
                                <li className={styles.selecionado} key={element.id}>{element.description}</li>
                            </a>
                        </>
                    ))}
                </ul>
            </div>
        </div>
    )
}
