
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  
  const categories = [
    { id: 'todos', name: 'Todos os Projetos' },
    { id: 'cozinhas', name: 'Cozinhas' },
    { id: 'dormitorios', name: 'Dormitórios' },
    { id: 'escritorios', name: 'Escritórios' },
    { id: 'salas', name: 'Salas de Estar' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Cozinha Moderna Blumenau',
      category: 'cozinhas',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=600',
      description: 'Cozinha sob medida com ilha central e acabamentos em madeira nobre'
    },
    {
      id: 2,
      title: 'Dormitório Casal Premium',
      category: 'dormitorios', 
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600',
      description: 'Guarda-roupa planejado com closet integrado e design exclusivo'
    },
    {
      id: 3,
      title: 'Home Office Executivo',
      category: 'escritorios',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=600',
      description: 'Escritório completo com mesa, estantes e armários personalizados'
    },
    {
      id: 4,
      title: 'Sala de Estar Aconchegante',
      category: 'salas',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=600',
      description: 'Rack para TV e estantes integradas com design contemporâneo'
    },
    {
      id: 5,
      title: 'Cozinha Compacta',
      category: 'cozinhas',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600',
      description: 'Solução inteligente para espaços pequenos com máximo aproveitamento'
    },
    {
      id: 6,
      title: 'Quarto Infantil Temático',
      category: 'dormitorios',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=600',
      description: 'Móveis seguros e funcionais com design lúdico para crianças'
    }
  ];

  const filteredProjects = selectedCategory === 'todos' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="font-source-serif text-bm-orange text-lg font-semibold">Nosso Portfólio</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-bm-dark mt-2 mb-6">
            Projetos que Inspiram
          </h2>
          <p className="font-source-serif text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos nossos trabalhos mais recentes e veja como transformamos 
            sonhos em realidade através de móveis sob medida
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-source-serif transition-all ${
                selectedCategory === category.id
                  ? 'bg-bm-orange text-white shadow-lg'
                  : 'bg-bm-background text-bm-dark hover:bg-bm-beige'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bm-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-playfair text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="font-source-serif text-sm text-bm-beige mb-4">
                    {project.description}
                  </p>
                  <button className="inline-flex items-center space-x-2 text-bm-orange hover:text-white transition-colors">
                    <Eye className="w-4 h-4" />
                    <span className="font-source-serif text-sm">Ver Detalhes</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-bm-background rounded-2xl p-8">
            <h3 className="font-playfair text-2xl font-bold text-bm-dark mb-4">
              Gostou do que viu?
            </h3>
            <p className="font-source-serif text-gray-700 mb-6">
              Vamos criar algo único para o seu espaço também
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-bm-orange hover:bg-bm-orange/90 text-white font-source-serif px-8 py-3 rounded-full transition-colors"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
