import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Service } from '@/types';

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  
  // Actions
  addItem: (service: Service, location: CartItem['location']) => void;
  removeItem: (serviceId: string) => void;
  updateQuantity: (serviceId: string, quantity: number) => void;
  updateItemDetails: (serviceId: string, details: Partial<CartItem>) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  
  // Computed
  getTotal: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (service, location) => {
        const items = get().items;
        const existingItem = items.find(item => item.service.id === service.id);

        if (existingItem) {
          set({
            items: items.map(item =>
              item.service.id === service.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({
            items: [...items, { service, quantity: 1, location }],
          });
        }
      },

      removeItem: (serviceId) => {
        set({
          items: get().items.filter(item => item.service.id !== serviceId),
        });
      },

      updateQuantity: (serviceId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(serviceId);
          return;
        }
        set({
          items: get().items.map(item =>
            item.service.id === serviceId ? { ...item, quantity } : item
          ),
        });
      },

      updateItemDetails: (serviceId, details) => {
        set({
          items: get().items.map(item =>
            item.service.id === serviceId ? { ...item, ...details } : item
          ),
        });
      },

      clearCart: () => set({ items: [] }),
      toggleCart: () => set({ isOpen: !get().isOpen }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      getTotal: () => {
        return get().items.reduce(
          (total, item) => total + item.service.price * item.quantity,
          0
        );
      },

      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: 'kume-cart',
    }
  )
);
