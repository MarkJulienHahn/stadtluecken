import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Netzwerk.module.css";
import { useSwiper } from "swiper/react";

import { urlFor } from "@/hooks/useImageUrlBuilder";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const NetzwerkSliderInner = ({ bild, setHeight, textHeight, height }) => {
  const [width, setWidth] = useState(null);
  const { windowWidth } = useWindowDimensions();
  const swiper = useSwiper();
  const ref = useRef();

  const [imgHeight, setImageHeight] = useState(100);

  useEffect(() => {
    windowWidth > 1000
      ? setWidth(Math.floor((windowWidth / 2) * 1.5))
      : setWidth(Math.floor(windowWidth * 1.5));
  }, [windowWidth]);

  useEffect(() => {
    windowWidth < 1000
      ? setHeight(
          ref.current.clientWidth / bild.bild.dimensions.aspectRatio +
            textHeight
        )
      : setHeight(ref.current?.clientWidth / bild.bild.dimensions.aspectRatio);
  });

  useEffect(() => {
    setImageHeight(windowWidth / bild.bild.dimensions.aspectRatio);
  }, [windowWidth]);

  return (
    <div
      className={styles.imageWrapper}
      onClick={() => swiper.slideNext()}
      ref={ref}
      // style={windowWidth < 1000 ? {
      //   height: `${imgHeight}px`,
      //   paddingBottom: "20px"
      // } : {}}
    >
      <Image
        fill
        contain
        src={urlFor(bild.bild.url).width(width).quality(50).url()}
        alt={bild.bild.alt}
        sizes="100vw"
      />
    </div>
  );
};

export default NetzwerkSliderInner;
