import automationImage from "@/assets/automation-flow.jpg";
import { CheckCircle2 } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Análisis Inteligente",
    description: "La IA analiza tus datos y procesos actuales para identificar oportunidades."
  },
  {
    number: "02",
    title: "Automatización Inmediata",
    description: "Implementación instantánea de flujos de trabajo optimizados con IA."
  },
  {
    number: "03",
    title: "Optimización Continua",
    description: "Aprendizaje automático que mejora constantemente tus resultados."
  },
  {
    number: "04",
    title: "Escalamiento Global",
    description: "Expande tu negocio sin límites con infraestructura inteligente."
  }
];

const StepItem = ({ step, index }: { step: typeof steps[0], index: number }) => {
  const { ref, animationClass } = useScrollReveal({ 
    direction: 'up', 
    delay: index * 120,
    threshold: 0.15 
  });

  return (
    <div 
      ref={ref}
      className={`flex gap-4 hover-lift ${animationClass}`}
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 transition-colors duration-500 hover:bg-primary/20">
          <span className="text-lg font-bold text-primary">{step.number}</span>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-xl font-bold flex items-center gap-2">
          {step.title}
          <CheckCircle2 className="w-5 h-5 text-primary" />
        </h3>
        <p className="text-muted-foreground">{step.description}</p>
      </div>
    </div>
  );
};

const ProcessFlow = () => {
  const { ref: imageRef, animationClass: imageAnimation } = useScrollReveal({ direction: 'up', threshold: 0.15 });
  const { ref: titleRef, animationClass: titleAnimation } = useScrollReveal({ direction: 'up', delay: 100, threshold: 0.15 });

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div ref={imageRef} className={`relative ${imageAnimation}`}>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-2xl opacity-60" />
            <img 
              src={automationImage} 
              alt="Automation Process Flow" 
              className="relative rounded-3xl shadow-2xl border border-primary/20"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div ref={titleRef} className={titleAnimation}>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Tu Proceso Comercial
                <span className="text-gradient block mt-2">Revolucionado</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                De la complejidad a la simplicidad en cuatro pasos automáticos
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <StepItem key={index} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
