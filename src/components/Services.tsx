
import { Wrench, Palette, Truck, Shield, Clock, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Design Personalizado",
      description: "Desenvolvimento de projetos únicos adaptados ao seu espaço e estilo de vida",
      features: ["Projeto 3D", "Múltiplas opções", "Aprovação prévia"]
    },
    {
      icon: Wrench,
      title: "Fabricação Artesanal",
      description: "Móveis produzidos com técnicas tradicionais e materiais de primeira qualidade",
      features: ["Madeiras nobres", "Acabamento premium", "Detalhes únicos"]
    },
    {
      icon: Truck,
      title: "Entrega e Montagem",
      description: "Serviço completo de entrega e instalação com nossa equipe especializada",
      features: ["Entrega agendada", "Montagem inclusa", "Pós-venda"]
    }
  ];

  const process = [
    {
      number: "01",
      title: "Consultoria",
      description: "Reunião para entender suas necessidades e visão do projeto"
    },
    {
      number: "02", 
      title: "Projeto",
      description: "Desenvolvimento do design personalizado com aprovação em 3D"
    },
    {
      number: "03",
      title: "Produção",
      description: "Fabricação artesanal com acompanhamento em todas as etapas"
    },
    {
      number: "04",
      title: "Entrega",
      description: "Instalação profissional e entrega do seu móvel pronto"
    }
  ];

  const guarantees = [
    { icon: Shield, text: "Garantia de 5 anos" },
    { icon: Clock, text: "Prazo de entrega cumprido" },
    { icon: Award, text: "Qualidade certificada" }
  ];

  return (
    <section id="services" className="py-20 bg-bm-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="font-source-serif text-bm-orange text-lg font-semibold">Nossos Serviços</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-bm-dark mt-2 mb-6">
            Do Projeto à Entrega
          </h2>
          <p className="font-source-serif text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Oferecemos um serviço completo para criar o móvel dos seus sonhos, 
            desde a primeira consulta até a instalação final
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-wood-gradient rounded-full mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-playfair text-2xl font-semibold text-bm-dark mb-4">
                {service.title}
              </h3>
              
              <p className="font-source-serif text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-bm-orange rounded-full"></div>
                    <span className="font-source-serif text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mb-20">
          <h3 className="font-playfair text-3xl font-bold text-bm-dark text-center mb-12">
            Nosso Processo de Trabalho
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-wood-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-playfair text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-bm-beige transform -translate-y-1/2"></div>
                  )}
                </div>
                
                <h4 className="font-playfair text-xl font-semibold text-bm-dark mb-3">
                  {step.title}
                </h4>
                <p className="font-source-serif text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="font-playfair text-2xl font-bold text-bm-dark text-center mb-8">
            Nossas Garantias
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center justify-center space-x-3">
                <guarantee.icon className="w-6 h-6 text-bm-orange" />
                <span className="font-source-serif text-gray-700">{guarantee.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
