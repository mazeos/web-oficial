import { Button } from "@/components/ui/button";
import VSLPlayer from "@/components/VSLPlayer";
import isoMaze from "@/assets/iso-maze.webp";
const FORM_URL = "https://os.mazefunnels.com/widget/form/Bf67Sj6fFD30ftRDBMSF";
const HeroMaze = () => {
  const handlePricingClick = () => {
    document.getElementById('pricing')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-0 md:min-h-screen overflow-hidden flex items-start md:items-center justify-center pt-0 md:pt-10">
      <div className="container mx-auto md:px-6 relative z-10 pt-0 pb-2 md:py-[40px] px-4 py-[30px]">
        <div className="max-w-5xl w-full mx-auto text-center space-y-6 md:space-y-8 py-0 my-[20px]">
          <div className="space-y-4 md:space-y-6 animate-fade-in-up">

            {/* Isotipo laberinto (visual nuevo) */}
            <img src={isoMaze} alt="Maze Funnels" width="96" height="96" className="mx-auto w-16 h-16 md:w-24 md:h-24 drop-shadow-[0_0_50px_rgba(197,255,73,0.35)]" />

            <h2 className="text-lg sm:text-xl md:text-2xl font-normal text-foreground/90 px-2">
              ¿Eres dueño de agencia y crees que escalar significa traer más clientes?
            </h2>

            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground px-2">Imagina que tu único problema sea encontrar más closers para agregar <span className="text-metal">35k/mes</span> en 30 días</h1>

            <div className="inline-flex max-w-full items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full glass-effect border border-[#c5ff49]/30 mt-4 md:mt-6">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#c5ff49] animate-glow-pulse drop-shadow-[0_0_10px_rgba(197,255,73,0.8)] flex-shrink-0" />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white">Así se siente tener Marketing y Ventas en una herramienta todo en uno potenciada con I.A</span>
            </div>
          </div>

          {/* Video VSL con controles avanzados */}
          <VSLPlayer videoUrl="https://storage.googleapis.com/msgsndr/siM5ZYQ90OgKoshnqLeC/media/68928f95f4d4f55a63ce3f4c.mp4" />
        </div>
      </div>
    </section>;
};
export default HeroMaze;
