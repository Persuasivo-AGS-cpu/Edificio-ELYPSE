import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.brandInfo}>
          <h3 className={styles.brandName}>EDIFICIO ELYPSE</h3>
          <p className={styles.address}>
            San Alberto Ote. 301 <br />
            Residencial Santa Bárbara <br />
            San Pedro Garza García, N.L.
          </p>
        </div>
        <div className={styles.links}>
          <h4 className={styles.linksTitle}>Edificio Elypse</h4>
          <a href="#" className={styles.link}>Oficinas Disponibles</a>
          <a href="#" className={styles.link}>Servicios</a>
          <Link href="/aviso-de-privacidad" className={styles.link}>Aviso de Privacidad</Link>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className="container">
          <p>&copy; {currentYear} Edificio Elypse. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
