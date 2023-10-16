import Image from "next/image";
import styles from "../../styles/Projekte.module.css";
import { useSwiper } from "swiper/react";

const SliderInner = ({ fullscreen, bild }) => {
  const swiper = useSwiper();

  return (
    <div className={styles.imageWrapper} onClick={() => swiper.slideNext()}>
      <Image
        fill
        src={bild.bild.asset.url}
        alt={bild.bild.alt}
        style={{ objectFit: fullscreen ? "cover" : "contain" }}
        placeholder="blur"
        blurDataURL={bild.bild.asset.metadata.lqip}
        priority="true"
      />
    </div>
  );
};

export default SliderInner;
