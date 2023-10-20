import img01 from "../public/image/stadtluecken_gullideckel.png";
import img02 from "../public/image/stadtluecken_blumentopf.png";
import img03 from "../public/image/stadtluecken_gitter.png";
import img04 from "../public/image/stadtluecken_poller.png";
import img05 from "../public/image/stadtluecken_gullideckel_02.png";
import img06 from "../public/image/stadtluecken_stein.png";

import styles from "../styles/Landing.module.css";

import { Parallax } from "react-scroll-parallax";

import LandingObject from "./LandingObject";
const LandingMobile = () => {
  return (
    <div style={{ background: "white",  }}>
      <Parallax speed={-25} style={{ position: "absolute" }}>
        <div className={styles.landingObjects}>
            <LandingObject
              img={img06}
              front={true}
              offset={"35vw, 20vh, 0"}
              scale={100}
              rotate={0}
            />{" "}
        </div>
      </Parallax>

      <Parallax speed={-10} style={{ position: "absolute" }}>
        <div className={styles.landingObjects}>
          <LandingObject
            img={img04}
            front={true}
            offset={"-5vw, 5vh, 0"}
            scale={150}
            rotate={0}
          />
        </div>
      </Parallax>

      <Parallax speed={-0} style={{ position: "absolute" }}>
        <div className={styles.landingTypo}>
          <ul className="animation">
            <li className="rightbound">
              <h1>Wem</h1>
            </li>
            <li className="rightbound">
              <h1>Gehört</h1>
            </li>
            <li className="leftbound">
              <h1>Die</h1>
            </li>
            <li className="leftbound">
              <h1>Stadt?</h1>
            </li>
          </ul>
        </div>
      </Parallax>

      <Parallax speed={20} style={{ position: "absolute"}}>
        <div className={styles.landingObjects}>
          {/* <LandingObject
            img={img03}
            front={true}
            offset={"30vw, 15vh, 0"}
            scale={120}
            rotate={20}
          /> */}
        </div>
      </Parallax>

      <Parallax speed={100} style={{ position: "absolute" }}>
        <div className={styles.landingObjects}>
          <LandingObject
            img={img02}
            front={true}
            offset={"0vw,75vh,0"}
            scale={180}
            rotate={0}
          />
        </div>
      </Parallax>
    </div>
  );
};

export default LandingMobile;
