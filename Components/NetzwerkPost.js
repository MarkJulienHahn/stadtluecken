import { useState, useRef, useEffect } from "react";

import { PortableText } from "@portabletext/react";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "../styles/Netzwerk.module.css";
import "swiper/css";
import "swiper/css/effect-fade";

import { EffectFade } from "swiper";
import NetzwerkSliderInner from "./NetzwerkSliderInner";
import NetzwerkAccordeonInner from "./NetzwerkAccordeonInner";

const NetzwerkPost = ({
  activeIndex,
  setActiveIndex,
  setFilterCat,
  setFilterCity,
  filterCat,
  filterCity,
  setLable,
  name,
  bilder,
  beschreibung,
  category,
  city,
  link,
  i,
}) => {
  const [height, setHeight] = useState("");
  const [textHeight, setTextHeight] = useState("");
  const [active, setActive] = useState(true);
  const ref = useRef();

  const open = { height: `${height + 20}px` };
  const closed = { height: "0px" };

  const activeStyle = { height: "clamp(28px, 5vh, 45px)", opacity: 1 };
  const inactiveStyle = { height: "0px", opacity: 0 };

  const scrollUp = () => {window.scrollTo({ top: 0, behavior: 'smooth' })}

  const activateCat = (cat) => {setFilterCat(cat), setActiveIndex(null), setTimeout(scrollUp, 500)}
  const activateCity = (cit) => {setFilterCity(cit), setActiveIndex(null), setTimeout(scrollUp, 500)}

  useEffect(() => {
    // Kein Filter ist Aktiv
    !filterCat && !filterCity && setActive(true);

    // Anderer Filter ist Aktiv
    (filterCity && filterCity != city) ||
      (filterCat && filterCat != category && setActive(false));

    // Ein Filter Stimmt anderer ist undefined
    !filterCat && filterCity == city && setActive(true),
      !filterCity && filterCat == category && setActive(true);

    // Ein Filter Stimmt anderer stimmt nicht
    filterCat == category &&
      filterCity != city &&
      filterCity &&
      setActive(false);
    !filterCat && filterCity != city && filterCity && setActive(false);

    filterCity == city &&
      filterCat != category &&
      filterCat &&
      setActive(false);
  }, [filterCat, filterCity]);

  console.log(height)

  return (
    <>
      <div
        className={styles.listRow}
        style={active ? activeStyle : inactiveStyle}
      >
        <div
          className={styles.bodyName}
          onClick={
            activeIndex != i
              ? () => setActiveIndex(i)
              : () => setActiveIndex(null)
          }
        >
          <span className={styles.animation}>{name}</span>
        </div>
        <div
          className={styles.bodyCategory}
          onClick={
            !filterCat ? () => activateCat(category) : () => setFilterCat(null)
          }
        >
          <span className={styles.animation}>{category}</span>
        </div>
        <div
          className={styles.bodyCity}
          onClick={
            !filterCity ? () => activateCity(city) : () => setFilterCity(null)
          }
        >
          <span className={styles.animation}>{city}</span>
        </div>
      </div>
      <div
        style={activeIndex == i ? open : closed}
        className={styles.accordeon}
      >
        <NetzwerkAccordeonInner
          activeIndex={activeIndex}
          i={i}
          beschreibung={beschreibung}
          link={link}
          bilder={bilder}
          setLable={setLable}
          height={height}
          setHeight={setHeight}
          setTextHeight={setTextHeight}
        />
      </div>
    </>
  );
};

export default NetzwerkPost;
