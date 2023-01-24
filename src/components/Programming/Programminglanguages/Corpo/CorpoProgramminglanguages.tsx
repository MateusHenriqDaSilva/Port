import styles from './../../../../styles/corpoProgramminglanguages.module.css'

export default function CorpoProgramminglanguages() {
    return (
        <div className={styles.containerGlobal}>
            <div className={styles.containerLabels}>
                <div className={styles.coluna1}>
                    <h1 className={styles.label}>HTML</h1>
                    <h1 className={styles.label}>CSS</h1>
                    <h1 className={styles.label}>Javascript</h1>
                    <h1 className={styles.label}>Typescript</h1>
                    <h1 className={styles.label}>Python</h1>
                    <h1 className={styles.label}>Java</h1>
                </div>
                <div className={styles.coluna2}>
                    <div className={styles.barras}><div className={styles.porcentagemBarra1}></div></div>
                    <div className={styles.barras}><div className={styles.porcentagemBarra2}></div></div>
                    <div className={styles.barras}><div className={styles.porcentagemBarra3}></div></div>
                    <div className={styles.barras}><div className={styles.porcentagemBarra4}></div></div>
                    <div className={styles.barras}><div className={styles.porcentagemBarra5}></div></div>
                    <div className={styles.barras}><div className={styles.porcentagemBarra6}></div></div>
                </div>
            </div >
        </div >
    )
}