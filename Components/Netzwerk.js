import { useState } from "react";
import { PortableText } from "@portabletext/react";

import styles from "../styles/Netzwerk.module.css";

import NetzwerkPost from "@/Components/NetzwerkPost";
import NetzwerkPostMobile from "@/Components/NetzwerkPostMobile";
import MouseElement from "@/Components/MouseElement";
import Footer from "@/Components/Footer";

const Netzwerk = ({ netzwerk, mobile }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [filterCat, setFilterCat] = useState();
  const [filterCity, setFilterCity] = useState();
  const [lable, setLable] = useState();
  return (
    <>
      <MouseElement lable={lable} />
      <div className={styles.wrapper}>
        <div className={styles.introText}>
          <PortableText value={netzwerk[0]?.netzwerk} />
        </div>
        <div className={styles.gradient}></div>
        <div className={styles.listWrapper}>
          <div className={styles.listHeader}>
            <div className={styles.headerName}>Name</div>
            <div
              className={styles.headerCategory}
              onClick={() => setFilterCat(null)}
            >
              <span>{filterCat ? "Filter entfernen" : "Kategorie"}</span>
            </div>
            <div
              className={styles.headerCity}
              onClick={() => setFilterCity(null)}
            >
              <span>{filterCity ? "Filter entfernen" : "Stadt"}</span>
            </div>
          </div>
          <div className={styles.listBody}>
            {/* {netzwerk[0].eintrag.map((eintrag, i) => (
              <div className={styles.eintragWrapper} key={i}>
                <div className={styles.desktop}>
                  <NetzwerkPost
                    name={eintrag.name}
                    category={eintrag.kategorie.kategorie}
                    city={eintrag.stadt.stadt}
                    activeIndex={activeIndex}
                    beschreibung={eintrag.beschreibung}
                    bilder={eintrag.bilder}
                    link={eintrag.link}
                    setActiveIndex={setActiveIndex}
                    setFilterCat={setFilterCat}
                    setFilterCity={setFilterCity}
                    setLable={setLable}
                    filterCat={filterCat}
                    filterCity={filterCity}
                    i={i}
                  />
                </div>
                <div className={styles.mobile}>
                  <NetzwerkPostMobile
                    name={eintrag.name}
                    category={eintrag.kategorie.kategorie}
                    city={eintrag.stadt.stadt}
                    activeIndex={activeIndex}
                    beschreibung={eintrag.beschreibung}
                    bilder={eintrag.bilder}
                    link={eintrag.link}
                    setActiveIndex={setActiveIndex}
                    setFilterCat={setFilterCat}
                    setFilterCity={setFilterCity}
                    setLable={setLable}
                    filterCat={filterCat}
                    filterCity={filterCity}
                    i={i}
                  />
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Netzwerk;
