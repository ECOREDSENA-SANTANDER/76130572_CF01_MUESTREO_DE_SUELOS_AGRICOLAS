export default {
  global: {
    Name: 'Planificación y preparación del muestreo de suelos agrícolas',
    Description:
      'Este componente desarrolla competencias para planificar el muestreo de suelos agrícolas mediante la caracterización del suelo y del lote, así como la delimitación de áreas homogéneas. Integra fundamentos técnicos, métodos de recolección, selección y alistamiento de herramientas e insumos, junto con la aplicación de la normativa ambiental, las buenas prácticas agrícolas (BPA) y los lineamientos de seguridad y salud en el trabajo (SST), garantizando una preparación eficiente y adecuada.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos del suelo agrícola y su caracterización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Subtema 1',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Subtema 1',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Subtema 1',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Subtema 1',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tema 2',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Subtema 1',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Subtema 1',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Subtema 1',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Subtema 1',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tema 3',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Subtema 1',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Subtema 1',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Subtema 1',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Subtema 1',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: '',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Subtema 1',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Subtema 1',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Subtema 1',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Subtema 1',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Alistamiento',
      significado:
        'Proceso de preparación y verificación de las herramientas, equipos e insumos necesarios para realizar el muestreo de suelos.',
    },
    {
      termino: 'Caracterización',
      significado:
        'Descripción y análisis de las propiedades y condiciones físicas y químicas del suelo y del lote agrícola.',
    },
    {
      termino: 'Compactación',
      significado:
        'Reducción de los espacios porosos del suelo debido a la presión o al tránsito de maquinaria, lo que puede limitar la infiltración y el crecimiento radicular.',
    },
    {
      termino: 'Drenaje',
      significado:
        'Capacidad del suelo para permitir el movimiento y la evacuación del agua dentro de su perfil.',
    },
    {
      termino: 'Erosión',
      significado:
        'Proceso de pérdida y transporte de partículas del suelo por acción del agua, el viento u otros factores.',
    },
    {
      termino: 'Fertilidad',
      significado:
        'Capacidad del suelo para proporcionar nutrientes y condiciones adecuadas para el crecimiento y desarrollo de las plantas.',
    },
    {
      termino: 'Homogeneidad',
      significado:
        'Condición de un área que presenta características del suelo relativamente similares y permite establecer una unidad de muestreo.',
    },
    {
      termino: 'Muestreo',
      significado:
        'Proceso de recolección de muestras de suelo mediante procedimientos técnicos definidos para su análisis.',
    },
    {
      termino: 'Muestra compuesta',
      significado:
        'Muestra obtenida a partir de la mezcla homogénea de varias submuestras recolectadas en un área de suelo con características similares.',
    },
    {
      termino: 'Perfil del suelo',
      significado:
        'Corte vertical que permite observar la organización y las características de los diferentes horizontes del suelo.',
    },
    {
      termino: 'pH',
      significado:
        'Medida que indica el grado de acidez o alcalinidad del suelo.',
    },
    {
      termino: 'Submuestra',
      significado:
        'Porción individual de suelo recolectada en un punto específico y que puede integrarse a una muestra compuesta.',
    },
    {
      termino: 'Textura',
      significado:
        'Proporción relativa de arena, limo y arcilla presentes en el suelo.',
    },
    {
      termino: 'Variabilidad',
      significado:
        'Diferencias que se presentan en las características del suelo dentro de un lote agrícola.',
    },
    {
      termino: 'Zonificación',
      significado:
        'División del lote en áreas o unidades con características similares para facilitar la planificación del muestreo.',
    },
  ],
  referencias: [
    {
      referencia:
        'EasyAgro. (s. f.). Muestreo de suelos: El punto de partida para una agricultura eficiente y sustentable.',
      link: '',
    },
    {
      referencia:
        'Natural Control. (s. f.). Toma de muestras de suelos para evaluar la fertilidad del suelo [Protocolo técnico].',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura. (s. f.). Clasificación de suelos. Portal de Suelos de la FAO.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, G. (8 de marzo de 2025). Tipos de suelos: Descripción y clasificación. Centro Geotécnico Internacional.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico – Regional Santander',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico – Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
