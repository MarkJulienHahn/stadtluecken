import SliderInner from "./SliderInner";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay } from "swiper";

import styles from "../../styles/Projekte.module.css";

const ProjektSlider = ({ bilder }) => {
  return (
    <div className={styles.projektSwiperWrapper}>
      <Swiper spaceBetween={50} slidesPerView={1} loop>
        {bilder.map((bild, i) => (
          <SwiperSlide key={i}>
            <SliderInner fullscreen={false} bild={bild} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjektSlider;
