'use client';

import { useState } from 'react';
import { menuData, categories } from '@/lib/menuData';
import { useCart } from '@/lib/CartContext';
import { Plus, Check } from 'lucide-react';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());
  const { addToCart } = useCart();

  const filteredItems = selectedCategory === 'all' 
    ? menuData 
    : menuData.filter(item => item.category === selectedCategory);

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
    <main className="min-h-screen bg-gradient-to-b from-cream via-white to-cream">
      <div className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(212, 175, 55, 0.4) 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-gold mb-4 animate-fadeIn">Наше меню</h1>
          <p className="text-xl md:text-2xl text-cream/90 animate-slideIn">Выберите категорию и добавьте блюда в корзину</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="mb-12 sticky top-20 z-40 bg-cream/95 backdrop-blur-md rounded-2xl shadow-xl p-4 border border-white">
          <div className="overflow-x-auto">
            <div className="flex gap-3 pb-2 min-w-max">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 whitespace-nowrap ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-primary to-primary/90 text-gold shadow-lg'
                    : 'bg-white text-primary hover:bg-gray-50 shadow'
                }`}
              >
                Все блюда
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-primary to-primary/90 text-gold shadow-lg'
                      : 'bg-white text-primary hover:bg-gray-50 shadow'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-gray-100 overflow-hidden animate-scaleIn"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-primary group-hover:text-gold transition-colors flex-1 pr-2">
                    {item.name}
                  </h3>
                  <div className="text-right">
                    <span className="text-gold font-bold text-xl whitespace-nowrap">
                      {item.price} ₸
                    </span>
                    {item.price2 && (
                      <div className="text-gold/70 font-semibold text-sm">
                        {item.price2} ₸
                      </div>
                    )}
                  </div>
                </div>
                
                {item.description && (
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                )}
                
                <div className="pt-4 border-t border-gray-100">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`w-full font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 ${
                      addedItems.has(item.id)
                        ? 'bg-green-500 text-white'
                        : 'bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-gold shadow-md hover:shadow-lg transform hover:scale-105'
                    }`}
                  >
                    {addedItems.has(item.id) ? (
                      <>
                        <Check size={20} />
                        Добавлено
                      </>
                    ) : (
                      <>
                        <Plus size={20} />
                        В корзину
                      </>
                    )}
                  </button>
                </div>
              </div>
              
              {/* Hover Effect Border */}
              <div className="h-1 bg-gradient-to-r from-gold via-yellow-400 to-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🍽️</div>
            <p className="text-2xl text-gray-600">Блюда не найдены</p>
          </div>
        )}
      </div>
    </main>
  );
}
