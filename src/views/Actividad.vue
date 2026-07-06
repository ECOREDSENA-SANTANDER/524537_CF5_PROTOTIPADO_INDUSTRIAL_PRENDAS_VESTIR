<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Características de diseño y fundamentación textil',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la apropiación de los conceptos relacionados con diseño, moda, dibujo plano, ficha técnica, fundamentación textil, clasificación de fibras, hilos, tejidos, entretelas y procesos textiles aplicados al desarrollo de prendas de vestir. ',
      barajarPreguntas: true,
      titulo_aprobado: '¡Excelente! Ha superado la actividad',
      titulo_reprobado: 'No ha superado la actividad',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal del patronista como enlace entre diseño y fabricación de prendas de vestir?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Interpretar la información creativa y técnica para convertir el diseño en procesos viables de construcción de prendas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Definir únicamente la estrategia publicitaria de la marca sin intervenir en la lectura técnica del producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reemplazar el trabajo del diseñador mediante decisiones comerciales sobre precio, exhibición y distribución final.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Seleccionar solo el empaque de la prenda terminada sin analizar materiales, formas ni especificaciones técnicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión del papel del patronista como mediador entre la intención creativa y la producción técnica de prendas.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 2,
          texto:
            '¿Qué describe de manera más precisa el concepto de diseño dentro del componente formativo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una actividad decorativa que se limita a elegir colores, estampados y nombres comerciales para cada prenda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una actividad creativa orientada a proponer soluciones idóneas frente a necesidades o problemáticas específicas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un procedimiento administrativo utilizado para registrar inventarios, ventas y distribución de productos terminados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una operación de confección aplicada únicamente en máquinas planas para cerrar piezas textiles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce el diseño como actividad creativa que responde a necesidades mediante soluciones funcionales y pertinentes.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 3,
          texto:
            '¿Qué caracteriza al diseño de moda desde la perspectiva funcional planteada en el componente?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La producción de etiquetas comerciales para diferenciar las prendas antes de su empaque y distribución.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La repetición de prendas históricas sin considerar innovación, interpretación ni necesidades del usuario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La producción de indumentaria para el sistema moda, con innovación e interpretación frente a una necesidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La clasificación contable de prendas terminadas según costos, descuentos, canales de venta e inventarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se demuestra apropiación del diseño de moda como producción de indumentaria articulada con innovación, interpretación y funcionalidad.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 4,
          texto:
            '¿Qué factor explica por qué el vestido refleja condiciones sociales, culturales y geográficas de una comunidad?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La ficha de empaque define completamente la identidad cultural de una región sin considerar el vestuario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El tipo de maquinaria sustituye los referentes históricos, sociales y simbólicos presentes en la indumentaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La publicidad comercial elimina la relación entre prendas, cultura, riqueza, territorio y formas de vida.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La vestimenta expresa prácticas, recursos, jerarquías, clima y rasgos culturales presentes en cada sociedad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión del vestuario como manifestación cultural vinculada con historia, contexto social y condiciones del entorno.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de las siguientes opciones corresponde a un factor físico que incide en la elección del vestuario?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El clima, porque determina necesidades de protección, confort y adaptación de prendas según el entorno.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La vitrina, porque organiza la ubicación visual de los productos dentro del punto de venta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La campaña, porque establece mensajes publicitarios para promover una colección de temporada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El inventario, porque controla cantidades disponibles sin definir estructura corporal ni funcionalidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce el clima como factor físico que condiciona la selección, función y adecuación de las prendas.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 6,
          texto:
            '¿Qué finalidad cumplen los universos de vestuario dentro del sistema moda?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Determinar únicamente el precio final de la prenda sin considerar usuario, uso o categoría de producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Agrupar prendas y accesorios con características similares según ocasión de uso y mercado objetivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir las fichas técnicas por nombres comerciales asociados a temporadas y vitrinas de venta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar la segmentación del consumidor para producir todas las prendas bajo una única categoría.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión de los universos de vestuario como categorías que agrupan productos según uso, afinidad y consumidor.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 7,
          texto:
            '¿Qué relación es correcta entre ocasión de uso y universo de vestuario?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El universo formal pertenece exclusivamente a complementos de playa, descanso, sueño e interior.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El universo <em>activewear</em> corresponde a eventos protocolarios ligados a tradición monárquica y gala.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El universo casual se asocia con la multiocasión por su carácter flexible, versátil y cotidiano.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El universo <em>underwear</em> se relaciona directamente con ceremonias oficiales, gala y protocolo corporativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se demuestra dominio de la relación entre multiocasión y universo casual como categoría flexible del vestuario.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 8,
          texto:
            '¿Qué caracteriza al <em>fast fashion</em> dentro de las gamas de mercado del sistema moda?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La producción exclusiva, artesanal y a la medida, elaborada para clientes únicos de alta costura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La filosofía de consumo responsable que prioriza durabilidad, bajo impacto ambiental y procesos lentos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La elaboración de prendas religiosas tradicionales sin relación con tendencias, mercado o temporalidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La adaptación rápida de tendencias a tiendas, con producción acelerada, bajo costo y ciclos cortos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce el <em>fast fashion</em> como modelo de moda rápida basado en velocidad de producción, bajo costo y adaptación de tendencias.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 9,
          texto:
            '¿Qué define el perfil del consumidor en el análisis de una marca o mercado?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La descripción de características, comportamientos e intereses que orientan estrategias y productos específicos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La lista de máquinas necesarias para ensamblar una prenda según puntadas y operaciones industriales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El conjunto de costuras internas usadas para unir delanteros, posteriores, mangas y complementos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La ubicación de los moldes sobre la tela para mejorar el aprovechamiento del material.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión del perfil del consumidor como herramienta para orientar productos, estrategias y decisiones de marca.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 10,
          texto:
            '¿Qué rasgo corresponde al perfil de consumidor vanguardista según el componente?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Conserva estrictamente normas de etiqueta y evita cualquier innovación que modifique sus referentes tradicionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Rompe esquemas, asume riesgos, busca novedad y adopta referentes emergentes de manera cambiante.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Rechaza los cambios sociales y mantiene un estilo estable basado solo en marcas tradicionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Privilegia únicamente prendas básicas sin explorar culturas, tendencias ni expresiones originales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce el perfil vanguardista por su orientación al cambio, la innovación, el riesgo y la exploración de referentes.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 11,
          texto:
            '¿Qué son las tendencias dentro del contexto de moda y consumo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registros de inventario que organizan únicamente cantidades, costos y ubicaciones de prendas terminadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Operaciones de confección que definen la secuencia de ensamble de cuellos, mangas y bolsillos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Pruebas textiles realizadas con fuego para reconocer olor, ceniza y comportamiento de una fibra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Predicciones del estado de ánimo, comportamientos y hábitos que orientan cambios del mercado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión de las tendencias como lecturas predictivas sobre comportamientos, hábitos y consumo.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 12,
          texto:
            '¿Qué función cumple un <em>moodboard</em> en el proceso creativo de diseño de moda?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reunir imágenes, colores, texturas y conceptos para hacer visible una inspiración o ambiente de diseño.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Registrar únicamente las medidas finales de una prenda en cada talla antes del empaque comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Controlar el consumo de tela durante el corte sin incluir referentes visuales ni conceptuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir la ficha técnica de patronaje mediante dibujos sin acotaciones, proporciones ni materiales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce el <em>moodboard</em> como tablero visual que materializa conceptos, atmósferas y referentes para el diseño.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 13,
          texto:
            '¿Qué permite desarrollar un cuadro metamórfico como metodología de diseño?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Calcular exclusivamente las puntadas por pulgada necesarias para unir piezas textiles en confección.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Generar variaciones de partes de prendas conservando coherencia conceptual en una propuesta de diseño.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Clasificar fibras textiles mediante olor, residuo, llama y ceniza de una prueba de combustión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Establecer únicamente el precio final de venta a partir del costo del material utilizado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia apropiación del cuadro metamórfico como herramienta para generar variaciones coherentes de diseño.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 14,
          texto:
            '¿Qué distingue el dibujo plano frente al figurín y la ilustración de moda?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El dibujo plano representa emociones con movimiento dinámico y poses expresivas sobre una figura estilizada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El dibujo plano reemplaza toda lectura técnica por pintura artística, gesto libre y composición decorativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El dibujo plano detalla técnicamente una prenda, sin movimiento, identificando delantero, posterior y acabados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El dibujo plano solo representa el cuerpo humano y omite costuras, botones, pinzas y pespuntes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce el dibujo plano como representación técnica bidimensional de una prenda con detalles productivos.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 15,
          texto:
            '¿Qué son las fichas técnicas dentro del proceso de desarrollo de prendas de vestir?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Documentos que contienen información necesaria y detallada para la fabricación y control de un producto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Tableros visuales que reúnen imágenes, frases, colores y texturas para definir una inspiración.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Pruebas de combustión aplicadas a fibras para identificar olor, humo, ceniza y comportamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Estilos de consumidor que agrupan gustos, actitudes, valores y comportamientos de compra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce la ficha técnica como documento clave para comunicar y controlar la información productiva de una prenda.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 16,
          texto:
            '¿Cómo se clasifican las fibras textiles según su origen y composición general?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'En puntadas, costuras, pespuntes y remates, según la maquinaria utilizada para la confección.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'En naturales, químicas artificiales, químicas sintéticas, inteligentes o técnicas y sostenibles.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'En figurines, ilustraciones, dibujos planos y bitácoras, según el método de representación gráfica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'En perfiles tradicionales, contemporáneos, vanguardistas y exhibicionistas, según el consumidor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia comprensión de la clasificación de fibras textiles por origen natural, transformación química y desarrollos técnicos o sostenibles.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 17,
          texto:
            '¿Qué analiza la prueba de combustión para identificar fibras textiles?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La talla comercial, el sistema de cierre, la pretina y la ubicación del bolsillo en la prenda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El estilo de consumidor, la ocasión de uso, la tendencia y la gama de mercado aplicada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La forma de arder, el olor desprendido, el humo y el residuo producido por la combustión.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El número de operaciones, la ruta operacional, el tipo de máquina y el tiempo estándar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce la prueba de combustión como método para observar comportamiento, olor, humo y residuos de fibras textiles.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 18,
          texto:
            '¿Qué efecto tiene una mayor torsión en los hilos, según la fundamentación textil?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aumenta resistencia y elasticidad, reduce el diámetro aparente y puede disminuir la arrugabilidad del tejido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Elimina la cohesión de las fibras y reduce por completo la resistencia del hilo durante el tejido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituye el proceso de hilatura y convierte automáticamente cualquier fibra en tela terminada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Impide la formación de tejidos planos, tejidos de punto y telas no tejidas en producción textil.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se evidencia apropiación de la torsión como factor que modifica resistencia, elasticidad, tacto y comportamiento del hilo.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es la diferencia principal entre tejido plano y tejido de punto?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El tejido plano se basa en ilustraciones técnicas y el tejido de punto en perfiles de consumidor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El tejido plano entrelaza urdimbre y trama, mientras el tejido de punto forma mallas entrelazadas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El tejido plano no utiliza fibras textiles y el tejido de punto se produce únicamente con entretelas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El tejido plano corresponde a fichas técnicas y el tejido de punto a <em>moodboards</em> conceptuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se demuestra comprensión de la diferencia estructural entre tejido plano y tejido de punto.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
        {
          id: 20,
          texto:
            '¿Qué función cumplen las entretelas en la construcción de prendas de vestir?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir exclusivamente el color de las telas y reemplazar los procesos de teñido y estampación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Clasificar estilos de consumidor según comportamiento, valores, intereses y motivaciones de compra.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sostener, reforzar y dar forma a zonas críticas, aportando tacto, estabilidad y durabilidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Organizar imágenes de inspiración para determinar paletas, referentes visuales y atmósferas creativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Se reconoce la entretela como insumo estructural que refuerza, estabiliza y mejora zonas críticas de la prenda.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. Se recomienda revisar nuevamente los contenidos del componente formativo para fortalecer la comprensión técnica de los conceptos.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y se evidencia apropiación de los fundamentos relacionados con diseño, moda, dibujo plano, ficha técnica, fundamentación textil, fibras, hilos, tejidos, entretelas y procesos textiles.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Se recomienda revisar nuevamente el componente formativo e intentar otra vez la actividad didáctica.',
    },
  }),
}
</script>
