'use client';

import { Zap, Check } from 'lucide-react';

export default function DepilacionLaser() {
  const handleContact = () => {
    const phone = '5491166269356';
    const message = encodeURIComponent('Hola Espacio Kume, quiero información sobre las Jornadas de Depilación Láser');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const features = [
    'Tecnología avanzada',
    'Resultados duraderos',
    'Tratamiento personalizado',
  ];

  return (
    <section id="depilacion-laser" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Zap className="w-16 h-16 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Jornadas de Depilación Láser
            </h2>
            <p className="text-xl text-gray-600">
              Jornadas especiales de depilación láser con tecnología de última generación
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 rounded-full p-4 mb-4">
                    <Check className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="font-semibold text-gray-900">{feature}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mb-8 text-center">
              <p className="text-lg font-semibold text-blue-900">
                Jornadas a convenir
              </p>
              <p className="text-gray-600 mt-2">
                Consultá fechas y disponibilidad
              </p>
            </div>

            <button
              onClick={handleContact}
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Consultar Jornadas Disponibles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
