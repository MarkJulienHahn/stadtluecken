import { useState } from "react";

import styles from "../styles/Kosmos.module.css";
import KosmosPost from "@/Components/KosmosPost";

import { PortableText } from "@portabletext/react";

import client from "../client";

const Kosmos = ({ kosmos }) => {
  const [length, setLength] = useState(3);

  const updateLength = () => {
    setLength(length + 3);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.introText}>
        {/* <PortableText value={kosmos[0].kosmos} /> */}
      </div>
      <div className={styles.content}>
        {kosmos[0].eintrag.map((eintrag, i) =>
          i < length ? <KosmosPost eintrag={eintrag} key={i} /> : ""
        )}
      </div>
      <div className={styles.plus} onClick={updateLength}>
        <h2>+</h2>
      </div>
    </div>
  );
};

export default Kosmos;

export async function getServerSideProps() {
  const kosmos = await client.fetch(`
  
  * [_type == "kosmos"]{..., "eintrag": eintrag[]{..., "beteiligte": beteiligte[]->{name}, "bilder": bilder[]{..., "bild": bild.asset->{metadata, url}}}}`);
  return {
    props: {
      kosmos,
    },
  };
}
