import styles from "./BenefitsSection.module.css";

const benefits = [
  {
    title: "Expansión de Huella Legal",
    desc: "Multiplica la presencia de tu corporativo en San Pedro con múltiples contratos y direcciones fiscales independientes bajo un mismo techo.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18"></path><path d="M5 21V7l8-4v18"></path><path d="M19 21V11l-6-3"></path><path d="M9 9v.01"></path><path d="M9 13v.01"></path><path d="M9 17v.01"></path>
      </svg>
    ),
  },
  {
    title: "Vistas y Altura",
    desc: "Plataformas de enfoque con vistas espectaculares hacia la Sierra Madre y Valle Oriente. Cero distracciones estilo coworking.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path><path d="M2 20h20"></path><path d="M14 12v.01"></path>
      </svg>
    ),
  },
  {
    title: "Cajón VIP + Visitas Garantizadas",
    desc: "Tu propio cajón ejecutivo reservado 24/7. Y la tranquilidad de contar con amplio estacionamiento exterior para que tus clientes jamás batallen.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path>
      </svg>
    ),
  },
  {
    title: "Infraestructura Completa",
    desc: "2 Salas de Juntas totalmente equipadas para negociaciones corporativas y área de comedor privado a tu disposición.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: "Modelado All-Inclusive",
    desc: "Olvídate de recibos de CFE caros. En Elypse el servicio de luz comercial, agua, seguridad y mantenimiento mensual ya están cubiertos.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
  },
  {
    title: "Recepción y Seguridad 24/7",
    desc: "Atención profesional en el lobby, recepción de paquetería fiscal sin interrupciones, guardias y monitoreo con cámaras de circuito cerrado.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
  },
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className={styles.benefitsSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <div className={styles.premiumTag}>Experiencia AAA</div>
          <h2 className={styles.title}>Todo lo que tu empresa necesita</h2>
          <p className={styles.subtitle}>
            Una cuota mensual de aproximadamente $12,500 MXN que resuelve tu infraestructura operativa en la zona más exclusiva.
          </p>
        </div>

        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardGlow}></div>
              <div className={styles.cardInner}>
                <div className={styles.iconWrapper}>
                  {benefit.icon}
                </div>
                <h3 className={styles.cardTitle}>{benefit.title}</h3>
                <p className={styles.cardDesc}>{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.disclaimerBox}>
          <div className={styles.disclaimerIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          </div>
          <div className={styles.disclaimerContent}>
            <h4 className={styles.disclaimerTitle}>Importante considerar</h4>
            <ul className={styles.disclaimerList}>
              <li>Para mantener un entorno enfocado, el servicio de Internet corre por cuenta de cada inquilino de forma privada.</li>
              <li>Nuestros espacios son exclusivamente oficinas privadas, no ofrecemos modalidades de coworking ni escritorios compartidos.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
