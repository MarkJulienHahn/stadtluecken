import { useState, useRef, useEffect } from "react";

import { PortableText } from "@portabletext/react";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "../styles/Netzwerk.module.css";
import "swiper/css";
import "swiper/css/effect-fade";

import { EffectFade } from "swiper";
import NetzwerkSliderInner from "./NetzwerkSliderInner";

const NetzwerkAccordeonInner = ({
  activeIndex,
  i,
  beschreibung,
  link,
  setLable,
  bilder,
  height,
  setHeight,
  textHeight,
  setTextHeight,
}) => {
  const ref = useRef();

  const scrollAction = () =>
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  useEffect(() => {
    setTimeout(setTextHeight(ref.current.clientHeight), 500);
  }, []);

  useEffect(() => {
    activeIndex == i && setTimeout(scrollAction, 500);
  }, [activeIndex]);

  return (
    <div className={styles.accordeonInner}>
      <div className={styles.accordeonAnchor} ref={ref}></div>
      <div className={styles.accordeonText} style={{ height: textHeight }}>
        <PortableText value={beschreibung} />
        {link && (
          <p className={styles.netzwerkLink}>
            <a href={link} target="_blank" rel="noreferrer">
              Zur Website ↗
            </a>
          </p>
        )}
      </div>

      <div
        className={styles.accordeonImages}
        onMouseEnter={bilder.length > 1 ? () => setLable("->") : () => {}}
        onMouseLeave={bilder.length > 1 ? () => setLable("") : () => {}}
        style={bilder.length == 1 ? { cursor: "default" } : { cursor: "none" }}
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
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NetzwerkAccordeonInner;
