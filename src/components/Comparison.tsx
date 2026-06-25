import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import useScrollReveal from "@/hooks/useScrollReveal";
import TiltCard from "@/components/TiltCard";
const oldWay = ["Esa frustración de instalar y configurar todo tú solo...", "La ansiedad de pagar múltiples suscripciones que no se conectan...", "Semanas perdidas aprendiendo herramientas que cambian constantemente...", "El estrés de errores técnicos que detienen tu progreso...", "La pesadilla de sincronizar datos manualmente entre plataformas..."];
const newWay = ["La paz de que todo se instala y configura automáticamente.", "Esa tranquilidad de una sola suscripción que incluye todo.", "La libertad de un sistema funcionando en 48h.", "La seguridad de soporte técnico ilimitado incluido.", "Esa fluidez de todo perfectamente integrado desde el día 1."];
const Comparison = () => {
  const {
    ref: headerRef,
    animationClass: headerAnimation
  } = useScrollReveal({
    direction: 'up',
    threshold: 0.15
  });
  const {
    ref: oldWayRef,
    animationClass: oldWayAnimation
  } = useScrollReveal({
    direction: 'up',
    delay: 100,
    threshold: 0.15
  });
  const {
    ref: newWayRef,
    animationClass: newWayAnimation
  } = useScrollReveal({
    direction: 'up',
    delay: 200,
    threshold: 0.15
  });
  const {
    ref: buttonRef,
    animationClass: buttonAnimation
  } = useScrollReveal({
    direction: 'up',
    delay: 300,
    threshold: 0.15
  });
  return <section className="pt-8 pb-16 md:pt-16 md:pb-32 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={headerRef} className={`text-center mb-8 md:mb-16 space-y-4 md:space-y-6 ${headerAnimation}`}>
          
          
        </div>

        <div className="grid lg:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
          {/* Old Way */}
          <div ref={oldWayRef} className={`h-full [perspective:900px] ${oldWayAnimation}`}>
            <TiltCard className="glass-effect metal-border rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 h-full flex flex-col">
            <div className="mb-5 md:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">¿Reconoces esta sensación de agotamiento?</h3>
              <p className="text-sm md:text-base text-muted-foreground">El camino que drena tu energía:</p>
            </div>

            <ul className="space-y-3 md:space-y-4">
              {oldWay.map((item, index) => <li key={index} className="flex items-start gap-2 md:gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 md:w-4 md:h-4 text-destructive" />
                  </div>
                  <span className="text-sm md:text-base text-foreground">{item}</span>
                </li>)}
            </ul>
            </TiltCard>
          </div>

          {/* New Way */}
          <div ref={newWayRef} className={`h-full [perspective:900px] ${newWayAnimation}`}>
            <TiltCard highlighted className="glass-effect metal-border metal-border-strong rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 h-full flex flex-col">
            <div className="mb-5 md:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Visualiza esto ahora...</h3>
              <p className="text-sm md:text-base text-muted-foreground">La experiencia que vivirás:</p>
            </div>

            <ul className="space-y-3 md:space-y-4">
              {newWay.map((item, index) => <li key={index} className="flex items-start gap-2 md:gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                  </div>
                  <span className="text-sm md:text-base text-foreground">{item}</span>
                </li>)}
            </ul>
            </TiltCard>
          </div>
        </div>

        <div ref={buttonRef} className={`text-center ${buttonAnimation}`}>
          <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-5 sm:py-6 md:py-8 shadow-[0_0_40px_hsl(var(--primary)/0.6)]" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
            Ver planes
          </Button>
        </div>
      </div>
    </section>;
};
export default Comparison;