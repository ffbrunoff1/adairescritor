import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, BookOpen, Feather } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const menuItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre', id: 'about' },
    { label: 'Obras', id: 'services' },
    { label: 'Contato', id: 'contact' }
  ]

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <motion.div
                className={`p-2 rounded-full ${
                  isScrolled ? 'bg-secondary-600' : 'bg-white/10 backdrop-blur-sm'
                }`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <Feather className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-secondary-700'}`} />
              </motion.div>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold ${isScrolled ? 'text-secondary-700' : 'text-secondary-700'}`}>
                Adair
              </span>
              <span className={`text-sm font-serif ${isScrolled ? 'text-secondary-500' : 'text-secondary-600'}`}>
                Escritor
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-secondary-700 hover:text-secondary-600' 
                    : 'text-secondary-700 hover:text-secondary-600'
                }`}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            onClick={() => scrollToSection('contact')}
            className={`hidden md:block px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
              isScrolled
                ? 'bg-secondary-600 text-white hover:bg-secondary-700 shadow-lg'
                : 'bg-white/90 text-secondary-700 hover:bg-white hover:shadow-lg backdrop-blur-sm'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Entre em Contato
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-secondary-700' : 'text-secondary-700'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-secondary-700' : 'text-secondary-700'}`} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${isMobileMenuOpen ? 'max-h-64' : 'max-h-0'}`}
          initial={false}
          animate={{ 
            maxHeight: isMobileMenuOpen ? 256 : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4 bg-white/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-6 py-2 text-secondary-700 hover:text-secondary-600 hover:bg-secondary-50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="mx-6 mt-4 w-auto btn-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Entre em Contato
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}