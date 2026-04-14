import styles from "./LocationMap.module.css";

export default function LocationMap() {
  return (
    <section id="ubicacion" className={styles.locationSection}>
      <div className={styles.mapContainer}>
        {/* Google Maps Embed in Satellite Mode (t=k) */}
        <iframe 
          className={styles.mapIframe}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=San%20Alberto%20Ote.%20301,%20Residencial%20Santa%20B%C3%A1rbara,%20San%20Pedro%20Garza%20Garc%C3%ADa+(Edificio%20Elypse)&amp;t=k&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
          frameBorder="0" 
          loading="lazy"
          allowFullScreen
        ></iframe>
        <div className={styles.mapOverlay}></div>
      </div>
      
      <div className={`container ${styles.contentWrapper}`}>
        <div className={styles.glassCard}>
          <div className={styles.premiumTag}>Ubicación Estratégica</div>
          <h2 className={styles.title}>El Corazón de San Pedro</h2>
          <p className={styles.address}>
            San Alberto Ote. 301<br />
            Residencial Santa Bárbara<br />
            San Pedro Garza García, N.L.
          </p>
          <ul className={styles.highlights}>
            <li>
              <span className={styles.bullet}>•</span> A 2 minutos de Fashion Drive y Distrito Armida
            </li>
            <li>
              <span className={styles.bullet}>•</span> Acceso inmediato a Av. Lázaro Cárdenas
            </li>
            <li>
              <span className={styles.bullet}>•</span> Zona de máxima plusvalía comercial
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
