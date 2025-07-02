
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-bm-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">nome</h3>
            <p className="font-source-serif text-bm-beige mb-6 leading-relaxed">
              Há mais de 28 anos criando móveis sob medida que transformam ambientes 
              e realizam sonhos em São Paulo e região.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-bm-orange rounded-full flex items-center justify-center hover:bg-bm-orange/80 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-bm-orange rounded-full flex items-center justify-center hover:bg-bm-orange/80 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-bm-orange rounded-full flex items-center justify-center hover:bg-bm-orange/80 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="font-source-serif text-bm-beige hover:text-bm-orange transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="font-source-serif text-bm-beige hover:text-bm-orange transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="font-source-serif text-bm-beige hover:text-bm-orange transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="font-source-serif text-bm-beige hover:text-bm-orange transition-colors"
                >
                  Portfólio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="font-source-serif text-bm-beige hover:text-bm-orange transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3 font-source-serif text-bm-beige">
              <li>Cozinhas Sob Medida</li>
              <li>Dormitórios Planejados</li>
              <li>Home Office</li>
              <li>Salas de Estar</li>
              <li>Móveis Comerciais</li>
              <li>Restauração</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Contato</h4>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-bm-orange flex-shrink-0 mt-1" />
                <div>
                  <p className="font-source-serif text-bm-beige">(11) 99999-9999</p>
                  <p className="font-source-serif text-sm text-gray-400">WhatsApp disponível</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-bm-orange flex-shrink-0 mt-1" />
                <div>
                  <p className="font-source-serif text-bm-beige">contato@nome.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-bm-orange flex-shrink-0 mt-1" />
                <div>
                  <p className="font-source-serif text-bm-beige">Rua das Palmeiras, 123</p>
                  <p className="font-source-serif text-bm-beige">Vila Madalena - São Paulo/SP</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-bm-medium/20 rounded-lg border border-bm-orange/20">
              <p className="font-source-serif text-sm text-bm-beige">
                <strong>Horário de Funcionamento:</strong><br />
                Seg à Sex: 8h às 18h<br />
                Sáb: 8h às 12h
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-bm-medium">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-source-serif text-sm text-bm-beige">
              © {currentYear} nome. Todos os direitos reservados.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="font-source-serif text-bm-beige hover:text-bm-orange transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="font-source-serif text-bm-beige hover:text-bm-orange transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
