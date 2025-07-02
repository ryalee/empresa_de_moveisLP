
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    projeto: '',
    mensagem: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve para discutir seu projeto.",
      });
      
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        projeto: '',
        mensagem: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(47) 99999-9999',
      subInfo: 'WhatsApp disponível'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contato@bmdesign.com.br',
      subInfo: 'Resposta em até 24h'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Rua das Palmeiras, 123',
      subInfo: 'Centro - Blumenau/SC'
    },
    {
      icon: Clock,
      title: 'Horário',
      info: 'Seg à Sex: 8h às 18h',
      subInfo: 'Sáb: 8h às 12h'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-bm-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="font-source-serif text-bm-orange text-lg font-semibold">Entre em Contato</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-bm-dark mt-2 mb-6">
            Vamos Criar Juntos
          </h2>
          <p className="font-source-serif text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Pronto para transformar seu espaço? Entre em contato conosco e receba 
            um orçamento personalizado sem compromisso
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-playfair text-2xl font-bold text-bm-dark mb-6">
                Solicite seu Orçamento
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="block font-source-serif text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="border-bm-beige focus:border-bm-orange"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telefone" className="block font-source-serif text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="border-bm-beige focus:border-bm-orange"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block font-source-serif text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-bm-beige focus:border-bm-orange"
                  />
                </div>

                <div>
                  <label htmlFor="projeto" className="block font-source-serif text-sm font-medium text-gray-700 mb-2">
                    Tipo de Projeto
                  </label>
                  <select
                    id="projeto"
                    name="projeto"
                    value={formData.projeto}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-bm-beige rounded-lg focus:outline-none focus:border-bm-orange font-source-serif"
                  >
                    <option value="">Selecione o tipo de projeto</option>
                    <option value="cozinha">Cozinha</option>
                    <option value="dormitorio">Dormitório</option>
                    <option value="escritorio">Escritório</option>
                    <option value="sala">Sala de Estar</option>
                    <option value="banheiro">Banheiro</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block font-source-serif text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    placeholder="Conte-nos mais detalhes sobre seu projeto..."
                    className="border-bm-beige focus:border-bm-orange"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-bm-orange hover:bg-bm-orange/90 text-white font-source-serif text-lg py-3"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Solicitar Orçamento</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-bm-orange rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg font-semibold text-bm-dark mb-1">
                      {item.title}
                    </h4>
                    <p className="font-source-serif text-gray-700 mb-1">
                      {item.info}
                    </p>
                    <p className="font-source-serif text-sm text-gray-500">
                      {item.subInfo}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="mt-12 bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-playfair text-xl font-semibold text-bm-dark mb-4">
                Por que escolher a BM Design?
              </h4>
              
              <div className="space-y-3">
                {[
                  'Orçamento gratuito e sem compromisso',
                  'Projeto 3D incluído na proposta',
                  'Materiais de primeira qualidade',
                  'Entrega e montagem incluídas',
                  'Garantia de 5 anos'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-bm-orange flex-shrink-0" />
                    <span className="font-source-serif text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
