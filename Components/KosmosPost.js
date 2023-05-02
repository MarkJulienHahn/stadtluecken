import { useRef, useState } from "react";
import styles from "../styles/Kosmos.module.css";

import { PortableText } from "@portabletext/react";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper";

const KosmosPost = ({ eintrag }) => {
  const [overlay, setOverlay] = useState(false);
  const ref = useRef();

  return (
    <>
      <div
        className={styles.kosmosPost}
        ref={ref}
        onClick={() => setOverlay(!overlay)}
      >
        {overlay && (
          <div
            className={styles.kosmosOverlay}
            style={{ height: ref.current.clientHeight }}
          >
            <PortableText value={eintrag.beschreibung} />

            {eintrag.beteiligte && (
              <div className={styles.column}>
                <p className={styles.header}>Beteiligte: </p>
                <div>
                  {eintrag.beteiligte.map((name, i) => (
                    <p key={i}>{name.name}</p>
                  ))}
                </div>
              </div>
            )}

            {eintrag.externe && (
              <div className={styles.column}>
                <p className={styles.header}>Externe: </p>
                <div>
                  {eintrag.externe.map((name, i) => (
                    <p key={i}>{name}</p>
                  ))}
                </div>
              </div>
            )}

            {eintrag.link && (
              <div className={styles.link}>
                <a href={eintrag.link} target="_blank" rel="norefferer">
                  <h3>Mehr</h3>
                </a>
              </div>
            )}
          </div>
        )}
        <ul className="animation">
          <li className="rightbound">
            <h3>{eintrag.titelUebersicht[0]}</h3>
          </li>
          <li className="rightbound">
            <h3>{eintrag.titelUebersicht[1]}</h3>
          </li>
          <li className="leftbound">
            <h3>{eintrag.titelUebersicht[2]}</h3>
          </li>
          <li className="leftbound">
            <h3>{eintrag.titelUebersicht[3]}</h3>
          </li>
          <li className="rightbound">
            <h3>{eintrag.titelUebersicht[4]}</h3>
          </li>
          <li className="rightbound">
            <h3>{eintrag.titelUebersicht[5]}</h3>
          </li>
          <li className="leftbound">
            <h3>{eintrag.titelUebersicht[6]}</h3>
          </li>
          <li className="leftbound">
            <h3>{eintrag.titelUebersicht[7]}</h3>
          </li>
          <div className={styles.previewImage}>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              effect={"fade"}
              modules={[Autoplay, EffectFade]}
              fadeEffect={{ crossFade: true }}
              loop
              // autoplay={{
              //   delay: 2000,
              //   disableOnInteraction: false,
              // }}
            >
              {eintrag.bilder.map((bild, i) => (
                <SwiperSlide key={i}>
                  <div className={styles.swiperImage}>
                    <Image
                      fill
                      src={bild.bild.url}
                      alt={bild.alt}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ul>
      </div>
    </>
  );
};

export default KosmosPost;
