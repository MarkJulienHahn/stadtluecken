import { PortableText } from "@portabletext/react";
import styles from "../styles/Impressum.module.css";

const Impressum = ({ content }) => {
  return (
    <>
      <div className={styles.pageWrapper}>
        <PortableText value={content.beschreibung} />
      </div>
    </>
  );
};

export default Impressum;
