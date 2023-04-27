import styles from "../styles/Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.landingOuter}>
      <div className={styles.landingTypo}>
        <ul className="animation">
          <li className="rightbound">
            <h1>Wem</h1>
          </li>
          <li>
            <h1>Gehört die</h1>
          </li>
          <li className="leftbound">
            <h1>Stadt?</h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Landing;
