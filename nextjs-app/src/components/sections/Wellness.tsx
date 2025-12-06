'use client';

import { Flower2 } from 'lucide-react';

export default function Wellness() {
  const handleReserve = () => {
    const phone = '5491166269356';
    const message = encodeURIComponent('Hola Espacio Kume, quisiera reservar mi Consulta de Equilibrio Emocional');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section id="wellness" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex justify-center mb-6">
            <Flower2 className="w-16 h-16 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Terapia Floral de Bach
          </h2>
          <p className="text-xl text-primary font-medium mb-2">
            Equilibrio Emocional
          </p>
          <p className="text-2xl font-serif text-gray-800 mb-8">
            La Raíz del Bienestar: Transformando el Equilibrio Emocional en Salud Física
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            La Terapia Floral de Bach es un sistema natural y suave de 38 esencias que actúa
            directamente sobre tus estados emocionales. En Kume, entendemos que la salud física
            y la belleza son un reflejo de tu paz interior. Esta terapia corrige el desequilibrio
            emocional, la causa fundamental de cualquier malestar, permitiendo que tu cuerpo y tu
            piel se recuperen.
          </p>

          <div className="border-t border-gray-200 pt-6 mb-6">
            <p className="text-sm text-gray-600 italic mb-4">
              *Terapeuta especialista en Flores de Bach: Marcela Castañeda
            </p>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
              <div>
                <p className="text-3xl font-bold text-gray-900">
                  $60.000
                  <span className="text-lg text-gray-600 font-normal"> por sesión</span>
                </p>
              </div>
              <div className="bg-accent/10 border-2 border-accent rounded-lg px-6 py-3">
                <p className="text-sm font-semibold text-accent mb-1">¡Destacado! Promoción Martes VIP</p>
                <p className="text-2xl font-bold text-accent">$48.000</p>
              </div>
            </div>
          </div>

          <button
            onClick={handleReserve}
            className="w-full bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Reservar mi Consulta de Equilibrio Emocional
          </button>
        </div>
      </div>
    </section>
  );
}
