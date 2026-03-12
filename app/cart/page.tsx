'use client';

import { useCart } from '@/lib/CartContext';
import { useAuth } from '@/lib/AuthContext';
import { Minus, Plus, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart, total } = useCart();
  const { user } = useAuth();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    if (!user) {
      alert('Пожалуйста, войдите в систему для оформления заказа');
      return;
    }
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      setOrderPlaced(false);
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <main className="min-h-screen bg-cream flex items-center justify-center">
        <div className="bg-white p-12 rounded-xl shadow-2xl text-center max-w-md">
          <div className="text-6xl mb-6">✅</div>
          <h2 className="text-3xl font-bold text-primary mb-4">Заказ оформлен!</h2>
          <p className="text-gray-600 mb-6">Спасибо за ваш заказ. Мы свяжемся с вами в ближайшее время.</p>
          <Link href="/menu" className="bg-primary text-gold px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition inline-block">
            Вернуться в меню
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream">
      <div className="bg-primary text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-gold mb-4">Корзина</h1>
          <p className="text-xl text-cream">Проверьте ваш заказ перед оформлением</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {cart.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="text-6xl mb-6">🛒</div>
            <h2 className="text-2xl font-bold text-primary mb-4">Корзина пуста</h2>
            <p className="text-gray-600 mb-6">Добавьте блюда из меню</p>
            <Link href="/menu" className="bg-primary text-gold px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition inline-block">
              Перейти в меню
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-8">
              {cart.map(item => (
                <div key={item.id} className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-1">{item.name}</h3>
                    <p className="text-gray-600">{item.category}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-primary hover:text-gold transition"
                      >
                        <Minus size={20} />
                      </button>
                      <span className="font-bold text-lg w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-primary hover:text-gold transition"
                      >
                        <Plus size={20} />
                      </button>
                    </div>
                    <span className="font-bold text-xl text-gold w-32 text-right">
                      {item.price * item.quantity} ₸
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      <Trash2 size={24} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex justify-between items-center mb-6 text-2xl font-bold">
                <span className="text-primary">Итого:</span>
                <span className="text-gold">{total} ₸</span>
              </div>
              {!user && (
                <p className="text-red-600 mb-4 text-center">
                  Пожалуйста, <Link href="/profile" className="underline">войдите в систему</Link> для оформления заказа
                </p>
              )}
              <button
                onClick={handleCheckout}
                disabled={!user}
                className={`w-full py-4 rounded-lg font-bold text-lg transition ${
                  user
                    ? 'bg-primary text-gold hover:bg-primary/90'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Оформить заказ
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
