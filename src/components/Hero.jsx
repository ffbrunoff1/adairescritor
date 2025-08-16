import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Sparkles, Quote, Scroll, ArrowDown, Star } from 'lucide-react'

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-primary-100 to-secondary-100">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 text-secondary-200"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <BookOpen className="w-16 h-16" />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-20 text-accent-200"
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
          <Sparkles className="w-12 h-12" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-20 text-gold-300"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Star className="w-10 h-10" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-10 text-secondary-300"
          animate={{ 
            x: [0, 20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Scroll className="w-14 h-14" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Quote Icon */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="p-4 bg-secondary-600 rounded-full shadow-lg">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-800">
                <span className="block">Universo</span>
                <span className="block text-gradient">Literário</span>
                <span className="block font-serif italic text-3xl md:text-4xl lg:text-5xl text-secondary-600 mt-2">
                  de Adair
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-secondary-600 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Mergulhe em narrativas cativantes que inspiram, transformam e despertam a imaginação. 
              Descubra histórias que tocam a alma e expandem horizontes.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                onClick={scrollToAbout}
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen className="w-5 h-5" />
                Explore as Obras
              </motion.button>
              
              <motion.button
                onClick={scrollToContact}
                className="btn-outline text-lg px-8 py-4 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-5 h-5" />
                Entre em Contato
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary-700">15+</div>
                <div className="text-sm text-secondary-500">Anos Escrevendo</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary-700">50+</div>
                <div className="text-sm text-secondary-500">Histórias Criadas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary-700">1000+</div>
                <div className="text-sm text-secondary-500">Leitores Inspirados</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              {/* Main Illustration */}
              <motion.div
                className="bg-gradient-to-br from-secondary-600 to-accent-600 rounded-3xl p-8 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    {/* Book Stack Illustration */}
                    <div className="flex justify-center space-x-2">
                      {[1, 2, 3].map((book, index) => (
                        <motion.div
                          key={book}
                          className={`w-12 h-16 rounded-sm shadow-lg ${
                            index === 0 ? 'bg-gold-400' :
                            index === 1 ? 'bg-accent-400' : 'bg-secondary-300'
                          }`}
                          style={{ transform: `rotate(${(index - 1) * 5}deg)` }}
                          whileHover={{ 
                            scale: 1.1,
                            rotate: `${(index - 1) * 10}deg`
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      ))}
                    </div>

                    {/* Floating Elements */}
                    <div className="relative h-32 overflow-hidden">
                      {Array.from({ length: 6 }).map((_, index) => (
                        <motion.div
                          key={index}
                          className="absolute text-white/30"
                          style={{
                            left: `${Math.random() * 80}%`,
                            top: `${Math.random() * 80}%`,
                          }}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: index * 0.5,
                          }}
                        >
                          {index % 3 === 0 ? (
                            <Star className="w-4 h-4" />
                          ) : index % 3 === 1 ? (
                            <Sparkles className="w-4 h-4" />
                          ) : (
                            <BookOpen className="w-4 h-4" />
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote Text */}
                    <motion.div
                      className="text-center text-white/90"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                    >
                      <p className="font-serif italic text-lg">
                        "Cada palavra é uma porta para um novo mundo"
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
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

              <motion.div
                className="absolute -bottom-4 -left-4 bg-accent-500 rounded-full p-3 shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <BookOpen className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center space-y-2 text-secondary-600 hover:text-secondary-700 transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-sm font-medium">Descubra mais</span>
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}