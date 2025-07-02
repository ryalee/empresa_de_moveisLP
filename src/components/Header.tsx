
import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-bm-beige">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="font-playfair text-2xl font-bold text-bm-dark">
              nome
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="font-source-serif text-bm-dark hover:text-bm-orange transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="font-source-serif text-bm-dark hover:text-bm-orange transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="font-source-serif text-bm-dark hover:text-bm-orange transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="font-source-serif text-bm-dark hover:text-bm-orange transition-colors"
            >
              Portfólio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="font-source-serif text-bm-dark hover:text-bm-orange transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-bm-dark">
              <Phone className="w-4 h-4" />
              <span className="font-source-serif text-sm">(11) 99999-9999</span>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-bm-orange hover:bg-bm-orange/90 text-white font-source-serif"
            >
              Orçamento Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-bm-dark"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-bm-beige py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="font-source-serif text-bm-dark hover:text-bm-orange transition-colors text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="font-source-serif text-bm-dark hover:text-bm-orange transition-colors text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="font-source-serif text-bm-dark hover:text-bm-orange transition-colors text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="font-source-serif text-bm-dark hover:text-bm-orange transition-colors text-left"
              >
                Portfólio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="font-source-serif text-bm-dark hover:text-bm-orange transition-colors text-left"
              >
                Contato
              </button>
              <div className="flex items-center space-x-2 text-bm-dark pt-2">
                <Phone className="w-4 h-4" />
                <span className="font-source-serif text-sm">(11) 99999-9999</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
