'use client';

import AuthGuard from '@/components/AuthGuard';
import { useOrders, OrderStatus } from '@/lib/OrderContext';
import { Package, Clock, CheckCircle, Truck, Info, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

function getStatusDetails(status: OrderStatus) {
  switch (status) {
    case 'Pending':
      return { icon: Clock, color: 'text-gold', bg: 'bg-gold/10', label: 'Awaiting Royal Approval', progress: 10 };
    case 'Preparing':
      return { icon: Package, color: 'text-radiant-gold', bg: 'bg-radiant-gold/10', label: 'Crafting Your Masterpiece', progress: 40 };
    case 'Out for Delivery':
      return { icon: Truck, color: 'text-accent-gold', bg: 'bg-accent-gold/10', label: 'Grand Procession', progress: 75 };
    case 'Delivered':
      return { icon: CheckCircle, color: 'text-green-400', bg: 'bg-green-400/10', label: 'Delivered to Your Sanctuary', progress: 100 };
  }
}

export default function OrdersPage() {
  const { orders } = useOrders();

  return (
    <AuthGuard>
      <main className="min-h-screen bg-primary-darker text-cream pt-32 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="animate-fadeIn mb-16">
            <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4 tracking-tight">
              The <span className="gradient-text-gold italic">Grand Ledger</span>
            </h1>
            <p className="text-cream/60 font-light text-lg">Trace the odyssey of your culinary selection.</p>
          </div>

          {orders.length === 0 ? (
            <div className="glass-card rounded-[3rem] p-20 text-center animate-scaleIn border-white/5 max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-gold/20 shadow-glow-gold/5">
                <Package size={40} className="text-gold" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-white mb-4">No Odysseys found</h2>
              <p className="text-cream/50 mb-10 font-light">You haven't initiated any grand feasts yet.</p>
              <Link 
                href="/menu" 
                className="group relative bg-gradient-to-r from-gold to-gold-dark text-primary-darker px-10 py-5 rounded-full font-bold transition-all hover:shadow-gold-glow overflow-hidden inline-flex items-center gap-3"
              >
                <span className="relative z-10">Start Your Journey</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </div>
          ) : (
            <div className="space-y-12">
              {orders.map((order, index) => {
                const statusDetails = getStatusDetails(order.status);
                const StatusIcon = statusDetails.icon;

                return (
                  <div 
                    key={order.id} 
                    className="glass-card rounded-[2.5rem] p-8 md:p-12 border-white/5 animate-slideIn relative overflow-hidden" 
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -mr-32 -mt-32 blur-[100px] pointer-events-none"></div>
                    
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12 relative z-10">
                      <div>
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                          <span className="text-xs font-black bg-white/10 text-gold px-4 py-1.5 rounded-full uppercase tracking-[0.2em] border border-white/10">
                            Odyssey #{order.id}
                          </span>
                          <span className="text-sm text-cream/40 font-medium">
                            Conceived on {new Date(order.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
                          Total Value <span className="gradient-text-gold">{order.total} ₸</span>
                        </h3>
                      </div>
                      
                      <div className={`flex items-center gap-4 px-8 py-4 rounded-2xl border border-white/10 ${statusDetails.bg} ${statusDetails.color} shadow-2xl backdrop-blur-3xl`}>
                        <StatusIcon size={28} className="animate-pulse" />
                        <span className="font-bold text-lg uppercase tracking-widest">{statusDetails.label}</span>
                      </div>
                    </div>

                    {/* Premium Progress Bar */}
                    <div className="mb-12 relative">
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px]">
                        <div 
                          className="h-full bg-gradient-to-r from-gold via-radiant-gold to-accent-gold transition-all duration-1000 ease-in-out shadow-[0_0_20px_rgba(212,175,55,0.5)] rounded-full"
                          style={{ width: `${statusDetails.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-[10px] font-black text-cream/30 mt-4 px-2 uppercase tracking-[0.2em]">
                        <span className={statusDetails.progress >= 10 ? 'text-gold' : ''}>Conception</span>
                        <span className={statusDetails.progress >= 40 ? 'text-gold' : ''}>Crafting</span>
                        <span className={statusDetails.progress >= 75 ? 'text-gold' : ''}>Procession</span>
                        <span className={statusDetails.progress >= 100 ? 'text-gold' : ''}>Arrival</span>
                      </div>
                    </div>

                    <div className="glass-panel rounded-[2rem] p-8 border-white/5 bg-primary-darker/30 shadow-inner">
                      <h4 className="text-xs font-black text-gold/60 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                        <Sparkles size={16} className="text-gold" /> 
                        The Manifest
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center group">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center border border-white/5 shadow-lg group-hover:scale-110 transition-transform">
                                <span className="text-gold font-bold text-xs">{item.quantity}x</span>
                              </div>
                              <span className="font-bold text-white/80 group-hover:text-gold transition-colors">{item.name}</span>
                            </div>
                            <span className="text-cream/40 font-medium">{item.price * item.quantity} ₸</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </AuthGuard>
  );
}
