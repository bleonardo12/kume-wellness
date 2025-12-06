'use client';

import { Building2, Check } from 'lucide-react';

export default function B2B() {
  const handleContact = () => {
    const phone = '5491166269356';
    const message = encodeURIComponent('Hola Espacio Kume, quiero solicitar información sobre el Acuerdo de Colaboración B2B');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const provisions = [
    'Profesionales certificados: Personal altamente cualificado',
    'Tecnología y equipos: acceso a aparatología de última generación (sin inversión de capital)',
    'Insumos de calidad: productos de primera línea incluidos en el servicio',
    'Protocolos estandarizados: garantía de resultados y seguridad',
  ];

  const servicios = [
    'Limpiezas faciales convencionales',
    'Tratamientos especiales',
    'Protocolos premium',
    'Jornadas de depilación láser (a convenir)',
  ];

  return (
    <section id="b2b" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Building2 className="w-16 h-16 text-slate-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Küme B2B
            </h2>
            <p className="text-2xl font-medium text-primary mb-2">
              Servicios Premium para tu Centro de Estética
            </p>
            <p className="text-xl text-gray-600">
              El equipo y la experiencia de Küme, sin la inversión inicial
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* ¿Qué Provee Küme? */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">¿Qué Provee Küme?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {provisions.map((provision, index) => (
                  <div key={index} className="flex gap-3">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{provision}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Servicios Disponibles */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Servicios Disponibles</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {servicios.map((servicio, index) => (
                  <div key={index} className="bg-primary/5 rounded-lg p-4 flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-gray-800 font-medium">{servicio}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Nota */}
            <div className="bg-slate-50 rounded-xl p-6 mb-8">
              <p className="text-sm text-gray-600 italic text-center">
                La disponibilidad es un acuerdo particular entre Küme y la estética que contrata el servicio
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={handleContact}
              className="w-full bg-slate-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-900 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Solicitar Acuerdo de Colaboración
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
