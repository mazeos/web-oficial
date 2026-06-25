import VSLPlayer from "@/components/VSLPlayer";
const DemoSection = () => {
  return <section className="relative py-16 md:py-24 px-4">
      <div className="max-w-5xl w-full mx-auto text-center space-y-8 md:space-y-10">
        <div className="space-y-3">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Ver <span className="text-metal">demo</span> de la plataforma
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Un recorrido completo por Maze Funnels: mirá cómo funciona todo por dentro.
          </p>
        </div>

        {/* Video demo / entrenamiento (placeholder: mismo VSL por ahora) */}
        <VSLPlayer videoUrl="https://storage.googleapis.com/msgsndr/siM5ZYQ90OgKoshnqLeC/media/68928f95f4d4f55a63ce3f4c.mp4" />
      </div>
    </section>;
};
export default DemoSection;
