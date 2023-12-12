import { useState } from "react";
import styles from "../styles/Footer.module.css";

import Impressum from "./Impressum";
import Datenschutz from "./Datenschutz";

import Link from "next/link";

const Footer = ({ white }) => {
  const [overlay, setOverlay] = useState(null);

  const activateImpressum = () => {
    setOverlay("impressum");
  };
  const activateDatenschutz = () => {
    setOverlay("datenschutz");
  };

  const deactivate = () => {
    setOverlay(null);
  };

  return (
    <>
      {overlay == "impressum" && <Impressum deactivate={deactivate} />}
      {overlay == "datenschutz" && <Datenschutz deactivate={deactivate} />}
      <div
        className={styles.wrapper}
        style={
          white
            ? { color: "white", background: "transparent" }
            : { color: "black" }
        }
      >
        ©{new Date().getFullYear()}
        <span className={styles.logo}>STADTLÜCKEN</span>
        <Link href="/impressum">Impressum</Link> |
        <Link href="/datenschutz">Datenschutz</Link> |
        <a
          href="https://www.instagram.com/stadtluecken/?hl=de"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>
    </>
  );
};

export default Footer;
