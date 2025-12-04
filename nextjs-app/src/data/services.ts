import { Service } from '@/types';

export const services: Service[] = [
  // COSMETOLOGÍA ESENCIAL
  {
    id: 'limpieza-facial-esencial',
    name: 'Limpieza Facial Esencial',
    slug: 'limpieza-facial-esencial',
    description: 'Limpieza profunda para extraer impurezas y desinfectar la piel con productos de primera línea. Protocolo: limpieza y preparación de la piel, exfoliación profunda, extracción de impurezas, máscaras personalizadas, masaje final y colocación de protector solar.',
    shortDescription: 'Limpieza profunda profesional',
    price: 42000,
    discountPrice: 35000,
    category: 'facial',
    features: ['Limpieza profunda', 'Exfoliación', 'Extracción de impurezas', 'Máscaras personalizadas'],
    duration: '50 min'
  },
  {
    id: 'hilos-colageno',
    name: 'Hilos de Colágeno',
    slug: 'hilos-colageno',
    description: 'Reafirmación, efecto lifting y estimulación de colágeno natural. Con el compromiso de un tratamiento de 6 semanas se pueden observar resultados de 12 a 18 meses. Protocolo: análisis y preparación de la piel, limpieza facial esencial con mascarilla descongestiva, aplicación de hilos de colágeno, masaje final y aplicación de protector solar.',
    shortDescription: 'Efecto lifting sin cirugía',
    price: 58000,
    category: 'facial',
    features: ['Reafirmación', 'Efecto lifting', 'Resultados 12-18 meses', 'Promo Martes: 20% off en pack 4 sesiones'],
    duration: '50 min'
  },

  // COSMETOLOGÍA PREMIUM
  {
    id: 'sesion-holly',
    name: 'Sesión Holly - Amor Propio',
    slug: 'sesion-holly',
    description: 'Tratamiento de Hidratación 4D y Luminosidad para pieles deshidratadas y cansadas. Recuperar el brillo de tu rostro es un acto de amor. Logras: piel radiante y luminosa, hidratación 4D que recupera instantáneamente el brillo y tersura, eliminando el aspecto cansado. Protocolo: análisis y preparación, limpieza facial con extracciones, mascarilla Hyaluronic 4D, fototerapia, masaje final y protector solar.',
    shortDescription: 'Hidratación 4D y luminosidad',
    price: 55000,
    discountPrice: 45000,
    category: 'premium',
    features: ['Hidratación 4D', 'Fototerapia', 'Flores de Bach', 'Piel radiante'],
    duration: '50 min'
  },
  {
    id: 'sesion-crabapple',
    name: 'Sesión Crabapple - Anti-Acné',
    slug: 'sesion-crabapple',
    description: 'Tratamiento Purificante Anti-Acné y Rosácea. Para pieles que necesitan eliminar toxinas. Logras: extraer impurezas, desinfectar y volver a una piel natural con resultados duraderos, sin traumas cutáneos. Protocolo: análisis, limpieza profunda, extracciones, principios activos, mascarilla purificante, fototerapia, masaje final y protector solar.',
    shortDescription: 'Purificante anti-acné y rosácea',
    price: 60000,
    discountPrice: 52000,
    category: 'premium',
    features: ['Purificación profunda', 'Fototerapia', 'Resultados duraderos', 'Sin traumas cutáneos'],
    duration: '50 min'
  },
  {
    id: 'sesion-olive',
    name: 'Sesión Olive - Rejuvenecimiento +50',
    slug: 'sesion-olive',
    description: 'Rejuvenecimiento con Dermapen y Activos Antiedad para pieles cansadas +50. Incluye Dermapen profesional (NO peeling químico). Logras: impulsar generación natural de colágeno y elastina, disminuir arrugas y cicatrices, hidratación profunda. Tratamiento de al menos 4 sesiones, una vez por semana. Protocolo: análisis, limpieza y exfoliación, dermapen, mascarilla descongestiva, masaje final y protector solar.',
    shortDescription: 'Dermapen + antiedad',
    price: 65000,
    discountPrice: 55000,
    category: 'premium',
    features: ['Dermapen', 'Colágeno y elastina', 'Hidratación profunda', 'Mínimo 4 sesiones'],
    duration: '50 min'
  },
  {
    id: 'star-of-bethlehem',
    name: 'Star Of Bethlehem - Renovación Post-Trauma',
    slug: 'star-of-bethlehem',
    description: 'Renovación Celular Facial post-trauma. Para pieles que necesitan recuperarse de trauma, enfermedad o pérdida. Logras: piel reluciente, fresca y rejuvenecida. El dermaplaning elimina células muertas y vello facial. Tratamiento de al menos 3 sesiones semanales. Protocolo: análisis, limpieza y exfoliación, dermaplaning, máscara purificante, Hyaluron 4D, activación con luz, masaje facial.',
    shortDescription: 'Renovación celular + dermaplaning',
    price: 49000,
    discountPrice: 39000,
    category: 'premium',
    features: ['Dermaplaning', 'Post-trauma', 'Hyaluron 4D', 'Mínimo 3 sesiones'],
    duration: '50 min'
  },
  {
    id: 'rescue-remedy',
    name: 'Rescue Remedy - Peeling de Algas Vegano',
    slug: 'rescue-remedy',
    description: 'Peeling de Algas Vegano para pieles sensibles y en crisis. Apto para todo tipo de piel, embarazadas y lactancia. Con agua de rosas y betaína. Propiedades antisépticas y nutritivas, perfecto para acné. Logras: regeneración de 3-7 días, piel más sana, poros pequeños, luminosidad y reducción de manchas. Tratamiento de al menos 6 sesiones semanales. Protocolo: análisis, limpieza facial, exfoliación, máscara de algas veganas, máscara purificante, fototerapia, masaje facial.',
    shortDescription: 'Peeling vegano pieles sensibles',
    price: 53000,
    discountPrice: 48000,
    category: 'premium',
    features: ['Vegano', 'Apto embarazadas', 'Regeneración 3-7 días', 'Mínimo 6 sesiones'],
    duration: '50 min'
  },
  {
    id: 'sesion-larch',
    name: 'Sesión Larch - Antiage Alto Rendimiento',
    slug: 'sesion-larch',
    description: 'Terapia Antiage de Alto Rendimiento con Exosomas. Anticípate al tiempo con resultados óptimos. Logras: resultado óptimo y brillo inmediato desde la primera sesión. Regeneración profunda con exosomas vegetales + Dermapen. Tratamiento de al menos 4 sesiones semanales. Protocolo: análisis, limpieza y exfoliación, exosomas origen vegetal, dermapen, mascarilla descongestiva, masaje final y protector solar.',
    shortDescription: 'Exosomas + Dermapen',
    price: 65000,
    discountPrice: 55000,
    category: 'premium',
    features: ['Exosomas vegetales', 'Dermapen', 'Resultados inmediatos', 'Mínimo 4 sesiones'],
    duration: '50 min'
  },

  // MASAJES
  {
    id: 'masaje-holistico',
    name: 'Masaje Holístico',
    slug: 'masaje-holistico',
    description: 'Terapia a base de cremas neutras con Flores de Bach. Armonía para el cuerpo físico a través de masajes y equilibrio energético. Combina masajes relajantes, descontracturantes y armonización energética. Integra técnicas conocidas y fundamentadas para un completo alivio del cuerpo físico y emocional. Flores de Bach: Rescue Remedy.',
    shortDescription: 'Relajación + equilibrio energético',
    price: 65000,
    discountPrice: 52900,
    category: 'masajes',
    features: ['Relajante + descontracturante', 'Armonización energética', 'Flores de Bach: Rescue Remedy'],
    duration: '60 min'
  },
  {
    id: 'masaje-descontracturante',
    name: 'Masaje Descontracturante',
    slug: 'masaje-descontracturante',
    description: 'Técnicas y maniobras de terapia manual con presión profunda usando manos, codos y antebrazos. Alivia tensiones musculares, disuelve nudos y contracturas causadas por estrés, esfuerzo físico o malas posturas. Restaura la función muscular óptima. A diferencia de un masaje relajante, su objetivo principal es disolver contracturas y puntos gatillo.',
    shortDescription: 'Presión profunda para contracturas',
    price: 55000,
    discountPrice: 44000,
    category: 'masajes',
    features: ['Presión profunda', 'Disuelve contracturas', 'Restaura función muscular'],
    duration: '50 min'
  },

  // CORPORALES
  {
    id: 'estrias-exosomas',
    name: 'Regeneración de Estrías con Exosomas',
    slug: 'estrias-exosomas',
    description: 'Regeneración Avanzada de Estrías con Exosomas. Resultados sin cirugía, apto para estrías rojas y blancas. Los exosomas vegetales actúan a nivel celular para regenerar el tejido dañado. Reduce significativamente la apariencia, profundidad y coloración. Aumenta colágeno y elastina natural. Protocolo abdomen: preparación, exfoliación corporal, peeling de algas o barro termal, exosomas con dermapen, hidratación y gel descongestivo.',
    shortDescription: 'Estrías rojas y blancas',
    price: 25000,
    category: 'corporales',
    features: ['Sin cirugía', 'Exosomas vegetales', 'Pack 10: -10%', 'Pack 20: -20%'],
    duration: '50 min'
  },
  {
    id: 'podoestetica-esencial',
    name: 'Podoestética Esencial',
    slug: 'podoestetica-esencial',
    description: 'Cuidado esencial de tus pies. Podoestética es la rama especializada en el cuidado, embellecimiento y mantenimiento saludable de los pies. Protocolo: evaluación inicial, limpieza profunda y exfoliación, corte y limado de uñas, tratamiento de cutículas, eliminación de durezas y callosidades, hidratación intensiva con mascarilla.',
    shortDescription: 'Cuidado y embellecimiento de pies',
    price: 38000,
    discountPrice: 28000,
    category: 'corporales',
    features: ['Limpieza profunda', 'Eliminación de durezas', 'Hidratación intensiva'],
    duration: '45 min'
  },
  {
    id: 'podoestetica-premium',
    name: 'Podoestética Premium',
    slug: 'podoestetica-premium',
    description: 'Confort y belleza premium para tus pies. Logras: peeling químico profesional que elimina callosidades y piel muerta revelando piel nueva y suave. Tratamiento intensivo con Ácido Hialurónico para hidratar y reparar talones agrietados. Alivio de presión y molestias. Protocolo: evaluación, peeling químico, eliminación de callos y cutículas, masaje con Ácido Hialurónico y activos nutritivos, cremas protectoras y consejos de cuidado.',
    shortDescription: 'Peeling + Ácido Hialurónico',
    price: 58000,
    discountPrice: 48000,
    category: 'corporales',
    features: ['Peeling químico', 'Ácido Hialurónico', 'Pies suaves y renovados'],
    duration: '60 min'
  },

  // PROGRAMAS ESPECIALES
  {
    id: 'mama-armonia',
    name: 'Programa Mamá en Armonía',
    slug: 'mama-armonia',
    description: 'Programa Integral 100% Seguro para ti y tu Bebé. Única propuesta que combina bienestar físico, emocional y cuidado de piel durante cada etapa del embarazo. Incluye: Primer Trimestre (adaptación y equilibrio), Segundo Trimestre (vitalidad y prevención), Tercer Trimestre (confort y preparación).',
    shortDescription: 'Bienestar integral prenatal',
    price: 120000,
    category: 'especial',
    features: ['Masajes prenatales', 'Prevención de estrías', 'Flores de Bach', '3 trimestres personalizados'],
    duration: '120 min'
  },
  {
    id: 'spa-full-day',
    name: 'SPA Full Day',
    slug: 'spa-full-day',
    description: 'Transformación Total en 3 Horas. ¡Ahorra un 28%! La experiencia más completa de Kume. Incluye: Limpieza Profunda Facial Premium con fototerapia, Perfilado de Cejas con diseño personalizado, Lifting de Pestañas (efecto 6-8 semanas), Hydra Lips con Ácido Hialurónico. Ambiente relajante con música, aromas y bebidas de cortesía. Solo en Villa Luro.',
    shortDescription: 'Experiencia completa 3 horas',
    price: 72000,
    category: 'especial',
    features: ['Facial Premium + Fototerapia', 'Perfilado de cejas', 'Lifting pestañas', 'Hydra Lips'],
    duration: '180 min'
  },
  {
    id: 'flores-de-bach',
    name: 'Terapia Floral de Bach',
    slug: 'flores-de-bach',
    description: 'Equilibrio Emocional - La Raíz del Bienestar. Sistema natural de 38 esencias que actúa sobre estados emocionales. Corrige el desequilibrio emocional, causa fundamental de cualquier malestar, permitiendo que cuerpo y piel se recuperen. Terapeuta especialista: Marcela Castañeda.',
    shortDescription: 'Equilibrio emocional personalizado',
    price: 60000,
    discountPrice: 48000,
    category: 'especial',
    features: ['38 esencias florales', 'Diagnóstico personalizado', 'Terapeuta especialista'],
    duration: '45 min'
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getServicesByCategory = (category: Service['category']): Service[] => {
  return services.filter(service => service.category === category);
};
