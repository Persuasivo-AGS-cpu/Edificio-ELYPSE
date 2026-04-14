"use client";

import styles from "./PricingStripe.module.css";
import type { LeadData } from "@/types";

interface PricingStripeProps {
  onOpenWizard?: (interest?: string) => void;
}

export default function PricingStripe({ onOpenWizard }: PricingStripeProps) {
  return (
    <section className={styles.pricingStripe}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.badgeWrapper}>
            <span className={styles.premiumBadge}>Estructura Transparente</span>
          </div>
          <h2 className={styles.title}>
            Tarifa All-Inclusive: <span className={styles.price}>$12,500</span> <span className={styles.currency}>MXN</span>
          </h2>
          <p className={styles.subtitle}>
            Una cuota mensual congelada que internaliza renta, mantenimientos, consumo CFE y 1 Cajón Asignado. Cero rentas sombra.
          </p>
        </div>
        <div className={styles.action}>
          <button 
            className={styles.ctaButton}
            onClick={() => onOpenWizard?.("Rentar Oficina Privada")}
          >
            Verificar Disponibilidad M2
          </button>
        </div>
      </div>
    </section>
  );
}
