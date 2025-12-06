'use client';

import { Heart, Baby } from 'lucide-react';

export default function MamaArmonia() {
  const handleReserve = () => {
    const phone = '5491166269356';
    const message = encodeURIComponent('Hola Espacio Kume, quiero reservar mi Programa Mamá en Armonía');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const trimestres = [
    {
      nombre: 'Primer Trimestre',
      subtitulo: 'Adaptación y Equilibrio',
      enfoque: 'Enfocado en la calma y el manejo de los cambios iniciales',
      protocolo: [
        'Masajes suaves de relajación',
        'Flores de Bach (náuseas y ansiedad)',
        'Tratamientos faciales suaves',
        'Hidratación profunda y control hormonal',
      ],
    },
    {
      nombre: 'Segundo Trimestre',
      subtitulo: 'Vitalidad y Prevención',
      enfoque: 'Enfocado en la energía y la salud de la piel (prevención de estrías y manchas)',
      protocolo: [
        'Masajes prenatales terapéuticos',
        'Mejora de la circulación',
        'Prevención de estrías y control de manchas (melasma)',
        'Tratamientos corporales hidratantes',
      ],
    },
    {
      nombre: 'Tercer Trimestre',
      subtitulo: 'Confort y Preparación',
      enfoque: 'Enfocado en el alivio del cuerpo y la preparación mental para el parto',
      protocolo: [
        'Masajes de confort prenatal (alivio lumbar)',
        'Preparación emocional para el parto',
        'Preparación de la piel para el postparto',
      ],
    },
  ];

  return (
    <section id="mama-armonia" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center gap-4 mb-6">
              <Heart className="w-16 h-16 text-pink-500" />
              <Baby className="w-16 h-16 text-purple-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Programa Integral Mamá en Armonía
            </h2>
            <p className="text-2xl font-medium text-primary mb-2">
              Bienestar 100% Seguro para ti y tu Bebé
            </p>
            <p className="text-xl text-gray-600">
              La única propuesta que combina bienestar físico, emocional y cuidado de la piel durante cada etapa de tu embarazo
            </p>
          </div>

          {/* Intro */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8">
            <p className="text-lg text-gray-700 text-center">
              Küme Wellness acompaña tu camino hacia la maternidad con profesionalismo, calidez y
              tratamientos 100% seguros para ti y tu bebé.
            </p>
          </div>

          {/* Trimestres */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {trimestres.map((trimestre, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-center mb-4">
                  <div className="inline-block bg-primary/10 rounded-full px-4 py-1 mb-3">
                    <span className="text-primary font-bold">{index + 1}º Trimestre</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{trimestre.nombre}</h3>
                  <p className="text-primary font-semibold mb-2">{trimestre.subtitulo}</p>
                  <p className="text-sm text-gray-600 italic mb-4">{trimestre.enfoque}</p>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Protocolo:</p>
                  <ul className="space-y-2">
                    {trimestre.protocolo.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex gap-2">
                        <span className="text-pink-500">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Opciones de Paquetes</h3>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="border-2 border-gray-200 rounded-xl p-6 text-center">
                <p className="text-sm text-gray-600 mb-2">Sesión Simple</p>
                <p className="text-lg font-semibold text-gray-900 mb-1">Masaje + Facial</p>
                <p className="text-3xl font-bold text-primary">$120.000</p>
                <p className="text-xs text-gray-500 mt-2">Duración: 2 horas</p>
              </div>

              <div className="border-2 border-primary rounded-xl p-6 text-center bg-primary/5">
                <div className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                  Ahorra 20%
                </div>
                <p className="text-sm text-gray-600 mb-2">Paquete Trimestral</p>
                <p className="text-lg font-semibold text-gray-900 mb-1">3 meses</p>
                <p className="text-3xl font-bold text-primary">$288.000</p>
                <p className="text-xs text-gray-500 mt-2">Efectivo o Transferencia</p>
              </div>

              <div className="border-2 border-accent rounded-xl p-6 text-center bg-accent/5">
                <div className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                  Ahorra 30%
                </div>
                <p className="text-sm text-gray-600 mb-2">Programa Completo</p>
                <p className="text-lg font-semibold text-gray-900 mb-1">9 meses - 9 sesiones</p>
                <p className="text-3xl font-bold text-accent">$756.000</p>
                <p className="text-xs text-gray-500 mt-2">Efectivo o Transferencia</p>
              </div>
            </div>

            <button
              onClick={handleReserve}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-5 rounded-full text-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Reservar Mi Programa Mamá en Armonía
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
