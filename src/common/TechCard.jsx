import styles from "./TechCardStyles.module.css";

function TechCard({ src, name }) {
  return (
    <div className={styles.card}>
      <img src={src} alt={name} className={styles.icon} />
      <p className={styles.name}>{name}</p>
    </div>
  );
}

export default TechCard;