import Link from 'next/link';
import { Utensils, ChefHat, Truck, ArrowRight, Star } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-darker overflow-hidden text-cream">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 hero-gradient overflow-hidden">
        {/* Cinematic Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '3s' }}></div>
          
          {/* Animated Gold Lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent rotate-12"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/5 to-transparent -rotate-12"></div>
        </div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left animate-slideIn">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-panel border border-gold/30 mb-10 w-fit shadow-glow-gold/10">
              <div className="w-2 h-2 bg-gold animate-pulse rounded-full"></div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold-light">The Pinnacle of Gastronomy</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-bold font-serif mb-8 leading-[1] tracking-tight">
              <span className="block text-white opacity-90">Savor the</span>
              <span className="gradient-text-gold italic block mt-2">Extraordinary</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-cream/70 mb-12 max-w-xl font-light leading-relaxed border-l-2 border-gold/40 pl-6">
              Experience a symphony of flavors where tradition meets innovation. Indulge in culinary masterpieces crafted for the most discerning palates.
            </p>
            
            <div className="flex gap-6 flex-wrap">
              <Link 
                href="/menu" 
                className="group relative bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-primary-darker px-10 py-5 rounded-full text-lg font-bold transition-all duration-500 shadow-2xl hover:shadow-gold-glow flex items-center gap-3 overflow-hidden"
              >
                <span className="relative z-10">Explore the Menu</span>
                <ArrowRight size={22} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link 
                href="/menu" 
                className="glass-panel px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-full text-lg font-semibold transition-all duration-500 backdrop-blur-xl group flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                Reserve a Table
              </Link>
            </div>
          </div>
          
          <div className="relative lg:h-[700px] flex items-center justify-center animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-full aspect-square max-w-[550px]">
              {/* Outer Decorative Rings */}
              <div className="absolute inset-[-40px] border border-gold/10 rounded-full animate-[spin_40s_linear_infinite]"></div>
              <div className="absolute inset-[-20px] border border-gold/20 rounded-full animate-[spin_60s_linear_infinite_reverse]"></div>
              
              {/* Main Image Container */}
              <div className="absolute inset-0 bg-primary-dark rounded-[4rem] rotate-3 shadow-2xl overflow-hidden glass-panel border-gold/30">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 hover:scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -right-8 glass-panel p-6 rounded-3xl border-gold/40 shadow-2xl animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gold rounded-2xl flex items-center justify-center shadow-lg">
                    <Star size={28} className="text-primary-dark" fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-serif text-white">4.9 / 5.0</div>
                    <div className="text-xs font-bold text-gold-light uppercase tracking-widest">Guest Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 z-20">
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-gold/60">Scroll to Explore</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold/40 to-transparent"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 relative z-20 bg-primary-dark">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-cream-light">
              Искусство в каждой детали
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
            <p className="text-xl text-cream/60 max-w-2xl mx-auto font-light leading-relaxed">
              Мы создаем не просто еду, мы создаем впечатления, которые остаются с вами навсегда.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-10 rounded-3xl hover:shadow-glow-primary transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-darker to-primary border border-gold/20 flex items-center justify-center mb-8 shadow-inner group-hover:border-gold/50 transition-colors">
                <Utensils className="text-gold w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-cream-light mb-4">Высочайшее Качество</h3>
              <p className="text-cream/60 leading-relaxed font-light">Только отборные ингредиенты от лучших мировых и локальных фермерских хозяйств.</p>
            </div>
            
            <div className="glass-card p-10 rounded-3xl shadow-glow-primary/50 hover:shadow-glow-primary transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-dark to-gold border border-gold/40 flex items-center justify-center mb-8 shadow-glow-gold group-hover:scale-105 transition-transform">
                  <ChefHat className="text-primary-darker w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-gold-light mb-4">Шеф-Повара</h3>
                <p className="text-cream/70 leading-relaxed font-light">Команда профессионалов с опытом работы в мишленовских ресторанах Европы.</p>
              </div>
            </div>
            
            <div className="glass-card p-10 rounded-3xl hover:shadow-glow-primary transition-all duration-500 transform hover:-translate-y-2 group" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-darker to-primary border border-gold/20 flex items-center justify-center mb-8 shadow-inner group-hover:border-gold/50 transition-colors">
                <Truck className="text-gold w-8 h-8 group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-cream-light mb-4">Безупречный Сервис</h3>
              <p className="text-cream/60 leading-relaxed font-light">Быстрая доставка с сохранением идеальной температуры и подачи каждого блюда.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative flex items-center justify-center lg:py-32">
        <div className="absolute inset-0 bg-primary-darker"></div>
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-fixed bg-center mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-darker via-primary-darker/80 to-primary-darker"></div>
        </div>
        
        <div className="glass-panel max-w-4xl mx-auto text-center relative z-10 p-12 md:p-20 rounded-[3rem] border border-gold/20 shadow-glow-primary">
          <Star className="text-gold mx-auto mb-6 w-12 h-12 opacity-80" />
          <h2 className="text-4xl md:text-6xl font-bold font-serif gradient-text-gold mb-8">
            Готовы к новому опыту?
          </h2>
          <p className="text-xl text-cream/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Позвольте нам превзойти ваши ожидания. Ознакомьтесь с актуальным меню и сделайте свой первый заказ.
          </p>
          <Link 
            href="/menu" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-primary-darker px-12 py-5 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-glow-gold hover:shadow-lg relative overflow-hidden group"
          >
            <span className="relative z-10">Перейти к меню</span>
            <ArrowRight size={22} className="relative z-10 group-hover:translate-x-2 transition-transform" />
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
        </div>
      </section>
    </main>
  );
}
