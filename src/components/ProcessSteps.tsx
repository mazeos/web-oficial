import { Calendar, MessageSquare, Bot, FileText, Users, Building2, GraduationCap, FileSignature, Check } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const steps = [
  {
    icon: Calendar,
    number: "01",
    title: "Publica en todas tus redes desde un solo lugar",
    description: "Programa y distribuye contenido en TikTok, YouTube, Instagram, LinkedIn y Pinterest con un clic. Sin cambiar de plataforma, sin perder tiempo.",
    features: [
      "Publicación simultánea en 5+ redes sociales.",
      "Programación automática con calendario visual.",
      "Métricas centralizadas de rendimiento por canal."
    ],
    replaces: ["Metricool", "Planificadores de Redes Sociales"],
    video: "https://storage.googleapis.com/msgsndr/siM5ZYQ90OgKoshnqLeC/media/688bc9050a5cddab61ee180b.mp4"
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Captura leads 24/7 desde comentarios y DMs",
    description: "Cada comentario e interacción activa una respuesta automática que inicia conversación y captura datos del prospecto, incluso a las 3am.",
    features: [
      "Respuestas automáticas en comentarios y mensajes directos.",
      "Captura de datos de contacto sin intervención manual.",
      "Funcionamiento continuo 24/7, sin depender de tu equipo."
    ],
    replaces: ["ManyChat"],
    video: "https://storage.googleapis.com/msgsndr/siM5ZYQ90OgKoshnqLeC/media/688bd93bea6d0f1e6f0f431c.mp4"
  },
  {
    icon: Bot,
    number: "03",
    title: "Empleados de IA que califican, responden y agendan",
    description: "Agentes de inteligencia artificial que filtran prospectos por nivel de interés, responden preguntas frecuentes y agendan llamadas directamente en tu calendario.",
    features: [
      "Calificación automática de prospectos por criterios definidos.",
      "Respuestas inteligentes basadas en tu oferta y FAQ.",
      "Agendamiento directo sin intervención humana."
    ],
    replaces: ["ManyChat", "Zapier", "Asistentes Virtuales"],
    video: "https://storage.googleapis.com/msgsndr/siM5ZYQ90OgKoshnqLeC/media/6884ff14b887689ab4e15859.mp4"
  },
  {
    icon: FileText,
    number: "04",
    title: "Landing pages que convierten sin necesitar diseñador",
    description: "Constructor drag & drop con plantillas de alta conversión. Lanza páginas profesionales en minutos, optimizadas para captar prospectos.",
    features: [
      "Editor visual sin código con plantillas probadas.",
      "Formularios y pop-ups integrados para captura de leads.",
      "A/B testing para optimizar tasas de conversión."
    ],
    replaces: ["WIX", "WordPress", "SQUARESPACE"],
    video: "https://storage.googleapis.com/msgsndr/siM5ZYQ90OgKoshnqLeC/media/688bd758bd3c5ab2a254e07e.mp4"
  },
  {
    icon: Calendar,
    number: "05",
    title: "Sistema de agendamiento que elimina los no-shows",
    description: "Calendario integrado con confirmaciones automáticas por email, SMS y WhatsApp. Recordatorios secuenciados que reducen los no-shows hasta un 80%.",
    features: [
      "Confirmaciones automáticas por múltiples canales.",
      "Secuencia de recordatorios pre-llamada configurables.",
      "Sincronización con Google Calendar y Outlook."
    ],
    replaces: ["Calendly", "Cal.com"],
    video: "https://storage.googleapis.com/msgsndr/siM5ZYQ90OgKoshnqLeC/media/688bdf4ebd3c5a37ed54f6a7.mp4"
  },
  {
    icon: Users,
    number: "06",
    title: "CRM con IA que mueve prospectos automáticamente",
    description: "Pipeline visual donde la IA clasifica y avanza prospectos según su comportamiento. Sabes exactamente en qué etapa está cada lead sin mover un dedo.",
    features: [
      "Pipeline visual con etapas personalizables.",
      "Movimiento automático de leads basado en acciones.",
      "Vista completa del historial de cada prospecto."
    ],
    replaces: ["Pipedrive", "Hubspot", "Zoho CRM"],
    video: "https://storage.googleapis.com/msgsndr/siM5ZYQ90OgKoshnqLeC/media/688be2f5fc4ae39a53b706e3.mp4"
  },
  {
    icon: GraduationCap,
    number: "07",
    title: "Portal de clientes y cursos con tu marca",
    description: "Aloja cursos, recursos y onboarding en un portal white-label profesional. Sin límites de alumnos, sin costos extra por hosting de contenido.",
    features: [
      "Cursos y módulos ilimitados bajo tu propia marca.",
      "Seguimiento de progreso y completación por alumno.",
      "Acceso centralizado a recursos, comunidad y soporte."
    ],
    replaces: ["Kajabi", "Hotmart", "Skool"],
    video: "https://storage.googleapis.com/msgsndr/siM5ZYQ90OgKoshnqLeC/media/6884fb409332245caa44d7fb.mp4"
  },
  {
    icon: FileSignature,
    number: "08",
    title: "Contratos y firmas electrónicas automatizadas",
    description: "Al cerrar una venta, el contrato se genera, se envía y se firma digitalmente de forma automática. El cliente entra directo a su onboarding sin fricción.",
    features: [
      "Generación automática de contratos al cerrar venta.",
      "Firma electrónica con validez legal integrada.",
      "Onboarding automático post-firma sin pasos manuales."
    ],
    replaces: ["DocuSign", "HelloSign", "Contratos en PDF"],
    video: "https://storage.googleapis.com/msgsndr/siM5ZYQ90OgKoshnqLeC/media/688bda770a5cdd5c63ee3656.mp4"
  }
];

const StepVisual = ({ step, index }: { step: typeof steps[0], index: number }) => {
  const { ref, animationClass } = useScrollReveal({ 
    direction: 'up', 
    delay: 150,
    threshold: 0.15 
  });

  return (
    <div 
      ref={ref}
      className={`relative ${animationClass}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-60" />
      <div className="relative aspect-video rounded-3xl overflow-hidden border border-primary/20">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={step.video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

const StepContent = ({ step, index }: { step: typeof steps[0], index: number }) => {
  const { ref, animationClass } = useScrollReveal({ 
    direction: 'up', 
    delay: 0,
    threshold: 0.15 
  });

  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className={animationClass}
    >
      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
        </div>
        <div className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white">Paso {step.number}</div>
      </div>

      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">{step.title}</h3>
      <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">{step.description}</p>

      <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
        {step.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 md:gap-3">
            <Check className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-sm md:text-base text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="pt-4 md:pt-6 border-t border-border/50">
        <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">Reemplaza:</p>
        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {step.replaces.map((tool, i) => (
            <span key={i} className="px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm bg-primary/10 text-primary border border-primary/20">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProcessSteps = () => {
  return (
    <section className="py-16 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10 space-y-12 md:space-y-24 lg:space-y-32">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div key={index} className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
              {/* Content - Left on even, Right on odd */}
              <div className={`space-y-4 md:space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <StepContent step={step} index={index} />
              </div>

              {/* Video - Right on even, Left on odd */}
              <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <StepVisual step={step} index={index} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProcessSteps;
