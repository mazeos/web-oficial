import { Brain, Zap, TrendingUp, Shield, Workflow, Bot } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const features = [
  {
    icon: Brain,
    title: "IA Integrada Sin Costos Extra",
    description: "La plataforma incluye inteligencia artificial ya configurada en tu ecosistema sin cargos adicionales de implementación."
  },
  {
    icon: Zap,
    title: "Automatización Completa Incluida",
    description: "Todas las automatizaciones están preconfiguradas y listas para usar, sin costos de desarrollo."
  },
  {
    icon: TrendingUp,
    title: "Optimización Continua Integrada",
    description: "La plataforma analiza y ajusta constantemente tu embudo para maximizar resultados automáticamente."
  },
  {
    icon: Shield,
    title: "Infraestructura Enterprise Sin Costo",
    description: "Toda la infraestructura técnica y seguridad está incluida en tu suscripción, sin cobros extras."
  },
  {
    icon: Workflow,
    title: "Integraciones Ilimitadas Incluidas",
    description: "Conecta todo tu stack tecnológico sin pagar por cada integración o configuración."
  },
  {
    icon: Bot,
    title: "Asistentes IA Preentrenados",
    description: "Bots inteligentes ya instalados y entrenados que trabajan 24/7, sin costo de setup."
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const { ref, animationClass } = useScrollReveal({ 
    direction: 'up', 
    delay: index * 80,
    threshold: 0.15 
  });

  const Icon = feature.icon;

  return (
    <div
      ref={ref}
      className={`glass-effect rounded-2xl p-8 hover-elegant group ${animationClass}`}
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
    </div>
  );
};

const Features = () => {
  const { ref: headerRef, animationClass: headerAnimation } = useScrollReveal({ direction: 'up', threshold: 0.2 });

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={headerRef} className={`text-center mb-16 space-y-4 ${headerAnimation}`}>
          <h2 className="text-4xl md:text-6xl font-bold">
            Proceso <span className="text-gradient">end-to-end completo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todo el ciclo comercial cubierto en una sola plataforma, sin costos ocultos ni adicionales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
