import styles from "../styles/About.module.css";
import { PortableText } from "@portabletext/react";

const About = ({ stadtluecken, mitglieder }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <PortableText value={stadtluecken.beschreibung} />
      </div>
      <p className={styles.headline}>Aktive Mitglieder</p>
      <ul className={styles.list}>
        {mitglieder.map((mitglied, i) => 
          mitglied.aktiv &&
          <li key={i}> 
            {mitglied.name} ({mitglied.taetigkeit}) {mitglied.website && <a className={styles.link} href={mitglied.website} target="blank" rel="_noreferrer">↗</a>}
          </li>
        )}
      </ul>
      <p className={styles.headline}>Mitglieder</p>
      <ul className={styles.list}>
      {mitglieder.map((mitglied, i) => 
          !mitglied.aktiv &&
          <li key={i}> 
            {mitglied.name} ({mitglied.taetigkeit}) {mitglied.website && <a className={styles.link} href={mitglied.website} target="blank" rel="_noreferrer">↗</a>}
          </li>
        )}
      </ul>
      <div className={styles.info}>
        <p className={styles.headline}>
          Stadtlücken
          <br />
          {stadtluecken.adresse.strasse}
          <br />
          {stadtluecken.adresse.postleitzahl} {stadtluecken.adresse.stadt}
        </p>
        <div className={styles.headline}>
          <PortableText value={stadtluecken.kontakthinweis} />
        </div>
      </div>


      <div className={styles.links}>
          <a href="mailto:hallo@stadtluecken.de">email</a>
          <a href="https://www.instagram.com/stadtluecken/?hl=de" target="blank" rel="_noreferrer">instagram</a>
      </div>


    </div>
  );
};

export default About;
