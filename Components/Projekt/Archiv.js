import { useState, useEffect } from "react";
import styles from "../../styles/Projekte.module.css";

import Lightbox from "./Lightbox";
import Image from "next/image";

import { useRouter } from "next/router";

import use100vh from "react-div-100vh";

const Archiv = ({ archiv, setArchive }) => {
  const [opacity, setOpacity] = useState(1);
  const [lightbox, setLightbox] = useState(null);
  const [filter, setFilter] = useState("");
  const { windowHeight } = use100vh;

  const router = useRouter();

  const lightBoxAction = (val) => {
    setLightbox(val);
  };

  const archiveAction = () => {
    router.push(`/projekte/${router.query.image}`);
  };

  const close = () => {
    setOpacity(0), setTimeout(archiveAction, 200);
  };

  function horizontalScroll(event) {
    const delta = Math.max(
      -1,
      Math.min(1, event.nativeEvent.wheelDelta || -event.nativeEvent.detail)
    );
    event.currentTarget.scrollLeft -= delta * 100;
    event.preventDefault;
  }

  const categories = [];
  archiv.map((entry) => categories.push(entry.kategorie.kategorie));
  const uniqueCategories = [...new Set(categories)];

  const archivFiltered = filter
    ? archiv.filter((entry) => entry.kategorie.kategorie == filter)
    : archiv;

  console.log(archivFiltered);

  return (
    <>
      {lightbox && <Lightbox lightbox={lightbox} setLightbox={setLightbox} />}
      <div
        className={styles.archivWrapper}
        style={{ height: windowHeight, opacity: opacity }}
      >
        <span className={styles.closeButton} onClick={close}>
          Close
        </span>

        <div className={styles.listWrapper} onWheel={horizontalScroll}>
          <div className={styles.listContainer}>
            {archivFiltered.map((entry, i) => (
              <div
                className={styles.listEntry}
                onClick={() =>
                  lightBoxAction({
                    url: entry.bild.asset.url,
                    alt: entry.alt,
                    kommentare: entry.kommentare,
                  })
                }
              >
                <Image
                  key={i}
                  fill
                  src={entry.bild.asset.url}
                  alt={entry.alt}
                  blurDataURL={entry.bild.asset.metadata.blurHash}
                  placeholder="blur"
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.listCategories}>
          {uniqueCategories.sort().map((entry, i) => (
            <p
              key={i}
              className={
                filter == entry || !filter
                  ? styles.filterActive
                  : styles.filterPassive
              }
              onClick={
                filter == entry ? () => setFilter() : () => setFilter(entry)
              }
            >
              {entry}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Archiv;
