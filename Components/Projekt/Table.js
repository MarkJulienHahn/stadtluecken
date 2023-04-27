import styles from "../../styles/Projekte.module.css";

const Table = ({currentProjekt}) => {
  return (
    <div className={styles.table}>
    <div className={styles.tableInner}>
      <div className={styles.tableHeadline}>Ort</div>
      <div className={styles.tableContent}>{currentProjekt.ort}</div>
    </div>
    <div className={styles.tableInner}>
      <div className={styles.tableHeadline}>Zeitraum</div>
      <div className={styles.tableContent}>{currentProjekt.projektStart}</div>
    </div>
    <div className={styles.tableInner}>
      <div className={styles.tableHeadline}>Thema</div>
      <div className={styles.tableContent}>{currentProjekt.thema}</div>
    </div>
  </div>
  )
}

export default Table