import { useState, useEffect, useRef } from "react";

import styles from "../styles/Projekte.module.css";
import ProjektPreview from "@/Components/ProjektPreview";
import client from "../client";

import Projekt from "@/Components/Projekt/Projekt";
import Footer from "@/Components/Footer";

import { useRouter } from "next/router";

const Projekte = ({ projekt }) => {
  const [length, setLength] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [scrollHeight, setScrollHeight] = useState("")

  const ref = useRef();

  const scrollAction = () =>
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const updateLength = () => {
    setLength(length + 2);
    setTimeout(scrollAction, 200);
  };

  const router = useRouter();

  useEffect(() => {
    setCurrentIndex(router.query.image);
  }, [router]);

  return (
    <>
      {router.query.image && (
        <Projekt
          currentProjekt={projekt[router.query.image]}
          i={currentIndex}
        />
      )}

      <div className={styles.wrapper}>
        {projekt.map((projekt, i) =>
          i < length ? (
            <>
              <ProjektPreview
                key={i}
                i={i}
                titel={projekt.titelUebersicht}
                bild={projekt.bildPreview}
                slug={projekt.slug}
                setScrollHeight={setScrollHeight}
              />
            </>
          ) : (
            ""
          )
        )}

        <div className={styles.anchor} ref={ref} style={{transform: `translateY(-${scrollHeight + 150}px)`}}></div>

        <div className={styles.plus} onClick={updateLength}>
         {length < projekt.length &&<h2>+</h2>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projekte;

export async function getServerSideProps() {
  const projekt = await client.fetch(`* [_type == "projekte"]|order(orderRank){..., 
  
    "bilder": bilder[]
    {..., "bild": bild{..., 
      asset->{metadata, url}
    }}, 
  
    "bildPreview": bildPreview{..., "bild": bild{..., 
      asset->{metadata, url}
    }},
  
  
    "bildUnten": bildUnten{..., "bild": bild{..., 
      asset->{metadata, url}
    }},
    
    "archiv": archiv[]
    {..., "bild": bild{..., asset->{metadata, url}}, 
      
    "kategorie": kategorie->{kategorie}, 
    "kommentare": kommentare[]{"kommentar": kommentar, "name": name->{nickname}}}, 
   }`);
  return {
    props: {
      projekt,
    },
  };
}
