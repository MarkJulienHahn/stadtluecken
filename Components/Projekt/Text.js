import styles from "../../styles/Projekte.module.css";
import { PortableText } from "@portabletext/react";

const Text = ({ currentProjekt }) => {
  return (
    <div className={styles.textWrapper}>
      <p className={styles.textHeadline}>{currentProjekt.beschreibung.ueberschrift}</p>
      <div className={styles.textInner}>
        <PortableText value={currentProjekt.beschreibung.beschreibung} />
      </div>
    </div>
  );
};

export default Text;
