-- Esquema de base de datos para Küme Wellness
-- Ejecutar en Supabase SQL Editor

-- Tabla de órdenes
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  items JSONB NOT NULL,
  subtotal INTEGER NOT NULL,
  surcharge INTEGER DEFAULT 0,
  total INTEGER NOT NULL,
  location TEXT NOT NULL,
  payment_method TEXT NOT NULL,
  payment_id TEXT,
  status TEXT DEFAULT 'pending',
  comments TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para búsquedas frecuentes
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_email ON orders(customer_email);
CREATE INDEX idx_orders_created ON orders(created_at DESC);

-- Trigger para actualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Habilitar Row Level Security (opcional, para producción)
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserciones anónimas (para el checkout público)
CREATE POLICY "Allow anonymous inserts" ON orders
  FOR INSERT WITH CHECK (true);

-- Política para lectura (solo con autenticación, para admin)
CREATE POLICY "Allow authenticated reads" ON orders
  FOR SELECT USING (auth.role() = 'authenticated');

-- Política para updates (solo con autenticación)
CREATE POLICY "Allow authenticated updates" ON orders
  FOR UPDATE USING (auth.role() = 'authenticated');
