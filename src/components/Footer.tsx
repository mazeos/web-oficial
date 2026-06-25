import { Linkedin, Twitter, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
const Footer = () => {
  return <footer className="border-t border-border/50 py-8 md:py-12 relative overflow-hidden">
      
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-3 md:space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Maze Funnels Logo" className="h-8 md:h-10 w-auto" />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">
              La plataforma todo-en-uno para escalar marcas personales con IA
            </p>
          </div>

          {/* Product */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="font-bold text-sm md:text-base text-foreground">Producto</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Características</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Precios</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Integraciones</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="font-bold text-sm md:text-base text-foreground">Empresa</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="font-bold text-sm md:text-base text-foreground">Legal</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Seguridad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 md:pt-8 border-t border-border/50">
          <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © 2025 Maze Funnels. Todos los derechos reservados.
          </p>
          
          <div className="flex gap-3 md:gap-4">
            <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/10 transition-colors">
              <Twitter className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            </a>
            <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/10 transition-colors">
              <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            </a>
            <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/10 transition-colors">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;