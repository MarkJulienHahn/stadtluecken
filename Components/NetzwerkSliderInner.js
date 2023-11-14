import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Netzwerk.module.css";
import { useSwiper } from "swiper/react";

import { urlFor } from "@/hooks/useImageUrlBuilder";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const NetzwerkSliderInner = ({ bild }) => {
  const [imageWidth, setImageWidth] = useState(300);
  const { windowWidth } = useWindowDimensions();
  const swiper = useSwiper();
  const ref = useRef();

  useEffect(() => {
    windowWidth > 1000
      ? setImageWidth(Math.floor((windowWidth / 2) * 1.5))
      : setImageWidth(Math.floor(windowWidth * 1.5));
  }, [windowWidth]);

  return (
    <div
      className={styles.imageWrapper}
      onClick={() => swiper.slideNext()}
      ref={ref}
    >
      <Image
        fill
        contain
        src={urlFor(bild.bild.url).width(imageWidth).quality(50).url()}
        alt={bild.bild.alt}
        sizes="100vw"
        loading="eager"
      />
    </div>
  );
};

export default NetzwerkSliderInner;
