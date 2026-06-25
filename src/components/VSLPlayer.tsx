import { useRef, useState } from "react";
import { Volume2, VolumeX, Zap } from "lucide-react";

interface VSLPlayerProps {
  videoUrl: string;
}

const VSLPlayer = ({ videoUrl }: VSLPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInteracted, setIsInteracted] = useState(false);
  const [isFastForwarding, setIsFastForwarding] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const wasHoldAction = useRef(false);

  const handlePlay = () => {
    if (videoRef.current) {
      setIsInteracted(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.muted = false;
          videoRef.current.play();
          // Mostrar hint después de que el usuario haya interactuado
          setTimeout(() => setShowHint(true), 2000);
        }
      }, 100);
    }
  };

  const handleFastForwardStart = () => {
    if (isInteracted && videoRef.current && !videoRef.current.paused) {
      videoRef.current.playbackRate = 2;
      setIsFastForwarding(true);
      setShowHint(false);
    }
  };

  const handleFastForwardEnd = () => {
    if (isInteracted && videoRef.current && isFastForwarding) {
      videoRef.current.playbackRate = 1;
      setIsFastForwarding(false);
      wasHoldAction.current = true;
    }
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    if (!isInteracted) {
      handlePlay();
    } else if (wasHoldAction.current) {
      e.preventDefault();
      wasHoldAction.current = false;
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto animate-scale-in" style={{ animationDelay: '200ms' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-3xl opacity-[0.12]" />
      
      <div 
        className="relative aspect-video rounded-3xl overflow-hidden border border-primary/20 cursor-pointer group"
        onClick={handleContainerClick}
        onMouseDown={handleFastForwardStart}
        onMouseUp={handleFastForwardEnd}
        onMouseLeave={handleFastForwardEnd}
        onTouchStart={handleFastForwardStart}
        onTouchEnd={handleFastForwardEnd}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted={!isInteracted}
          autoPlay={!isInteracted}
          loop={!isInteracted}
          controls={isInteracted}
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>

        {/* Overlay inicial - Solo visible antes de la interacción */}
        {!isInteracted && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300">
            <div className="text-center space-y-4 sm:space-y-6 p-4 sm:p-8">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                <VolumeX className="w-6 h-6 sm:w-8 sm:h-8 text-white/70" />
                <p className="text-base sm:text-xl text-white/90 font-medium">Tu video ya ha comenzado</p>
              </div>
              
              <div className="flex flex-col items-center gap-3 sm:gap-4">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center hover:bg-primary/30 transition-all hover:scale-110 group-hover:scale-110">
                  <Volume2 className="w-7 h-7 sm:w-10 sm:h-10 text-primary" />
                </div>
                
                <p className="text-sm sm:text-lg text-white/80 flex items-center gap-2">
                  <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  Haz clic para escuchar
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Indicador de avance rápido */}
        {isFastForwarding && (
          <div className="absolute top-4 right-4 bg-primary/90 text-black px-4 py-2 rounded-full font-bold text-lg flex items-center gap-2 animate-pulse">
            <Zap className="w-5 h-5" />
            2x
          </div>
        )}

        {/* Hint de avance rápido */}
        {showHint && !isFastForwarding && isInteracted && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-sm animate-fade-in">
            💡 Mantén presionado para avanzar 2x más rápido
          </div>
        )}
      </div>
    </div>
  );
};

export default VSLPlayer;
