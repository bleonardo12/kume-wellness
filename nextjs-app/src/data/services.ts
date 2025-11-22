import { Service } from '@/types';

export const services: Service[] = [
  // Sesiones Premium
  {
    id: 'sesion-holly',
    name: 'Sesión Holly',
    slug: 'sesion-holly',
    description: 'Tratamiento de amor propio para pieles deshidratadas y cansadas.',
    shortDescription: 'Amor Propio - Piel deshidratada',
    price: 55000,
    discountPrice: 45000,
    category: 'premium',
    features: ['Limpieza profunda', 'Hidratación intensiva', 'Masaje facial', 'Flores de Bach'],
    duration: '60 min'
  },
  {
    id: 'sesion-crabapple',
    name: 'Sesión Crabapple',
    slug: 'sesion-crabapple',
    description: 'Tratamiento anti-acné para pieles con impurezas, manchas o rosácea.',
    shortDescription: 'Anti-acné - Manchas y rosácea',
    price: 60000,
    discountPrice: 52000,
    category: 'premium',
    features: ['Purificación profunda', 'Control de sebo', 'Tratamiento de manchas'],
    duration: '60 min'
  },
  {
    id: 'sesion-olive',
    name: 'Sesión Olive',
    slug: 'sesion-olive',
    description: 'Dermapen +50 para pieles maduras, cansadas y apagadas.',
    shortDescription: 'Dermapen +50 - Piel madura',
    price: 65000,
    discountPrice: 55000,
    category: 'premium',
    features: ['Dermapen', 'Estimulación de colágeno', 'Rejuvenecimiento'],
    duration: '75 min'
  },
  {
    id: 'star-of-bethlehem',
    name: 'Renovación Celular',
    slug: 'star-of-bethlehem',
    description: 'Renovación celular con dermaplaning para piel luminosa.',
    shortDescription: 'Renovación celular + Dermaplaning',
    price: 49000,
    discountPrice: 39000,
    category: 'premium',
    features: ['Dermaplaning', 'Renovación celular', 'Luminosidad'],
    duration: '60 min'
  },
  {
    id: 'rescue-remedy',
    name: 'Peeling de Algas Vegano',
    slug: 'rescue-remedy',
    description: 'Peeling natural con algas veganas para renovar la piel.',
    shortDescription: 'Peeling vegano de algas',
    price: 53000,
    discountPrice: 48000,
    category: 'premium',
    features: ['Peeling natural', 'Algas veganas', 'Nutrición profunda'],
    duration: '60 min'
  },
  {
    id: 'sesion-larch',
    name: 'Anti Age Wellness - Larch',
    slug: 'sesion-larch',
    description: 'Tratamiento anti-edad con Dermapen y exosomas.',
    shortDescription: 'Dermapen + Exosomas',
    price: 65000,
    discountPrice: 55000,
    category: 'premium',
    features: ['Dermapen', 'Exosomas', 'Regeneración celular'],
    duration: '75 min'
  },
  // Masajes
  {
    id: 'masaje-holistico',
    name: 'Masajes Holísticos',
    slug: 'masaje-holistico',
    description: 'Masaje de 60 minutos con aceites esenciales y Flores de Bach.',
    shortDescription: 'Relajación con Flores de Bach',
    price: 65000,
    discountPrice: 52900,
    category: 'masajes',
    features: ['60 minutos', 'Aceites esenciales', 'Flores de Bach'],
    duration: '60 min'
  },
  {
    id: 'masaje-descontracturante',
    name: 'Masajes Descontracturantes',
    slug: 'masaje-descontracturante',
    description: 'Masaje profundo para aliviar tensiones musculares.',
    shortDescription: 'Alivio de tensiones',
    price: 55000,
    discountPrice: 44000,
    category: 'masajes',
    features: ['Tejido profundo', 'Alivio de contracturas'],
    duration: '60 min'
  },
  {
    id: 'flores-de-bach',
    name: 'Flores de Bach',
    slug: 'flores-de-bach',
    description: 'Evaluación emocional con preparación personalizada.',
    shortDescription: 'Evaluación emocional + Preparado',
    price: 60000,
    discountPrice: 48000,
    category: 'especial',
    features: ['Evaluación emocional', 'Preparado personalizado'],
    duration: '45 min'
  },
  // Tratamientos faciales
  {
    id: 'dermapen',
    name: 'Dermapen',
    slug: 'dermapen',
    description: 'Microneedling profesional para estimular colágeno.',
    shortDescription: 'Microneedling profesional',
    price: 45000,
    category: 'facial',
    features: ['Microneedling', 'Estimulación de colágeno'],
    duration: '45 min'
  },
  {
    id: 'hilos-colageno',
    name: 'Hilos de Colágeno',
    slug: 'hilos-colageno',
    description: 'Lifting no quirúrgico con hilos tensores.',
    shortDescription: 'Lifting no quirúrgico',
    price: 80000,
    category: 'facial',
    features: ['Hilos tensores', 'Reafirmación', 'Sin cirugía'],
    duration: '60 min'
  },
  {
    id: 'fototerapia',
    name: 'Fototerapia',
    slug: 'fototerapia',
    description: 'Terapia de luz LED con 7 colores.',
    shortDescription: 'Terapia de luz LED',
    price: 35000,
    category: 'facial',
    features: ['7 colores LED', 'Rejuvenecimiento', 'Anti-acné'],
    duration: '30 min'
  },
  {
    id: 'limpieza-facial',
    name: 'Limpiezas Faciales',
    slug: 'limpieza-facial',
    description: 'Limpieza facial profesional con productos Lidherma.',
    shortDescription: 'Limpieza profunda profesional',
    price: 40000,
    category: 'facial',
    features: ['Productos Lidherma', 'Extracción', 'Hidratación'],
    duration: '60 min'
  },
  {
    id: 'dermaplaning',
    name: 'Dermaplaning',
    slug: 'dermaplaning',
    description: 'Exfoliación y eliminación de vello facial.',
    shortDescription: 'Exfoliación + eliminación vello',
    price: 38000,
    category: 'facial',
    features: ['Exfoliación física', 'Eliminación vello'],
    duration: '45 min'
  },
  {
    id: 'estrias-mimulus',
    name: 'Tratamiento de Estrías',
    slug: 'estrias-mimulus',
    description: 'Tratamiento especializado para reducir estrías.',
    shortDescription: 'Reducción de estrías',
    price: 25000,
    category: 'especial',
    features: ['Por sesión', 'Pack 10 sesiones -10%', 'Pack 20 sesiones -20%'],
    duration: '30 min'
  },
  {
    id: 'mamas-armonia',
    name: 'Mamás en Armonía',
    slug: 'mamas-armonia',
    description: 'Programa prenatal completo por trimestre.',
    shortDescription: 'Programa prenatal wellness',
    price: 90000,
    category: 'especial',
    features: ['Sesiones combinadas', 'Adaptado por trimestre'],
    duration: '90 min'
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getServicesByCategory = (category: Service['category']): Service[] => {
  return services.filter(service => service.category === category);
};
