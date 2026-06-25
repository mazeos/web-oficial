import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const cancelItems = [
"La libertad de cancelar tu creador de embudos...",
"Esa paz de no pagar más por tu CRM...",
"La tranquilidad de dejar el software de email marketing...",
"Ese alivio de despedirte de tu creador de páginas web...",
"La calma de no necesitar otro software de calendario...",
"Esa sensación de cerrar tu plataforma de cursos..."];


const tools = [
"keap", "ZOHO", "HubSpot", "ActiveCampaign", "Google Analytics", "WIX",
"mailchimp", "ACUITY SCHEDULING", "Calendly", "click funnels", "WordPress",
"pipedrive", "Leadpages", "Zendesk", "ConvertKit", "salesforce"];


const FORM_URL = "https://os.mazefunnels.com/widget/form/Bf67Sj6fFD30ftRDBMSF";

const ReplacedTools = () => {
  const { ref: titleRef, animationClass: titleAnimation } = useScrollReveal({ direction: 'up', threshold: 0.15 });
  const { ref: listRef, animationClass: listAnimation } = useScrollReveal({ direction: 'up', delay: 100, threshold: 0.15 });
  const { ref: ctaRef, animationClass: ctaAnimation } = useScrollReveal({ direction: 'scale', delay: 200, threshold: 0.15 });
  const { ref: toolsRef, animationClass: toolsAnimation } = useScrollReveal({ direction: 'up', delay: 300, threshold: 0.15 });
  const { ref: buttonRef, animationClass: buttonAnimation } = useScrollReveal({ direction: 'up', delay: 400, threshold: 0.15 });

  const handleFormClick = () => {
    window.open(FORM_URL, '_blank');
  };

  return (
    <section className="py-16 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16 space-y-6 md:space-y-8">
          <h2 ref={titleRef} className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${titleAnimation}`}>
            Imagina por un momento...
            <span className="text-gradient block mt-2">Solo enfocarte en lo que amas</span>
          </h2>

          <div ref={listRef} className={`max-w-2xl mx-auto space-y-3 md:space-y-4 px-2 ${listAnimation}`}>
            {cancelItems.map((item, index) =>
            <div key={index} className="flex items-center gap-2 md:gap-3 justify-center">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                  <X className="w-3 h-3 md:w-4 md:h-4 text-destructive" />
                </div>
                <span className="text-sm sm:text-base md:text-lg text-foreground text-left">{item}</span>
              </div>
            )}
          </div>

          <div ref={ctaRef} className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gradient ${ctaAnimation}`}>Lo vives en Maze Funnels

          </div>
        </div>

        <div ref={toolsRef} className={`mb-8 md:mb-12 ${toolsAnimation}`}>
          <p className="text-center text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 px-2">
            Esa energía cuando te despides de todas estas herramientas y todo está en un solo lugar:
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-6">
            {tools.map((tool, index) =>
            <div
              key={index}
              className="glass-effect px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl border border-border/50 hover:border-primary/30 hover-lift">

                <span className="text-sm sm:text-base md:text-lg font-semibold">{tool}</span>
              </div>
            )}
          </div>
        </div>

        <div ref={buttonRef} className={`text-center ${buttonAnimation}`}>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-12 py-4 sm:py-5 md:py-8 shadow-[0_0_40px_hsl(var(--primary)/0.6)] whitespace-normal text-center leading-tight max-w-[90vw]"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>

            Ver planes
          </Button>
        </div>
      </div>
    </section>);

};

export default ReplacedTools;