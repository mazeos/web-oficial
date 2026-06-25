import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";

const StickyPricingBanner = () => {
  const [visible, setVisible] = useState(true);
  const [pricingVisible, setPricingVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const pricingEl = document.getElementById("pricing");
    if (!pricingEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPricingVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(pricingEl);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const show = visible && !pricingVisible && !dismissed;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="glass-effect border-t border-primary/20 py-3 px-4">
        <div className="container mx-auto flex items-center justify-between gap-3 max-w-4xl">
          <p className="text-sm md:text-base text-muted-foreground hidden sm:block">
            Elige tu plan y empieza hoy
          </p>
          <div className="flex items-center gap-2 flex-1 sm:flex-none justify-center sm:justify-end">
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)] text-sm font-bold"
              onClick={handleClick}
            >
              Ver planes
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <button
              onClick={() => setDismissed(true)}
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyPricingBanner;
