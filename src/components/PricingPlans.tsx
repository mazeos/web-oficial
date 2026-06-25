import { useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { Check, X, Star } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

// Conserva la atribucion: anexa UTMs + click-IDs (fbclid/gclid) de la URL actual al checkout
const appendTracking = (base: string) => {
  try {
    const p = new URLSearchParams(window.location.search);
    const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "fbclid", "gclid"];
    const u = new URLSearchParams();
    keys.forEach((k) => { const v = p.get(k); if (v) u.set(k, v); });
    const q = u.toString();
    return q ? base + (base.includes("?") ? "&" : "?") + q : base;
  } catch {
    return base;
  }
};


const plans = [
{
  name: "Maze OS",
  dailyPrice: { monthly: "$0.57", annual: "$0.34" },
  monthlyPrice: { monthly: "$17/mes", annual: "$10.20/mes" },
  description: "Acceso completo a la plataforma y formación para operar de forma autónoma. Ideal si ya cuentas con mentoría externa y solo necesitas las herramientas.",
  features: [
  { text: "Subcuenta de Maze Funnels", included: true },
  { text: "Masterclass de API de Meta Set Up", included: true },
  { text: "Masterclass de Automatización", included: true },
  { text: "Curso completo de la plataforma", included: true },
  { text: "Soporte vía tickets básico por Discord", included: true }],

  highlighted: false,
  urls: {
    monthly: "https://www.mazefunnels.com/maze-os-mensual",
    annual: "https://www.mazefunnels.com/maze-os-anual"
  }
},
{
  name: "Funnel OS",
  dailyPrice: { monthly: "$3.23", annual: "$1.94" },
  monthlyPrice: { monthly: "$97/mes", annual: "$58.20/mes" },
  description: "Infraestructura completa, soporte estratégico y acompañamiento directo para escalar a tus primeros 10k/mes con un sistema probado.",
  features: [
  { text: "Subcuentas ilimitadas de Maze Funnels", included: true },
  { text: "Masterclass de API de Meta Set Up", included: true },
  { text: "Masterclass de Automatización", included: true },
  { text: "Curso completo de la plataforma", included: true },
  { text: "Classroom completo para hacer tus primeros 10k/mes", included: true },
  { text: "Acceso completo al Discord", included: true },
  { text: "Soporte estrategia con ticket premium vía Discord", included: true },
  { text: "Looms y consultas personalizadas", included: true },
  { text: "Instalación de plantillas & Snapshots de GHL", included: true },
  { text: "Sesión semanal de Q&A", included: true }],

  highlighted: true,
  urls: {
    monthly: "https://www.mazefunnels.com/funnel-os-mensual",
    annual: "https://www.mazefunnels.com/funnel-os-anual"
  }
}];


type BillingPeriod = "monthly" | "annual";

