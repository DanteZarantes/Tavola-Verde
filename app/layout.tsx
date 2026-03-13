import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/lib/CartContext'
import { AuthProvider } from '@/lib/AuthContext'
import { OrderProvider } from '@/lib/OrderContext'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Tavola Verde - Ресторан',
  description: 'Добро пожаловать в Tavola Verde',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <AuthProvider>
          <OrderProvider>
            <CartProvider>
              <Header />
              {children}
            </CartProvider>
          </OrderProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
