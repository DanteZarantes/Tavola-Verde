'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-primary-darker text-cream pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-gold/10">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-darker via-primary-darker/90 to-primary/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <MessageSquare className="text-gold mx-auto mb-4 w-8 h-8 opacity-80 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 text-cream-light drop-shadow-xl animate-fadeIn">
            Свяжитесь <span className="gradient-text-gold">с нами</span>
          </h1>
          <p className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto animate-slideIn font-light tracking-wide">
            Мы всегда рады ответить на ваши вопросы и принять ваши предложения
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slideIn">
            <div className="glass-card p-8 rounded-3xl border-gold/20 hover:shadow-glow-gold transition-all duration-500">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={32} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-serif text-white mb-3">Адрес</h3>
                  <p className="text-cream/70 text-lg leading-relaxed">
                    г. Алматы<br />
                    Казахстан
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl border-gold/20 hover:shadow-glow-gold transition-all duration-500">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone size={32} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-serif text-white mb-3">Телефон</h3>
                  <p className="text-cream/70 text-lg leading-relaxed">
                    +7 (XXX) XXX-XX-XX<br />
                    Звоните с 10:00 до 23:00
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl border-gold/20 hover:shadow-glow-gold transition-all duration-500">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail size={32} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-serif text-white mb-3">Email</h3>
                  <p className="text-cream/70 text-lg leading-relaxed">
                    info@tavolaverde.kz<br />
                    Ответим в течение 24 часов
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl border-gold/20 hover:shadow-glow-gold transition-all duration-500">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock size={32} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-serif text-white mb-3">Часы работы</h3>
                  <p className="text-cream/70 text-lg leading-relaxed">
                    Ежедневно<br />
                    10:00 - 23:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-scaleIn">
            <div className="glass-card p-10 rounded-3xl border-gold/20 sticky top-32">
              <h2 className="text-3xl font-bold font-serif text-white mb-8">Напишите нам</h2>
              
              {submitted ? (
                <div className="text-center py-12 animate-scaleIn">
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                    <Send size={40} className="text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Сообщение отправлено!</h3>
                  <p className="text-cream/60">Мы свяжемся с вами в ближайшее время</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-cream/80 mb-2">Ваше имя</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-4 bg-primary-dark/50 border border-cream/10 rounded-xl text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all"
                      placeholder="Иван Иванов"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-cream/80 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-4 bg-primary-dark/50 border border-cream/10 rounded-xl text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all"
                      placeholder="email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-cream/80 mb-2">Телефон</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-4 bg-primary-dark/50 border border-cream/10 rounded-xl text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all"
                      placeholder="+7 (XXX) XXX-XX-XX"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-cream/80 mb-2">Сообщение</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-4 bg-primary-dark/50 border border-cream/10 rounded-xl text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all resize-none"
                      placeholder="Расскажите нам, чем мы можем помочь..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-primary-darker font-bold py-4 rounded-xl transition-all transform hover:scale-105 shadow-glow-gold flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Отправить сообщение
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
