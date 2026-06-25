const SiteFooter = () => {
  return <footer className="relative z-10 overflow-hidden border-t border-border px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
        <p className="font-heading text-2xl text-foreground">Maze Funnels</p>

        <div className="space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          <p>
            Este sitio no forma parte del sitio web de Facebook ni de Meta Platforms, Inc.
            Además, este sitio no está respaldado por Facebook de ninguna manera.
            FACEBOOK es una marca registrada de Meta Platforms, Inc.
          </p>
          <p>
            <span className="text-foreground/80 font-semibold">Descargo de responsabilidad:</span> los resultados,
            cifras e ingresos que se muestran en esta página son ejemplos y no constituyen una promesa ni una
            garantía de resultados. Cualquier resultado depende de tu esfuerzo, tu mercado, tu experiencia y
            factores fuera de nuestro control. Maze Funnels es una herramienta de software; no brindamos asesoría
            financiera, legal ni de inversión, ni garantizamos ingresos de ningún tipo.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground pt-2">
          <a href="https://app.mazefunnels.io/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Política de privacidad</a>
          <span className="opacity-30">·</span>
          <a href="https://app.mazefunnels.io/terms" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Términos y condiciones</a>
        </div>

        <p className="text-xs text-muted-foreground/70 pt-2">© 2026 Maze Funnels. Todos los derechos reservados.</p>
      </div>
    </footer>;
};
export default SiteFooter;
