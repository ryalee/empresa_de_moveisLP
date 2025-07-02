
import { ArrowRight, Award, Users, Clock } from 'lucide-react';
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
                           linear-gradient(rgba(44, 24, 16, 0.7), rgba(44, 24, 16, 0.6))`
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-bm-orange/20 backdrop-blur-sm border border-bm-orange/30 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-bm-orange" />
            <span className="font-source-serif text-sm text-bm-beige">Excelência desde 1995</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Móveis Sob Medida
            <span className="block text-bm-orange">de Alta Qualidade</span>
          </h1>

          {/* Subtitle */}
          <p className="font-source-serif text-xl md:text-2xl text-bm-beige mb-8 max-w-3xl mx-auto leading-relaxed">
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
              className="border-white text-white hover:bg-white hover:text-bm-dark font-source-serif text-lg px-8 py-3"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Projetos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-bm-orange mr-2" />
                <span className="font-playfair text-3xl font-bold">500+</span>
              </div>
              <p className="font-source-serif text-bm-beige">Clientes Satisfeitos</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-6 h-6 text-bm-orange mr-2" />
                <span className="font-playfair text-3xl font-bold">28</span>
              </div>
              <p className="font-source-serif text-bm-beige">Anos de Experiência</p>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-bm-orange mr-2" />
                <span className="font-playfair text-3xl font-bold">100%</span>
              </div>
              <p className="font-source-serif text-bm-beige">Sob Medida</p>
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
