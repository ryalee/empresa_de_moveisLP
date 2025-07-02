
import { ArrowRight, Users, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-bm-background">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=2000'),
                           linear-gradient(rgba(27, 67, 50, 0.8), rgba(27, 67, 50, 0.7))`
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main Heading */}
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
            Móveis Sob Medida
            <span className="block text-bm-beige drop-shadow-lg">de Alta Qualidade</span>
          </h1>

          {/* Subtitle */}
          <p className="font-source-serif text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Combinamos expertise artesanal com design moderno para criar móveis únicos que transformam ambientes
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-bm-orange hover:bg-bm-orange/90 text-white font-source-serif text-lg px-8 py-3 group"
            >
              Solicitar Orçamento Grátis
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-bm-dark font-source-serif text-lg px-8 py-3 transition-all duration-300"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Projetos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-bm-beige mr-2" />
                <span className="font-playfair text-3xl font-bold text-white">500+</span>
              </div>
              <p className="font-source-serif text-white/80">Clientes Satisfeitos</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-6 h-6 text-bm-beige mr-2" />
                <span className="font-playfair text-3xl font-bold text-white">28</span>
              </div>
              <p className="font-source-serif text-white/80">Anos de Experiência</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-bm-beige mr-2" />
                <span className="font-playfair text-3xl font-bold text-white">100%</span>
              </div>
              <p className="font-source-serif text-white/80">Sob Medida</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
