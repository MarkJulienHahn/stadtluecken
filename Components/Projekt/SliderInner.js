import { useState, useEffect } from "react";

import Image from "next/image";
import styles from "../../styles/Projekte.module.css";
import { useSwiper } from "swiper/react";

import { urlFor } from "@/hooks/useImageUrlBuilder";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const SliderInner = ({ fullscreen, bild, i, next, prev }) => {
  const [width, setWidth] = useState(null);

  const swiper = useSwiper();
  const { windowWidth } = useWindowDimensions();

  useEffect(() => {
    setWidth(Math.floor(windowWidth * 1.5));
  }, [windowWidth]);

  useEffect(() => {
    next && swiper.slideNext();
    prev && swiper.slidePrev();
  }, [next, prev]);

  return (
    <>
      <div className={styles.imageWrapper} style={{ position: "relative" }}>
        <Image
          fill
          src={urlFor(bild.bild.asset.url).width(width).quality(50).url()}
          alt={bild.bild.alt}
          style={{ objectFit: fullscreen ? "cover" : "contain" }}
          placeholder="blur"
          blurDataURL={bild.bild.asset.metadata.lqip}
          priority={i <= 2 ? "true" : "false"}
        />
      </div>
    </>
  );
};

export default SliderInner;
