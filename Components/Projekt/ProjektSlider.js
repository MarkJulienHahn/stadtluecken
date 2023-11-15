import { useState } from "react";

import SliderInner from "./SliderInner";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import styles from "../../styles/Projekte.module.css";

import MouseElement from "@/Components/MouseElement";

const ProjektSlider = ({ bilder }) => {
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  const [lable, setLable] = useState();

  const nextFct = () => {
    setNext(true), setTimeout(() => setNext(false), 500);
  };

  const prevFct = () => {
    setPrev(true), setTimeout(() => setPrev(false), 500);
  };

  return (
    <>
      <MouseElement lable={lable} />
      <div className={styles.projektSwiperWrapper}>
        <div className={styles.controlsWrapper}>
          <div
            onClick={prevFct}
            onMouseEnter={() => setLable("←")}
            onMouseLeave={() => setLable("")}
          ></div>
          <div
            onClick={nextFct}
            onMouseEnter={() => setLable("→")}
            onMouseLeave={() => setLable("")}
          ></div>
        </div>
        <Swiper speed={1000} spaceBetween={50} slidesPerView={1} loop>
          {bilder.map((bild, i) => (
            <SwiperSlide key={i}>
              <SliderInner
                fullscreen={false}
                bild={bild}
                next={next}
                prev={prev}
                lable={lable}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProjektSlider;
