import styles from "../styles/Landing.module.css";

import About from "./About";
import Footer from "./Footer";
import LandingDesktop from "./LandingDesktop";
import LandingMobile from "./LandingMobile";

const Landing = ({ stadtluecken, mitglieder }) => {
  return (
    <>
      <div className={styles.landingOuter}>
        <div className={styles.landingDesktop}>
          <LandingDesktop />
        </div>
        <div className={styles.landingMobile}>
          <LandingMobile />
        </div>
        <div className={styles.bottomWrapper}>
          <About stadtluecken={stadtluecken} mitglieder={mitglieder} />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Landing;
