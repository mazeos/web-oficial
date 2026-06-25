import { useEffect, useRef } from "react";

interface Particle {
  hx: number; // hogar x
  hy: number; // hogar y
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  phase: number;
  amp: number;
  color: string;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999, radius: 650 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const colorPalette = ['#c5ff49', '#a2d837', '#e8ffb8', 'rgba(197, 255, 73, 0.7)'];

    const initParticles = () => {
      particlesRef.current = [];
      const numberOfParticles = (canvas.width * canvas.height) / 800;
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesRef.current.push({
          hx: x,
          hy: y,
          x,
          y,
          vx: 0,
          vy: 0,
          size: Math.random() * 0.8 + 0.2,
          phase: Math.random() * Math.PI * 2,
          amp: Math.random() * 2 + 1.5,
          color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
        });
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const updateParticle = (p: Particle, time: number) => {
      // Marea: oscilación lenta tipo oleaje (campo de onda que recorre + fase propia)
      const wx = Math.sin(p.hy * 0.01 + time * 0.0005 + p.phase) * p.amp;
      const wy =
        Math.cos(p.hx * 0.01 + time * 0.0004 + p.phase) * p.amp +
        Math.sin(time * 0.0007 + p.phase) * p.amp * 0.4;
      const targetX = p.hx + wx;
      const targetY = p.hy + wy;

      // Pull del mouse: el destino se corre hacia el cursor según la cercanía.
      // En el centro convergen casi al mismo punto (super juntas); al salir del
      // radio el destino vuelve al hogar y se dispersan de nuevo.
      const mouse = mouseRef.current;
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      let tx = targetX;
      let ty = targetY;
      if (dist < mouse.radius) {
        const pull = ((mouse.radius - dist) / mouse.radius) * 0.92;
        tx += (mouse.x - tx) * pull;
        ty += (mouse.y - ty) * pull;
      }

      // Spring hacia el destino (lento) + rebote leve por inercia
      p.vx += (tx - p.x) * 0.0025;
      p.vy += (ty - p.y) * 0.0025;
      p.vx *= 0.9;
      p.vy *= 0.9;
      p.x += p.vx;
      p.y += p.vy;
    };

    const drawParticle = (p: Particle) => {
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const ps = particlesRef.current;
      for (let i = 0; i < ps.length; i++) {
        updateParticle(ps[i], time);
        drawParticle(ps[i]);
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    resizeCanvas();
    animationFrameRef.current = requestAnimationFrame(animate);

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default ParticleBackground;
