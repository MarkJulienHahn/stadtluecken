import styles from "../../styles/Projekte.module.css";
import Link from "next/link";

const Table = ({ currentProjekt }) => {
  const start = new Date(currentProjekt.projektStart);
  const end = new Date(currentProjekt.projektEnde);

  const options = { year: "numeric", month: "long" };

  console.log(currentProjekt.projekt);

  return (
    <div className={styles.table}>
      {currentProjekt.ort && (
        <div className={styles.tableInner}>
          <div className={styles.tableHeadline}>Ort</div>
          <div className={styles.tableContent}>{currentProjekt.ort}</div>
        </div>
      )}
      {currentProjekt.frage && (
        <div className={styles.tableInner}>
          <div className={styles.tableHeadline}>Frage</div>
          <div className={styles.tableContent}>{currentProjekt.frage}</div>
        </div>
      )}
      {currentProjekt.projektEnde && (
        <div className={styles.tableInner}>
          <div className={styles.tableHeadline}>Zeitraum</div>
          <div className={styles.tableContent}>
            {start.toLocaleDateString("de-DE", options)}{" "}
            {currentProjekt.projektEnde &&
              `– ${end.toLocaleDateString("de-DE", options)}`}
          </div>
        </div>
      )}
      {currentProjekt.thema && (
        <div className={styles.tableInner}>
          <div className={styles.tableHeadline}>Thema</div>
          <div className={styles.tableContent}>{currentProjekt.thema}</div>
        </div>
      )}

      {currentProjekt.partner && (
        <div className={styles.tableInner}>
          <div className={styles.tableHeadline}>Partner*innen</div>
          <div className={styles.tableContent}>{currentProjekt.partner}</div>
        </div>
      )}

      {currentProjekt.projekt && (
        <>
          <div className={styles.tableInner}>
            <div className={styles.tableHeadline}>Verwandte Projekte</div>
            {currentProjekt.projekt.map((projekt, i) => (
              <div key={i} className={styles.tableContent}>
                <Link href={`/projekte/${projekt.slug.current}`}>
                  {projekt.titel}
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Table;
