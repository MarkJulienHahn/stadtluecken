import styles from "../../styles/Landing.module.css";
import Image from "next/image";

const LandingObject = ({ img, front, offset, scale, rotate }) => {
  const style = {
    width: "40vw",
    height: "60vw",
    position: "relative",
    transform: `scale(${scale}%) translate3d(${offset}) rotate(${rotate}deg)`,
    // zIndex: front ? "100" : "0",
    // marginTop: `${offset[0]}vw`
    // transform: "translateX(20vw)",
  };

  return (
    <div style={style}>
      <Image src={img} fill style={{ objectFit: "contain" }} sizes="100vw" />
    </div>
  );
};

export default LandingObject;
