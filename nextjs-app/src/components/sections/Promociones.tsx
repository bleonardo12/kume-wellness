'use client';

import { Sparkles, Check } from 'lucide-react';

export default function Promociones() {
  const handleReserve = () => {
    const phone = '5491166269356';
    const message = encodeURIComponent('Hola Espacio Kume, quiero reservar mi Full Day');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const includes = [
    {
      title: 'Limpieza Profunda Facial (Premium)',
      description: 'piel limpia, luminosa y renovada con Fototerapia y Espátula Ultrasónica',
    },
    {
      title: 'Perfilado de Cejas',
      description: 'cejas perfectamente definidas con diseño personalizado para realzar tu mirada',
    },
    {
      title: 'Lifting de Pestañas',
      description: 'pestañas rizadas, levantadas y un efecto máscara duradero (6-8 semanas)',
    },
    {
      title: 'Hydra Lips',
      description: 'labios carnosos, suaves y voluminosos con hidratación profunda con Ácido Hialurónico',
    },
  ];

  const benefits = [
    'Comodidad Total: Todos los tratamientos en un solo día y bajo un protocolo personalizado',
    'Experiencia sensorial: disfruta de un ambiente relajante con música, aromas y bebidas de cortesía',
    'Calidad Garantizada: solo utilizamos productos premium de alta calidad profesional',
    'Resultados Inmediatos: ¡Salí luciendo una transformación total!',
  ];

  const adicionales = [
    { nombre: 'Spa de pies básico', precio: 30000 },
    { nombre: 'Manicure tradicional', precio: 15000 },
    { nombre: 'Manicure Semipermanente', precio: 25000 },
  ];

  return (
    <section id="promociones" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-16 h-16 text-amber-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              SPA FULL DAY
            </h2>
            <p className="text-2xl font-medium text-primary mb-2">
              Transformación Total en 3 Horas
            </p>
            <p className="text-xl text-amber-600 font-semibold">
              ¡Ahorra un 28%! La experiencia más completa de Küme, solo en Villa Luro
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
            {/* ¿Qué Incluye? */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">¿QUÉ INCLUYE?</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {includes.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Beneficios Exclusivos */}
              <div className="bg-primary/5 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">¡Beneficios Exclusivos!</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex gap-3 text-gray-700">
                      <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="text-center mb-8">
                <p className="text-gray-500 line-through text-2xl mb-2">Precio de Lista $100.000</p>
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl p-6 mb-4">
                  <p className="text-sm font-semibold mb-2">OFERTA DE LANZAMIENTO</p>
                  <p className="text-5xl font-bold">$72.000</p>
                  <p className="text-sm mt-2 opacity-90">(Válido hasta el 30/12/2025)</p>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleReserve}
                className="w-full bg-gradient-to-r from-primary to-accent text-white px-8 py-5 rounded-full text-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105"
              >
                ¡Reservar mi Full Day ahora!
              </button>
            </div>

            {/* Adicionales */}
            <div className="bg-gray-50 p-8 md:p-12 border-t">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Adicionales</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {adicionales.map((adicional, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <p className="text-sm text-gray-700 mb-2">{adicional.nombre}</p>
                    <p className="text-lg font-bold text-primary">
                      ${adicional.precio.toLocaleString('es-AR')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
