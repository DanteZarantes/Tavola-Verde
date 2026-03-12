'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type OrderStatus = 'Pending' | 'Preparing' | 'Out for Delivery' | 'Delivered';

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  createdAt: string;
}

interface OrderContextType {
  orders: Order[];
  createOrder: (items: OrderItem[], total: number) => string;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);

  // Load initial orders
  useEffect(() => {
    const stored = localStorage.getItem('orders');
    if (stored) setOrders(JSON.parse(stored));
  }, []);

  // Sync orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  // Simulate order status changes over time
  useEffect(() => {
    const interval = setInterval(() => {
      setOrders(currentOrders => {
        let changed = false;
        const newOrders = currentOrders.map(order => {
          if (order.status === 'Delivered') return order;
          
          const now = Date.now();
          const orderTime = new Date(order.createdAt).getTime();
          const elapsedMinutes = (now - orderTime) / 1000 / 60; // Convert MS to minutes for local test, let's pretend 1 min real = 1 phase
          
          let newStatus: OrderStatus = order.status;
          if (elapsedMinutes > 3) newStatus = 'Delivered';
          else if (elapsedMinutes > 2) newStatus = 'Out for Delivery';
          else if (elapsedMinutes > 0.5) newStatus = 'Preparing';

          if (newStatus !== order.status) changed = true;
          
          return { ...order, status: newStatus };
        });

        return changed ? newOrders : currentOrders;
      });
    }, 10000); // Check every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const createOrder = (items: OrderItem[], total: number) => {
    const newOrder: Order = {
      id: Math.random().toString(36).substring(2, 9),
      items,
      total,
      status: 'Pending',
      createdAt: new Date().toISOString()
    };
    
    setOrders(prev => [newOrder, ...prev]);
    return newOrder.id;
  };

  return (
    <OrderContext.Provider value={{ orders, createOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) throw new Error('useOrders must be used within OrderProvider');
  return context;
};
