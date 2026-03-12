'use client';

import Link from 'next/link';
import { useCart } from '@/lib/CartContext';
import { useAuth } from '@/lib/AuthContext';
import { ShoppingCart, User, Menu, X, LogIn } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const { cart } = useCart();
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className={`glass-panel rounded-[24px] px-8 py-4 flex items-center justify-between transition-all duration-500 ${scrolled ? 'shadow-glow-gold/10 backdrop-blur-3xl border-gold/30' : 'shadow-2xl border-white/10'}`}>
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-500">
              <span className="text-primary-darker font-serif text-2xl font-black">TV</span>
            </div>
            <span className="text-2xl font-serif font-bold tracking-tighter text-white group-hover:text-gold transition-colors">
              Tavola <span className="gradient-text-gold">Verde</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-cream/70 hover:text-gold transition-all font-bold text-[13px] uppercase tracking-[0.25em] relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500"></span>
            </Link>
            <Link href="/menu" className="text-cream/70 hover:text-gold transition-all font-bold text-[13px] uppercase tracking-[0.25em] relative group">
              Selection
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500"></span>
            </Link>
            
            <div className="h-6 w-px bg-white/10 mx-2"></div>
            
            {user ? (
              <div className="flex items-center gap-8">
                <Link href="/orders" className="text-cream/70 hover:text-gold transition-all font-bold text-[13px] uppercase tracking-[0.25em] relative group">
                  Orders
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500"></span>
                </Link>
                <Link href="/profile" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full pl-2 pr-5 py-2 transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shadow-inner">
                    <User size={16} className="text-gold" />
                  </div>
                  <span className="text-sm font-bold text-white group-hover:text-gold transition-colors">{user.name}</span>
                </Link>
              </div>
            ) : (
              <Link href="/auth" className="flex items-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-primary-darker font-bold px-7 py-3 rounded-full text-[13px] uppercase tracking-[0.15em] hover:scale-105 transition-all shadow-xl shadow-gold/20">
                <LogIn size={18} />
                <span>Login</span>
              </Link>
            )}

            <Link href="/cart" className="relative group p-3 glass-panel rounded-xl border-white/10 hover:border-gold/50 transition-all duration-500 hover:shadow-glow-gold/10">
              <ShoppingCart size={22} className="text-cream group-hover:text-gold transition-colors" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-primary-darker text-[10px] font-black w-6 h-6 flex items-center justify-center rounded-full shadow-glow-gold animate-bounce">
                  {itemCount}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-3 text-white hover:text-gold transition-colors overflow-hidden relative group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
            <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 rounded-full transition-all"></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-full left-4 right-4 mt-4 md:hidden z-50"
            >
              <div className="glass-panel rounded-[32px] p-8 flex flex-col gap-6 shadow-glow-gold/5 border-gold/30 backdrop-blur-3xl">
                <Link href="/" className="text-2xl font-serif font-bold text-white hover:text-gold transition-all" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link href="/menu" className="text-2xl font-serif font-bold text-white hover:text-gold transition-all" onClick={() => setMobileMenuOpen(false)}>The Menu</Link>
                
                <div className="h-px w-full bg-white/10 my-2"></div>
                
                {user ? (
                  <>
                    <Link href="/orders" className="text-2xl font-serif font-bold text-white hover:text-gold transition-all" onClick={() => setMobileMenuOpen(false)}>Orders</Link>
                    <Link href="/profile" className="flex items-center gap-4 text-2xl font-serif font-bold text-white hover:text-gold transition-all" onClick={() => setMobileMenuOpen(false)}>
                      <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                        <User size={24} className="text-gold" />
                      </div>
                      {user.name}
                    </Link>
                  </>
                ) : (
                  <Link href="/auth" className="flex items-center gap-4 text-gold text-2xl font-serif font-bold" onClick={() => setMobileMenuOpen(false)}>
                    <LogIn size={28} />
                    Enter Sanctuary
                  </Link>
                )}
                
                <Link href="/cart" className="mt-8 bg-gradient-to-r from-gold to-gold-dark text-primary-darker p-5 rounded-2xl font-black text-center shadow-xl shadow-gold/20 flex items-center justify-center gap-4 text-lg" onClick={() => setMobileMenuOpen(false)}>
                  <ShoppingCart size={24} />
                  <span>Your Selection</span>
                  {itemCount > 0 && (
                    <span className="bg-primary-darker text-gold rounded-full px-3 py-1 text-xs">
                      {itemCount}
                    </span>
                  )}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
