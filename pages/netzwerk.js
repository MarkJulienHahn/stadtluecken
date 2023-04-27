import { useState } from "react";
import { PortableText } from "@portabletext/react";
import client from "../client";

import styles from "../styles/Netzwerk.module.css";

import NetzwerkPost from "@/Components/NetzwerkPost";
import MouseElement from "@/Components/MouseElement";
import Footer from "@/Components/Footer";

const netzwerk = ({ netzwerk }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [filterCat, setFilterCat] = useState();
  const [filterCity, setFilterCity] = useState();
  const [lable, setLable] = useState();

  const netzwerkEntries = !filterCat
    ? netzwerk[0].eintrag
    : netzwerk[0].eintrag.filter(
        (entry) => entry.kategorie.kategorie == filterCat
      );

  const netzwerkEntriesCity = !filterCity
    ? netzwerk[0].eintrag
    : netzwerkEntries.filter((entry) => entry.stadt.stadt == filterCity);

  return (
    <>
      <MouseElement lable={lable} />
      <div className={styles.wrapper}>
        <div className={styles.introText}>
          {/* <PortableText value={netzwerk[0].netzwerk} /> */}
        </div>
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

            
            {netzwerk[0].eintrag.map((eintrag, i) => (
              <NetzwerkPost
                key={i}
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
            ))}


            {/* {!filterCity
            ? netzwerkEntries.map((eintrag, i) => (
                <NetzwerkPost
                  key={i}
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
              ))
            : netzwerkEntriesCity.map((eintrag, i) => (
                <NetzwerkPost
                  key={i}
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
              ))} */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default netzwerk;

export async function getServerSideProps() {
  const netzwerk = await client.fetch(`
  * [_type == "netzwerk"]{..., "eintrag": eintrag[]{..., "bilder": bilder[]{..., "bild": bild.asset->{url, "dimensions": metadata.dimensions, "blurHash": metadata.blurHash}} , "kategorie": kategorie->{kategorie}, "stadt": stadt->{stadt}}}`);
  return {
    props: {
      netzwerk,
    },
  };
}
