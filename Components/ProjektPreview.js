import styles from "../styles/Projekte.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const ProjektPreview = ({
  i,
  titel,
  bild,
  slug,
}) => {
  const router = useRouter();

  const routerAction = () => {
    router.push(`/projekte/?image=${i}`, `/projekte/${slug.current}`);
  };


  return (
    <div className={styles.previewWrapper} onClick={routerAction}>
      <div className={styles.previewTitle}>
        <ul className="animation">
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

          <div className={styles.previewImage}>
            <Image fill src={bild.bild.asset.url} alt={bild.bild.alt} />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default ProjektPreview;