const PlanCard = ({ plan, index, billing }: {plan: typeof plans[0];index: number;billing: BillingPeriod;}) => {
  const { ref, animationClass } = useScrollReveal({
    direction: 'scale',
    delay: index * 150,
    threshold: 0.15
  });

  const [tilt, setTilt] = useState<{ rx: number; ry: number } | null>(null);
  const handleMove = (e: ReactMouseEvent) => {
    const r = e.currentTarget.getBoundingClientRect();
    const MAX = 9; // grados
    const ry = ((e.clientX - r.left) / r.width - 0.5) * MAX;
    const rx = -((e.clientY - r.top) / r.height - 0.5) * MAX;
    setTilt({ rx: +rx.toFixed(2), ry: +ry.toFixed(2) });
  };
  const handleLeave = () => setTilt(null);

  const handleClick = () => {
    window.open(appendTracking(plan.urls[billing]), '_blank');
  };

  return (
    <div ref={ref} className={`h-full [perspective:900px] ${animationClass}`}>
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transition: 'transform 200ms ease-out, background-color 900ms ease', willChange: 'transform', ...(tilt ? { transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${plan.highlighted ? 1.02 : 1})` } : {}) }}
      className={`card-carbon metal-border rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 relative flex flex-col h-full ${
      plan.highlighted ?
      'metal-border-strong shadow-[0_0_40px_rgba(197,255,73,0.3)] md:scale-[1.02]' :
      ''}`}>

      {plan.highlighted &&
      <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 sm:px-6 sm:py-2 rounded-full bg-[#c5ff49] text-black text-xs sm:text-sm font-bold flex items-center gap-1.5 sm:gap-2 drop-shadow-[0_0_20px_rgba(197,255,73,0.6)] whitespace-nowrap">
          <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
          MÁS POPULAR
        </div>
      }

      <div className="mb-5 md:mb-8 text-center pt-2 md:pt-0">
        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{plan.name}</h3>
        <div className="mb-2">
          <span className="text-4xl sm:text-5xl font-bold text-metal-anim">{plan.dailyPrice[billing]}</span>
          <span className="text-base md:text-xl text-muted-foreground">/día</span>
        </div>
        <p className="text-muted-foreground text-xs md:text-sm">{plan.monthlyPrice[billing]}</p>
      </div>

      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-5 md:mb-8 text-center">{plan.description}</p>

      <ul className="space-y-2 md:space-y-3 mb-5 md:mb-8 flex-grow">
        {plan.features.map((feature, i) =>
        <li key={i} className="flex items-start gap-2 md:gap-3">
            {feature.included ?
          <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" /> :

          <X className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
          }
            <span className={`text-xs md:text-sm ${!feature.included ? 'text-muted-foreground/50' : ''}`}>
              {feature.text}
            </span>
          </li>
        )}
      </ul>

      <Button
        className={`metal-sheen-btn w-full font-bold text-sm sm:text-base md:text-lg py-4 md:py-6 ${
        plan.highlighted ?
        'bg-[#c5ff49] hover:bg-[#c5ff49]/90 text-black shadow-[0_0_30px_rgba(197,255,73,0.5)]' :
        'bg-primary/20 hover:bg-primary/30 text-foreground border border-primary/40'}`
        }
        size="lg"
        onClick={handleClick}>

        Reclamar mi cupón de 40% en el primer pago
      </Button>
    </div>
    </div>);

};

const PricingPlans = () => {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");
  const { ref: headerRef, animationClass: headerAnimation } = useScrollReveal({ direction: 'up', threshold: 0.15 });

  return (
    <section className="py-16 md:py-32 relative" id="pricing">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={headerRef} className={`text-center mb-10 md:mb-16 space-y-4 md:space-y-6 ${headerAnimation}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">El momento es <span className="text-metal-anim">ahora</span>

          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">Dos experiencias diseñadas para diferentes momentos de tu viaje.

          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <span className={`text-sm md:text-base font-medium transition-colors ${billing === 'monthly' ? 'text-foreground' : 'text-muted-foreground'}`}>
              Mensual
            </span>
            <button
              onClick={() => setBilling(billing === 'monthly' ? 'annual' : 'monthly')}
              className={`relative w-14 h-7 md:w-16 md:h-8 rounded-full transition-colors duration-300 ${
              billing === 'annual' ? 'bg-[#c5ff49]' : 'bg-muted-foreground/30'}`
              }>

              <div className={`absolute top-0.5 md:top-1 w-6 h-6 md:w-6 md:h-6 rounded-full bg-background shadow-md transition-transform duration-300 ${
              billing === 'annual' ? 'translate-x-7 md:translate-x-9' : 'translate-x-0.5 md:translate-x-1'}`
              } />
            </button>
            <span className={`text-sm md:text-base font-medium transition-colors ${billing === 'annual' ? 'text-foreground' : 'text-muted-foreground'}`}>
              Anual
            </span>
            <span className="text-xs font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded-full">-40%</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) =>
          <PlanCard key={plan.name} plan={plan} index={index} billing={billing} />
          )}
        </div>
      </div>
    </section>);

};

export default PricingPlans;