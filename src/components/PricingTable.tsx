import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const pricingFeatures = [
  { name: "CRM y Gestión de Pipeline", others: "$99/mes", maze: true },
  { name: "Embudos de Venta Ilimitados", others: "$297/mes", maze: true },
  { name: "Constructor de Sitios Web", others: "$29/mes", maze: true },
  { name: "Encuestas y Formularios", others: "$49/mes", maze: true },
  { name: "Email Marketing", others: "$99/mes", maze: true },
  { name: "Marketing por SMS Bidireccional", others: "$99/mes", maze: true },
  { name: "Reservas y Citas", others: "$29/mes", maze: true },
  { name: "Automatización de Flujos de Trabajo", others: "$169/mes", maze: true },
  { name: "Cursos y Productos", others: "$99/mes", maze: true },
  { name: "Seguimiento de Llamadas", others: "$49/mes", maze: true },
  { name: "Gestión de Reputación", others: "$159/mes", maze: true },
  { name: "Seguimiento y Analíticas", others: "$299/mes", maze: true },
  { name: "Comunidades", others: "$89/mes", maze: true },
  { name: "Firma de Documentos", others: "$47/mes", maze: true },
  { name: "Metodología Paso a Paso Probada", others: "Único de Maze Funnels", maze: true }
];

const PricingTable = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 space-y-6">
          <h2 className={`text-4xl md:text-6xl font-bold ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Nosotros instalamos todo,
            <span className="text-gradient block mt-2">tú solo pagas una fracción</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
            Olvídate de configurar docenas de herramientas. Nuestro equipo lo instala y configura TODO por ti a un precio inmejorable.
          </p>
        </div>

        <div className={`glass-effect rounded-3xl overflow-hidden ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left p-6 font-bold text-lg">Características</th>
                  <th className="text-center p-6 font-bold text-lg">Otras Herramientas</th>
                  <th className="text-center p-6 font-bold text-lg bg-primary/10">
                    <div className="text-gradient">MazeFunnels</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                    <td className="p-4 text-foreground">{feature.name}</td>
                    <td className="p-4 text-center text-muted-foreground">{feature.others}</td>
                    <td className="p-4 text-center bg-primary/5">
                      <Check className="w-6 h-6 text-primary mx-auto" />
                    </td>
                  </tr>
                ))}
                <tr className="bg-muted/30">
                  <td className="p-6 font-bold text-xl">Precio Total</td>
                  <td className="p-6 text-center">
                    <div className="text-3xl font-bold text-destructive line-through">$1,612 /mes</div>
                  </td>
                  <td className="p-6 text-center bg-primary/10">
                    <div className="text-4xl font-bold text-gradient">$97 /mes</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
