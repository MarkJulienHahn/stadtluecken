import { useState, useEffect } from "react";

import styles from "../../styles/Projekte.module.css";
import { urlFor } from "@/hooks/useImageUrlBuilder";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import Image from "next/image";

const ImageBottom = ({ currentProjekt, inView, setArchive }) => {
  const [width, setWidth] = useState(null);
  const { windowWidth } = useWindowDimensions();
  useEffect(() => {
    windowWidth > 1000
      ? setWidth(Math.floor(windowWidth * 1.5))
      : setWidth(1000);
  }, [windowWidth]);
  return (
    inView &&
    currentProjekt.bildUnten && (
      <>
        {/* {currentProjekt.archivAbfrage && (
          <div className={styles.archiv}>
            <h1 onClick={() => setArchive(true)}>Archiv</h1>
          </div>
        )} */}
        <div className={styles.projektTopSlider}>
          <Image
            fill
            src={urlFor(currentProjekt.bildUnten.bild.asset.url)
              .width(width)
              .quality(50)
              .url()}
            alt={currentProjekt.bildUnten.bild.alt}
            style={{ objectFit: "cover" }}
            placeholder="blur"
            blurDataURL={currentProjekt.bildUnten.bild.asset.metadata.lqip}
            loading="eager"
          />
        </div>
      </>
    )
  );
};

export default ImageBottom;
