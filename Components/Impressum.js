import styles from "../styles/Footer.module.css";

const Impressum = ({deactivate}) => {
  return (
    <div className={styles.pageWrapper} onClick={deactivate}>Impressum</div>
  )
}

export default Impressum