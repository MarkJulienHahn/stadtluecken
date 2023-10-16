import styles from "../../styles/Projekte.module.css";

import Image from "next/image";

const ImageBottom = ({ currentProjekt, inView, setArchive }) => {
  return (
    inView && (
      <>
        {/* {currentProjekt.archivAbfrage && (
          <div className={styles.archiv}>
            <h1 onClick={() => setArchive(true)}>Archiv</h1>
          </div>
        )} */}
        <div className={styles.projektTopSlider}>
          <Image
            fill
            src={currentProjekt.bildUnten.bild.asset.url}
            alt={currentProjekt.bildUnten.bild.alt}
            style={{ objectFit: "cover" }}
            placeholder="blur"
            blurDataURL={currentProjekt.bildUnten.bild.asset.metadata.lqip}
          />
        </div>
      </>
    )
  );
};

export default ImageBottom;
