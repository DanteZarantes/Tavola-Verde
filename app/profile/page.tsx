'use client';

import { useState, Suspense } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { User, Mail, Phone, LogOut, Lock } from 'lucide-react';
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
    updateProfile({ name: formData.name, email: formData.email, phone: formData.phone });
    setEditing(false);
  };

  if (user && !editing) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-cream via-white to-cream">
        <div className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 30% 50%, rgba(212, 175, 55, 0.4) 0%, transparent 50%)`
            }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <h1 className="text-6xl md:text-7xl font-bold text-gold mb-4 animate-fadeIn">Мой профиль</h1>
            <p className="text-xl md:text-2xl text-cream/90 animate-slideIn">Управление вашим аккаунтом</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 animate-scaleIn">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-primary to-primary/90 p-8 text-white">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center shadow-xl">
                  <User size={48} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold mb-2">{user.name}</h2>
                  <p className="text-cream/90 text-lg">Добро пожаловать в Tavola Verde!</p>
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="p-8">
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-cream to-cream/50 rounded-xl border border-gray-200">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Mail className="text-gold" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 font-medium mb-1">Email адрес</p>
                    <p className="font-semibold text-primary text-lg">{user.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-cream to-cream/50 rounded-xl border border-gray-200">
                  <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 font-medium mb-1">Номер телефона</p>
                    <p className="font-semibold text-primary text-lg">{user.phone}</p>
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
                  className="flex-1 bg-gradient-to-r from-primary to-primary/90 text-gold py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all transform hover:scale-105"
                >
                  Редактировать профиль
                </button>
                <button
                  onClick={logout}
                  className="flex items-center justify-center gap-2 bg-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-600 transition-all transform hover:scale-105 shadow-lg"
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
      <main className="min-h-screen bg-gradient-to-b from-cream via-white to-cream">
        <div className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 30% 50%, rgba(212, 175, 55, 0.4) 0%, transparent 50%)`
            }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <h1 className="text-6xl md:text-7xl font-bold text-gold mb-4 animate-fadeIn">Редактировать</h1>
            <p className="text-xl md:text-2xl text-cream/90 animate-slideIn">Обновите информацию профиля</p>
          </div>
        </div>

        <div className="max-w-lg mx-auto px-4 py-12">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 animate-scaleIn">
            <form onSubmit={handleUpdate} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-primary mb-2 ml-1">Имя</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Ваше имя"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-primary mb-2 ml-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-primary mb-2 ml-1">Телефон</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-primary to-primary/90 text-gold py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all transform hover:scale-105"
                >
                  Сохранить
                </button>
                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl font-bold text-lg hover:bg-gray-300 transition-all"
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
    <main className="min-h-screen bg-gradient-to-b from-cream via-white to-cream">
      <div className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(212, 175, 55, 0.4) 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-gold mb-4 animate-fadeIn">
            {mode === 'login' ? 'Вход' : 'Регистрация'}
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 animate-slideIn">
            {mode === 'login' ? 'Войдите в свой аккаунт' : 'Создайте новый аккаунт'}
          </p>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 animate-scaleIn">
          <form onSubmit={handleSubmit} className="space-y-6">
            {mode === 'register' && (
              <div>
                <label className="block text-sm font-bold text-primary mb-2 ml-1">Имя</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Ваше имя"
                    required
                  />
                </div>
              </div>
            )}
            
            <div>
              <label className="block text-sm font-bold text-primary mb-2 ml-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="email@example.com"
                  required
                />
              </div>
            </div>
            
            {mode === 'register' && (
              <div>
                <label className="block text-sm font-bold text-primary mb-2 ml-1">Телефон</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
              </div>
            )}
            
            <div>
              <label className="block text-sm font-bold text-primary mb-2 ml-1">Пароль</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-primary/90 text-gold py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all transform hover:scale-105"
            >
              {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <button
              onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
              className="text-primary hover:text-gold transition font-semibold text-lg"
            >
              {mode === 'login' ? 'Нет аккаунта? Зарегистрируйтесь' : 'Уже есть аккаунт? Войдите'}
            </button>
          </div>
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
