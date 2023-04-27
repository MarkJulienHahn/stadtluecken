import styles from "../../styles/Projekte.module.css";
import Image from "next/image";

const Lightbox = ({ lightbox, setLightbox }) => {

  return (
    <>
      <div className={styles.commentWrapper}>
        {lightbox.kommentare?.map((kommentar, i) => (
          <div key={i} className={styles.comment}>
            <h2>{kommentar.name.nickname}:</h2>
            <p>{kommentar.kommentar}</p>
          </div>
        ))}
      </div>

      <div className={styles.lightboxWrapper} onClick={() => setLightbox(null)}>
        <Image
          fill
          src={lightbox.url}
          alt={lightbox.alt}
          style={{ objectFit: "contain" }}
        />
      </div>
    </>
  );
};

export default Lightbox;
