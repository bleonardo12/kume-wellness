// Tipos para servicios y productos
export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  discountPrice?: number;
  category: 'facial' | 'premium' | 'masajes' | 'corporales' | 'especial';
  features: string[];
  duration?: string;
  image?: string;
}

export interface CartItem {
  service: Service;
  quantity: number;
  selectedDate?: string;
  selectedTime?: string;
  location: 'villa-luro' | 'cid-campeador';
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'paid' | 'confirmed' | 'completed' | 'cancelled';
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  paymentMethod: 'mercadopago' | 'transfer' | 'cash';
  paymentId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  orders?: Order[];
}
