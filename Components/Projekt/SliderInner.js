import Image from "next/image";
import styles from "../../styles/Projekte.module.css";
import { useSwiper } from "swiper/react";

const SliderInner = ({ bild }) => {
  const swiper = useSwiper();

  return (
    <div className={styles.imageWrapper} onClick={() => swiper.slideNext()}>
      <Image
        fill
        src={bild.bild.asset.url}
        alt={bild.bild.alt}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default SliderInner;
