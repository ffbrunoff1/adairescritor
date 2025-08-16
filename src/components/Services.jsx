import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Feather, Heart, Sparkles, Star, Award, Users, Clock, ArrowRight, Quote } from 'lucide-react'

export default function Services() {
  const genres = [
    {
      icon: Heart,
      title: "Romance Contemporâneo",
      description: "Histórias de amor que exploram relacionamentos modernos com profundidade emocional e autenticidade.",
      features: ["Personagens complexos", "Conflitos realistas", "Finais satisfatórios"],
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Sparkles,
      title: "Ficção Fantástica",
      description: "Mundos imaginários onde a magia se encontra com a realidade, criando narrativas envolventes.",
      features: ["Worldbuilding detalhado", "Sistemas de magia únicos", "Aventuras épicas"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: BookOpen,
      title: "Literatura Reflexiva",
      description: "Obras que provocam reflexão sobre a condição humana e questões existenciais profundas.",
      features: ["Temas universais", "Prosa poética", "Mensagens inspiradoras"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Star,
      title: "Contos e Crônicas",
      description: "Narrativas curtas que capturam momentos especiais e reflexões do cotidiano com maestria.",
      features: ["Narrativa concisa", "Impacto emocional", "Leitura envolvente"],
      color: "from-emerald-500 to-green-500"
    }
  ]

  const services = [
    {
      icon: Feather,
      title: "Escrita Criativa",
      description: "Desenvolvimento de histórias originais com narrativas cativantes e personagens memoráveis.",
      details: ["Criação de enredos únicos", "Desenvolvimento de personagens", "Revisão e edição"],
      price: "Consulte"
    },
    {
      icon: BookOpen,
      title: "Consultoria Literária",
      description: "Orientação para escritores iniciantes e experientes em suas jornadas criativas.",
      details: ["Análise de manuscritos", "Feedback construtivo", "Planejamento de obras"],
      price: "Consulte"
    },
    {
      icon: Users,
      title: "Workshops de Escrita",
      description: "Oficinas práticas para desenvolver habilidades narrativas e técnicas de escrita.",
      details: ["Aulas teóricas e práticas", "Exercícios criativos", "Feedback personalizado"],
      price: "Consulte"
    }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Leitora assídua",
      content: "As histórias de Adair me transportam para outros mundos. Cada página é uma descoberta emocionante.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Crítico literário",
      content: "Uma prosa envolvente que combina técnica apurada com sensibilidade única. Verdadeiro talento.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Escritora iniciante",
      content: "As consultorias me ajudaram imensamente no desenvolvimento do meu primeiro romance. Recomendo!",
      rating: 5
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-secondary-50 via-primary-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 text-secondary-100 opacity-30"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <BookOpen className="w-32 h-32" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-10 text-accent-100 opacity-20"
          animate={{ 
            y: [0, -40, 0],
            rotate: [0, 15, -15, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="w-28 h-28" />
        </motion.div>
      </div>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-secondary-100 px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <BookOpen className="w-5 h-5 text-secondary-600" />
            <span className="text-secondary-700 font-medium">Obras e Serviços</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">
            Universo de
            <span className="block text-gradient font-serif italic">Criações Literárias</span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Explore diferentes gêneros e descobra histórias que tocam a alma, 
            além de serviços especializados para sua jornada literária.
          </p>
        </motion.div>

        {/* Genres Section */}
        <div className="mb-24">
          <motion.h3
            className="text-3xl font-bold text-center text-secondary-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Gêneros e <span className="text-gradient">Especialidades</span>
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {genres.map((genre, index) => {
              const IconComponent = genre.icon
              return (
                <motion.div
                  key={index}
                  className="group h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-secondary-100">
                    <div className={`bg-gradient-to-r ${genre.color} p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-secondary-800 mb-3">{genre.title}</h4>
                    <p className="text-secondary-600 mb-6 flex-grow leading-relaxed">{genre.description}</p>
                    
                    <div className="space-y-2">
                      {genre.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                          <span className="text-sm text-secondary-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-24">
          <motion.h3
            className="text-3xl font-bold text-center text-secondary-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Serviços <span className="text-gradient">Especializados</span>
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  className="group h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-secondary-100">
                    <div className="bg-gradient-to-br from-secondary-600 to-accent-600 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h4 className="text-2xl font-bold text-secondary-800 mb-4">{service.title}</h4>
                    <p className="text-secondary-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-3 mb-6 flex-grow">
                      {service.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                          <span className="text-secondary-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-secondary-100 mt-auto">
                      <span className="text-2xl font-bold text-secondary-800">{service.price}</span>
                      <motion.button
                        onClick={scrollToContact}
                        className="bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Saiba Mais</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Featured Work Section */}
        <motion.div
          className="bg-gradient-to-r from-secondary-600 to-accent-600 rounded-3xl p-8 md:p-12 mb-24 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              className="text-white space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-8 h-8" />
                <span className="text-xl font-semibold">Obra em Destaque</span>
              </div>
              
              <h4 className="text-3xl md:text-4xl font-bold font-serif">
                "Memórias de um Coração Viajante"
              </h4>
              
              <p className="text-lg opacity-90 leading-relaxed">
                Uma jornada emocional através de diferentes culturas e experiências humanas, 
                explorando como o amor transcende fronteiras e transforma vidas.
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>245 páginas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>500+ leitores</span>
                </div>
              </div>
              
              <motion.button
                onClick={scrollToContact}
                className="bg-white text-secondary-700 px-8 py-3 rounded-lg font-semibold hover:bg-secondary-50 transition-colors duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="w-5 h-5" />
                <span>Adquira Agora</span>
              </motion.button>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="bg-white/20 rounded-xl p-6 text-center">
                  <motion.div
                    className="w-32 h-40 bg-gradient-to-b from-gold-400 to-gold-600 rounded-lg mx-auto mb-6 shadow-xl flex items-center justify-center"
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BookOpen className="w-16 h-16 text-white" />
                  </motion.div>
                  
                  <div className="text-white space-y-3">
                    <div className="flex justify-center space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current text-gold-400" />
                      ))}
                    </div>
                    <p className="text-sm opacity-90">Avaliação dos Leitores</p>
                  </div>
                </div>
              </div>
              
              <motion.div
                className="absolute -top-4 -right-4 bg-gold-400 rounded-full p-3 shadow-lg"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-secondary-800 mb-12">
            O que Dizem os <span className="text-gradient">Leitores</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-secondary-400 mr-2" />
                  <div className="flex space-x-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-gold-500" />
                    ))}
                  </div>
                </div>
                
                <p className="text-secondary-700 mb-4 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-secondary-100 pt-4">
                  <p className="font-semibold text-secondary-800">{testimonial.name}</p>
                  <p className="text-sm text-secondary-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-secondary-800 mb-6">
            Pronto para Embarcar em uma Nova <span className="text-gradient">Jornada Literária?</span>
          </h3>
          
          <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
            Entre em contato para descobrir como posso ajudá-lo a encontrar a história perfeita 
            ou desenvolver seu próprio talento literário.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={scrollToContact}
              className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="w-5 h-5" />
              <span>Explorar Obras</span>
            </motion.button>
            
            <motion.button
              onClick={scrollToContact}
              className="btn-outline text-lg px-8 py-4 flex items-center justify-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Feather className="w-5 h-5" />
              <span>Consultoria Literária</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}