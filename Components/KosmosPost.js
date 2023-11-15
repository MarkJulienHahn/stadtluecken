import { useRef, useEffect } from "react";
import styles from "../styles/Kosmos.module.css";

import Image from "next/image";
import { urlFor } from "@/hooks/useImageUrlBuilder";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper";
import KosmosPostOverlay from "./KosmosPostOverlay";

const KosmosPost = ({ i, eintrag, activeIndex, setActiveIndex, length }) => {
  const ref = useRef();

  const scrollAction = () =>
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });

  useEffect(() => {
    length > 6 && setTimeout(scrollAction, 100);
  }, []);

  return (
    <>
      <div
        className={styles.kosmosPost}
        ref={ref}
        onClick={
          activeIndex != i
            ? () => setActiveIndex(i)
            : () => setActiveIndex(null)
        }
      >
        <KosmosPostOverlay
          eintrag={eintrag}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          i={i}
        />

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
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            >
              {eintrag.bilder.map((bild, i) => (
                <SwiperSlide key={i}>
                  <div className={styles.swiperImage}>
                    <Image
                      fill
                      src={urlFor(bild.bild.url).height(1000).quality(50).url()}
                      alt={bild.alt}
                      style={{ objectFit: "cover" }}
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
