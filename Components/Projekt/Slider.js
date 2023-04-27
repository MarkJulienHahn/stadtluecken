import styles from "../../styles/Projekte.module.css";

import SliderInner from "./SliderInner";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper";

const Slider = ({ currentProjekt }) => {
  return (
    <div className={styles.projektTopSlider}>
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
        {currentProjekt.bilder.map((bild, i) => (
          <SwiperSlide key={i}>
            <SliderInner bild={bild} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
