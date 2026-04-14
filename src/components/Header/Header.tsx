import Link from "next/link";
import styles from "./Header.module.css";

export default function Header({ onOpenWizard }: { onOpenWizard?: () => void }) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.elypseText}>EDIFICIO ELYPSE</span>
          </Link>
        </div>
        <nav className={styles.nav}>
          <a href="#beneficios" className={styles.navLink}>Beneficios</a>
          <a href="#ubicacion" className={styles.navLink}>Ubicación</a>
          <button className={styles.contactBtn} onClick={onOpenWizard}>Contactar</button>
        </nav>
      </div>
    </header>
  );
}
