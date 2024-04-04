import styles from "./styles.module.css";
import logo from "/Ignite-simbol.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="ignite logo" />
        <span>Ignite Feed</span>
      </div>
    </header>
  );
}
