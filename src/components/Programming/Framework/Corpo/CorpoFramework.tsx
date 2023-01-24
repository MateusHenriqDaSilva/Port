import styles from './../../../../styles/corpoFramework.module.css'

export default function CorpoFramework() {
    return (
        <div className={styles.containerGlobal}>
            <div className={styles.containerLabels}>
                <div className={styles.coluna1}>
                    <h1 className={styles.label}>React</h1>
                    <h1 className={styles.label}>Next</h1>
                    <h1 className={styles.label}>Vue</h1>
                    <h1 className={styles.label}>Express</h1>
                    <h1 className={styles.label}>Laravel</h1>
                    <h1 className={styles.label}>Django</h1>
                    <h1 className={styles.label}>Angular</h1>
                    <h1 className={styles.label}>JQuery</h1>
                </div>
                <div className={styles.coluna2}>
                    <div className={styles.barras}><div className={styles.porcentagemBarra1}></div></div>
                    <div className={styles.barras}><div className={styles.porcentagemBarra2}></div></div>
                    <div className={styles.barras}><div className={styles.porcentagemBarra3}></div></div>
                    <div className={styles.barras}><div className={styles.porcentagemBarra4}></div></div>
                    <div className={styles.barras}><div className={styles.porcentagemBarra5}></div></div>
                    <div className={styles.barras}><div className={styles.porcentagemBarra6}></div></div>
                    <div className={styles.barras}><div className={styles.porcentagemBarra7}></div></div>
                    <div className={styles.barras}><div className={styles.porcentagemBarra8}></div></div>
                </div>
            </div >
        </div >
    )
}