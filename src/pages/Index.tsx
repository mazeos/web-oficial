import { useEffect } from "react";
import HeroMaze from "@/components/HeroMaze";
import Testimonials from "@/components/Testimonials";
import ProcessSteps from "@/components/ProcessSteps";
import Support from "@/components/Support";
import Comparison from "@/components/Comparison";
import DemoSection from "@/components/DemoSection";
import SiteFooter from "@/components/SiteFooter";
import PricingTable from "@/components/PricingTable";
import PricingPlans from "@/components/PricingPlans";
import ReplacedTools from "@/components/ReplacedTools";
import ROISimulator from "@/components/ROISimulator";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
const Index = () => {
  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    const _top1 = setTimeout(() => window.scrollTo(0, 0), 120);
    const _top2 = setTimeout(() => window.scrollTo(0, 0), 600);
    const handleMouseMove = (e: MouseEvent) => {
      const mouseY = e.clientY + window.scrollY;
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${mouseY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return <div className="min-h-screen relative overflow-x-hidden" style={{
    background: `radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsla(79, 100%, 64%, 0.08), transparent 60%)`
  }}>
      <ParticleBackground />
      
      {/* Efectos de glow globales */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] left-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute top-[50%] right-1/4 w-[700px] h-[700px] bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute top-[80%] left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      </div>
      
      <main className="relative z-10">
        <HeroMaze />
        <PricingPlans />
        <Testimonials />
        <div className="py-[20px]">
          <ProcessSteps />
        </div>
        
        
        
        <div className="my-0 mx-0 py-[10px]">
          <Comparison />
        </div>
        
        
        <DemoSection />
      </main>
      <SiteFooter />
      
    </div>;
};
export default Index;