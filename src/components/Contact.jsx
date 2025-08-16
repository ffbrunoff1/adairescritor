import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, BookOpen, Feather, Clock, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [status, setStatus] = useState({ message: '', isError: false })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ message: '', isError: false })

    try {
      // Simulating form submission
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setStatus({ 
        message: 'Mensagem enviada com sucesso! Retornarei o contato em breve.', 
        isError: false 
      })
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setStatus({ 
        message: 'Erro ao enviar mensagem. Tente novamente.', 
        isError: true 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contato@adairescritor.com",
      action: "mailto:contato@adairescritor.com"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (11) 9999-9999",
      action: "tel:+5511999999999"
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "São Paulo, Brasil",
      action: null
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg-Sex: 9h às 18h",
      action: null
    }
  ]

  const services = [
    {
      icon: BookOpen,
      title: "Consultas sobre Obras",
      description: "Tire dúvidas sobre livros disponíveis, lançamentos e recomendações personalizadas."
    },
    {
      icon: Feather,
      title: "Consultoria Literária",
      description: "Orientação profissional para escritores iniciantes e experientes."
    },
    {
      icon: MessageCircle,
      title: "Eventos e Palestras",
      description: "Convites para eventos, workshops e palestras sobre literatura."
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-white via-primary-50 to-secondary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 text-secondary-100 opacity-20"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Mail className="w-32 h-32" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 left-10 text-accent-100 opacity-15"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Feather className="w-28 h-28" />
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
            <Mail className="w-5 h-5 text-secondary-600" />
            <span className="text-secondary-700 font-medium">Entre em Contato</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">
            Vamos Conversar sobre
            <span className="block text-gradient font-serif italic">Literatura e Histórias</span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Estou sempre disponível para conversar sobre literatura, projetos criativos 
            ou simplesmente compartilhar a paixão pela arte de contar histórias.
          </p>
        </motion.div>

        {/* Services Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-100 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-gradient-to-br from-secondary-600 to-accent-600 p-4 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary-800 mb-3">{service.title}</h3>
                <p className="text-secondary-600 leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl border border-secondary-100"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-secondary-800 mb-4">
                Envie sua <span className="text-gradient">Mensagem</span>
              </h3>
              <p className="text-secondary-600">
                Preencha o formulário abaixo e retornarei o contato em breve.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                  Assunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="consulta-obras">Consulta sobre Obras</option>
                  <option value="consultoria">Consultoria Literária</option>
                  <option value="eventos">Eventos e Palestras</option>
                  <option value="parcerias">Parcerias</option>
                  <option value="outros">Outros</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Conte-me sobre seu interesse ou projeto..."
                />
              </motion.div>

              {status.message && (
                <motion.div
                  className={`p-4 rounded-lg ${
                    status.isError 
                      ? 'bg-red-50 border border-red-200 text-red-700'
                      : 'bg-green-50 border border-green-200 text-green-700'
                  }`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {status.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-3 ${
                  isSubmitting
                    ? 'bg-secondary-400 cursor-not-allowed'
                    : 'bg-secondary-600 hover:bg-secondary-700 transform hover:scale-105'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-br from-secondary-600 to-accent-600 p-3 rounded-xl">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-secondary-800">{info.title}</h4>
                        {info.action ? (
                          <a
                            href={info.action}
                            className="text-secondary-600 hover:text-secondary-700 transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-secondary-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Quote Card */}
            <motion.div
              className="bg-gradient-to-r from-secondary-600 to-accent-600 rounded-3xl p-8 text-white shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center space-y-6">
                <motion.div
                  className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <BookOpen className="w-8 h-8" />
                </motion.div>
                
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold font-serif">
                    "A literatura é uma forma de diálogo entre almas"
                  </h4>
                  <p className="text-lg opacity-90">
                    Cada conversa é uma oportunidade de criar novas conexões 
                    e descobrir histórias fascinantes.
                  </p>
                </div>
                
                <div className="flex justify-center space-x-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-white/60 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Response Time */}
            <motion.div
              className="bg-accent-50 border-l-4 border-accent-500 p-6 rounded-r-xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-accent-600" />
                <div>
                  <h4 className="font-semibold text-secondary-800">Tempo de Resposta</h4>
                  <p className="text-secondary-600">Geralmente respondo em até 24 horas</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}