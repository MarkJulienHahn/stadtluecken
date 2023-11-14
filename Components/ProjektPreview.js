import { useRef, useEffect } from "react";
import styles from "../styles/Projekte.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { urlFor } from "../hooks/useImageUrlBuilder";

const ProjektPreview = ({ i, titel, bild, slug, setScrollHeight }) => {
  const router = useRouter();
  const ref = useRef();

  const routerAction = () => {
    router.push(`/projekte/?image=${i}`, `/projekte/${slug.current}`);
  };

  const getHeight = () => {
    setScrollHeight(ref.current.clientHeight);
  };

  const scrollAction = () => ref.current.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    setTimeout(getHeight, 500);
    i > 4 && scrollAction();
  }, []);

  return (
    <div className={styles.previewWrapper} onClick={routerAction} ref={ref}>
      <div className={styles.previewTitle}>
        <ul className="animation">
          {titel.length <= 2 ? (
            <>
              <li className="rightbound">
                <h2>{titel[0]}</h2>
              </li>
              <li className="leftbound">
                <h2>{titel[1]}</h2>
              </li>
            </>
          ) : (
            <>
              <li className="rightbound">
                <h2>{titel[0]}</h2>
              </li>
              <li className="rightbound">
                <h2>{titel[1]}</h2>
              </li>
              <li className="leftbound">
                <h2>{titel[2]}</h2>
              </li>
              <li className="leftbound">
                <h2>{titel[3]}</h2>
              </li>
              <li className="rightbound">
                <h2>{titel[4]}</h2>
              </li>
              <li className="rightbound">
                <h2>{titel[5]}</h2>
              </li>
              <li className="leftbound">
                <h2>{titel[6]}</h2>
              </li>
              <li className="leftbound">
                <h2>{titel[7]}</h2>
              </li>
            </>
          )}

          {/* ZWEIZEILIG */}

          {/* MEHRZEILIG */}

          <div className={styles.previewImage}>
            <Image
              fill
              src={urlFor(bild.bild.asset.url).width(1000).quality(50).url()}
              alt={bild.bild.alt}
              placeholder="blur"
              blurDataURL={bild.bild.asset.metadata.lqip}
              style={{ objectFit: "cover" }}
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default ProjektPreview;
