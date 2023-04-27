import styles from "../../styles/Projekte.module.css";
import { PortableText } from "@portabletext/react";

const Text = ({ currentProjekt }) => {
  return (
    <div className={styles.textWrapper}>
      {currentProjekt.beschreibung.ueberschrift}
      <div className={styles.textInner}>
        <PortableText value={currentProjekt.beschreibung.beschreibung} />
      </div>
    </div>
  );
};

export default Text;
