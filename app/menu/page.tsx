'use client';

import { useState } from 'react';
import { menuData, categories } from '@/lib/menuData';
import { useCart } from '@/lib/CartContext';
import { Plus, Check, Search, Sparkles, Filter, TrendingUp } from 'lucide-react';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();

  const filteredItems = menuData.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (item: any) => {
    addToCart(item);
    setAddedItems(prev => new Set(prev).add(item.id));
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(item.id);
        return newSet;
      });
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-primary-darker text-cream pt-20">
      <div className="relative overflow-hidden py-16 md:py-24 border-b border-gold/10">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-darker via-primary-darker/90 to-primary/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <Sparkles className="text-gold mx-auto mb-4 w-8 h-8 opacity-80 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 text-cream-light drop-shadow-xl animate-fadeIn">
            Наше <span className="gradient-text-gold">Меню</span>
          </h1>
          <p className="text-lg md:text-xl text-cream/70 max-w-2xl mx-auto animate-slideIn font-light tracking-wide">
            Путешествие в мир высокой кухни начинается здесь. Выберите блюда, и мы приготовим их для вас с особой тщательностью.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="mb-8 animate-scaleIn">
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gold/60" size={20} />
            <input
              type="text"
              placeholder="Поиск блюд..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-primary-dark/50 border border-gold/20 rounded-2xl text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-16 sticky top-[88px] z-40 animate-slideIn">
          <div className="glass-panel p-2 md:p-3 rounded-2xl mx-auto w-fit max-w-full overflow-x-auto shadow-glow-primary scrollbar-hide border border-gold/20">
            <div className="flex gap-2 min-w-max">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 whitespace-nowrap text-sm tracking-wider uppercase flex items-center gap-2 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-gold to-gold-dark text-primary-darker shadow-glow-gold scale-105'
                    : 'text-cream/80 hover:text-gold hover:bg-gold/10'
                }`}
              >
                <Filter size={16} />
                Все блюда
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 whitespace-nowrap text-sm tracking-wider uppercase ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-gold to-gold-dark text-primary-darker shadow-glow-gold scale-105'
                      : 'text-cream/80 hover:text-gold hover:bg-gold/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        {searchQuery && (
          <div className="mb-8 text-center animate-fadeIn">
            <p className="text-cream/60">
              Найдено <span className="text-gold font-bold">{filteredItems.length}</span> блюд
            </p>
          </div>
        )}

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="group glass-card rounded-[32px] p-0 hover:shadow-glow-gold/10 transition-all duration-700 transform hover:-translate-y-3 relative overflow-hidden animate-scaleIn flex flex-col h-full premium-border"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Image Shimmer Area */}
              <div className="h-64 relative overflow-hidden bg-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-primary/30"></div>
                <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Decorative Pattern inside card top */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="w-12 h-12 rounded-full glass-panel border border-gold/30 flex items-center justify-center backdrop-blur-3xl group-hover:rotate-180 transition-transform duration-700">
                    <Sparkles size={20} className="text-gold animate-pulse" />
                  </div>
                </div>

                {/* Popular Badge */}
                {index < 3 && (
                  <div className="absolute top-4 left-4 z-20">
                    <div className="px-4 py-2 rounded-full bg-gold/90 backdrop-blur-xl flex items-center gap-2 animate-pulse">
                      <TrendingUp size={14} className="text-primary-darker" />
                      <span className="text-xs font-bold text-primary-darker uppercase tracking-wider">Популярное</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative z-10 p-8 flex-grow flex flex-col justify-between -mt-10">
                <div className="glass-panel rounded-[24px] p-6 border-white/5 shadow-2xl backdrop-blur-2xl">
                  <div className="flex justify-between items-start mb-5 gap-4">
                    <h3 className="text-2xl font-bold font-serif text-white group-hover:text-gold transition-colors duration-500 flex-1 leading-tight">
                      {item.name}
                    </h3>
                    <div className="text-right flex-shrink-0 bg-primary-darker/80 px-4 py-2 rounded-xl border border-gold/20 shadow-inner">
                      <span className="text-gold font-bold text-xl whitespace-nowrap tracking-wide drop-shadow-lg">
                        {item.price} ₸
                      </span>
                      {item.price2 && (
                        <div className="text-gold/70 font-semibold text-sm mt-1">
                          {item.price2} ₸
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {item.description && (
                    <p className="text-cream/60 text-[15px] mb-2 leading-relaxed font-light line-clamp-3 italic">
                      {item.description}
                    </p>
                  )}
                </div>
                
                <div className="pt-8">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`w-full font-bold py-5 px-8 rounded-2xl transition-all duration-500 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.2em] overflow-hidden group/btn ${
                      addedItems.has(item.id)
                        ? 'bg-green-500/10 text-green-400 border border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.1)]'
                        : 'bg-primary-darker text-gold border border-gold/20 hover:border-gold/60 hover:text-white hover:bg-gold-dark/20'
                    }`}
                  >
                    {addedItems.has(item.id) ? (
                      <>
                        <Check size={20} className="animate-bounce" />
                        <span>В корзине</span>
                      </>
                    ) : (
                      <>
                        <Plus size={20} className="group-hover/btn:rotate-90 transition-transform duration-500" />
                        <span>Добавить</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
              
              {/* Subtle Gold Corner Accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/0 group-hover:border-gold/40 rounded-tl-[32px] transition-all duration-700"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/0 group-hover:border-gold/40 rounded-br-[32px] transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-32 px-4 glass-card rounded-[3rem] max-w-2xl mx-auto mt-12 animate-scaleIn">
            <Search className="w-16 h-16 text-gold/50 mx-auto mb-6" />
            <p className="text-2xl font-serif text-cream-light mb-2">Ничего не найдено</p>
            <p className="text-cream/50 font-light">Попробуйте изменить параметры поиска или выбрать другую категорию</p>
          </div>
        )}
      </div>
    </main>
  );
}
