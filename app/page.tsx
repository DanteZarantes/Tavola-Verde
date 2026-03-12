import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-[#1a4040] to-[#163838]">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.2) 0%, transparent 50%),
                             radial-gradient(circle at 40% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)`
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fadeIn">
          <div className="mb-8">
            <div className="inline-block">
              <h1 className="text-7xl md:text-9xl font-bold text-gold mb-2 tracking-tight drop-shadow-2xl">
                Tavola Verde
              </h1>
              <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            </div>
          </div>
          
          <p className="text-2xl md:text-3xl text-cream/90 mb-6 font-light tracking-wide">
            Изысканная кухня в сердце города
          </p>
          <p className="text-lg md:text-xl text-cream/70 mb-12 max-w-2xl mx-auto">
            Откройте для себя мир вкуса и элегантности
          </p>
          
          <div className="flex gap-6 justify-center flex-wrap">
            <Link 
              href="/menu" 
              className="group relative bg-gold hover:bg-gold/90 text-primary px-10 py-5 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">Посмотреть меню</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold via-yellow-400 to-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            <Link 
              href="/profile" 
              className="bg-transparent border-2 border-cream hover:bg-cream/10 text-cream px-10 py-5 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl backdrop-blur-sm"
            >
              Мой профиль
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-cream to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, #1E4D4D 0px, #1E4D4D 2px, transparent 2px, transparent 10px)`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fadeIn">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">Почему выбирают нас</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Мы создаем незабываемые впечатления для каждого гостя</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 animate-fadeIn">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">🍽️</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Качественные продукты</h3>
              <p className="text-gray-600 leading-relaxed">Только свежие ингредиенты от проверенных поставщиков для вашего здоровья и удовольствия</p>
            </div>
            
            <div className="group bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-gold to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">👨🍳</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Опытные повара</h3>
              <p className="text-gray-600 leading-relaxed">Профессиональная команда с многолетним опытом создает кулинарные шедевры</p>
            </div>
            
            <div className="group bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Быстрая доставка</h3>
              <p className="text-gray-600 leading-relaxed">Онлайн заказ с доставкой прямо к вашей двери в кратчайшие сроки</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(212, 175, 55, 0.4) 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">Готовы сделать заказ?</h2>
          <p className="text-xl text-cream/90 mb-10">Откройте наше меню и выберите любимые блюда</p>
          <Link 
            href="/menu" 
            className="inline-block bg-gold hover:bg-gold/90 text-primary px-12 py-5 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-2xl"
          >
            Перейти к меню
          </Link>
        </div>
      </section>
    </main>
  );
}
