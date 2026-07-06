export default {
  global: {
    Name: 'Características de diseño y fundamentación textil',
    Description:
      'En este componente formativo aprenderá a identificar las características, partes, composición, categorización y detalles en el análisis y comprensión de prendas de vestir. Dentro del proceso se hace una contextualización del lenguaje técnico empleado en el diseño de modas, con el fin de apoyar una parte del proceso en la construcción de prendas de vestir.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Diseño y moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Fundamentación de moda',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Universos de vestuario',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Perfil y estilo de consumidor',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tendencias',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: '<em> Moodboard</em>: Cuadro metamórfico',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ficha técnica de diseño (<em>software</em> de diseño)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Conceptos de dibujo plano',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Categorización de prendas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Técnica de achurados y acabados',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Dibujo de bitácora de formas',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Dibujo plano de prendas',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Análisis de proporciones prendas superiores e inferiores',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Interfaz programa CAD',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Ficha técnica',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Fundamentación textil',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Clasificación y conceptualización de las fibras naturales, químicas (artificiales y sintéticas)',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Identificación fibras por combustión',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Clasificación de los hilos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Clasificación de tejidos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Caracterización de los tejidos',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Procesos textiles',
            hash: 't_3_6',
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
        download: 'downloads/CF5_524537_DU.pdf',
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
      termino: 'Achurado',
      significado:
        'técnica de representación gráfica utilizada en dibujo plano para indicar sombras, texturas, volúmenes o acabados específicos de una prenda.',
    },
    {
      termino: 'CAD',
      significado:
        '<em>software</em> de diseño asistido por computador utilizado para desarrollar dibujos planos, patrones y fichas técnicas con mayor precisión y rapidez.',
    },
    {
      termino: 'Consumidor',
      significado:
        'persona o grupo objetivo para el cual se diseña una prenda, teniendo en cuenta sus necesidades, gustos, hábitos y estilo de vida.',
    },
    {
      termino: 'Dibujo plano',
      significado:
        ' representación técnica y bidimensional de una prenda, utilizada para comunicar detalles de diseño y construcción.',
    },
    {
      termino: 'Ficha técnica',
      significado:
        'documento técnico que reúne especificaciones de diseño, materiales, medidas, acabados y procesos necesarios para la elaboración de una prenda.',
    },
    {
      termino: 'Fibra textil',
      significado:
        'materia prima básica utilizada para la fabricación de hilos y tejidos, de origen natural o químico.',
    },
    {
      termino: 'Hilo',
      significado:
        'conjunto de fibras textiles unidas y torsionadas que permiten la elaboración de tejidos.',
    },
    {
      termino: '<em>Moodboard</em>',
      significado:
        'composición visual de imágenes, colores, texturas y conceptos que sirve como guía creativa para el desarrollo de una colección o diseño.',
    },
    {
      termino: 'Moda',
      significado:
        'fenómeno cultural y comercial relacionado con las tendencias, estilos y formas de vestir de una sociedad en un tiempo determinado.',
    },
    {
      termino: 'Patronaje',
      significado:
        'proceso técnico mediante el cual se desarrollan moldes o patrones para la confección de prendas de vestir.',
    },
    {
      termino: 'Perfil del consumidor',
      significado:
        'análisis de características demográficas, psicológicas y sociales que permiten identificar el público objetivo de un producto de moda.',
    },
    {
      termino: 'Proceso textil',
      significado:
        'conjunto de etapas mediante las cuales las fibras se transforman en hilos, tejidos y productos textiles terminados.',
    },
    {
      termino: 'Tejido',
      significado:
        'estructura formada por el entrelazado de uno o varios hilos para crear una superficie textil.',
    },
    {
      termino: 'Tendencia',
      significado:
        'dirección estética o conceptual predominante en moda durante un periodo específico.',
    },
    {
      termino: 'Universo de vestuario',
      significado:
        'clasificación de prendas según su funcionalidad, contextode uso y características estéticas dentro del sistema de moda.',
    },
  ],
  referencias: [
    {
      referencia:
        'Marín Blackman, C. (2012). 100 años de moda. Sistema de Bibliotecas.',
    },
    {
      referencia:
        'Castellanos, O., Fumeque A., y Ramirez D. (2011). Análisis de tendencias: de la información hacia la innovación. Universidad Nacional de Colombia. Sistema de Bibliotecas SENA:',
    },
    {
      referencia:
        'Harpersbazaar. (2019). La ropa que eliges afecta a tu estado de ánimo y cerebro, según expertos. En harpersbazaar.mx',
    },
    {
      referencia:
        'Lafuente M., Navarro J., y Navarro J. (2005). Ilustración de moda. Sistema de Bibliotecas SENA:',
    },
    {
      referencia:
        'Laver, J.,  Albizua, H., y Fortea, B. (1990). Breve historia del traje y la moda. Sistema de Bibliotecas SENA.',
    },
    {
      referencia:
        'Navarro, J.,  y Lafuente, M. (2010). Ilustración de moda: dibujo plano. Sistema de Bibliotecas SENA.',
    },
    {
      referencia:
        'Sociedad Americana de Ensayos y Materiales (ASTM). (2003). Textiles. Editorial Staff. [Book]. Sistema de Bibliotecas SENA.',
    },
    {
      referencia:
        'Szkutnicka, B., Cuenca, C., Koyama, A. (2010). El dibujo técnico de moda paso a paso. Sistema de Bibliotecas SENA.',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (s. f.). Canal de YouTube.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema de Recursos Educativos Digitales (RED)',
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
          nombre: 'Lizeth Maritza Rodríguez Beltrán',
          cargo: 'Experta temática',
          centro:
            'Centro de Manufactura en Textil y Cuero - Regional Distrito Capital',
        },
        {
          nombre: 'Adriana Lozano Zapata',
          cargo: 'Correctora de estilo',
          centro:
            'Centro para La Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Natalia Andrea Bueno Pizarro',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro para La Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
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
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles ',
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
