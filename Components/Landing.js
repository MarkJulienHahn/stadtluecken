import React, { useState, useEffect } from "react";

import styles from "../styles/Landing.module.css";

import img01 from "../public/image/stadtluecken_gullideckel.png";
import img02 from "../public/image/stadtluecken_blumentopf.png";
import img03 from "../public/image/stadtluecken_gitter.png";
import img04 from "../public/image/stadtluecken_poller.png";
import img05 from "../public/image/stadtluecken_gullideckel_02.png";
import img06 from "../public/image/stadtluecken_stein.png";

import LandingObject from "./LandingObject";
import About from "./About";
import Footer from "./Footer";

import useWindowDimensions from "../hooks/useWindowDimensions";

// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { useParallax } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";

const Landing = ({ stadtluecken, mitglieder }) => {
  // const [x, setX] = useState();
  // const [y, setY] = useState();
  // const [xFactor, setXFactor] = useState("");
  // const [yFactor, setYFactor] = useState("");

  // const { windowHeight, windowWidth } = useWindowDimensions();

  // useEffect(() => {
  //   const update = (e) => {
  //     setX(e.x);
  //     setY(e.y);
  //   };
  //   window.addEventListener("mousemove", update);
  //   window.addEventListener("touchmove", update);
  //   return () => {
  //     window.removeEventListener("mousemove", update);
  //     window.removeEventListener("touchmove", update);
  //   };
  // }, [setX, setY]);

  // useEffect(() => {
  //   setXFactor((x - windowWidth / 2) / (windowWidth / 2)),
  //     setYFactor((y - windowWidth / 2) / (windowWidth / 2));
  // }, [x,y]);

  // console.log(xFactor, yFactor);

  return (
    <>
      <div className={styles.landingOuter}>
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

        {/*    <Parallax speed={50}>
          <div className={styles.landingObjects}>
            <LandingObject
              img={img02}
              front={true}
              offset={"-10vw,50vh,0"}
              scale={130}
              rotate={0}
            />
          </div>
        </Parallax> */}

        <div className={styles.bottomWrapper}>
          <About stadtluecken={stadtluecken} mitglieder={mitglieder} />
          <Footer />
        </div>
      </div>

      {/* <div className={styles.landingOuter}>
        <div style={{ background: "white" }}>
          <Parallax pages={3}>
            <ParallaxLayer offset={0} speed={0}>
              <div className={styles.landingObjectTop}>
                <LandingObject
                  img={img04}
                  front={false}
                  offset={"0,0, 0"}
                  scale={100}
                  rotate={0}
                />
                <LandingObject
                  img={img06}
                  front={true}
                  offset={"-5vw, 5vh, 0"}
                  scale={100}
                  rotate={0}
                />
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0.1} speed={0.2}>
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
            </ParallaxLayer>

            <ParallaxLayer offset={0.5} speed={0.7}>
              <div className={styles.landingObjects}>
                <LandingObject
                  img={img03}
                  front={true}
                  offset={"15vw, -10vh, 0"}
                  scale={130}
                  rotate={20}
                />
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={0.4} speed={2}>
              <div className={styles.landingObjects}>
                <LandingObject
                  img={img02}
                  front={true}
                  offset={"-10vw,50vh,0"}
                  scale={130}
                  rotate={0}
                />
              </div>
            </ParallaxLayer>
            <ParallaxLayer>
              <div className={styles.bottomWrapper}>
                <About stadtluecken={stadtluecken} mitglieder={mitglieder} />
                <Footer />
              </div>
            </ParallaxLayer>
          </Parallax>
        </div>
      </div> */}
    </>
  );
};

export default Landing;
