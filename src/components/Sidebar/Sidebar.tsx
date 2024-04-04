import styles from "./styles.module.css";
import profileBackground from "/profile-background.jpg";

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.wrapper}>
        <img src={profileBackground} className={styles.cover} />
        <div className={styles.profileDetails}>
          <strong>Alexandre Rayol</strong>
          <span>Software Enginneer</span>
        </div>
        <footer className={styles.buttonContainer}>
          <button type="button" className={styles.profileButton}>
            icon | Editar seu perfil
          </button>
        </footer>
        <div className={styles.profileImgWrapper}>
          <img src="https://avatars.githubusercontent.com/u/122651034?v=4" />
        </div>
      </div>
    </div>
  );
}
