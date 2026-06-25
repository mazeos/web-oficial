import { useState } from "react";
import type { MouseEvent as ReactMouseEvent, ReactNode } from "react";

interface TiltCardProps {
  className?: string;
  highlighted?: boolean;
  max?: number;
  children: ReactNode;
}

// Inclinacion 3D siguiendo el cursor. El contenedor padre debe tener `perspective`.
const TiltCard = ({ className = "", highlighted = false, max = 9, children }: TiltCardProps) => {
  const [tilt, setTilt] = useState<{ rx: number; ry: number } | null>(null);
  const handleMove = (e: ReactMouseEvent) => {
    const r = e.currentTarget.getBoundingClientRect();
    const ry = ((e.clientX - r.left) / r.width - 0.5) * max;
    const rx = -((e.clientY - r.top) / r.height - 0.5) * max;
    setTilt({ rx: +rx.toFixed(2), ry: +ry.toFixed(2) });
  };
  const handleLeave = () => setTilt(null);
  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transition: "transform 200ms ease-out",
        willChange: "transform",
        ...(tilt ? { transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${highlighted ? 1.02 : 1})` } : {}),
      }}
      className={className}
    >
      {children}
    </div>
  );
};
export default TiltCard;
