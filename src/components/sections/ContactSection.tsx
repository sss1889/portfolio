'use client'

import React, { useState } from 'react'

interface ContactForm {
  name: string
  email: string
  message: string
}

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission with animation
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    const mailtoUrl = `mailto:natsukirin65@gmail.com?subject=${subject}&body=${body}`
    
    window.location.href = mailtoUrl
    
    setIsSubmitting(false)
    setForm({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'natsukirin65@gmail.com',
      href: 'mailto:natsukirin65@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'namiki-chikusa',
      href: 'https://www.linkedin.com/in/namiki-chikusa-37b738301',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '🔗',
      title: 'GitHub',
      value: 'github.com/sss1889',
      href: 'https://github.com/sss1889',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Kyoto, Japan',
      href: null,
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let&apos;s discuss opportunities to work together. I&apos;m always interested in new challenges and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-glow mb-8">Connect With Me</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <div
                  key={method.title}
                  className="group glass-card interactive-card p-6 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{method.title}</h4>
                      {method.href ? (
                        <a 
                          href={method.href}
                          target={method.href.startsWith('http') ? '_blank' : undefined}
                          rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-gray-300 hover:text-white transition-colors text-sm break-all"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span className="text-gray-300 text-sm">{method.value}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="glass-card p-6 mt-8">
              <h4 className="text-xl font-bold text-white mb-4">Languages</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">日本語</span>
                  <span className="text-sm text-gray-400">ネイティブ</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">English</span>
                  <span className="text-sm text-gray-400">ビジネスレベル (TOEIC 940)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-3xl font-bold gradient-text mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-white font-medium">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`
                      w-full p-4 bg-white/5 border border-white/20 rounded-lg 
                      text-white placeholder-gray-400 
                      focus:outline-none focus:border-purple-500 focus:bg-white/10
                      transition-all duration-300
                      ${focusedField === 'name' ? 'shadow-lg shadow-purple-500/25' : ''}
                    `}
                    placeholder="Your name"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-white font-medium">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`
                      w-full p-4 bg-white/5 border border-white/20 rounded-lg 
                      text-white placeholder-gray-400 
                      focus:outline-none focus:border-purple-500 focus:bg-white/10
                      transition-all duration-300
                      ${focusedField === 'email' ? 'shadow-lg shadow-purple-500/25' : ''}
                    `}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-white font-medium">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={6}
                    className={`
                      w-full p-4 bg-white/5 border border-white/20 rounded-lg 
                      text-white placeholder-gray-400 resize-none
                      focus:outline-none focus:border-purple-500 focus:bg-white/10
                      transition-all duration-300
                      ${focusedField === 'message' ? 'shadow-lg shadow-purple-500/25' : ''}
                    `}
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full py-4 px-6 rounded-lg font-semibold text-lg
                  bg-gradient-to-r from-purple-600 to-pink-600 
                  hover:from-purple-500 hover:to-pink-500
                  transform transition-all duration-300
                  ${isSubmitting ? 'scale-95 opacity-75' : 'hover:scale-105 hover:shadow-2xl'}
                  disabled:cursor-not-allowed
                  relative overflow-hidden
                `}
              >
                <span className={`transition-opacity duration-300 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                  Send Message
                </span>
                {isSubmitting && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <div className="glass-card inline-flex items-center gap-4 px-8 py-4 hover:scale-105 transition-transform duration-300">
            <a 
              href="https://github.com/sss1889/portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
            >
              <span className="text-2xl">🔗</span>
              <span className="font-medium">View Source Code</span>
            </a>
          </div>
          <p className="text-gray-400 mt-6 text-lg">
            © 2025 Namiki Chikusa. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}