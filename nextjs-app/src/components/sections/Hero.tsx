import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-white to-accent/20 pt-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
          Bienestar Integral
          <span className="block text-primary mt-2">con Flores de Bach</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Tratamientos faciales profesionales y terapias holísticas para tu cuerpo,
          mente y espíritu. Descubrí el equilibrio que necesitás.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#servicios"
            className="bg-primary text-white px-8 py-3 rounded-full text-lg hover:bg-primary/90 transition-colors"
          >
            Ver Servicios
          </Link>
          <Link
            href="#reservas"
            className="border-2 border-primary text-primary px-8 py-3 rounded-full text-lg hover:bg-primary hover:text-white transition-colors"
          >
            Reservar Turno
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { number: '500+', label: 'Clientes Felices' },
            { number: '16', label: 'Tratamientos' },
            { number: '2', label: 'Ubicaciones' },
            { number: '5+', label: 'Años de Experiencia' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-primary">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
