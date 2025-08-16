import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Mail, Phone, MapPin, Heart, Feather, ArrowUp, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre', id: 'about' },
    { label: 'Obras', id: 'services' },
    { label: 'Contato', id: 'contact' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ]

  const genres = [
    "Romance Contemporâneo",
    "Ficção Fantástica", 
    "Literatura Reflexiva",
    "Contos e Crônicas"
  ]

  return (
    <footer className="relative bg-secondary-900 text-white overflow-hidden pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 text-secondary-700 opacity-30"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <BookOpen className="w-24 h-24" />
        </motion.div>
        
        <motion.div
          className="absolute top-20 right-20 text-secondary-700 opacity-20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Feather className="w-20 h-20" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 left-1/2 text-secondary-700 opacity-25"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.4, 0.25]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Heart className="w-16 h-16" />
        </motion.div>
      </div>

      <div className="container-max relative z-10 section-padding">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <motion.div
                  className="p-3 bg-gradient-to-br from-secondary-600 to-accent-600 rounded-full"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Feather className="w-8 h-8 text-white" />
                </motion.div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">Adair</span>
                <span className="text-lg font-serif text-secondary-300">Escritor</span>
              </div>
            </motion.div>

            <p className="text-secondary-300 leading-relaxed">
              Dedicado à arte de contar histórias que inspiram, transformam e conectam pessoas 
              através do poder transformador das palavras.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="bg-secondary-800 hover:bg-gradient-to-r hover:from-secondary-600 hover:to-accent-600 p-3 rounded-full transition-all duration-300 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <IconComponent className="w-5 h-5 text-secondary-300 group-hover:text-white transition-colors" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Navegação</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-secondary-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform block"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Genres */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Gêneros Literários</h3>
            <ul className="space-y-4">
              {genres.map((genre, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                  <span className="text-secondary-300">{genre}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              onClick={() => scrollToSection('services')}
              className="bg-gradient-to-r from-secondary-600 to-accent-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <BookOpen className="w-4 h-4" />
              <span>Ver Todas as Obras</span>
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Contato</h3>
            
            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Mail className="w-5 h-5 text-accent-400" />
                <span className="text-secondary-300">contato@adairescritor.com</span>
              </motion.div>
              
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Phone className="w-5 h-5 text-accent-400" />
                <span className="text-secondary-300">+55 (11) 9999-9999</span>
              </motion.div>
              
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <MapPin className="w-5 h-5 text-accent-400" />
                <span className="text-secondary-300">São Paulo, Brasil</span>
              </motion.div>
            </div>

            <motion.div
              className="bg-secondary-800 p-4 rounded-lg border border-secondary-700"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-secondary-300 text-sm leading-relaxed">
                <strong className="text-white">Horário de Atendimento:</strong><br />
                Segunda a Sexta: 9h às 18h<br />
                Sábado: 9h às 14h
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="bg-gradient-to-r from-secondary-800 to-secondary-700 rounded-3xl p-8 mb-12 border border-secondary-600"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Receba Novidades Literárias
              </h3>
              <p className="text-secondary-300">
                Fique por dentro dos lançamentos, eventos e conteúdos exclusivos sobre literatura.
              </p>
            </motion.div>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-accent-400 backdrop-blur-sm"
              />
              <motion.button
                className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4" />
                <span>Inscrever</span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          className="border-t border-secondary-700 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-secondary-400 text-sm">
                © 2024 Adair Escritor. Todos os direitos reservados.
              </p>
              <div className="flex items-center space-x-2 text-secondary-400 text-sm">
                <span>Criado com</span>
                <Heart className="w-4 h-4 text-red-400" />
                <span>por</span>
                <a 
                  href="https://papum.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="italic text-accent-400 hover:text-accent-300 transition-colors"
                >
                  Papum
                </a>
              </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="bg-secondary-800 hover:bg-gradient-to-r hover:from-secondary-600 hover:to-accent-600 p-3 rounded-full transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-5 h-5 text-secondary-300 group-hover:text-white transition-colors" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/2 right-10 text-secondary-700 opacity-20"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <BookOpen className="w-12 h-12" />
      </motion.div>
    </footer>
  )
}