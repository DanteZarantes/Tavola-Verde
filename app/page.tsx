import Link from 'next/link';
import { Utensils, ChefHat, Truck, ArrowRight, Star, Sparkles, Clock, Award } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-darker overflow-hidden text-cream">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 hero-gradient overflow-hidden">
        {/* Cinematic Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '3s' }}></div>
          
          {/* Animated Gold Lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent rotate-12 animate-shimmer"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/5 to-transparent -rotate-12 animate-shimmer" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
            {/* Left Content */}
            <div className="text-left animate-slideIn">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-panel border border-gold/30 mb-8 w-fit shadow-glow-gold/10 animate-float">
                <div className="w-2 h-2 bg-gold animate-pulse rounded-full"></div>
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold-light">Вершина гастрономии</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-serif mb-6 leading-[1.1] tracking-tight">
                <span className="block text-white opacity-90">Насладитесь</span>
                <span className="gradient-text-gold italic block mt-2 animate-shimmer">Необычным</span>
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-cream/70 mb-10 max-w-lg font-light leading-relaxed border-l-2 border-gold/40 pl-6">
                Испытайте симфонию вкусов, где традиции встречаются с инновациями. Насладитесь кулинарными шедеврами, созданными для самых взыскательных гурманов.
              </p>
              
              <div className="flex gap-4 flex-wrap">
                <Link 
                  href="/menu" 
                  className="group relative bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-primary-darker px-8 py-4 rounded-full text-base md:text-lg font-bold transition-all duration-500 shadow-2xl hover:shadow-gold-glow flex items-center gap-3 overflow-hidden animate-scaleIn"
                >
                  <span className="relative z-10">Изучить меню</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <Link 
                  href="/profile" 
                  className="glass-panel px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-full text-base md:text-lg font-semibold transition-all duration-500 backdrop-blur-xl group flex items-center gap-2 animate-scaleIn"
                  style={{ animationDelay: '0.2s' }}
                >
                  <div className="w-2 h-2 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  Мой профиль
                </Link>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative flex items-center justify-center animate-fadeIn lg:justify-end" style={{ animationDelay: '0.4s' }}>
              <div className="relative w-full max-w-[450px] lg:max-w-[500px] aspect-square">
                {/* Outer Decorative Rings */}
                <div className="absolute inset-[-40px] border border-gold/10 rounded-full animate-[spin_40s_linear_infinite]"></div>
                <div className="absolute inset-[-20px] border border-gold/20 rounded-full animate-[spin_60s_linear_infinite_reverse]"></div>
                
                {/* Main Image Container */}
                <div className="absolute inset-0 bg-primary-dark rounded-[4rem] rotate-3 shadow-2xl overflow-hidden glass-panel border-gold/30 group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-110"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Stat Card */}
                <div className="absolute -bottom-6 -right-6 glass-panel p-5 rounded-3xl border-gold/40 shadow-2xl animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gold rounded-2xl flex items-center justify-center shadow-lg">
                      <Star size={24} className="text-primary-dark" fill="currentColor" />
                    </div>
                    <div>
                      <div className="text-xl font-bold font-serif text-white">Tavola Verde</div>
                      <div className="text-xs font-bold text-gold-light uppercase tracking-widest">Ресторан</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-3 z-20 animate-bounce">
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-gold/60">Прокрутите вниз</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold/40 to-transparent"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative z-20 bg-primary-dark border-t border-gold/10">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fadeIn">
            <Sparkles className="text-gold mx-auto mb-4 w-10 h-10 opacity-80 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-cream-light">
              Почему выбирают нас
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-cream/60 max-w-2xl mx-auto font-light leading-relaxed">
              Мы создаем незабываемые впечатления для каждого гостя
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-10 rounded-3xl hover:shadow-glow-primary transition-all duration-500 transform hover:-translate-y-2 group animate-slideIn">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-darker to-primary border border-gold/20 flex items-center justify-center mb-8 shadow-inner group-hover:border-gold/50 transition-colors group-hover:rotate-6 duration-500">
                <Utensils className="text-gold w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-cream-light mb-4">Свежие ингредиенты</h3>
              <p className="text-cream/60 leading-relaxed font-light">Только качественные продукты от проверенных поставщиков для вашего здоровья и удовольствия</p>
            </div>
            
            <div className="glass-card p-10 rounded-3xl shadow-glow-primary/50 hover:shadow-glow-primary transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden animate-slideIn" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-dark to-gold border border-gold/40 flex items-center justify-center mb-8 shadow-glow-gold group-hover:scale-105 transition-transform group-hover:rotate-6 duration-500">
                  <ChefHat className="text-primary-darker w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-gold-light mb-4">Опытные повара</h3>
                <p className="text-cream/70 leading-relaxed font-light">Профессиональная команда создает кулинарные шедевры с любовью и вниманием к деталям</p>
              </div>
            </div>
            
            <div className="glass-card p-10 rounded-3xl hover:shadow-glow-primary transition-all duration-500 transform hover:-translate-y-2 group animate-slideIn" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-darker to-primary border border-gold/20 flex items-center justify-center mb-8 shadow-inner group-hover:border-gold/50 transition-colors group-hover:rotate-6 duration-500">
                <Truck className="text-gold w-8 h-8 group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-cream-light mb-4">Удобная доставка</h3>
              <p className="text-cream/60 leading-relaxed font-light">Быстрая доставка с сохранением качества и температуры каждого блюда прямо к вашей двери</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 px-4 relative z-20 bg-primary-darker">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <Award className="text-gold mx-auto mb-4 w-10 h-10 opacity-80 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-cream-light">
              Специальные предложения
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-3xl border-gold/30 hover:shadow-glow-gold transition-all duration-500 group animate-scaleIn">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Clock size={32} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-serif text-white mb-3">Ифтар Сет 1</h3>
                  <p className="text-cream/60 mb-4 leading-relaxed">Суп чечевичный, салат, бефстроганов, хлебная корзина с бауырсаками, морс и чай, штрудель</p>
                  <span className="text-gold font-bold text-xl">7800 ₸</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl border-gold/30 hover:shadow-glow-gold transition-all duration-500 group animate-scaleIn" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Sparkles size={32} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-serif text-white mb-3">Ифтар Сет 2</h3>
                  <p className="text-cream/60 mb-4 leading-relaxed">Лапша с фрикадельками, цезарь с курицей, бифштекс из мраморной говядины, десерт и напитки</p>
                  <span className="text-gold font-bold text-xl">8700 ₸</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-primary-darker"></div>
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-fixed bg-center mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-darker via-primary-darker/80 to-primary-darker"></div>
        </div>
        
        <div className="glass-panel max-w-4xl mx-auto text-center relative z-10 p-12 md:p-16 rounded-[3rem] border border-gold/20 shadow-glow-primary animate-scaleIn">
          <Star className="text-gold mx-auto mb-6 w-12 h-12 opacity-80 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold font-serif gradient-text-gold mb-6">
            Готовы сделать заказ?
          </h2>
          <p className="text-xl text-cream/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Откройте наше меню и выберите любимые блюда. Мы приготовим их специально для вас.
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
