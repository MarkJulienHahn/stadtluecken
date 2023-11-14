import styles from "../../styles/Projekte.module.css";
import { PortableText } from "@portabletext/react";

const Text = ({ text }) => {
  return (
    <div className={styles.textWrapper}>
      <p className={styles.textHeadline}>{text?.ueberschrift}</p>
      <div className={styles.textInner}>
        <PortableText value={text.beschreibung} />
      </div>
    </div>
  );
};

export default Text;
