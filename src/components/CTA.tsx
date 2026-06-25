import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const FORM_URL = "https://os.mazefunnels.com/widget/form/Bf67Sj6fFD30ftRDBMSF";

const CTA = () => {
  const handlePricingClick = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[150px] animate-glow-pulse" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground">Oferta Limitada - Solo 50 Espacios Disponibles</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up">
            Proceso end-to-end completo
            <span className="text-gradient block mt-2">Sin costos ocultos ni adicionales</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Únete a +300 marcas personales que ya escalaron con una sola plataforma que cubre todo el ciclo comercial
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow text-primary-foreground group transition-all duration-300 shadow-[0_0_40px_hsl(var(--primary)/0.6)] hover:shadow-[0_0_60px_hsl(var(--primary)/0.8)] text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 whitespace-normal text-center leading-tight max-w-[90vw]"
              onClick={handlePricingClick}
            >
              Ver planes
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:bg-primary/10 hover:border-primary text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 whitespace-normal text-center leading-tight max-w-[90vw]"
              onClick={handlePricingClick}
            >
              <Mail className="mr-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              Ver planes
            </Button>
          </div>

          <div className="pt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Todo el proceso end-to-end incluido</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Sistema completo en 48h</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Sin costos ocultos ni adicionales</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
