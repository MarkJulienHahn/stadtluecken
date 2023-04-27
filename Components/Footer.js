import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      © {new Date().getFullYear()}{" "}
      <span className={styles.logo}>STADTLÜCKEN</span>
      <a>Impressum</a> |
      <a>Datenschutz</a> |
      <a>Instagam</a>
    </div>
  );
};

export default Footer;
