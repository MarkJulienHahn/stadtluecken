import styles from "../styles/Kosmos.module.css";
import { Squash as Hamburger } from "hamburger-react";
import { PortableText } from "@portabletext/react";

const KosmosPostOverlay = ({ eintrag, activeIndex, setActiveIndex, i }) => {
  const active = {
    transform: "translateY(0)",
  };

  const hidden = {
    transform: "translateY(100%)",
  };

  return (
    <>
      <div
        className={styles.kosmosOverlay}
        style={activeIndex == i ? active : hidden}
      >
        {activeIndex == i && (
          <div className={styles.hamburgerWrapper}>
            <Hamburger toggled={true} />
          </div>
        )}
        <div className={styles.kosmosText}>
          <PortableText value={eintrag.beschreibung} />
        </div>
        {eintrag.beteiligte && (
          <div className={styles.column}>
            <p className={styles.header}>
              {eintrag.beteiligte.length > 1 ? "Mitglieder" : "Mitglied"}
            </p>
            <div>
              {eintrag.beteiligte.map((name, i) => (
                <p key={i}>{name.name}</p>
              ))}
            </div>
          </div>
        )}
        {eintrag.externe && (
          <div className={styles.column}>
            <p className={styles.header}>Mit </p>
            <div>
              {eintrag.externe.map((name, i) => (
                <p key={i}>{name}</p>
              ))}
            </div>
          </div>
        )}
        {eintrag.link && (
          <div className={styles.link}>
            <a href={eintrag.link} target="_blank" rel="norefferer">
              <h3>
                Mehr erfahren{" "}
                <span
                  style={{
                    fontFamily: "Protest Grotesk",
                    fontVariationSettings: `"wght" 250`,
                    transform: "translateY(-10px)",
                    position: "absolute",
                  }}
                >
                  {" "}
                  →
                </span>
              </h3>
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default KosmosPostOverlay;
