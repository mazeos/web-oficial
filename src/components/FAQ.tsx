import useScrollReveal from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Sabes qué se siente cuando TODO está incluido?",
    answer: "Imagina por un momento... abres tu plataforma y todo ya está configurado. Sin cobros sorpresa, sin 'extras' que necesitas pagar. En 48-72 horas recibes tu ecosistema completo funcionando.\n\nLa sensación de que solo te enfocas en crear contenido y cerrar ventas... eso es lo que vas a vivir."
  },
  {
    question: "¿Te ha pasado que sientes que no tienes tiempo para escalar?",
    answer: "Siente esto conmigo... el sistema está diseñado para personas que construyen mientras mantienen otros compromisos. La automatización hace el trabajo pesado. Tú solo apareces cuando importa."
  },
  {
    question: "¿Conoces esa vibra de pánico cuando algo técnico falla?",
    answer: "Hay algo mágico cuando no necesitas saber de tecnología. La plataforma maneja todo automáticamente. Tú solo necesitas saber usar WhatsApp y redes sociales. El resto fluye solo."
  },
  {
    question: "La experiencia 'Done For You'... ¿qué incluye realmente?",
    answer: "Visualiza esto ahora... CRM configurado, automatizaciones de IA instaladas, páginas diseñadas, flujos de email y WhatsApp programados, calendarios integrados. Todo listo. Más capacitación en metodología de ventas y soporte técnico continuo. Esa es la experiencia completa."
  },
  {
    question: "¿Cuánto tiempo necesito invertir después de la instalación?",
    answer: "La sensación de libertad cuando las automatizaciones trabajan solas... solo dedicas tiempo a crear contenido, atender llamadas y entregar tu servicio. El trabajo técnico y seguimiento lo hace el sistema automáticamente."
  },
  {
    question: "El momento exacto cuando algo falla... ¿qué pasa?",
    answer: "Esa tranquilidad de saber que el soporte está incluido. Acceso directo por Discord y llamadas diarias. Si algo no funciona, el equipo lo resuelve sin costo adicional. Tú nunca lidias con problemas técnicos."
  },
  {
    question: "¿Puedo sentir esta experiencia desde cualquier lugar?",
    answer: "Imagina por un momento... gestionar tu negocio desde la playa, un café, o tu casa. Maze Funnels es 100% en la nube. Donde tengas internet, tienes tu negocio."
  },
  {
    question: "¿Cuánto tiempo hasta que siento los resultados?",
    answer: "La implementación completa toma 48-72 horas. Esa sensación de ver todo configurado y funcionando... CRM, automatizaciones, IA, páginas, flujos. Listo para generar leads y cerrar ventas inmediatamente."
  },
  {
    question: "Hay algo mágico en no tener costos ocultos...",
    answer: "La suscripción incluye todas las herramientas principales. Los únicos costos adicionales serían opcionales, como inversión en publicidad para escalar más rápido. Pero no son requisitos. La experiencia base es completa."
  }
];

const FAQ = () => {
  const { ref: headerRef, animationClass: headerAnimation } = useScrollReveal({ direction: 'up', threshold: 0.15 });
  const { ref: contentRef, animationClass: contentAnimation } = useScrollReveal({ direction: 'up', delay: 150, threshold: 0.15 });

  return (
    <section className="py-16 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={headerRef} className={`text-center mb-10 md:mb-16 ${headerAnimation}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            ¿Aún tienes dudas? Siente esto conmigo...
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
            Las preguntas que todos se hacen antes de dar el paso.
          </p>
        </div>

        <div ref={contentRef} className={`max-w-4xl mx-auto ${contentAnimation}`}>
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-effect rounded-xl md:rounded-2xl px-4 sm:px-5 md:px-6 border border-border/50 hover:border-primary/30 transition-all"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-semibold hover:text-primary py-4 md:py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pb-4 md:pb-6 whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
