import React from "react";
import Link from "next/link";
import styles from "@/styles/Cookies.module.css";

const Cookies = ({ hideCookies }) => {
  return (
    <div className={styles.cookiesWrapper}>
      <span>
        Wir sammeln keine Cookies und speichern oder verbreiten keine
        persönlichen Daten. Für mehr Infos zu Datenschutz, klicke{" "}
        <Link href="/datenschutz">hier</Link>.
      </span>
      <a className={styles.cookiesButton} onClick={hideCookies}>Schließen</a>
    </div>
  );
};

export default Cookies;
