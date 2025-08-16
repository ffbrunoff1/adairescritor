import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, Lightbulb, Target, Award, Users, PenTool, Sparkles } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Paixão pela Narrativa",
      description: "Cada história é escrita com dedicação e amor genuíno pela arte literária."
    },
    {
      icon: Lightbulb,
      title: "Criatividade Sem Limites",
      description: "Explorando novos horizontes narrativos e criando mundos únicos e envolventes."
    },
    {
      icon: Target,
      title: "Conexão com o Leitor",
      description: "Histórias que tocam a alma e criam laços emocionais duradouros."
    },
    {
      icon: Award,
      title: "Excelência Literária",
      description: "Comprometimento com a qualidade e profundidade em cada obra criada."
    }
  ]

  const stats = [
    { number: "15+", label: "Anos de Experiência", icon: BookOpen },
    { number: "50+", label: "Histórias Escritas", icon: PenTool },
    { number: "1000+", label: "Leitores Alcançados", icon: Users },
    { number: "25+", label: "Projetos Concluídos", icon: Award }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-white via-primary-50 to-secondary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 text-secondary-100 opacity-50"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <BookOpen className="w-24 h-24" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 left-10 text-accent-100 opacity-30"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="w-20 h-20" />
        </motion.div>
      </div>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
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
            <span className="text-secondary-700 font-medium">Sobre o Autor</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">
            Uma Jornada de
            <span className="block text-gradient font-serif italic">Palavras e Emoções</span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Há mais de uma década dedicando-se à arte de contar histórias que inspiram, 
            transformam e conectam pessoas através do poder das palavras.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.div
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-secondary-600 p-3 rounded-full flex-shrink-0">
                  <PenTool className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-2">O Início da Jornada</h3>
                  <p className="text-secondary-600 leading-relaxed">
                    A paixão pela escrita começou cedo, quando as primeiras palavras foram transformadas 
                    em histórias que capturavam a imaginação e despertavam emoções profundas.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-accent-600 p-3 rounded-full flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-2">Evolução Criativa</h3>
                  <p className="text-secondary-600 leading-relaxed">
                    Ao longo dos anos, desenvolveu um estilo único que combina técnica apurada com 
                    sensibilidade emocional, criando narrativas que ressoam com leitores de todas as idades.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-gold-500 p-3 rounded-full flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-2">Conexão Humana</h3>
                  <p className="text-secondary-600 leading-relaxed">
                    Cada obra é uma ponte entre mundos, conectando experiências humanas universais 
                    através de personagens autênticos e situações que tocam o coração.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <button className="btn-primary flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>Explore as Obras</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gradient-to-br from-secondary-600 to-accent-600 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm space-y-6">
                {/* Quote */}
                <motion.div
                  className="text-center text-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-serif italic mb-4">
                    "A literatura é a arte de descobrir algo extraordinário sobre as pessoas ordinárias"
                  </div>
                  <div className="text-lg font-medium opacity-80">- Filosofia Pessoal</div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="flex justify-center space-x-4">
                  {[Sparkles, BookOpen, Heart].map((Icon, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/20 p-3 rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gold-400 rounded-full p-3 shadow-lg"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-accent-500 rounded-full p-3 shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <PenTool className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-secondary-800 mb-12">
            Valores que Guiam a <span className="text-gradient">Criação</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-white card-shadow rounded-2xl p-6 h-full flex flex-col">
                    <div className="bg-gradient-to-br from-secondary-600 to-accent-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-secondary-800 mb-3">{value.title}</h4>
                    <p className="text-secondary-600 leading-relaxed flex-grow">{value.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-secondary-600 to-accent-600 rounded-3xl p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={index}
                  className="space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-white/20 p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center backdrop-blur-sm">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}