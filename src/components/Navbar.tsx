import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Header Row */}
        

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden py-4 space-y-4 border-t border-border/50">
            <a href="#features" className="block text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Características
            </a>
            <a href="#process" className="block text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Proceso
            </a>
            <a href="#benefits" className="block text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Beneficios
            </a>
            <Button className="w-full bg-primary hover:bg-primary-glow text-primary-foreground" onClick={() => setIsMenuOpen(false)}>
              <a href="#pricing">Comenzar</a>
            </Button>
          </div>}
      </div>
    </nav>;
};
export default Navbar;