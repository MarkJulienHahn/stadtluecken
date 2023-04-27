import styles from "../../styles/Projekte.module.css";

const Headline = ({ currentProjekt }) => {
  return (
    <div className={styles.headlineWrapper}>
      {currentProjekt.untertitelGross.map((titel, i) => (
        <h1 className={i % 2 !== 0 && styles.rechts}>{titel}</h1>
      ))}
      {currentProjekt.untertitelKlein.map((titel, i) => (
        <h2 className={i % 2 !== 0 && styles.rechts}>{titel}</h2>
      ))}
    </div>
  );
};

export default Headline;
