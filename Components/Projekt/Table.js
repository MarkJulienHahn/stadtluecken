import styles from "../../styles/Projekte.module.css";

const Table = ({currentProjekt}) => {

  const start = new Date(currentProjekt.projektStart)
  const end = new Date(currentProjekt.projektEnde)

  const options = { year: 'numeric', month: 'long'};

  return (
    <div className={styles.table}>
    <div className={styles.tableInner}>
      <div className={styles.tableHeadline}>Ort</div>
      <div className={styles.tableContent}>{currentProjekt.ort}</div>
    </div>
    <div className={styles.tableInner}>
      <div className={styles.tableHeadline}>Zeitraum</div>
      <div className={styles.tableContent}>{start.toLocaleDateString('de-DE', options)} {currentProjekt.projektStart && `– ${end.toLocaleDateString('de-DE', options)}`}</div>
    </div>
    <div className={styles.tableInner}>
      <div className={styles.tableHeadline}>Thema</div>
      <div className={styles.tableContent}>{currentProjekt.thema}</div>
    </div>
  </div>
  )
}

export default Table