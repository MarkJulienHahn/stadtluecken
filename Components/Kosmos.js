import { useState } from "react";

import styles from "../styles/Kosmos.module.css";
import KosmosPost from "@/Components/KosmosPost";

import { PortableText } from "@portabletext/react";

const Kosmos = ({kosmos}) => {
    const [length, setLength] = useState(6);
    const [activeIndex, setActiveIndex] = useState(null);
  
    const updateLength = () => {
      setLength(length + 3);
    };
  return (
    <div className={styles.wrapper}>
      <div className={styles.introText}>
        <PortableText value={kosmos[0].kosmos} />
      </div>
      <div className={styles.content}>
        {kosmos[0].eintrag.map((eintrag, i) =>
          i < length ? (
            <KosmosPost
              i={i}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              eintrag={eintrag}
              key={i}
              length={length}
            />
          ) : (
            ""
          )
        )}
      </div>
      <div className={styles.plus} onClick={updateLength}>
        <h2>{kosmos[0].eintrag.length > length && "+"}</h2>
      </div>
    </div>
  );
};

export default Kosmos;
