import useScrollReveal from "@/hooks/useScrollReveal";

const testimonials = [
{
  name: "Matias",
  role: "Vende servicios con su marca personal",
  video: "https://storage.googleapis.com/msgsndr/siM5ZYQ90OgKoshnqLeC/media/6884f35f9332248c3044c0fc.mp4"
},
{
  name: "Valentina",
  role: "Mentora de marcas personales",
  video: "https://storage.googleapis.com/msgsndr/siM5ZYQ90OgKoshnqLeC/media/6884f3609332246c5a44c0fd.mp4"
},
{
  name: "Nicolas",
  role: "Dueño de agencia que ayuda a escalar marcas personales",
  video: "https://storage.googleapis.com/msgsndr/siM5ZYQ90OgKoshnqLeC/media/6884f35f5468fc3de9e9a537.mp4"
}];


const TestimonialCard = ({ testimonial, index }: {testimonial: typeof testimonials[0];index: number;}) => {
  const { ref, animationClass } = useScrollReveal({
    direction: 'scale',
    delay: index * 150,
    threshold: 0.15
  });

  return (
    <div
      ref={ref}
      className={`glass-effect rounded-2xl md:rounded-3xl overflow-hidden hover-elegant ${animationClass}`}>

      <div className="aspect-video">
        <video
          className="w-full h-full object-cover"
          controls
          playsInline>

          <source src={testimonial.video} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>
      
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{testimonial.name}</h3>
        <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
      </div>
    </div>);

};

const Testimonials = () => {
  const { ref: headerRef, animationClass: headerAnimation } = useScrollReveal({ direction: 'up', threshold: 0.15 });
  const { ref: footerRef, animationClass: footerAnimation } = useScrollReveal({ direction: 'up', delay: 300, threshold: 0.15 });

  return (
    <section className="py-8 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={headerRef} className={`text-center mb-10 md:mb-16 space-y-4 md:space-y-6 ${headerAnimation}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Recuerda el proceso de ventas automatizado que soñaste
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Siente esto conmigo... escucha directamente de personas como tú que ya viven esa experiencia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-16">
          {testimonials.map((testimonial, index) =>
          <TestimonialCard key={index} testimonial={testimonial} index={index} />
          )}
        </div>

        <div ref={footerRef} className={`text-center max-w-4xl mx-auto px-2 ${footerAnimation}`}>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">Hay algo mágico cuando +600 marcas personales confían en el mismo sistema...
            <span className="text-[#c5ff49] font-bold text-xl sm:text-2xl drop-shadow-[0_0_20px_rgba(197,255,73,0.5)]">+600 marcas personales</span> confían en el mismo sistema... esa energía de comunidad que te impulsa hacia adelante.
          </p>
        </div>
      </div>
    </section>);

};

export default Testimonials;