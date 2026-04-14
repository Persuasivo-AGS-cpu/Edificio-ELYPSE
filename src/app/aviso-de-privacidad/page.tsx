import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Aviso.module.css";
import Link from "next/link";

export default function AvisoPrivacidad() {
  return (
    <>
      <Header />
      <main className={styles.pageWrapper}>
        <div className={`container ${styles.container}`}>
          <Link href="/" className={styles.backLink}>
            ← Volver al inicio
          </Link>
          
          <h1 className={styles.title}>Aviso de Privacidad</h1>
          <p className={styles.lastUpdate}>Última actualización: Abril 2026</p>
          
          <div className={styles.content}>
            <section>
              <h2>1. Identidad y Domicilio del Responsable</h2>
              <p>
                Edificio Elypse (en adelante, &quot;El Responsable&quot;), con domicilio en San Alberto Ote. 301, Residencial Santa Bárbara, San Pedro Garza García, N.L., es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
              </p>
            </section>

            <section>
              <h2>2. Datos Personales que Recabamos</h2>
              <p>Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:</p>
              <ul>
                <li>Nombre completo</li>
                <li>Teléfono (WhatsApp)</li>
                <li>Correo electrónico</li>
                <li>Intereses comerciales (ej. Domicilio Fiscal, Oficinas Privadas)</li>
              </ul>
            </section>

            <section>
              <h2>3. Finalidad del Tratamiento de los Datos</h2>
              <p>Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades primarias que son necesarias para el servicio que solicita:</p>
              <ul>
                <li>Contactarle para brindar información sobre oficinas, espacios comerciales y arrendamientos.</li>
                <li>Agendar visitas y recorridos a nuestras instalaciones.</li>
                <li>Enviar cotizaciones y dar seguimiento a su solicitud a través de correo o WhatsApp.</li>
                <li>Elaboración de contratos de arrendamiento o servicios de domicilio fiscal.</li>
              </ul>
            </section>

            <section>
              <h2>4. Transferencia de Datos</h2>
              <p>
                Le informamos que sus datos personales no son compartidos con terceros, empresas u organizaciones distintas a nuestro corporativo. Sus datos son de uso exclusivo interno para fines comerciales dentro de Edificio Elypse.
              </p>
            </section>

            <section>
              <h2>5. Derechos ARCO</h2>
              <p>
                Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.
              </p>
              <p>Para el ejercicio de cualquiera de los derechos ARCO, usted deberá enviar una solicitud al equipo administrativo a nuestro correo de contacto.</p>
            </section>

            <section>
              <h2>6. Cambios al Aviso de Privacidad</h2>
              <p>
                El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales, de nuestras propias necesidades por los servicios que ofrecemos, o de nuestras prácticas de privacidad. Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad a través de este mismo sitio web.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
