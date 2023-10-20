import img01 from "../public/image/stadtluecken_gullideckel.png";
import img02 from "../public/image/stadtluecken_blumentopf.png";
import img03 from "../public/image/stadtluecken_gitter.png";
import img04 from "../public/image/stadtluecken_poller.png";
import img05 from "../public/image/stadtluecken_gullideckel_02.png";
import img06 from "../public/image/stadtluecken_stein.png";

import styles from "../styles/Landing.module.css";

import { Parallax } from "react-scroll-parallax";

import LandingObject from "./LandingObject";
const LandingDesktop = () => {
  return (
    <div style={{ background: "white" }}>
      <Parallax speed={-300} style={{ position: "absolute" }}>
        <div className={styles.landingObjects}>
          <LandingObject
            img={img06}
            front={true}
            offset={"25vw, 15vh, 0"}
            scale={100}
            rotate={0}
          />{" "}
        </div>
      </Parallax>

      <Parallax speed={-250} style={{ position: "absolute" }}>
        <div className={styles.landingObjects}>
          <LandingObject
            img={img04}
            front={true}
            offset={"-25vw, 5vh, 0"}
            scale={100}
            rotate={0}
          />{" "}
        </div>
      </Parallax>

      <Parallax speed={-200} style={{ position: "absolute" }}>
        <div className={styles.landingTypo}>
          <ul className="animation">
            <li className="rightbound">
              <h1>Wem</h1>
            </li>
            <li>
              <h1>Gehört die</h1>
            </li>
            <li className="leftbound">
              <h1>Stadt?</h1>
            </li>
          </ul>
        </div>
      </Parallax>

      <Parallax speed={-50} style={{ position: "absolute" }}>
        <div className={styles.landingObjects}>
          <LandingObject
            img={img03}
            front={true}
            offset={"15vw, 20vh, 0"}
            scale={130}
            rotate={20}
          />
        </div>
      </Parallax>

      <Parallax speed={50} style={{ position: "absolute" }}>
        <div className={styles.landingObjects}>
          <LandingObject
            img={img02}
            front={true}
            offset={"-10vw,50vh,0"}
            scale={130}
            rotate={0}
          />
        </div>
      </Parallax>
    </div>
  );
};

export default LandingDesktop;
