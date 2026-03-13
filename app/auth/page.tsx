'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Mail, Lock, User, Phone, LogIn, UserPlus } from 'lucide-react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const { login, register } = useAuth();
  const router = useRouter();
  
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      const success = login(formData.email, formData.password);
      if (success) {
        router.push('/');
      } else {
        setError('Неверный email или пароль');
      }
    } else {
      if (!formData.name || !formData.email || !formData.phone || !formData.password) {
        setError('Пожалуйста, заполните все поля');
        return;
      }
      const success = register(formData);
      if (success) {
        router.push('/');
      } else {
        setError('Пользователь с таким email уже существует');
      }
    }
  };

  return (
    <main className="min-h-screen bg-primary-darker flex flex-col justify-center items-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="w-full max-w-md relative z-10 animate-fadeIn">
        <Link href="/" className="inline-flex items-center gap-2 text-cream hover:text-gold transition-colors mb-8 group">
          <ArrowLeft size={20} className="transform group-hover:-translate-x-1 transition-transform" />
          <span>Вернуться на главную</span>
        </Link>
        
        <div className="glass-card rounded-[2rem] p-8 md:p-10 shadow-glow-primary border border-gold/10">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold font-serif gradient-text-gold mb-2">
              Tavola Verde
            </h1>
            <p className="text-cream/70 text-sm tracking-widest uppercase">
              {isLogin ? 'Добро пожаловать' : 'Создать аккаунт'}
            </p>
          </div>

          {/* Toggle Tabs */}
          <div className="flex bg-primary-dark rounded-xl p-1 mb-8">
            <button
              className={`flex-1 py-3 text-sm font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                isLogin ? 'bg-gold text-primary-darker shadow-glow-gold' : 'text-cream/60 hover:text-cream'
              }`}
              onClick={() => setIsLogin(true)}
            >
              <LogIn size={16} />
              Вход
            </button>
            <button
              className={`flex-1 py-3 text-sm font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                !isLogin ? 'bg-gold text-primary-darker shadow-glow-gold' : 'text-cream/60 hover:text-cream'
              }`}
              onClick={() => setIsLogin(false)}
            >
              <UserPlus size={16} />
              Регистрация
            </button>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-xl mb-6 text-sm flex items-center gap-2 animate-scaleIn">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gold/60 group-focus-within:text-gold transition-colors">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-primary-dark/50 border border-cream/10 text-cream rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all placeholder:text-cream/30"
                  />
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gold/60 group-focus-within:text-gold transition-colors">
                    <Phone size={18} />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Номер телефона"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-primary-dark/50 border border-cream/10 text-cream rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all placeholder:text-cream/30"
                  />
                </div>
              </>
            )}

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gold/60 group-focus-within:text-gold transition-colors">
                <Mail size={18} />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email адрес"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-primary-dark/50 border border-cream/10 text-cream rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all placeholder:text-cream/30"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gold/60 group-focus-within:text-gold transition-colors">
                <Lock size={18} />
              </div>
              <input
                type="password"
                name="password"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-primary-dark/50 border border-cream/10 text-cream rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all placeholder:text-cream/30"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-primary-darker font-bold py-4 rounded-xl transition-all transform hover:-translate-y-1 shadow-glow-gold hover:shadow-lg mt-6 flex justify-center items-center gap-2"
            >
              {isLogin ? (
                <>Войти <ArrowLeft size={18} className="rotate-180" /></>
              ) : (
                'Зарегистрироваться'
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
