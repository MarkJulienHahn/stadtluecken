import { useState, useRef, useEffect } from "react";

import { PortableText } from "@portabletext/react";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "../styles/Netzwerk.module.css";
import "swiper/css";
import "swiper/css/effect-fade";

import { EffectFade } from "swiper";
import NetzwerkSliderInner from "./NetzwerkSliderInner";

const NetzwerkPostMobile = ({
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
  const [height, setHeight] = useState(500);
  const [textHeight, setTextHeight] = useState("");
  const [active, setActive] = useState(true);
  const ref = useRef();
  const spacerRef = useRef();

  const open = { height: `${height + 20}vh` };
  const closed = { height: "0px" };

  const activeStyle = { height: "clamp(28px, 5vh, 45px)", opacity: 1 };
  const inactiveStyle = { height: "0px", opacity: 0 };

  const scrollAction = () => {
    spacerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

  useEffect(() => {
    // setHeight(ref.current.clientHeight);
    setHeight(100);
  }, [ref]);

  useEffect(() => {
    activeIndex == i && setTimeout(scrollAction, 300);
  }, [activeIndex]);

  return (
    <>
      <div className={styles.spacer} ref={spacerRef}></div>
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
      </div>
      <div
        style={activeIndex == i ? open : closed}
        className={styles.accordeon}
      >
        <div className={styles.accordeonInner} ref={ref}>
          <div
            className={styles.accordeonImages}
            onMouseEnter={bilder.length > 1 ? () => setLable("->") : () => {}}
            onMouseLeave={bilder.length > 1 ? () => setLable("") : () => {}}
          >
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              effect={"fade"}
              modules={[EffectFade]}
              fadeEffect={{ crossFade: true }}
              loop
            >
              {bilder.map((bild, i) => (
                <SwiperSlide key={i}>
                  <NetzwerkSliderInner
                    bild={bild}
                    setHeight={setHeight}
                    textHeight={textHeight}
                    height={height}
                    activeIndex={activeIndex}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.accordeonText}>
            <PortableText value={beschreibung} />
            {link && (
              <p className={styles.netzwerkLink}>
                <a href={link} target="_blank" rel="noreferrer">
                  Zur Website ↗
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NetzwerkPostMobile;
