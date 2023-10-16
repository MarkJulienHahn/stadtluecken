import { useState } from "react";
import styles from "../../styles/Projekte.module.css";

import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";

import Headline from "./Headline";
import Text from "./Text";
import Table from "./Table";
import Slider from "./Slider";
import ImageBottom from "./ImageBottom";
import Archiv from "./Archiv";
import ProjektSlider from "./ProjektSlider";
import Footer from "../Footer";

const Projekt = ({ currentProjekt, i }) => {
  const [move, setMove] = useState(0);
  const [archive, setArchive] = useState(false);

  const router = useRouter();

  const routerAction = () => {
    router.push("/projekte");
  };

  const archiveAction = () => {
    router.push(`/projekte/${currentProjekt.slug.current}/archive`),
      setArchive(true);
  };

  const close = () => {
    setMove(100), setTimeout(routerAction, 500);
  };

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [ref2, inView2] = useInView({
    threshold: 1,
  });

  return (
    <>
      {!move && (
        <div className={styles.projektNav}>
          <span onClick={close}>zurück</span>
        </div>
      )}

      {archive && (
        <Archiv archiv={currentProjekt.archiv} setArchive={setArchive} />
      )}

      <div
        className={styles.projektWrapper}
        style={{ marginTop: move ? "100vh" : "0vh" }}
      >
        <div className={styles.projektInner}>
          <Slider currentProjekt={currentProjekt} />
          <ImageBottom
            inView={inView}
            currentProjekt={currentProjekt}
            setArchive={setArchive}
          />
          <div className={styles.projektMainPadding}></div>
          <div>
            <div className={styles.projektMain}>
              <Table currentProjekt={currentProjekt} />
              {/* <Headline currentProjekt={currentProjekt} /> */}
              <Text currentProjekt={currentProjekt} />
              {currentProjekt.bildslider && (
                <ProjektSlider currentProjekt={currentProjekt} />
              )}
            </div>
            <div className={styles.projektMainPaddingBottom} ref={ref}>
              {/* {currentProjekt.archivAbfrage && (
                <div className={styles.archiv} style={inView2 ? {opacity: "1"} : {opacity: "0"}}>
                  <h1 onClick={archiveAction} ref={ref2}>Archiv</h1>
                </div>
              )} */}
            </div>
          </div>
          <div style={{ zIndex: "1000", position: "relative" }}>
            <Footer white="true" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projekt;
