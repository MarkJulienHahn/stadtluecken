import { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Netzwerk.module.css";
import { useSwiper } from "swiper/react";

const NetzwerkSliderInner = ({ bild, setHeight }) => {
  const swiper = useSwiper();
  const ref = useRef();

  useEffect(() => {
    setHeight(ref.current?.clientWidth / bild.bild.dimensions.aspectRatio);
  }, []);

  return (
    <div
      className={styles.imageWrapper}
      onClick={() => swiper.slideNext()}
      ref={ref}
    >
      <Image
        fill
        contain
        src={bild.bild.url}
        alt={bild.bild.alt}
        sizes="100vw"
      />
    </div>
  );
};

export default NetzwerkSliderInner;
