"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import styles from "./CookieConsent.module.css";

const STORAGE_KEY = "elypse-cookie-consent";

type Choice = "accepted" | "rejected";

export default function CookieConsent() {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "accepted" || saved === "rejected") {
      setChoice(saved);
    }
    setReady(true);
  }, []);

  function save(next: Choice) {
    window.localStorage.setItem(STORAGE_KEY, next);
    setChoice(next);
  }

  return (
    <>
      {choice === "accepted" && (
        <>
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-RKF9KT19CL"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RKF9KT19CL');
          `}
          </Script>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1657675475543094');
            fbq('track', 'PageView');
          `}
          </Script>
        </>
      )}

      {ready && choice === null && (
        <div className={styles.banner} role="region" aria-label="Aviso de cookies">
          <div className={styles.inner}>
            <p className={styles.text}>
              Este sitio usa cookies de medición (Google Analytics y Meta) para entender cómo se visita la página. Puede aceptarlas o rechazarlas. Más detalle en el{" "}
              <Link href="/aviso-de-privacidad" className={styles.link}>
                Aviso de Privacidad
              </Link>
              .
            </p>
            <div className={styles.actions}>
              <button type="button" className={styles.reject} onClick={() => save("rejected")}>
                Rechazar
              </button>
              <button type="button" className={styles.accept} onClick={() => save("accepted")}>
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
