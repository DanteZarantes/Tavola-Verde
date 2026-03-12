'use client';

import { useCart } from '@/lib/CartContext';
import { useAuth } from '@/lib/AuthContext';
import { useOrders } from '@/lib/OrderContext';
import { Minus, Plus, Trash2, ShoppingCart, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart, total } = useCart();
  const { user } = useAuth();
  const { createOrder } = useOrders();
  const router = useRouter();

  const handleCheckout = () => {
    if (!user) {
      alert('Пожалуйста, войдите в систему для оформления заказа');
      return;
    }
    
    createOrder(cart, total);
    clearCart();
    router.push('/orders');
  };

  return (
    <main className="min-h-screen bg-primary-darker text-cream pt-32 pb-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="animate-fadeIn mb-12">
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4 tracking-tight">
            Your <span className="gradient-text-gold italic">Selection</span>
          </h1>
          <p className="text-cream/60 font-light text-lg">Indulge in your ultimate culinary choices.</p>
        </div>

        {cart.length === 0 ? (
          <div className="glass-card rounded-[3rem] p-20 text-center animate-scaleIn border-white/5 max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-gold/20 shadow-glow-gold/5">
              <ShoppingCart size={40} className="text-gold" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Your selection is empty</h2>
            <p className="text-cream/50 mb-10 font-light">Explore our menu to find your next favorite masterpiece.</p>
            <Link 
              href="/menu" 
              className="group relative bg-gradient-to-r from-gold to-gold-dark text-primary-darker px-10 py-5 rounded-full font-bold transition-all hover:shadow-gold-glow overflow-hidden inline-flex items-center gap-3"
            >
              <span className="relative z-10">Discover the Menu</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item, index) => (
                <div 
                  key={item.id} 
                  className="glass-card rounded-[2rem] p-8 flex flex-col md:flex-row items-center gap-8 border-white/5 animate-slideIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center shadow-2xl flex-shrink-0 group relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent"></div>
                     <Star size={32} className="text-gold" />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold font-serif text-white mb-1">{item.name}</h3>
                    <p className="text-gold/60 text-sm uppercase tracking-widest font-bold">{item.category}</p>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-8 w-full md:w-auto">
                    <div className="flex items-center gap-4 bg-primary-darker/50 rounded-2xl p-2 border border-white/5">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-gold hover:bg-gold/10 transition-all border border-transparent hover:border-gold/20"
                      >
                        <Minus size={18} />
                      </button>
                      <span className="font-bold text-lg w-8 text-center text-white">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-gold hover:bg-gold/10 transition-all border border-transparent hover:border-gold/20"
                      >
                        <Plus size={18} />
                      </button>
                    </div>

                    <div className="text-right min-w-[120px]">
                      <span className="font-bold text-2xl text-gold drop-shadow-lg">
                        {item.price * item.quantity} ₸
                      </span>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all border border-transparent hover:border-red-500/20"
                    >
                      <Trash2 size={22} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="glass-card rounded-[2.5rem] p-10 border-gold/20 sticky top-32 shadow-glow-gold/5">
                <h2 className="text-2xl font-serif font-bold text-white mb-8 border-b border-white/5 pb-4">Summary</h2>
                
                <div className="space-y-4 mb-10">
                  <div className="flex justify-between text-cream/60">
                    <span>Subtotal</span>
                    <span>{total} ₸</span>
                  </div>
                  <div className="flex justify-between text-cream/60">
                    <span>Service Fee</span>
                    <span>included</span>
                  </div>
                  <div className="h-px bg-white/10 my-4"></div>
                  <div className="flex justify-between items-center text-3xl font-bold font-serif">
                    <span className="text-white">Total</span>
                    <span className="gradient-text-gold">{total} ₸</span>
                  </div>
                </div>

                {!user && (
                  <div className="glass-panel p-4 rounded-2xl border-red-500/30 mb-6 text-center">
                    <p className="text-red-400 text-sm font-medium">
                      Please <Link href="/auth" className="text-gold underline decoration-gold/30 underline-offset-4 font-bold">Log in</Link> to secure your order.
                    </p>
                  </div>
                )}

                <button
                  onClick={handleCheckout}
                  disabled={!user}
                  className={`w-full py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all duration-500 relative overflow-hidden group ${
                    user
                      ? 'bg-gradient-to-r from-gold to-gold-dark text-primary-darker hover:shadow-gold-glow hover:scale-[1.02]'
                      : 'bg-white/5 text-cream/20 cursor-not-allowed border border-white/5'
                  }`}
                >
                  <span className="relative z-10">Confirm Order</span>
                  {user && <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
