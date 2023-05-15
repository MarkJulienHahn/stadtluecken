import styles from "../styles/Footer.module.css";
const Datenschutz = ({ deactivate }) => {
  return (
    <div className={styles.pageWrapper} onClick={deactivate}>
      Datenschutz
    </div>
  );
};

export default Datenschutz;
