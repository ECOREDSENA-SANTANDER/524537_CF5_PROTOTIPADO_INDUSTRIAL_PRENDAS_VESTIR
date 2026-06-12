<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ficha técnica de diseño (#[em software] de diseño)


    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Conceptos de dibujo plano
    
    p.mb-5 El dibujo plano es una técnica que emplea composiciones de formas bidimensionales para crear o esbozar el prototipo de un objeto deseado. Esta metodología se aplica en numerosos campos y es especialmente útil en la producción, ya que facilita la visualización de las ideas creativas y conceptuales durante el desarrollo funcional. 

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Dibujo técnico - Dibujo bidimensional de prendas de vestir

    .tarjeta--container.row.mb-5(data-aos="fade")
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-5.col-md-6.col-lg-3
            img(src='@/assets/curso/temas/tema2/tarjeta1/imagen1.png')          
        h4.text-center ¿Qué es el dibujo técnico? 
        p.mb-0 Conocido como el sistema que representa gráficamente uno o más objetos, con el fin de otorgar información útil para un posible y consecuente análisis que permitirá una próxima construcción o ejecución de un objeto.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-5.col-md-6.col-lg-3
            img(src='@/assets/curso/temas/tema2/tarjeta1/imagen2.png')
        h4.text-center ¿Qué es el término bidimensional?
        p.mb-0 Es toda aquella figura que está compuesta por dos dimensiones, ancho y largo. El cuadrado, el triángulo, el rectángulo, el círculo, no tienen profundidad, son formas que cuando se trazan no involucran ningún tipo de volumen en su diseño.

    .subt.mb-5(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Tipos de línea

    .row.bgc-1.align-items-center.p-2.p-md-3.p-lg-4.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center
          .row.justify-content-center.align-items-center   
            .col-lg-10
              .titulo-sexto.color-secundario.mb-3
                h5 Figura 1.
                span Tipos de línea.
              figure
                img(src='@/assets/curso/temas/tema2/imagen1.svg' alt="La figura describe y ejemplifica 3 tipos: Línea guía: ejes de simetría. Línea sólida: croquis de la prenda. Línea intermitente: pespuntes o costuras.")

    .subt.mb-5(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Canon de belleza - proporciones
    
    p Diferencias entre: figurín, ilustración, dibujo plano.

    TabsC.color-acento-botones.mb-5
      .bg2.py-4(titulo="Figurín")
        .row.justify-content-center.align-items-center
          .col-7.col-md-4.col-lg-3.mb-3.mb-md-0
            img.mb-4(src='@/assets/curso/temas/tema2/tarjeta2/imagen1.png')
          .col-11.col-md-7.col-lg-7
            p Representar gráficamente el cuerpo y las prendas, con una expresión viva, un trazo fresco, un movimiento dinámico, una pose elegante y una expresión adecuada al tipo de vestimenta propuesto.
      .bg2.py-4(titulo="Ilustración")
        .row.justify-content-center.align-items-center
          .col-7.col-md-4.col-lg-3.mb-3.mb-md-0
            img.mb-4(src='@/assets/curso/temas/tema2/tarjeta2/imagen2.png')
          .col-11.col-md-7.col-lg-7
            p Son dibujos, esquemas, bosquejos, bocetos o pinturas que se hacen relacionados a la moda, pueden ser de modelos, ropa o accesorios, prácticamente cualquier objeto o situación relacionada a la industria.
      .bg2.py-4(titulo="Dibujo Plano")
        .row.justify-content-center.align-items-center
          .col-7.col-md-4.col-lg-3.mb-3.mb-md-0
            img.mb-4(src='@/assets/curso/temas/tema2/tarjeta2/imagen3.png')
          .col-11.col-md-7.col-lg-7
            p Representación detallada de una prenda, es decir, se deben identificar todas las características técnicas de la prenda, pespuntes, botones, costuras, pinzas, acabados. No tiene movimiento y se debe identificar delantero y posterior.

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Tipos de trazos - ejercicios de aprestamiento

    SlyderF(columnas="col-md-6 col-xl-4")(data-aos="fade")  
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-8.col-lg-7
            img(src='@/assets/curso/temas/tema2/tarjeta3/imagen1.png' alt='')
        h4.text-center Posición de escritura
        p.text-center  Para hacer los ejercicios, trabaje siempre con el lápiz en posición de escritura.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-8.col-lg-7
            img(src='@/assets/curso/temas/tema2/tarjeta3/imagen2.png' alt='')
        h4.text-center Horizontales 
        p.text-center Alternando de izquierda a derecha y de derecha a izquierda.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-8.col-lg-7
            img(src='@/assets/curso/temas/tema2/tarjeta3/imagen3.png' alt='')
        h4.text-center Verticales
        p.text-center Alternando de arriba hacia abajo y de abajo hacia arriba.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-8.col-lg-7
            img(src='@/assets/curso/temas/tema2/tarjeta3/imagen4.png' alt='')
        h4.text-center Diagonales
        p.text-center Alternando de izquierda a derecha y de derecha a izquierda.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-8.col-lg-7
            img(src='@/assets/curso/temas/tema2/tarjeta3/imagen5.png' alt='')
        h4.text-center Círculos
        p.text-center Recuerde no apoyar la muñeca ni la mano.


    Separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Categorización de prendas

    p.mb-5 En la segmentación de productos se implementa el término tipología, el cual sirve para categorizar de manera básica, “lógica” por tipo los productos, lo que se busca es identificar características similares que componen el producto y así ir categorizando para facilitar todo el proceso, desde la parte creativa hasta la parte operativa. 

    .subt.mb-5(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Categoría de prendas - Reconocimiento de tipologías

    .row.justify-content-center.align-items-center.mb-5
      .col-md-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/imagen3.png')})`}"
           )
            h3.text-center.h-100.d-flex.align-items-center.justify-content-center.mb-0 ¿Qué es una tipología?
          .bloque-texto-g__texto.p-2
            p.mb-2.text-center Es el estudio de los tipos o modelos que se usan para clasificar diversas cosas.

    .subt.mb-5(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 División del cuerpo

    .row.justify-content-center.align-items-center.mb-5    
      .col-lg-10
        .titulo-sexto.color-secundario
          h5 Figura 2.
          span División del cuerpo
        figure
          img(src='@/assets/curso/temas/tema2/imagen4.svg' alt="La figura presenta la imagen de un hombre al cual se le señala la parte superior del cuerpo(de la cintura hacia arriba)- prendas superiores; y la parte inferior del cuerpo (de la cintura hacia abajo)- pantalones, faldas, shorts.")
   
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Bitácora de formas - Glosario técnico

    .row.justify-content-center.mb-5(data-aos="fade")  
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.h-100.p-4.px-5
          .tarjeta-numerada__numero
            .h2 1
          h4.text-center Pinzas
          p.text-center.mb-0 Pinza sencilla, doble pinza, pinza por sisa corte diagonal, pinza por escote.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.h-100.p-4.px-5
          .tarjeta-numerada__numero
            .h2 2
          h4.text-center Cortes
          p.text-center.mb-0 Princesas, francés, corte horizontal y vertical, canesú con corte vertical.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.h-100.p-4.px-5
          .tarjeta-numerada__numero
            .h2 3
          h4.text-center Talles
          p.text-center.mb-0 Talle alto, talle medio, talle bajo. Cuellos - puños - bolsillos de parche - bolsillos de ribete - pantalón - largos - bolsillos - talles – detalles.

    p Revisa el contenido del video que puede resultar útil para complementar el aprendizaje acerca de la categorización de prendas

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/leHGYnfUxGk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Categoría de prendas - Tipologías - Bitácora de formas


    Separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Técnica de achurados y acabados
    
    p.mb-4 En el siguiendo video, se presenta la realización del proceso de una manera clara y didáctica:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/9dFHVp0cC2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Adaptado de  Técnica de achurados y acabados.

 
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 Dibujo de bitácora de formas
    
    p.mb-4 En el siguiente video explicativo se detalla la manera de realizar el proceso:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/0ZN7-E4Pyt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Adaptado de Dibujo de bitácora de formas


    Separador
    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5 Dibujo plano de prendas
    
    p.mb-4 En el video que se presenta a continuación, se detallan los conceptos más importantes para tener en cuenta en la realización de dibujos bidimensionales de prendas de vestir: 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/KxWtHCwnG3o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Adaptado de Dibujo plano de prendas

    p.mb-4 Revisa los videos que te pueden resultar útiles para aprender más sobre la creación de dibujos planos para prendas.

    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/rvq5vAoMdv4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Interpretación prenda enteriza

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ZpVolJldlcU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Interpretación prenda inferior    


    Separador
    #t_2_6.titulo-segundo.color-acento-contenido
      h2 2.6 Análisis de proporciones prendas superiores e inferiores
    
    p.mb-4 A continuación, se presentan dos videos con explicación de los procesos:

    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/6zVIePvn5Tw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Adaptado de Análisis de proporciones prendas superiores

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/CYQpTKL7-AM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Adaptado de Análisis de proporciones prendas inferiores


    Separador
    #t_2_7.titulo-segundo.color-acento-contenido
      h2 2.7 Interfaz programa CAD
      
    p Para el desarrollo de dibujos planos, se implementa #[em software] que permite agilizar y detallar de manera más certera un producto. Para el uso de los programas se hace necesario contar con la licencia que autoriza la implementación legal del mismo. El SENA cuenta con las licencias requeridas para el acceso del aprendiz sin ningún inconveniente. 


    Separador
    #t_2_8.titulo-segundo.color-acento-contenido
      h2 2.8 Ficha técnica
    
    p.mb-5 Son documentos en los cuales se describe de manera detallada la información técnica de un producto, por lo general se documenta la información operativa de cada uno de los procesos por los que pasa el producto, dichos documentos serán consultados de manera constante para validar que el proceso si corresponde al requerimiento. 

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Ficha técnica - introducción
    
    p #[b ¿Qué son las fichas técnicas?] Son documentos que contienen la información necesaria para la fabricación de un producto. Dichos documentos serán consultados en los distintos procesos de producción. Los datos para incluir deben ser detallados.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade")  
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/imagen13.png')})`}"
      )
      .bloque-texto-g__texto.p-4.py-lg-5
        p.mb-0 #[b Tipos: ]
        p según el volumen, la cantidad, rigurosidad de la producción y cumplimiento de parámetros de calidad, se deciden los diferentes requerimientos técnicos que debe llevar la ficha técnica.   

    .row.bgc-2.align-items-center.p-2.p-md-3.p-lg-4.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center
          
          .row.justify-content-center.align-items-center    
            .col-lg-10
              .titulo-sexto.color-secundario
                h5 Figura 3.
                span
                  span.mb-0 Tipos de ficha técnica
              figure
                img(src='@/assets/curso/temas/tema2/imagen11.svg' alt=" La figura presenta un diagrama enunciando los siguientes tipos: ficha técnica de diseño, ficha técnica de patronaje, ficha técnica de insumos, ficha técnica de escalado, ficha técnica de corte, ficha técnica de confección, ficha técnica de empaque")

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Requerimientos técnicos de cada tipo de ficha
    
    p.mb-4 Los formatos de ficha técnica no tienen un esquema definido, por el contrario, son completamente ajustables al tipo de información que se considere necesaria para el tipo de producción a realizar.

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center.align-items-center(titulo="Especificaciones técnicas de diseño")
        .col-sm-12.col-md-5.col-lg-5.mb-4.mb-md-0
          ul.lista-ul--color.vamarillo.fa-ul
            li.mb-0 
              i.lista-ul__vineta.mb-0
              span.mb-0 Dibujo plano.
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Proporción.
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Dimensión. 
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Lupas.
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Acotaciones (cotas).
        .col-10.col-md-6.col-lg-6
          img(src='@/assets/curso/temas/tema2/acordeon1/imagen1.png', alt='')
      .row.justify-content-center.align-items-center(titulo="Especificaciones técnicas de patronaje")
        .col-sm-12.col-md-5.col-lg-5.mb-4.mb-md-0
          ul.lista-ul--color.vamarillo.fa-ul
            li.mb-0 
              i.lista-ul__vineta.mb-0
              span.mb-0 Medidas bases: bases para la construcción de la moldería, dependiendo del requerimiento antropométrico (prendas inferiores o superiores).
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Básico: moldería BASE de construcción, superiores o inferiores. Punto de partida para la construcción del plano.
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Interpretación: modificaciones al patrón base para la correcta lectura del diseño o prenda a trabajar.
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Señalización: convenciones o marcación para la correcta lectura del plano.    
        .col-10.col-md-6.col-lg-6
          img(src='@/assets/curso/temas/tema2/acordeon1/imagen2.png', alt='')
      .row.justify-content-center.align-items-center(titulo="Especificaciones técnicas de escalado")
        .col-sm-12.col-md-5.col-lg-5.mb-4.mb-md-0
          ul.lista-ul--color.vamarillo.fa-ul
            li.mb-0 
              i.lista-ul__vineta.mb-0
              span.mb-0 Despiece de moldería: juego de piezas para la construcción de una prenda o producto en una talla o modelo específico.
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Proporciones: diferencia entre talla y talla para el incremento o disminución entre la talla base y los requerimientos de producción.
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Nido de escalado: malla o nido de la diferencia entre talla y talla del trazo o plano. 
        .col-10.col-md-6.col-lg-6
          img(src='@/assets/curso/temas/tema2/acordeon1/imagen3.png', alt='')
      .row.justify-content-center.align-items-center(titulo="Especificaciones técnicas de trazo y corte")
        .col-sm-12.col-md-5.col-lg-5.mb-4.mb-md-0
          p Para realizar el corte de una prenda o producto es necesario identificar por talla, referencia, material, color y demás instrucciones de corte.
          ul.lista-ul--color.vamarillo.fa-ul
            li.mb-0 
              i.lista-ul__vineta.mb-0
              span.mb-0 Cantidad de corte por talla.
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Cantidad de corte por pieza.
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Referencia por color.
        .col-10.col-md-6.col-lg-6
          img(src='@/assets/curso/temas/tema2/acordeon1/imagen4.png', alt='')


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
