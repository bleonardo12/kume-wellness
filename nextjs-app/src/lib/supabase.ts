import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for database tables
export type OrderStatus = 'pending' | 'paid' | 'confirmed' | 'completed' | 'cancelled';

export interface DbOrder {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  items: any; // JSON
  total: number;
  status: OrderStatus;
  payment_method: string;
  payment_id?: string;
  location: string;
  created_at: string;
  updated_at: string;
}
