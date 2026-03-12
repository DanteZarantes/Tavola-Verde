'use client';

import Link from 'next/link';
import { useCart } from '@/lib/CartContext';
import { useAuth } from '@/lib/AuthContext';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const { cart } = useCart();
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-gradient-to-r from-primary via-primary/98 to-primary text-white shadow-2xl sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold text-gold hover:text-gold/80 transition-all transform hover:scale-105">
            Tavola Verde
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-cream hover:text-gold transition-all font-medium text-lg relative group">
              Главная
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/menu" className="text-cream hover:text-gold transition-all font-medium text-lg relative group">
              Меню
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/profile" className="text-cream hover:text-gold transition-all font-medium text-lg flex items-center gap-2 relative group">
              <User size={22} />
              {user ? user.name : 'Профиль'}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all"></span>
            </Link>
            <Link href="/cart" className="relative group">
              <div className="flex items-center gap-2 bg-gold text-primary px-5 py-2.5 rounded-full font-semibold hover:bg-gold/90 transition-all transform hover:scale-105 shadow-lg">
                <ShoppingCart size={22} />
                <span>Корзина</span>
                {itemCount > 0 && (
                  <span className="bg-primary text-gold rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    {itemCount}
                  </span>
                )}
              </div>
            </Link>
          </nav>

          <button 
            className="md:hidden text-gold hover:text-gold/80 transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-6 flex flex-col gap-4 pb-4 animate-slideIn">
            <Link href="/" className="text-cream hover:text-gold transition-all font-medium text-lg py-2" onClick={() => setMobileMenuOpen(false)}>
              Главная
            </Link>
            <Link href="/menu" className="text-cream hover:text-gold transition-all font-medium text-lg py-2" onClick={() => setMobileMenuOpen(false)}>
              Меню
            </Link>
            <Link href="/profile" className="text-cream hover:text-gold transition-all font-medium text-lg flex items-center gap-2 py-2" onClick={() => setMobileMenuOpen(false)}>
              <User size={22} />
              {user ? user.name : 'Профиль'}
            </Link>
            <Link href="/cart" className="bg-gold text-primary px-5 py-3 rounded-full font-semibold hover:bg-gold/90 transition-all flex items-center gap-2 justify-center" onClick={() => setMobileMenuOpen(false)}>
              <ShoppingCart size={22} />
              Корзина {itemCount > 0 && `(${itemCount})`}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
