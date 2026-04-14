import styles from "./HeroSection.module.css";

export default function HeroSection({ onOpenWizard }: { onOpenWizard: (interest?: string) => void }) {
  return (
    <section className={styles.hero}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.videoBackground}
      >
        <source src="/videos/hero-hallway.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.textContent}>
          <div className={styles.badge}>
            <span className={styles.pulseDot}></span>
            Sólo 14 Oficinas Disponibles
          </div>
          <h1 className={styles.title}>
            Tu Domicilio Fiscal y Oficina Privada en San Pedro Garza García.
          </h1>
          <p className={styles.subtitle}>
            Oficinas individuales para máximo enfoque o renta exclusiva de Domicilio Fiscal para proyectar la mejor imagen ante tus clientes y el SAT.
          </p>
          
          <div className={styles.inlineWidget}>
            <h3 className={styles.widgetTitle}>¿Qué estás buscando?</h3>
            <div className={styles.widgetOptions}>
              {['domicilio fiscal', 'oficina privada', 'oficina + domicilio fiscal', 'quiero agendar visita'].map(opt => (
                <button key={opt} className={styles.widgetBtn} onClick={() => onOpenWizard(opt)}>
                  {opt} <span className={styles.arrowIcon}>→</span>
                </button>
              ))}
            </div>
            <p className={styles.widgetTrustText}>Rápido y sin compromiso. Evalúa disponibilidad en 30 segundos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
