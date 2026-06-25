import aiBrainImage from "@/assets/ai-brain.jpg";
import { Rocket, DollarSign, Clock, Users } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const benefits = [
  {
    icon: Rocket,
    metric: "300%",
    label: "Aumento en Productividad"
  },
  {
    icon: DollarSign,
    metric: "€2M+",
    label: "Ahorro Anual Promedio"
  },
  {
    icon: Clock,
    metric: "80%",
    label: "Reducción de Tiempo"
  },
  {
    icon: Users,
    metric: "10k+",
    label: "Empresas Confiando"
  }
];

const BenefitCard = ({ benefit, index }: { benefit: typeof benefits[0], index: number }) => {
  const { ref, animationClass } = useScrollReveal({ 
    direction: 'scale', 
    delay: index * 100,
    threshold: 0.15 
  });
  const Icon = benefit.icon;

  return (
    <div 
      ref={ref}
      className={`glass-effect rounded-2xl p-6 hover-elegant ${animationClass}`}
    >
      <Icon className="w-8 h-8 text-primary mb-4" />
      <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">{benefit.metric}</p>
      <p className="text-sm text-muted-foreground">{benefit.label}</p>
    </div>
  );
};

const Benefits = () => {
  const { ref: titleRef, animationClass: titleAnimation } = useScrollReveal({ direction: 'up', threshold: 0.15 });
  const { ref: imageRef, animationClass: imageAnimation } = useScrollReveal({ direction: 'up', delay: 100, threshold: 0.15 });

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 lg:order-2">
            <div ref={titleRef} className={titleAnimation}>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Los resultados que
                <span className="text-gradient block mt-2">Logran Nuestros Usuarios</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Marcas personales escalando con un software que cubre todo el proceso end-to-end
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} benefit={benefit} index={index} />
              ))}
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className={`relative lg:order-1 ${imageAnimation}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-60" />
            <img 
              src={aiBrainImage} 
              alt="AI Neural Network" 
              className="relative rounded-3xl shadow-2xl glow-effect border border-primary/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
