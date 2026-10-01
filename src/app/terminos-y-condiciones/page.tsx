import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "../aviso-de-privacidad/Aviso.module.css";
import Link from "next/link";

export default function TerminosYCondiciones() {
  return (
    <>
      <Header />
      <main className={styles.pageWrapper}>
        <div className={`container ${styles.container}`}>
          <Link href="/" className={styles.backLink}>
            ← Volver al inicio
          </Link>

          <h1 className={styles.title}>Términos y Condiciones</h1>
          <p className={styles.lastUpdate}>Última actualización: Octubre 2026</p>

          <div className={styles.content}>
            <section>
              <h2>1. Qué es este sitio</h2>
              <p>
                Este sitio presenta Edificio Elypse, un edificio de oficinas en renta en San Alberto Ote. 301, Residencial Santa Bárbara, San Pedro Garza García, N.L. Su finalidad es informar sobre los espacios, la ubicación y la forma de solicitar una visita o una cotización.
              </p>
            </section>

            <section>
              <h2>2. La información no es una oferta vinculante</h2>
              <p>
                Los textos, fotografías, metrajes, precios y disponibilidad que aparecen aquí son informativos. No constituyen una oferta, una promesa de arrendamiento ni un contrato. La disponibilidad y las condiciones pueden cambiar y solo quedan firmes cuando se acuerdan por escrito entre las partes.
              </p>
            </section>

            <section>
              <h2>3. Visitas y cotizaciones</h2>
              <p>
                Puede solicitar una visita o una cotización por los formularios del sitio o por WhatsApp. Una solicitud no reserva un espacio ni obliga a Edificio Elypse a arrendarlo. Nos reservamos confirmar horarios, requisitos y condiciones antes de agendar o enviar una propuesta.
              </p>
            </section>

            <section>
              <h2>4. Uso aceptable</h2>
              <p>Al usar este sitio usted se compromete a:</p>
              <ul>
                <li>Utilizarlo solo para consultar información y contactarnos de buena fe.</li>
                <li>No enviar datos falsos, ni usar el sitio para spam, fraude o para afectar su funcionamiento.</li>
                <li>No intentar acceder a áreas, sistemas o datos que no estén destinados al público.</li>
              </ul>
            </section>

            <section>
              <h2>5. Propiedad intelectual</h2>
              <p>
                El nombre Edificio Elypse, los textos, el diseño y las imágenes de este sitio pertenecen a sus titulares. Puede consultarlos para evaluar un arrendamiento. No está permitido copiarlos, reproducirlos o usarlos con fines comerciales sin autorización previa.
              </p>
            </section>

            <section>
              <h2>6. Limitación de responsabilidad</h2>
              <p>
                Procuramos que la información esté actualizada, pero puede contener errores u omisiones. Edificio Elypse no responde por decisiones tomadas solo con base en este sitio, ni por interrupciones, fallas técnicas o enlaces a servicios de terceros (por ejemplo, herramientas de medición o mensajería). El uso del sitio es bajo su propia responsabilidad.
              </p>
            </section>

            <section>
              <h2>7. Cambios a estos términos</h2>
              <p>
                Podemos actualizar estos términos cuando cambien el sitio o la forma en que operamos. La versión vigente es la que se publica en esta página, con su fecha de actualización. Seguir usando el sitio después de un cambio implica que conoce la versión nueva.
              </p>
            </section>

            <section>
              <h2>8. Contacto</h2>
              <p>
                Edificio Elypse, San Alberto Ote. 301, Residencial Santa Bárbara, San Pedro Garza García, N.L. Para dudas sobre estos términos o sobre los espacios, escríbanos por{" "}
                <a href="https://wa.me/528111062487" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                .
              </p>
              <p>
                El tratamiento de datos personales se describe en el{" "}
                <Link href="/aviso-de-privacidad">Aviso de Privacidad</Link>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
