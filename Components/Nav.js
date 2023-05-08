import { useState, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { Squash as Hamburger } from "hamburger-react";

import styles from "../styles/Nav.module.css";

import use100vh from "react-div-100vh";

const visible = { pointerEvents: "auto", opacity: 1 };
const invisible = { pointerEvents: "none", opacity: 0 };

const Nav = ({ active, setActive }) => {
  const [scrollPosition, setScrollPosition] = useState("");
  const router = useRouter();

  const { windowHeight } = use100vh;

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    if (scrollPosition > 500) setActive(false);
  }, [scrollPosition > 500]);

  return (
    <div style={{ background: "white" }}>
      <div
        className={`${styles.navWrapper} ${
          active ? styles.navWrapperOpen : styles.navWrapperClosed
        }`}
        style={active ? { height: windowHeight } : { height: "50px" }}
      >
        <div className={styles.hamburgerWrapper}>
          <Hamburger toggled={active} onToggle={() => setActive(!active)}/>
        </div>
        <Link href="/" onClick={() => setActive(!active)}>
          <p style={router.pathname !== "/" && !active ? invisible : visible}>
            stadtlücken
          </p>
        </Link>
        <Link href="/netzwerk" onClick={() => setActive(!active)}>
          <p
            style={
              router.pathname !== "/netzwerk" && !active ? invisible : visible
            }
          >
            netzwerk
          </p>
        </Link>
        <Link href="/projekte" onClick={() => setActive(!active)}>
          <p
            style={
              router.pathname !== "/projekte" && !active ? invisible : visible
            }
          >
            projekte
          </p>
        </Link>
        <Link href="/kosmos" onClick={() => setActive(!active)}>
          <p
            style={
              router.pathname !== "/kosmos" && !active ? invisible : visible
            }
          >
            kosmos
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
