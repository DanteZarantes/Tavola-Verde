'use client';

import { useAuth } from '@/lib/AuthContext';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ShieldAlert } from 'lucide-react';
import Link from 'next/link';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Small delay to allow localStorage auth state to initialize
    const timer = setTimeout(() => {
      setIsChecking(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [user]);

  if (isChecking) {
    return (
      <div className="min-h-screen bg-primary-darker flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-primary-darker flex items-center justify-center p-4">
        <div className="glass-card p-12 rounded-[2rem] max-w-md w-full text-center border border-gold/20 shadow-glow-primary animate-scaleIn">
          <ShieldAlert className="w-16 h-16 text-gold mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-serif font-bold text-cream-light mb-4">Требуется вход</h2>
          <p className="text-cream/70 mb-8 font-light leading-relaxed">
            Пожалуйста, войдите в систему или зарегистрируйтесь, чтобы получить доступ к этой странице.
          </p>
          <div className="flex flex-col gap-4">
            <Link 
              href={`/auth?redirect=${pathname}`}
              className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-gold to-gold-dark text-primary-darker shadow-glow-gold hover:scale-105 transition-transform"
            >
              Войти в аккаунт
            </Link>
            <Link 
              href="/"
              className="w-full py-4 rounded-xl font-medium text-cream border border-gold/30 hover:bg-gold/10 transition-colors"
            >
              Вернуться на главную
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return <>{children}</>;
}
