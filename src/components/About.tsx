
import { CheckCircle, Heart, Shield, Star } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Paixão pelo Artesanato",
      description: "Cada peça é criada com amor e dedicação pelos nossos artesãos especializados"
    },
    {
      icon: Shield,
      title: "Qualidade Garantida",
      description: "Utilizamos apenas materiais premium e oferecemos garantia total em nossos móveis"
    },
    {
      icon: Star,
      title: "Design Exclusivo",
      description: "Projetos únicos desenvolvidos especialmente para cada cliente e ambiente"
    }
  ];

  const values = [
    "Móveis 100% personalizados",
    "Madeiras nobres selecionadas", 
    "Acabamento impecável",
    "Entrega no prazo",
    "Atendimento personalizado",
    "Garantia de qualidade"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="font-source-serif text-bm-orange text-lg font-semibold">Sobre a nome</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-bm-dark mt-2 mb-6">
                Tradição e Qualidade em Cada Detalhe
              </h2>
            </div>

            <p className="font-source-serif text-lg text-gray-700 mb-6 leading-relaxed">
              Há mais de duas décadas, a nome combina expertise artesanal 
              com as mais modernas técnicas de marcenaria. Nossa missão é criar móveis sob medida 
              que não apenas atendem às necessidades funcionais, mas também expressam a 
              personalidade e o estilo de vida de cada cliente.
            </p>

            <p className="font-source-serif text-lg text-gray-700 mb-8 leading-relaxed">
              Especializados em móveis personalizados de alta qualidade, valorizamos cada projeto 
              como uma obra única, desde a concepção até a entrega final.
            </p>

            {/* Values List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-bm-orange flex-shrink-0" />
                  <span className="font-source-serif text-gray-700">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=800"
                alt="Oficina nome"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bm-dark/50 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg border border-bm-beige">
              <div className="text-center">
                <span className="font-playfair text-3xl font-bold text-bm-dark">28+</span>
                <p className="font-source-serif text-sm text-gray-600">Anos de Experiência</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-xl bg-bm-background hover:shadow-lg transition-shadow animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bm-orange rounded-full mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-bm-dark mb-4">
                {feature.title}
              </h3>
              <p className="font-source-serif text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
