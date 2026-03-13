'use client';

import { useState, Suspense } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { User, Mail, Phone, LogOut, Lock, MapPin, Edit } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

function ProfileContent() {
  const { user, login, register, logout, updateProfile } = useAuth();
  const searchParams = useSearchParams();
  const redirectParams = searchParams.get('redirect');
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
  });
  const [editing, setEditing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'login') {
      const success = login(formData.email, formData.password);
      if (!success) {
        alert('Неверный email или пароль');
      } else if (redirectParams) {
        window.location.href = redirectParams;
      }
    } else {
      const success = register(formData);
      if (!success) {
        alert('Пользователь с таким email уже существует');
      } else if (redirectParams) {
        window.location.href = redirectParams;
      }
    }
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ name: formData.name, email: formData.email, phone: formData.phone, address: formData.address });
    setEditing(false);
  };

  if (user && !editing) {
    return (
      <main className="min-h-screen bg-primary-darker text-cream pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="animate-fadeIn mb-12">
            <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4 tracking-tight">
              Мой <span className="gradient-text-gold italic">Профиль</span>
            </h1>
            <p className="text-cream/60 font-light text-lg">Управление вашим аккаунтом</p>
          </div>

          <div className="glass-card rounded-[2.5rem] overflow-hidden border-gold/20 shadow-glow-primary animate-scaleIn">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-primary to-primary/90 p-10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              </div>
              <div className="relative z-10 flex items-center gap-8">
                <div className="w-28 h-28 bg-gold rounded-full flex items-center justify-center shadow-2xl border-4 border-gold/30">
                  <User size={56} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-5xl font-bold mb-3 text-white">{user.name}</h2>
                  <p className="text-cream/90 text-lg">Добро пожаловать в Tavola Verde!</p>
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="p-10">
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="glass-panel p-6 rounded-2xl border-white/5 hover:border-gold/20 transition-all">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <Mail className="text-gold" size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-cream/50 font-medium mb-1 uppercase tracking-wider">Email адрес</p>
                      <p className="font-bold text-white text-lg">{user.email}</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-panel p-6 rounded-2xl border-white/5 hover:border-gold/20 transition-all">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-cream/50 font-medium mb-1 uppercase tracking-wider">Номер телефона</p>
                      <p className="font-bold text-white text-lg">{user.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="glass-panel p-6 rounded-2xl border-white/5 hover:border-gold/20 transition-all md:col-span-2">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <MapPin className="text-gold" size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-cream/50 font-medium mb-1 uppercase tracking-wider">Адрес доставки</p>
                      <p className="font-bold text-white text-lg">{user.address || 'Не указан'}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setFormData({ ...user, password: '' });
                    setEditing(true);
                  }}
                  className="flex-1 bg-gradient-to-r from-gold to-gold-dark text-primary-darker py-5 rounded-2xl font-bold text-lg hover:shadow-glow-gold transition-all transform hover:scale-105 flex items-center justify-center gap-3"
                >
                  <Edit size={22} />
                  Редактировать профиль
                </button>
                <button
                  onClick={logout}
                  className="flex items-center justify-center gap-3 bg-red-500/10 border-2 border-red-500/30 text-red-400 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-red-500/20 hover:border-red-500/50 transition-all transform hover:scale-105"
                >
                  <LogOut size={22} />
                  Выйти
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (editing) {
    return (
      <main className="min-h-screen bg-primary-darker text-cream pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="animate-fadeIn mb-12">
            <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4 tracking-tight">
              <span className="gradient-text-gold italic">Редактировать</span>
            </h1>
            <p className="text-cream/60 font-light text-lg">Обновите информацию профиля</p>
          </div>

          <div className="glass-card rounded-[2.5rem] p-10 border-gold/20 shadow-glow-primary animate-scaleIn">
            <form onSubmit={handleUpdate} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-cream/80 mb-2 ml-1">Имя</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold/60 group-focus-within:text-gold transition-colors" size={20} />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 bg-primary-dark/50 border border-cream/10 rounded-xl text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all"
                    placeholder="Ваше имя"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-cream/80 mb-2 ml-1">Email</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold/60 group-focus-within:text-gold transition-colors" size={20} />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 bg-primary-dark/50 border border-cream/10 rounded-xl text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all"
                    placeholder="email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-cream/80 mb-2 ml-1">Телефон</label>
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold/60 group-focus-within:text-gold transition-colors" size={20} />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 bg-primary-dark/50 border border-cream/10 rounded-xl text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all"
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-cream/80 mb-2 ml-1">Адрес доставки</label>
                <div className="relative group">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold/60 group-focus-within:text-gold transition-colors" size={20} />
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 bg-primary-dark/50 border border-cream/10 rounded-xl text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all"
                    placeholder="г. Алматы, ул. Примерная, д. 1, кв. 1"
                    required
                  />
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-gold to-gold-dark text-primary-darker py-5 rounded-2xl font-bold text-lg hover:shadow-glow-gold transition-all transform hover:scale-105"
                >
                  Сохранить изменения
                </button>
                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  className="flex-1 bg-white/5 border-2 border-white/10 text-cream py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
                >
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-primary-darker text-cream pt-32 pb-20">
      <div className="max-w-lg mx-auto px-4">
        <div className="animate-fadeIn mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4 tracking-tight">
            {mode === 'login' ? 'Вход' : <span className="gradient-text-gold">Регистрация</span>}
          </h1>
          <p className="text-cream/60 font-light text-lg">
            {mode === 'login' ? 'Войдите в свой аккаунт' : 'Создайте новый аккаунт'}
          </p>
        </div>

        <div className="glass-card rounded-[2.5rem] p-10 border-gold/20 shadow-glow-primary animate-scaleIn">
          {/* Toggle Tabs */}
          <div className="flex bg-primary-dark rounded-2xl p-1.5 mb-8">
            <button
              className={`flex-1 py-4 text-sm font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                isLogin ? 'bg-gold text-primary-darker shadow-glow-gold' : 'text-cream/60 hover:text-cream'
              }`}
              onClick={() => setMode('login')}
            >
              Вход
            </button>
            <button
              className={`flex-1 py-4 text-sm font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                !isLogin ? 'bg-gold text-primary-darker shadow-glow-gold' : 'text-cream/60 hover:text-cream'
              }`}
              onClick={() => setMode('register')}
            >
              Регистрация
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {mode === 'register' && (
              <>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold/60 group-focus-within:text-gold transition-colors" size={18} />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 bg-primary-dark/50 border border-cream/10 rounded-xl text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all"
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold/60 group-focus-within:text-gold transition-colors" size={18} />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 bg-primary-dark/50 border border-cream/10 rounded-xl text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all"
                    placeholder="Номер телефона"
                    required
                  />
                </div>
                <div className="relative group">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold/60 group-focus-within:text-gold transition-colors" size={18} />
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 bg-primary-dark/50 border border-cream/10 rounded-xl text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all"
                    placeholder="Адрес доставки"
                    required
                  />
                </div>
              </>
            )}

            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold/60 group-focus-within:text-gold transition-colors" size={18} />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-12 pr-4 py-4 bg-primary-dark/50 border border-cream/10 rounded-xl text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all"
                placeholder="Email адрес"
                required
              />
            </div>

            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold/60 group-focus-within:text-gold transition-colors" size={18} />
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-12 pr-4 py-4 bg-primary-dark/50 border border-cream/10 rounded-xl text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all"
                placeholder="Пароль"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gold to-gold-dark hover:from-gold-light hover:to-gold text-primary-darker font-bold py-5 rounded-2xl transition-all transform hover:scale-105 shadow-glow-gold mt-6"
            >
              {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default function ProfilePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-primary-darker" />}>
      <ProfileContent />
    </Suspense>
  );
}
