import { useState, useEffect } from "react";
import styles from "./WizardModal.module.css";
import { LeadData } from "@/types";
import { calculateLeadScore } from "@/utils/LeadScoring";

const steps = [
  { id: 'interest', question: '¿Qué estás buscando?' },
  { id: 'capacity', question: '¿Para cuántas personas necesitas la oficina?' },
  { id: 'urgency', question: '¿Cuándo necesitas el espacio?' },
  { id: 'budget', question: '¿Qué presupuesto tienes para oficina?' },
  { id: 'parking', question: '¿Necesitas estacionamiento?' },
  { id: 'contact', question: 'Inscripción para Visita VIP' }
];

export default function WizardModal({ onClose, initialStep = 0, initialData = {} }: { onClose: () => void, initialStep?: number, initialData?: Partial<LeadData> }) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [formData, setFormData] = useState<Partial<LeadData>>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Prevent background scrolling
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSelect = (field: keyof LeadData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    nextStep();
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(curr => curr + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(curr => curr - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const score = calculateLeadScore(formData);
    const finalData = { ...formData, score };

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalData)
      });
      
      if (response.ok) {
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

  const progressPercentage = ((currentStep) / (steps.length - 1)) * 100;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        
        {isSuccess ? (
          <div className={styles.successState}>
            <div className={styles.successIcon}>✓</div>
            <h2>Solicitud Recibida</h2>
            <p>Hemos perfilado tu solicitud exitosamente. Un asesor se comunicará contigo a la brevedad para coordinar tu visita.</p>
            <button className={styles.primaryBtn} onClick={onClose}>Volver al inicio</button>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${progressPercentage}%` }}></div>
              </div>
              <p className={styles.stepIndicator}>Paso {currentStep + 1} de {steps.length}</p>
            </div>

            <div className={styles.body}>
              <h2 className={styles.question}>{steps[currentStep].question}</h2>
              
              {currentStep === 0 && (
                <div className={styles.optionsList}>
                  {['dirección fiscal', 'oficina privada', 'oficina + dirección fiscal', 'quiero agendar visita'].map(opt => (
                    <button key={opt} className={styles.optionBtn} onClick={() => handleSelect('interest', opt)}>{opt}</button>
                  ))}
                </div>
              )}

              {currentStep === 1 && (
                <div className={styles.optionsList}>
                  {['solo yo', '2 personas', '3 o más'].map(opt => (
                    <button key={opt} className={styles.optionBtn} onClick={() => handleSelect('capacity', opt)}>{opt}</button>
                  ))}
                </div>
              )}

              {currentStep === 2 && (
                <div className={styles.optionsList}>
                  {['inmediato', 'en 1 mes', 'en 1 a 3 meses', 'solo explorando'].map(opt => (
                    <button key={opt} className={styles.optionBtn} onClick={() => handleSelect('urgency', opt)}>{opt}</button>
                  ))}
                </div>
              )}

              {currentStep === 3 && (
                <div className={styles.optionsList}>
                  {['menos de 10k', 'entre 10k y 15k', 'más de 15k', 'aún no lo sé'].map(opt => (
                    <button key={opt} className={styles.optionBtn} onClick={() => handleSelect('budget', opt)}>{opt}</button>
                  ))}
                </div>
              )}

              {currentStep === 4 && (
                <div className={styles.optionsList}>
                  {['sí', 'no'].map(opt => (
                    <button key={opt} className={styles.optionBtn} onClick={() => handleSelect('parking', opt)}>{opt}</button>
                  ))}
                </div>
              )}

              {currentStep === 5 && (
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <input required placeholder="Nombre completo" className={styles.input} type="text" onChange={e => setFormData({...formData, name: e.target.value})} />
                  <input required placeholder="Empresa / Negocio" className={styles.input} type="text" onChange={e => setFormData({...formData, company: e.target.value})} />
                  <input required placeholder="Teléfono / WhatsApp" className={styles.input} type="tel" onChange={e => setFormData({...formData, phone: e.target.value})} />
                  <input required placeholder="Correo electrónico" className={styles.input} type="email" onChange={e => setFormData({...formData, email: e.target.value})} />
                  <textarea placeholder="Comentarios adicionales" className={styles.textarea} onChange={e => setFormData({...formData, comments: e.target.value})}></textarea>
                  
                  <div className={styles.formFooter}>
                     <p className={styles.privacyNote}>Al enviar, aceptas nuestro aviso de privacidad.</p>
                     <button disabled={isSubmitting} type="submit" className={styles.primaryBtn}>
                       {isSubmitting ? 'Enviando...' : 'Solicitar Información'}
                     </button>
                  </div>
                </form>
              )}
            </div>

            {currentStep > 0 && currentStep < steps.length && (
              <div className={styles.footer}>
                <button className={styles.backBtn} onClick={prevStep}>← Atrás</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
