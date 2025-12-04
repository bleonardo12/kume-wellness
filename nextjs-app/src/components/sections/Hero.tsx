import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-white to-accent/20 pt-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
          Küme Espacio Wellness
          <span className="block text-primary mt-2">Bienestar Integral</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Küme Espacio Wellness nace de la pasión por el bienestar integral y la búsqueda constante de la excelencia.
          Nos renovamos para ofrecerte una experiencia única que fusiona lo mejor de la estética contemporánea con el
          cuidado profundo de tu salud y equilibrio personal. En Küme creemos que la belleza auténtica surge cuando
          cuerpo, mente y espíritu se encuentran en armonía.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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

        {/* Enfoque Integral */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto mb-8 text-left">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Nuestro Enfoque Integral</h2>
          <p className="text-gray-700 mb-4">
            Integramos técnicas no invasivas de última generación, aparatología avanzada y terapias tradicionales de
            probada eficacia para brindarte resultados visibles y duraderos. Cada tratamiento es diseñado de manera
            personalizada, respetando tu individualidad y tus objetivos.
          </p>
          <p className="text-gray-700">
            Ampliamos la mirada de la nueva estética: no solo transformamos, sino que cuidamos y potenciamos tu
            bienestar desde adentro hacia afuera.
          </p>
        </div>

        {/* Experiencia */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">13+</div>
            <div className="text-sm text-gray-600">Años de Experiencia</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-sm text-gray-600">Ubicaciones en CABA</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-gray-600">Profesionales Capacitados</div>
          </div>
        </div>
      </div>
    </section>
  );
}
