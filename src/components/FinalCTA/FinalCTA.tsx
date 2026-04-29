"use client";

import { useState } from "react";
import styles from "./FinalCTA.module.css";
import { LeadData } from "@/types";

export default function FinalCTA() {
  const [formData, setFormData] = useState<Partial<LeadData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // We hardcode the wizard fields so Trello receives the exact same payload structure
    const finalData: LeadData = {
      interest: "Contacto Directo (Final CTA)",
      capacity: "No especificado",
      urgency: "No especificado",
      budget: "No especificado",
      parking: "No especificado",
      score: "Medio", // Default score since they bypassed the wizard
      name: formData.name || "",
      company: formData.company || "",
      phone: formData.phone || "",
      email: formData.email || "",
      comments: formData.comments || ""
    };

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalData)
      });
      
      if (response.ok) {
        if (typeof window !== "undefined" && (window as any).fbq) {
          (window as any).fbq('track', 'Lead');
        }
        setIsSuccess(true);
      } else {
        alert("Ocurrió un error al enviar tu solicitud. Intenta de nuevo.");
      }
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al enviar tu solicitud. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.textSide}>
            <h2 className={styles.title}>Asegura el futuro de tu empresa hoy.</h2>
            <p className={styles.subtitle}>
              No dejes pasar la oportunidad de establecerte en una de las zonas corporativas más exclusivas. Déjanos tus datos y un asesor se comunicará contigo de inmediato para agendar una visita.
            </p>
          </div>
          
          <div className={styles.formSide}>
            {isSuccess ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>✓</div>
                <h3>Solicitud Recibida</h3>
                <p>Nos pondremos en contacto contigo a la brevedad para coordinar tu visita a Edificio Elypse.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <input required placeholder="Nombre completo" className={styles.input} type="text" onChange={e => setFormData({...formData, name: e.target.value})} />
                <input required placeholder="Empresa / Negocio" className={styles.input} type="text" onChange={e => setFormData({...formData, company: e.target.value})} />
                <input required placeholder="Teléfono" className={styles.input} type="tel" onChange={e => setFormData({...formData, phone: e.target.value})} />
                <input required placeholder="Correo electrónico" className={styles.input} type="email" onChange={e => setFormData({...formData, email: e.target.value})} />
                <textarea placeholder="Comentarios adicionales (opcional)" className={styles.textarea} onChange={e => setFormData({...formData, comments: e.target.value})}></textarea>
                
                <div className={styles.formFooter}>
                   <p className={styles.privacyNote}>Al enviar, aceptas nuestro aviso de privacidad.</p>
                   <button disabled={isSubmitting} type="submit" className={styles.primaryBtn}>
                     {isSubmitting ? 'Enviando...' : 'Agendar Visita'}
                   </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
