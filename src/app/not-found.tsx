import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./aviso-de-privacidad/Aviso.module.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className={styles.pageWrapper} style={{ backgroundColor: "#0a0c10" }}>
        <div className={`container ${styles.container}`}>
          <h1 className={styles.title}>Página no encontrada</h1>
          <p className={styles.lastUpdate}>Ese enlace no existe o ya no está disponible.</p>
          <Link href="/" className={styles.backLink}>
            ← Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
