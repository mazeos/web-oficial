import { DollarSign, Target, Building2, TrendingUp } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const methodologyItems = [
  {
    icon: DollarSign,
    title: "La sensación de ofrecer alto valor",
    description: "Imagina por un momento... estructurar servicios de +$1500 USD con confianza total porque tienes el ecosistema completo respaldándote."
  },
  {
    icon: Target,
    title: "Esa energía cuando llegan clientes ideales",
    description: "¿Sabes qué se siente cuando tu contenido atrae exactamente a quien buscas? Estrategias de tráfico que conectan con tu audiencia perfecta."
  },
  {
    icon: Building2,
    title: "La experiencia de orden total",
    description: "Visualiza esto ahora... todos tus sistemas preconfigurados, sin caos, sin confusión. Solo fluidez operativa desde el día 1."
  },
  {
    icon: TrendingUp,
    title: "El momento exacto cuando cierras una venta",
    description: "Hay algo mágico en convertir llamadas en clientes de alto valor sin presionar. La plataforma llena tu calendario, tú cierras con elegancia."
  }
];

const MethodologyCard = ({ item, index }: { item: typeof methodologyItems[0], index: number }) => {
  const { ref, animationClass } = useScrollReveal({ 
    direction: 'scale', 
    delay: index * 100,
    threshold: 0.15 
  });
  const Icon = item.icon;

  return (
    <div 
      ref={ref} 
      className={`glass-effect rounded-2xl p-6 hover-elegant ${animationClass}`}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0 transition-colors duration-500 hover:bg-primary/20">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

const Support = () => {
  const { ref: headerRef, animationClass: headerAnimation } = useScrollReveal({ direction: 'up', threshold: 0.15 });

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-secondary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 space-y-24">
        {/* Methodology Section */}
        <div className="space-y-12">
          <div ref={headerRef} className={`text-center max-w-3xl mx-auto ${headerAnimation}`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Cuando lo vives, lo entiendes...
              <span className="text-gradient block mt-2">Una metodología que se siente diferente</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Siente esto conmigo... no solo herramientas, sino un sistema probado por +300 marcas personales que transformó su forma de hacer negocios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {methodologyItems.map((item, index) => (
              <MethodologyCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
