import styles from "./TrustSection.module.css";

export default function TrustSection({ onOpenWizard }: { onOpenWizard: () => void }) {
  return (
    <section id="ubicacion" className={styles.trustSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Ubicación corporativa AAA</h2>
          <p className={styles.desc}>
            Posiciona tu marca en el corazón de los negocios de Monterrey. Nos encontramos a escasos minutos de avenidas
            principales como Lázaro Cárdenas, Morones Prieto y Gonzalitos.
          </p>
          
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <span className={styles.check}>✓</span>
              <div>
                <strong>Proceso Sencillo</strong>
                <p>Sin burocracia excesiva. Renta de forma directa y eficiente.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.check}>✓</span>
              <div>
                <strong>Visitas Mediante Cita</strong>
                <p>Atención personalizada para proteger la privacidad de nuestros inquilinos actuales.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.check}>✓</span>
              <div>
                <strong>Disponibilidad Limitada</strong>
                <p>Únicamente 14 oficinas conforman nuestro complejo. Actualmente tenemos 10 vacantes.</p>
              </div>
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>Agenda una visita y conoce disponibilidad actual.</h3>
            <button className={styles.primaryBtn} onClick={onOpenWizard}>
              Solicitar información
            </button>
          </div>
        </div>

        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
             {/* Imagen Real del Edificio */}
            <img 
              src="/images/exterior.jpg" 
              alt="Exterior Corporativo de Edificio Elypse" 
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
