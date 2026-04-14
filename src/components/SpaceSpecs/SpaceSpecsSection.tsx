"use client";

import Image from "next/image";
import styles from "./SpaceSpecsSection.module.css";

export default function SpaceSpecsSection() {
  return (
    <section className={styles.specsSection}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.contentColumn}>
          <div className={styles.premiumBadge}>Ingeniería Espacial</div>
          <h2 className={styles.title}>
            Planos diseñados para el Enfoque Directivo.
          </h2>
          <p className={styles.subtitle}>
            Rechazamos los grandes metros cuadrados sin propósito. En Edificio Elypse, la arquitectura es una cápsula de productividad. Cada línea en nuestros planos garantiza el aislamiento de distracciones.
          </p>

          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <div className={styles.metricGlow}></div>
              <h3 className={styles.metricTitle}>Amplitud Directiva</h3>
              <p className={styles.metricValue}>10 - 18m²</p>
              <p className={styles.metricDesc}>
                Espacios holgados de uso individual para respirar. Lo suficientemente amplios para trabajar a puerta cerrada y recibir a clientes simultáneamente sin sentir sofoco.
              </p>
            </div>

            <div className={styles.metricCard}>
              <div className={styles.metricGlow}></div>
              <h3 className={styles.metricTitle}>Acústica Aislada</h3>
              <p className={styles.metricValue}>2.40m</p>
              <p className={styles.metricDesc}>
                Altura a plafón calculada intencionalmente para impedir el rebote de sonido, manteniendo tus pláticas y cierres en absoluta protección.
              </p>
            </div>

            <div className={styles.metricCard}>
              <div className={styles.metricGlow}></div>
              <h3 className={styles.metricTitle}>Estructura Transparente</h3>
              <p className={styles.metricValue}>All-Inclusive</p>
              <p className={styles.metricDesc}>
                Despídete de rentas sombra. Luz (CFE comercial), agua, limpieza y mantenimiento ya están internalizados en tu única tarifa.
              </p>
            </div>
            
             <div className={styles.metricCard}>
              <div className={styles.metricGlow}></div>
              <h3 className={styles.metricTitle}>Fricción Cero</h3>
              <p className={styles.metricValue}>1 Cajón Asignado</p>
              <p className={styles.metricDesc}>
                A diferencia de los modelos flex que exigen cuotas extra por movilidad, tu renta incluye tu lugar de estacionamiento y facilidad exterior para clientes y visitas.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.imageColumn}>
          <div className={styles.cadWrapper}>
            <div className={styles.hologramEffect}></div>
            <Image
              src="/images/real-blueprint.png"
              alt="Planos arquitectónicos reales de oficinas privadas en Edificio Elypse"
              fill
              className={styles.cadImage}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <p className={styles.cadCaption}>
            *Renderizado en vivo desde archivo original: <code>DM OFICINAS - DESPLANTE MUROS.pdf</code>
          </p>
        </div>

      </div>
    </section>
  );
}
