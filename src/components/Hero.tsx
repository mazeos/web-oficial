import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ai.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Tecnología de IA de Próxima Generación</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Transforma Tu{" "}
              <span className="text-gradient">Proceso Comercial</span>{" "}
              con IA
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Automatización inteligente que revoluciona la forma en que haces negocios. 
              Optimiza cada etapa de tu proceso comercial con tecnología de última generación.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground group transition-all duration-300 shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.7)]">
                Comenzar Ahora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 hover:border-primary">
                Ver Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-bold text-gradient">95%</p>
                <p className="text-sm text-muted-foreground">Automatización</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-bold text-gradient">10x</p>
                <p className="text-sm text-muted-foreground">Más Rápido</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-bold text-gradient">24/7</p>
                <p className="text-sm text-muted-foreground">Activo</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-3xl opacity-30 animate-glow-pulse" />
            <img 
              src={heroImage} 
              alt="AI Technology Dashboard" 
              className="relative rounded-3xl shadow-2xl glow-effect border border-primary/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
