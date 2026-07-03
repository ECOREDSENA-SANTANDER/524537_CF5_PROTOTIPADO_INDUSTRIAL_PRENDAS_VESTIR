<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Diseño y moda

    
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Fundamentación de moda
    
    p En la actualidad una de las mayores falencias en la industria de la moda, es la articulación entre el diseñador (área creativa) y el patronista (área operativa); por lo tanto, es importante ofrecer al patronista una contextualización en el manejo de la terminología y así afianzar la articulación entre las dos áreas.

    .row.justify-content-center.mb-5
      .col-md-6.col-xl-4.mb-3.mb-lg-0
        .tarjeta.tarjeta-slide.arriba.bg1.mh-px1(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4 ¿Qué es diseño?
              p La palabra diseño viene del italiano #[i disegnare], que significa dibujar, que a su vez se deriva del latín #[i designare] que evoca marcar, trazar, ordenar y disponer. El diseño es una actividad creativa orientada a soluciones idóneas a ciertas problemáticas.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tarjeta1/imagen1.svg')})`}")
      .col-md-6.col-xl-4.mb-3.mb-lg-0
        .tarjeta.tarjeta-slide.abajo.bg1.mh-px1
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas//tema1/tarjeta1/imagen2.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4 ¿Qué es moda?
              p La definición viene del francés #[i mode], y este del latín #[i modus], "modo" o "medida". La moda regula las elecciones que hacen las personas, definiendo ciertos patrones de comportamiento dentro de un grupo social; indica a la gente qué debe consumir, utilizar o hacer.
      .col-md-6.col-xl-4.mb-3.mb-lg-0
        .tarjeta.tarjeta-slide.derecha.bg1.mh-px1
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas//tema1/tarjeta1/imagen3.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4.mb-5 ¿Qué es diseño de moda?
              p.mb-0 Producción de indumentaria para el sistema de moda, donde su principal foco es la innovación y la interpretación, respondiendo a una necesidad de manera funcional.


    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Evolución de la moda
    
    p La moda ha ido evolucionando con el pasar de los años, teniendo en cuenta diferentes factores que han afectado la sociedad. Quienes han aportado a estos cambios diferenciadores en la moda han dejado una gran huella.
    
    .row.justify-content-center.align-items-center.mb-5.bgi-1(data-aos="fade")
      .col-9.col-md-4.col-lg-3
        img(src='@/assets/curso/temas/tema1/imagen1.svg', alt='') 
      .col-sm-12.col-md-7.col-lg-7.p-4.p-lg-5
        p El vestirse surge desde el momento en que las prendas pasan de ser una obligación de protegerse del clima a convertirse en una necesidad vital. 
        p.mb-0 El vestido muestra la cultura, riqueza y grado de desarrollo de las civilizaciones y da una visión de las condiciones geográficas, económicas y culturales de los pueblos.

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Historia del vestuario
    p Es un reflejo de los cambios sociales, políticos y culturales que tienen lugar alrededor del mundo a medida de los años. Conforme el humano ha evolucionado, también lo ha hecho su vestimenta e indumentaria.
      
    .tarjeta.bgi-1.p-4.p-lg-5.mb-5(data-aos="fade")
      .tarjeta.bg-white.p-4
        LineaTiempoC.color-secundario(text-small)
          .row.justify-content-center.align-items-center(titulo="Período Paleolítico")
            .col-12.col-md-10.col-lg-5.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/tema1/linea1/imagen1.png', alt='')
            .col-6.col-md-3.col-lg-2
              img(src='@/assets/curso/temas/tema1/linea1/icono1.png', alt='')
            .col-sm-12.col-md-7.col-lg-4
              p Pieles, pelo de animales, hojas, huesos y conchas.
          .row.justify-content-center.align-items-center(titulo="Periodo Mesolítico")
            .col-sm-12.col-md-7.col-lg-4
              p Broches hechos con hueso, abrigos, gorros, botas y zapatillas de cuero.
            .col-6.col-md-3.col-lg-2
              img(src='@/assets/curso/temas/tema1/linea1/icono2.png', alt='')
            .col-12.col-md-10.col-lg-5.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/tema1/linea1/imagen2.png', alt='')
          .row.justify-content-center.align-items-center(titulo="Periodo Neolítico")
            .col-12.col-md-10.col-lg-5.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/tema1/linea1/imagen3.png', alt='')
            .col-6.col-md-3.col-lg-2
              img(src='@/assets/curso/temas/tema1/linea1/icono3.png', alt='')
            .col-sm-12.col-md-7.col-lg-4
              p Vestimenta de fibras animales y vegetales, pulseras de marfil.
          .row.justify-content-center.align-items-center(titulo="Egipcios")
            .col-sm-12.col-md-7.col-lg-4
              p Shenti, con un cinturón de cuero, falda larga. Las sirvientas iban desnudas, calzado de fibras vegetales, cuero trenzado y papiro.
            .col-6.col-md-3.col-lg-2
              img(src='@/assets/curso/temas/tema1/linea1/icono4.png', alt='')
            .col-12.col-md-10.col-lg-5.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/tema1/linea1/imagen4.png', alt='')
          .row.justify-content-center.align-items-center(titulo="Sumerios")
            .col-12.col-md-10.col-lg-5.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/tema1/linea1/imagen5.png', alt='')
            .col-6.col-md-3.col-lg-2
              img(src='@/assets/curso/temas/tema1/linea1/icono5.png', alt='')
            .col-sm-12.col-md-7.col-lg-4
              p Traje de lujo, faldón, chal, kaunake, traje militar.
          .row.justify-content-center.align-items-center(titulo="Babilonia")
            .col-sm-12.col-md-7.col-lg-4
              p Tejedores de lana y de lino, túnica de talle recto y bordes con flecos, larga o corta, borlas y flecos.
            .col-6.col-md-3.col-lg-2
              img(src='@/assets/curso/temas/tema1/linea1/icono6.png', alt='')
            .col-12.col-md-10.col-lg-5.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/tema1/linea1/imagen6.png', alt='')
          .row.justify-content-center.align-items-center(titulo="Creta")
            .col-12.col-md-10.col-lg-5.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/tema1/linea1/imagen7.png', alt='')
            .col-6.col-md-3.col-lg-2
              img(src='@/assets/curso/temas/tema1/linea1/icono7.png', alt='')
            .col-sm-12.col-md-7.col-lg-4
              p Primer corsé, falda sujeta con un cinturón metálico cubierto con un delantal, mangas ceñidas, anillos, pulseras y collares.
          .row.justify-content-center.align-items-center(titulo="Persas")
            .col-sm-12.col-md-7.col-lg-4
              p La prenda típica era una túnica, ropa interior y el bordado de aplicación, calzado anatómico, atado a los tobillos con correas y botones.
            .col-6.col-md-3.col-lg-2
              img(src='@/assets/curso/temas/tema1/linea1/icono8.png', alt='')
            .col-12.col-md-10.col-lg-5.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/tema1/linea1/imagen8.png', alt='')
          .row.justify-content-center.align-items-center(titulo="Romanos")
            .col-12.col-md-10.col-lg-5.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/tema1/linea1/imagen9.png', alt='')
            .col-6.col-md-3.col-lg-2
              img(src='@/assets/curso/temas/tema1/linea1/icono9.png', alt='')
            .col-sm-12.col-md-7.col-lg-4
              p Túnica que los hombres usaban hasta las rodillas y las mujeres hasta los pies, bordados en hilos de oro.
          .row.justify-content-center.align-items-center(titulo="Edad Media")
            .col-sm-12.col-md-7.col-lg-4
              p Zapatos a la polonesa, doble túnica hasta los pies, manto con broche en el centro y un velo cubriendo la cabeza.
            .col-6.col-md-3.col-lg-2
              img(src='@/assets/curso/temas/tema1/linea1/icono10.png', alt='')
            .col-12.col-md-10.col-lg-5.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/tema1/linea1/imagen10.png', alt='')
          .row.justify-content-center.align-items-center(titulo="Edad Moderna")
            .col-12.col-md-10.col-lg-5.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/tema1/linea1/imagen11.png', alt='')
            .col-6.col-md-3.col-lg-2
              img(src='@/assets/curso/temas/tema1/linea1/icono11.png', alt='')
            .col-sm-12.col-md-7.col-lg-4
              p Prendas confeccionadas por sastres, faldas acampanadas, cuellos de encaje, crinolina, gorguera, prendas ajustadas, corsé desde el busto hasta la cadera.
          .row.justify-content-center(titulo="Edad Contemporánea")
            .col-sm-12.col-md-611.col-lg-4
              .row
                .col-4.col-md-4.col-lg-6.mb-3
                  img(src='@/assets/curso/temas/tema1/linea1/imagen12a.png', alt='')
                .col-8.col-md-6.col-lg-6
                  img.mb-2.w-150x(src='@/assets/curso/temas/tema1/linea1/icono12a.png', alt='')
                  p.mb-0 Silueta imperio, vestidos delgados y vaporosos, vuelos y encajes en forma de cascada, vestido línea princesa, hombreras. Cuello de solapa.
            .col-sm-12.col-md-611.col-lg-4
              .row
                .col-4.col-md-4.col-lg-6.mb-3
                  img(src='@/assets/curso/temas/tema1/linea1/imagen12b.png', alt='')
                .col-8.col-md-6.col-lg-6
                  img.mb-2.w-150x(src='@/assets/curso/temas/tema1/linea1/icono12b.png', alt='')
                  p.mb-0 Silueta de reloj de arena, el corsé de metal o de ballenas, faldas largas o #[em blazers], sujetador, estética #[em flapper], traje de baño, el uso del pantalón.
            .col-sm-12.col-md-11.col-lg-4
              .row
                .col-4.col-md-4.col-lg-6.mb-3
                  img(src='@/assets/curso/temas/tema1/linea1/imagen12c.png', alt='')
                .col-8.col-md-6.col-lg-6
                  img.mb-2.w-150x(src='@/assets/curso/temas/tema1/linea1/icono12c.png', alt='')
                  p.mb-0 #[em Jeans] de tiro bajo, minifaldas, #[em shorts], zuecos o sandalias, estampados #[em animal print, Fast fashion,] pantalón pitillo, escote en V, supraciclaje, pantalón de tiro alto, blusas campesinas.
                
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Evolución de las prendas
    p Las prendas han ido evolucionando con el pasar de los años teniendo en cuenta diferentes factores. Estos factores determinan la decisión que toma cada persona para elegir que ponerse a diario.

    
    SlyderF.mb-5(columnas="col-md-6 col-lg-4")(data-aos="fade")
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-8
            img.p-3(src='@/assets/curso/temas/tema1/tarjeta2/imagen1.svg' alt='')
        h3.text-center Físicos
        p.text-center Clima, edad, estructura, género, salud.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-8
            img.p-3(src='@/assets/curso/temas/tema1/tarjeta2/imagen2.svg' alt='')
        h3.text-center Sociales - culturales
        p.text-center Clases sociales, labor, religión, trajes típicos.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-8
            img.p-3(src='@/assets/curso/temas/tema1/tarjeta2/imagen3.svg' alt='')
        h3.text-center Psicológicos
        p.text-center Estados de ánimo, desórdenes, autoestima.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-8
            img.p-3(src='@/assets/curso/temas/tema1/tarjeta2/imagen4.svg' alt='')
        h3.text-center Sexualidad
        p.text-center Orientación sexual, indumentaria.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-8
            img.p-3(src='@/assets/curso/temas/tema1/tarjeta2/imagen5.svg' alt='')
        h3.text-center Moda
        p.text-center Historia, mercadotecnia, identidad.


    .subt2.mb-4
      ul.lista-ul.mb-0
        li.mb-0
          i.fas.fa-circle
          span.mb-0.h4 ¿Por qué nos vestimos?

    .row.justify-content-center.align-items-center
      .col-lg-10
        LineaTiempoD.color-primario(data-aos="fade")
          .row.align-items-center.justify-content-center(numero="a." titulo="Físicos")
            .col-md-11.mb-4.mb-md-0
              .row.justify-content-center.align-items-center
                .bgblanco.px-0
                  ul.lista-ul--color.vamarillo.fa-ul.mb-0.p-4
                    li 
                      i.lista-ul__vineta
                      span.mb-0 #[b Clima:] el clima influye según la geografía; dependiendo de la temporada del año, las prendas se acomodan, teniendo en cuenta que en algunos países hay 4 estaciones o climas estables. 

                    li 
                      i.lista-ul__vineta
                      span.mb-0 #[b Edad:] las prendas son uno de los aspectos que deben evolucionar conforme a la etapa/edad que se vive. Para cada edad hay un estilo que encaja con la condición de cada persona. 

                    li 
                      i.lista-ul__vineta
                      span.mb-0 #[b Estructura corporal:] la estructura varía, depende del tipo de cuerpo, la talla, la contextura. Cada cuerpo, de acuerdo con su estructura corporal, tiene prendas que le favorecen más que otras.

                    li 
                      i.lista-ul__vineta
                      span.mb-0 #[b Género:] el género ha venido evolucionando en los últimos años; actualmente existe una gran diversidad de personas que no se identifican con un género en particular. Las marcas optan por ropa unisex, sin género.

                    li 
                      i.lista-ul__vineta
                      span.mb-0 #[b Salud:] teniendo en cuenta el estado de salud que se presente, existen muchas prendas que se adaptan. Algunas prendas deben adaptarse o construirse con cierta especialidad.
                  img(src='@/assets/curso/temas/tema1/acordeon1/imagen1.svg', alt='')
          .row.align-items-center.justify-content-center(numero="b." titulo="Sociales - culturales")
            .col-md-11.mb-4.mb-md-0
              .row.justify-content-center.align-items-center
                .bgblanco.px-0
                  ul.lista-ul--color.vamarillo.fa-ul.mb-0.p-4
                    li 
                      i.lista-ul__vineta
                      span.mb-0 #[b #[em Estatus] o clases sociales: ] está ligado con el poder adquisitivo y el presupuesto que invierta cada persona. De esto depende la cantidad de prendas y la calidad. Aspiracional: querer aparentar ser de una clase social - #[em "wannabe"]. 
                    li 
                      i.lista-ul__vineta
                      span.mb-0 #[b Religión: ] existe en el mundo muchas clases de normas ortodoxas que imponen ciertas reglas de indumentaria que se deben respetar de acuerdo con dichas creencias. 
                    li 
                      i.lista-ul__vineta
                      span.mb-0 #[b  Actividad laboral: ] uniformes laborales de acuerdo con la profesión, tienen logos institucionales, vestidos de acuerdo con la imagen corporativa de la empresa. Algunas normas de seguridad y salud en el trabajo.
                    li 
                      i.lista-ul__vineta
                      span.mb-0 #[b Trajes típicos: ] los trajes típicos corresponden a la indumentaria que expresa la identidad cultural de una región, pueblo, cultura o nación. Estas prendas se pueden utilizar para el uso cotidiano o para eventos especiales.
                    li 
                      i.lista-ul__vineta
                      span.mb-0 #[b Tribus urbanas: ] personas que comparten un universo de intereses comunes.
                  img(src='@/assets/curso/temas/tema1/acordeon1/imagen2.svg', alt='')
          .row.align-items-center.justify-content-center(numero="c." titulo="Psicológicos")
            .col-md-11.mb-4.mb-md-0
              .row.justify-content-center.align-items-center
                .bgblanco.px-0
                  ul.lista-ul--color.vamarillo.fa-ul.mb-0.p-4
                    li 
                      i.lista-ul__vineta
                      span.mb-0 #[b Estado de ánimo: ] el estado de ánimo determina la manera de vestir al iniciar el día: poderoso, triste, feliz, deprimido, entre otros. 
                  p.ps-5 "Cuando estamos estresados, utilizamos solo un 90 % de prendas que guardamos en nuestro guardarropa".(Harpersbazaar, 2019). 
                  img.mb-5(src='@/assets/curso/temas/tema1/acordeon1/imagen3.png', alt='')
                  h5.ps-4 Desórdenes
                  ul.lista-ul--color.vamarillo.fa-ul.mb-0.p-4
                    li 
                      i.lista-ul__vineta
                      span.mb-0 #[b  Mentales: ] cuestiones de autoestima, personas que pueden ser introvertidas o extrovertidas, algunas se esmeran para mostrarse. 
                    li
                      i.lista-ul__vineta
                      span.mb-0 #[b  Alimenticios: ] depende de cómo se siente respecto a su propia imagen y a su propio cuerpo. 
                  img(src='@/assets/curso/temas/tema1/acordeon1/imagen4.png', alt='')
          .row.align-items-center.justify-content-center(numero="d." titulo="Sexualidad")
            .col-md-11.mb-4.mb-md-0
              .row.justify-content-center.align-items-center
                .bgblanco.px-0
                  p.p-4 No solo depende de la orientación sexual, sino también del lenguaje de sexualización de la indumentaria, el sentirse sexy o atractivo para otra persona. También hay prendas de vestir con una finalidad erótica. 
                  img(src='@/assets/curso/temas/tema1/acordeon1/imagen5.png', alt='')
          .row.align-items-center.justify-content-center(numero="e." titulo="Moda")
            p.ps-4 Puede constituir un pensamiento histórico en un momento determinado de la época. Cómo vestirse según la mercadotecnia, tendencias de moda, temporadas y diseñadores. Se incentiva a las personas a que consuman y se "actualicen". En este sentido, existen dos grupos de personas:
            .col-md-11.mb-4.mb-md-0
              .row.justify-content-center.align-items-center
                .bgblanco.px-0
                  ul.lista-ul--color.vamarillo.fa-ul.mb-0.p-4
                    li 
                      i.lista-ul__vineta
                      span.mb-0 #[b #[em Fashion victims:] ] personas adictas al consumismo, al último grito de la moda, principales compradores del #[em fast fashion]. 
                    li
                      i.lista-ul__vineta
                      span.mb-0 #[b #[em Fashionistas:] ] personas que llevan a un extremo la moda, invierten en prendas costosas, únicas o de alta costura, para afirmar su identidad u originalidad; combinan lo nuevo con lo #[em vintage], son compradores activos, que están al corriente de las tendencias actuales. 
                  img(src='@/assets/curso/temas/tema1/acordeon1/imagen6.png', alt='')


    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Universos de vestuario
    
    p Son conceptos de moda que responden a la necesidad de categorizar, segmentar y agrupar prendas de vestir, accesorios e indumentaria con características similares; los universos de vestuario deben ser organizados según el consumidor o mercado objetivo de cada marca. 

    p.mb-5 Cuando se habla de determinantes o factores del ¿porqué? nos vestimos, el mercado no se queda atrás, la segmentación, gamas de mercados, categorización de productos frente a los escenarios del consumo va de la mano con la categorización de las prendas.

    .mb-5.p-4.p-lg-5.bg2(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-sm-12.col-md-7.col-lg-7.mb-3.mb-md-0
          ul.lista-ul--color.vamarillo.fa-ul.mb-0
            li.mb-0
              i.lista-ul__vineta
              span.mb-2 #[b Gama de mercado: ] conjunto de productos de un segmento de mercado que una empresa ofrece a sus consumidores.
            li.mb-0
              i.lista-ul__vineta
              span.mb-0 #[b Gama: ] cualquier serie de cosas que varían gradualmente.
            li.mb-0
              i.lista-ul__vineta
              span.mb-0 #[b Mercado: ] espacio físico o virtual en el que tienen lugar transacciones económicas.
            li.mb-0
              i.lista-ul__vineta
              span.mb-0 #[b Consumidor: ] es un agente económico con una serie de necesidades.
            li.mb-0
              i.lista-ul__vineta
              span.mb-0 #[b Segmento: ] es una parte o algo que junto con otras se encuentra formando un todo.
        .col-10.col-md-5.col-lg-3
          img(src='@/assets/curso/temas/tema1/imagen3.png', alt='')
 
    
    p En gamas de mercado para el sistema moda, se encuentran movimientos que se han ido adaptando a lo largo de la historia, a través de las necesidades, evoluciones y revoluciones. Cada una de las segmentaciones son movimientos transitorios, algunos de ellos perdurando con el paso de los años:
    
    .row.justify-content-center.mb-4
      .col-lg-8
        ol.lista-ol.fa-ul
          li.mb-1
            span.text-bold A. 
            span.mb-0 #[b Principales:] #[em Haute couture, pret a porter, fast fashion, slow fashion. ]
          li 
            span.text-bold B. 
            span.mb-0 #[b Transitorias:] #[em Vegan fashion, ethical fashion, eco fashion, circle fashion. ]

    SlyderF.mb-5(columnas="col-md-6 col-lg-4")
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/tarjeta3/imagen3.svg' alt='')
        h4 #[em Haute couture ] / Alta costura
        p Prendas exclusivas a la medida del cliente. Prendas hechas a medida, de forma artesanal.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/tarjeta3/imagen4.svg' alt='')
        h4 #[em Pret a Porter ] / Listo para llevar
        p Prendas producidas en serie con patrones que se repiten. Industrialización de la moda. No son personalizadas ni exclusivas.  #[em Ready to wear ].
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/tarjeta3/imagen5.svg' alt='')
        h4 #[em Fast Fashion ] / Moda rápida
        p Trasladar propuestas de grandes casas de diseño a tiendas para capturar alguna tendencia lo más rápido posible. Producción de prendas en tiempos muy cortos a un bajo costo: cápsulas.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6.col-md-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/tarjeta3/imagen6.svg' alt='')
        h4 #[em Slow Fashion ] / Moda lenta
        p Filosofía de consumo responsable. Concienciar sobre el impacto de las prendas de vestir en el medio ambiente, el agotamiento de recursos y la huella que está dejando la industria textil en la sociedad.
    
    .borde-redondo.bgi-2.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-sm-12.col-md-7.col-lg-7
          p Los universos de vestuario responden a la necesidad de establecer unas categorías bajo las cuales es posible agrupar productos indumentarios de acuerdo con unos parámetros de afinidad y correlación.
          p Están constituidos por conjuntos de prendas de vestir y accesorios con características similares que deben presentarse agrupados coherentemente bajo conceptos de moda y estar articulados según las necesidades específicas del consumidor o mercado objetivo de cada marca.
          p #[b Ocasión de uso: ] se refiere a los diferentes escenarios que hacen parte de la cotidianidad del consumidor, es decir, un espacio o una acción donde se aplica el concepto de universo de vestuario.
        .col-7.col-md-5.col-lg-4
          img.px-lg-2(src='@/assets/curso/temas/tema1/imagen4.png' alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-12.col-md-10.col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span Relación entre las ocasiones de uso y los universos de vestuario.        
        .tabla-b.bordenegro.color-secundario
          .tabla-b__header
            h4.mb-0 Ocasiones de uso      
          table
            tr
              td.bgblanco.p-2
              td.bg1claro.bordeizquierdocelda.text-center.p-2 #[b Protocolario ]
              td.bg1claro.bordeizquierdocelda.text-center.p-2 #[b Multi-ocasión ]
              td.bg1claro.bordeizquierdocelda.text-center.p-2 #[b Informal ]
              td.bg1claro.bordeizquierdocelda.text-center.p-2 #[b Complementos ]
            tr
              td.bgblanco.p-2 
              td.bordeizquierdocelda.bgblanco.p-2 Gala 
              td.bgblanco.bordeizquierdocelda.p-2 Causal 
              td.bgblanco.bordeizquierdocelda.p-2  #[em Kaki Wear ]
              td.bgblanco.bordeizquierdocelda.p-2  #[em Swimwear ]
            tr 
              td.bgblanco.text-center.p-2 #[b Universos de vestuario ]
              td.bordeizquierdocelda.p-2 Formal 
              td.bordeizquierdocelda.p-2
              td.bordeizquierdocelda.p-2  #[em Jeanswear ] 
              td.bordeizquierdocelda.p-2  #[em Beachwear ]
            tr
              td.bgblanco.p-2
              td.bordeizquierdocelda.bgblanco.p-2
              td.bgblanco.bordeizquierdocelda.p-2
              td.bgblanco.bordeizquierdocelda.p-2  #[em Sportswear ]
              td.bgblanco.bordeizquierdocelda.p-2  #[em Sleepwear ] 
            tr
              td.bgblanco.p-2 
              td.bordeizquierdocelda.p-2
              td.bordeizquierdocelda.p-2
              td.bordeizquierdocelda.p-2  #[em Activewear ]
              td.bordeizquierdocelda.p-2  #[em Underwear ]
            tr
              td.bgblanco.p-2
              td.bordeizquierdocelda.bgblanco.p-2
              td.bgblanco.bordeizquierdocelda.p-2
              td.bgblanco.bordeizquierdocelda.p-2  #[em Leisurewear ]
              td.bgblanco.bordeizquierdocelda.p-2 

    p.mb-4 A continuación se describen las características de cada conjunto:            
  
    AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-center(titulo="Protocolario - Gala")
        .col-md-5.mb-4.mb-md-0
          p Ligados a tradiciónes culturales y monárquicas, para eventos y celebraciones protocolarias en los altos rangos sociales.
          ul.lista-ul--color.vamarillo.fa-ul.mb-0
            li.mb-0 
              i.lista-ul__vineta.mb-0
              span.mb-0 Jerárquico.
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Distintivo.
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Diferenciador.
        .col-md-6
          img(src='@/assets/curso/temas/tema1/acordeon2/gala.png', alt='')
      .row.justify-content-center(titulo="Protocolario - Formal")
        .col-md-5.mb-4.mb-md-0
          p Surge al momento de la aparición de la alta costura y la necesidad de diferenciar rangos sociales y laborales. Se usa en múltiples actividades como ceremonias, mundo laboral y corporativo, eventos sociales.
          ul.lista-ul--color.fa-ul.vmorada
            li.mb-0 
              i.lista-ul__vineta.mb-0
              span.mb-0 Autocrático.
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Jerárquico.
            li.mb-0 
              i.lista-ul__vineta.mb-0
              span.mb-0 Distintivo. 
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Diferenciador.
          p Se usa en múltiples actividades como ceremonias, mundo laboral y corporativo, eventos sociales.
        .col-md-6
          img(src='@/assets/curso/temas/tema1/acordeon2/imagen1.png', alt='')
      .row.justify-content-center(titulo="Multiocasión - Casual")
        .col-md-5.mb-4.mb-md-0
          p Nace en los 60's. La participación femenina en el mundo permitió la incursión de nuevas estéticas, dinamizando la moda ejecutiva de la época.
          ul.lista-ul--color.fa-ul.vmorada
            li.mb-0 
              i.lista-ul__vineta.mb-0
              span.mb-0 Democrático.
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Versátil. 
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Flexible. 
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Interactivo.      
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Citadino.      
        .col-md-6
          img(src='@/assets/curso/temas/tema1/acordeon2/imagen2.png', alt='')
      .row.justify-content-center(titulo="Informal -  <em> Kaki wear </em>")
        .col-md-5.mb-4.mb-md-0
          p Nace en los 80's, cuando los llamados YUPI proponen asistir a su entorno laboral de una manera menos formal y rígida los viernes o en actividades menos exigentes. Se usa en múltiples actividades del día a día como: vida universitaria, actividades laborales, informales, tiempo libre.
          ul.lista-ul--color.fa-ul.vmorada
            li.mb-0 
              i.lista-ul__vineta.mb-0
              span.mb-0 Dinámico.
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Versátil. 
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Funcional. 
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Socio flexible.      
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Socio confortable.      
        .col-md-6
          img(src='@/assets/curso/temas/tema1/acordeon2/imagen3.png', alt='')
      .row.justify-content-center(titulo="Informal - <em> Jeanswear </em>")
        .col-md-5.mb-4.mb-md-0
          p Nace en lo más profundo de la cultura americana, primero con los mineros y vaqueros. En la década de los 50's se propone para uso cotidiano, de carácter rebelde. En los 80 ́s se convierte en una prenda para ambos sexos.
          ul.lista-ul--color.fa-ul.vmorada
            li.mb-0 
              i.lista-ul__vineta.mb-0
              span.mb-0 Dinámico.
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Versátil. 
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Funcional. 
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Socio flexible.      
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Socio confortable.      
        .col-md-6
          img(src='@/assets/curso/temas/tema1/acordeon2/imagen4.png', alt='')
      .row.justify-content-center(titulo="Informal -  <em>Sportswear</em>")
        .col-md-5.mb-4.mb-md-0
          p Aparece en los 70’s principalmente influenciado por los Juegos Olímpicos y por la creciente práctica de los deportes.
          ul.lista-ul--color.fa-ul.vmorada
            li.mb-0 
              i.lista-ul__vineta.mb-0
              span.mb-0 Tecnológico.
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Multi-Funcional. 
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Funcional. 
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Confortable.      
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Apariencia deportiva.      
        .col-md-6
          img(src='@/assets/curso/temas/tema1/acordeon2/imagen5.png', alt='')
      .row.justify-content-center(titulo="Informal - <em>Activewear</em>")
        .col-md-5.mb-4.mb-md-0
          p Ropa para hacer ejercicio; cada vez más importante debido a la necesidad de hombres y mujeres por conservar su salud física y mental.
          ul.lista-ul--color.vmorada
            li.mb-0 
              i.lista-ul__vineta.mb-0
              span.mb-0 Tecnológico.
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Confortable. 
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Segunda piel. 
        .col-md-6
          img(src='@/assets/curso/temas/tema1/acordeon2/imagen6.png', alt='')
      .row.justify-content-center(titulo="Informal - <em> Leisurewear </em>")
        .col-md-5.mb-4.mb-md-0
          p Nuevo concepto que surge en el año 2000, parte del estilo #[em freelance], incluye desde la ropa de dormir hasta aquella diseñada para estar en casa.
          ul.lista-ul--color.vmorada
            li.mb-0 
              i.lista-ul__vineta.mb-0
              span.mb-0 Relajado.
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Confortable. 
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Cómodo. 
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Descanso.      
        .col-md-6
          img(src='@/assets/curso/temas/tema1/acordeon2/imagen7.png', alt='')
      .row.justify-content-center(titulo="Complementos - <em> Swim-Beachwea </em>")
        .col-md-5.mb-4.mb-md-0
          p Más que un universo, se constituye en una ocasión de uso, sin embargo; deja de lado las prendas para nadar y se complementa con otros artículos, logrando un estilo de descanso y diversión.
          ul.lista-ul--color.vmorada
            li.mb-0 
              i.lista-ul__vineta.mb-0
              span.mb-0 Aire libre.
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Playa. 
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Deportes. 
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Recreación.      
        .col-md-6
          img(src='@/assets/curso/temas/tema1/acordeon2/imagen8.png', alt='')
      .row.justify-content-center(titulo="Complementos - <em> Sleepwear </em>")
        .col-md-5.mb-4.mb-md-0
          p Ropa para dormir, para uso en horas de descanso dentro del hogar.
          ul.lista-ul--color.vmorada
            li.mb-0 
              i.lista-ul__vineta.mb-0
              span.mb-0 Descanso.
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0 Comodidad. 
        .col-md-6
          img(src='@/assets/curso/temas/tema1/acordeon2/imagen9.png', alt='')
      .row.justify-content-center(titulo="Complementos - <em>Underwear</em>")
        .col-md-5.mb-4.mb-md-0
          p Ropa  interior, lencería.
          ul.lista-ul--color.vmorada
            li.mb-0 
              i.lista-ul__vineta.mb-0
              span.mb-0 Comodidad.
        .col-md-6
          img(src='@/assets/curso/temas/tema1/acordeon2/imagen10.png', alt='')
   
    .row.justify-content-center.mb-4
      .col-lg-8
        .cajon.color-acento-contenido.p-4
          p.mb-0 Todas las marcas tienen una categorización de producto, la cual en gran parte se basa en las ocasiones de uso y los universos de vestuario; esto permite tener una mejor segmentación dependiendo de las necesidades del consumidor.

    p Revisa el contenido del video, que puede resultar útil para complementar el aprendizaje acerca de los universos de vestuario.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/VsTacEciP3k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Gamas de mercado - Universos de vestuarios - Ocasiones de uso


    Separador
    #t_1_3.titulo-segundo.color-acento-contenido.mb-4
      h2 1.3 Perfil y estilo de consumidor
    
    p Para el análisis de una marca o mercado, se requiere de la categorización de grupos de personas con características similares, estudio que permitirá identificar su comportamiento, consumo e intereses, permitiendo así que el producto o servicio a ofrecer sea mucho más específico y certero con el cliente o nicho de mercado. 
    
    .bg1.p-4.mb-5(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-10.col-md-5.col-lg-3.mb-3.mb-md-0
          img(src='@/assets/curso/temas/tema1/imagen6.png', alt='')
        .col-sm-12.col-md-7.col-lg-7
          h4 ¿Quién es el consumidor? 
          p.mb-0 Se entiende por consumidor al individuo que requiere satisfacer cierta necesidad a través de la compra u obtención de determinados productos. El consumidor no es un simple agente #[b pasivo ] que espera a que le ofrezcan productos; es un agente #[b activo ] con el poder suficiente para lograr cambios en las ofertas y hasta en las mismas empresas, para que se ajusten a sus requerimientos y necesidades.
  
    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Perfil del consumidor
    
    p Es la descripción de las características de los consumidores de un producto o usuarios de un servicio determinado y un modelo de pensamiento. Es una de las variables para la definición de cualquier estrategia de #[em marketing]. El perfil no se determina solo por la edad ni por el segmento socio económico.
    p.mb-4 A continuación se describen los diferentes perfiles:

    .tarjeta.bgi-2.p-4.p-lg-5.mb-5
      SlyderA(tipo="b")
        .row.align-items-center
          .col-lg-7
            h4 Tradicional
            p Es un consumidor que participa en un ambiente social exigente en el que busca reconocimiento, aceptación y afirmación de los demás; invierte mucho dinero, tiempo y energía en sobresalir y destacarse.
            p.mb-3 #[b Características: ]
            ul.lista-ul--color.vamarillo.fa-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                span.mb-0 Las tradiciones permanecen.
              li.mb-0
                i.lista-ul__vineta.mb-0
                span.mb-0 Es rígido, formal y exigente con la etiqueta y el protocolo.
              li.mb-0
                i.lista-ul__vineta.mb-0
                span.mb-0 Presenta resistencia al cambio.
              li.mb-0 
                i.lista-ul__vineta.mb-0
                span.mb-0 Mantiene su estilo a través del tiempo.
              li.mb-0
                i.lista-ul__vineta.mb-0
                span.mb-0 Es reservado y se toma tiempo para involucrar nuevos conceptos y productos innovadores.
              li.mb-0
                i.lista-ul__vineta.mb-0
                span.mb-0 Busca siempre un sello de tradición y distinción.
              li.mb-0
                i.lista-ul__vineta.mb-0
                span.mb-0 Es fiel a las marcas, busca en ellas el estatus.
              li.mb-0
                i.lista-ul__vineta.mb-0
                span.mb-0 Mantiene y aprecia los referentes del pasado.
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema1/tarjeta4/imagen1.png')
        .row.align-items-center.ps-3
          .col-lg-7
            h4 Neo tradicional
            p Es un consumidor evolucionado y sintonizado con el desarrollo del entorno. Tiene un mayor nivel de sensibilidad y flexibilidad. Se detiene a observar y se deja influenciar por nuevos referentes, conceptos y propuestas de moda. Mantiene un punto de equilibrio entre la tradición y la innovación, integrando los fenómenos de la moda, la evolución cultural y social a su estilo personal.
            p.mb-3 #[b Características: ]
            ul.lista-ul--color.fa-ul.vmorada
              li.mb-0 
                i.lista-ul__vineta.mb-0
                span.mb-0 Las tradiciones permanecen.
              li.mb-0
                i.lista-ul__vineta.mb-0
                span.mb-0 Conserva las normas.
              li.mb-0
                i.lista-ul__vineta.mb-0
                span.mb-0 Mantiene el gusto y aprecia la etiqueta y el protocolo, pero no las maneja con rigor.
              li.mb-0 
                i.lista-ul__vineta.mb-0
                span.mb-0 Involucra fácilmente nuevos conceptos y productos innovadores.
              li.mb-0
                i.lista-ul__vineta.mb-0
                span.mb-0 Busca siempre un sello de tradición y distinción.
              li.mb-0
                i.lista-ul__vineta.mb-0
                span.mb-0 Fiel a las marcas, busca en ellas el estatus.
              li.mb-0
                i.lista-ul__vineta.mb-0
                span.mb-0 Aprecia los referentes actuales.
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema1/tarjeta4/imagen2.png')
        .row.align-items-center.ps-3
          .col-lg-7
            h4 Contemporáneo
            p Surge de los cambios sociales, económicos y tecnológicos de las últimas décadas, dando origen a un nuevo modelo de comportamiento, donde se encuentra un perfil original y auténtico que está en permanente evolución. Es multicultural, dinámico y explorador constante de su propio desarrollo personal, emocional y profesional.
            p.mb-3 #[b Características: ]
            ul.ul.lista-ul--color.vamarillo.fa-ul.mb-0
              li.mb-0 
                i.lista-ul__vineta.mb-0
                span.mb-0 Evoluciona y modifica sus valoraciones.
              li.mb-0
                i.lista-ul__vineta.mb-0
                span.mb-0 Tiene definido su propio estilo personal.
              li.mb-0
                i.lista-ul__vineta.mb-0
                span.mb-0 El desarrollo personal y profesional está por encima de lo familiar.
              li.mb-0 
                i.lista-ul__vineta.mb-0
                span.mb-0 La mujer juega un rol profesional, laboral, político y familiar.
              li.mb-0
                i.lista-ul__vineta.mb-0
                span.mb-2 Sensible al cambio, adopta fácilmente nuevas alternativas para estar en constante evolución.
              li.mb-0
                i.lista-ul__vineta.mb-0
                span.mb-0 Es dinámico.
              li.mb-0
                i.lista-ul__vineta.mb-0
                span.mb-0 Es citadino y urbano. 
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema1/tarjeta4/imagen3.png')
        .row.align-items-center.ps-3
          .col-lg-7
            h4 Vanguardista
            p Es un destacado grupo social inconforme y extremadamente original. Genera cambios y origina nuevos conceptos, es innovador, rompe esquemas y paradigmas de su entorno directo, generando cambios que se reflejan como tendencias globales.
            p.mb-3 #[b Características: ]
            ul.ul.lista-ul--color.fa-ul.vmorada
              li.mb-0 
                i.lista-ul__vineta.mb-0
                span.mb-0 Cambia y modifica fácilmente su escala de valoraciones.
              li.mb-0
                i.lista-ul__vineta.mb-0
                span.mb-0 No tiene apegos ni crea compromisos con ningún formato.
              li.mb-0
                i.lista-ul__vineta.mb-0
                span.mb-0 Vive pendiente de lo que surge en las grandes capitales del mundo.
              li.mb-0 
                i.lista-ul__vineta.mb-0
                span.mb-0 La innovación es parte de su vida diaria, es cambiante e inestable.
              li.mb-0
                i.lista-ul__vineta.mb-0
                span.mb-0 Lo motiva explorar referentes en otras culturas para convertirse en habitante planetario.
              li.mb-0
                i.lista-ul__vineta.mb-0
                span.mb-0 Su vida viaja a la velocidad del Internet.
              li.mb-0
                i.lista-ul__vineta.mb-0
                span.mb-0 Todo es recibido, aceptado, permitido y adoptado tal vez solo por hoy.
              li.mb-0
                i.lista-ul__vineta.mb-0
                span.mb-0 Es atrevido, le gusta el juego, el riesgo, lo novedoso.
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema1/tarjeta4/imagen4.png')
        .row.ps-3
          .col-lg-7
            h4 Exhibicionista
            p Resulta de un deseo personal por destacarse, llamar la atención y proyectarse como “distinto” a los demás. El estilo es lo de menos; la imagen es todo.
            p.mb-3 #[b Características: ]
            ul.ul.lista-ul--color.vamarillo.fa-ul.mb-0
              li.mb-0 
                i.lista-ul__vineta.mb-0
                span.mb-0 Quiere llamar permanentemente la atención y ser distinto de los demás.
              li.mb-0
                i.lista-ul__vineta.mb-0
                span.mb-0 Rompe todos los esquemas para no pasar desapercibido.
              li.mb-0
                i.lista-ul__vineta.mb-0
                span.mb-2 Concentra su atención en todas aquellas rarezas y excentricidades que el mercado le ofrece o de las que él mismo se apropia.
              li.mb-0 
                i.lista-ul__vineta.mb-0
                span.mb-0 Prefiere proyectar una imagen nueva a regirse por un canon establecido.
              li.mb-0
                i.lista-ul__vineta.mb-0
                span.mb-0 Su apariencia personal es original e innovadora, pero extremadamente llamativa.
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema1/tarjeta4/imagen5.png')
      
    .subt.mb-5(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Estilos del consumidor
    
    .subt2.mb-4
      ul.lista-ul.mb-0
        li.mb-0
          i.fas.fa-circle
          span.mb-0.h4 ¿Qué es el estilo?
    p.mb-5 Coherencia entre el ser y el parecer. La relación que tiene el modelo de pensamiento y la actitud personal define el estilo de cada individuo. El estilo refleja todos los aspectos de una persona: el pensamiento, las acciones y la relación con los demás y los objetos; además, sus gustos, preferencias, motivaciones, valoraciones, necesidades y actividades reflejadas en sus actitudes.

    .mb-4.p-4.bg2(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-8.col-md-5.col-lg-3.mb-3.mb-md-0
          img(src='@/assets/curso/temas/tema1/imagen7.png')
        .col-sm-12.col-md-7.col-lg-7
          p #[b El estilo:] es una selección y acumulación de vivencias, referentes, culturas e influencias que se prioriza, valora y manifiesta con nuestra actitud y expresión a través de los objetos que elegimos para llevar en nuestra indumentaria y nuestro diario vivir, lo que contribuye a la coherencia en el habitus, hábito, hábitat que determinará un estilo personal, particular y plural.
          ul.ul.lista-ul--color.vamarillo.fa-ul
            li.mb-0 
              i.lista-ul__vineta.mb-0
              span.mb-0.text-bold El estilo personal es un proceso creativo constante y atractivo, que evoluciona el ser.
            li.mb-0
              i.lista-ul__vineta.mb-0
              span.mb-0.text-bold No tiene reglas, excepto las que uno se ponga; las cuales también pueden ser ajustadas.

    .tarjeta.bgi-4.p-4.p-lg-5
      .tarjeta.bg-white.p-4
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-lg-7
              h4 Estilo Clásico
              p Obra que se tiene por modelo digno de imitación; genialidad en la idea o diseño donde el valor y el aprecio permanecen en el tiempo y son sensibles a evolucionar.
              p.mb-2 #[b Características: ]
              ul.lista-ul--color.vamarillo.fa-ul
                li.mb-0 
                  i.lista-ul__vineta.mb-0
                  span.mb-0 Tener el estilo clásico no quiere decir que se ignoren las tendencias de moda.
                li.mb-0
                  i.lista-ul__vineta.mb-0
                  span.mb-0 Es tener prendas claves que se editan, que se pueden combinar y que permanecen en el tiempo.
              .tarjeta.bg2.p-4
                p.mb-0 “¡Innovación! Uno no puede ser innovador por siempre. Yo quiero crear clásicos.” 
                h5.text-end #[b (Coco Chanel) ] 
            .col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema1/tarjeta5/imagen1.png')
          .row.justify-content-center
            .col-lg-7
              h4 Estilo Bohemio
              p El estilo boho o bohemio es un estilo originalmente popularizado por los bohemios en la década de los 60, un grupo de gente que rechazaba los valores morales tradicionales vivía un estilo de vida nómada. No solía ser considerado de moda por los estándares del momento. Originalmente, se usaba por comodidad y para desafiar las normas de vestir tradicionales.
              p.mb-2 #[b Características: ]
              ul.lista-ul--color.vamarillo.fa-ul
                li.mb-0 
                  i.lista-ul__vineta.mb-0
                  span.mb-0 El estilo bohemio es relajado, confortable y, lo más importante, una expresión personal.

                li.mb-0 
                  i.lista-ul__vineta.mb-0
                  span.mb-0 Valora la comodidad.
                li.mb-0
                  i.lista-ul__vineta.mb-0
                  span.mb-0 Las mujeres optan por vestidos sueltos, túnicas, faldas de volados y pantalones amplios o tipo gaucho.
              .tarjeta.bg2.p-4
                p.mb-0 “No se puede tener un estilo bohemio usando prendas ajustadas; esto no funciona. Tiene que tener la posibilidad de moverse, bailar y escalar.”  
                h5.text-end #[b (Diane Von Furstenberg) ]
            .col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema1/tarjeta5/imagen2.png')
          .row.justify-content-center
            .col-lg-7
              h4 Estilo Minimalista
              p El concepto nació en los años sesenta, con la idea de “menos es más”, del arquitecto Mies Van Der Rohe, quien propuso un estilo de vida que rescata la importancia de la persona frente a una sociedad consumista. A grandes rasgos, trata no solo de usar poco, sino de encontrar el equilibrio entre reducir y exagerar en la decoración, los detalles y las siluetas.
              p.mb-2 #[b Características: ]
              ul.lista-ul--color.vamarillo.fa-ul.mb-0
                li.mb-0 
                  i.lista-ul__vineta.mb-0
                  span.mb-0 El estilo minimalista requiere de disciplina, consistencia y gran atención por la calidad.
                li.mb-0 
                  i.lista-ul__vineta.mb-0
                  span.mb-0 La mayoría de los minimalistas son metódicos en el momento de vestirse y tienen un gran sentido y conciencia de sí mismos.
                li.mb-0
                  i.lista-ul__vineta.mb-0
                  span.mb-0 Son muy fieles a algunas marcas que les garantizan cortes y diseños perfectos, telas de alta calidad y tecnológicas.
              .tarjeta.bg2.p-4
                p.mb-0 “En el minimalismo no se trata de abandonar los diseños o los estampados. Yo veo al minimalismo como la filosofía que envuelve el total sentido del balance, conociendo cuándo quitar o sustraer algo. Es un vicio por los cortes absolutamente impecables, juegos tranquilos del color, siluetas muy fuertes y limpias.”   
                h5.text-end #[b (Calvin Klein) ]
            .col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema1/tarjeta5/imagen3.png')
          .row.justify-content-center
            .col-lg-7
              h4 Estilo  #[em Street Fashion ]
              p Este estilo único y original se observa en las calles de todo el mundo, donde las personas adoptan la indumentaria de manera muy personal. Estas personas no siguen las tendencias de moda establecidas; por el contrario, son ellas quienes inspiran a los diseñadores a crear nuevas colecciones.
              p.mb-2 #[b Características: ]
              ul.lista-ul--color.vamarillo.fa-ul
                li.mb-0 
                  i.lista-ul__vineta.mb-0
                  span.mb-0 Es original y no sigue tendencias.
                li.mb-0 
                  i.lista-ul__vineta.mb-0
                  span.mb-0 Crea su propia identidad y estilo.
                li.mb-0
                  i.lista-ul__vineta.mb-0
                  span.mb-0 Es rebelde.
                li.mb-0
                  i.lista-ul__vineta.mb-0
                  span.mb-0 Les interesa la autenticidad de cada persona, antes que lo que está de moda en el mercado.
            .col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema1/tarjeta5/imagen4.png')
          .row.justify-content-center
            .col-lg-7
              h4 Estilo Ecléctico
              p Una persona ecléctica es aquella que selecciona sus prendas de todos los estilos y las mezcla de una manera única. No hay una fórmula ni elementos favoritos; es una invención permanente.
              p.mb-2 #[b Características: ]
              ul.lista-ul--color.vamarillo.fa-ul
                li.mb-0 
                  i.lista-ul__vineta.mb-0
                  span.mb-0 Es original y no sigue tendencias.
                li.mb-0 
                  i.lista-ul__vineta.mb-0
                  span.mb-0 Mezclar prendas #[em vintage] elegidas con estilo individual.
                li.mb-0
                  i.lista-ul__vineta.mb-0
                  span.mb-0 Objetos antiguos elegidos con buen gusto y algo de audacia.
                li.mb-0
                  i.lista-ul__vineta.mb-0
                  span.mb-0 Se pueden incorporar objetos exóticos, prendas de otras décadas, accesorios de todo tipo, como si se tratara de un collage.
            .col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema1/tarjeta5/imagen5.png')
          .row.justify-content-center
            .col-lg-7
              h3 Estilo Nostálgico
              p Es un estilo que vive del recuerdo, del pasado. Es romántico y tiene en su esencia toques #[em vintage]  y colores pasteles y empolvados.
              p.mb-2 #[b Características: ]
              ul.lista-ul--color.vamarillo.fa-ul
                li.mb-0 
                  i.lista-ul__vineta.mb-0
                  span.mb-0 El estilo nostálgico tiene la característica de exigir gran decoración, la cual muchas veces llega a ser excesiva.
                li.mb-0 
                  i.lista-ul__vineta.mb-0
                  span.mb-0 Es femenino y romántico.
                li.mb-0
                  i.lista-ul__vineta.mb-0
                  span.mb-0 Las flores y los volúmenes se destacan.
            .col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema1/tarjeta5/imagen6.png')


    Separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Tendencias
    
    p.mb-4 Las tendencias se definen a través de una serie de formas visuales y características específicas que identifican un momento concreto; esta información determina el comportamiento de consumo. Las tendencias mueven las industrias, no solo la industria de la moda, sino las de consumo, servicios, incluso pensamiento.

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-sm-12.col-lg-6.mb-3.mb-lg-0
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/imagen9.png' alt='')
          .tarjeta.color-primario
            .p-4.align-content-center
              h4 ¿Qué es?
              p.mb-0 Las tendencias buscan entender qué está pasando en el contexto mundial. "Tendencia" significa desarrollarse o cambiar en una dirección general. Es la predicción del estado de ánimo, comportamientos y hábitos del consumidor.
      .col-sm-12.col-lg-6.mb-3.mb-lg-0
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/imagen10.png' alt='')
          .tarjeta.color-acento-contenido
            .p-4.align-content-center
              h4 ¿Quiénes?
              p.mb-0 Un grupo de personas dedicadas a ser cazadores de tendencias, los llamados "coolhunter" detecta y predice las novedades que vendrán en los campos de la moda y el consumo.

    .subt.mb-5(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Características de las tendencias
    
    .row.align-items-center.justify-content-center.bg-deco.mb-5(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        img(src="@/assets/curso/temas/tema1/imagen11.png")
      .col-lg-6
        .bg2.p-4
          ol.lista-ol--cuadro.fa-ol.mb-0
            li.mb-0 
              .lista-ol--cuadro__vineta(style='color: black')
                span.fw-bold.mb-0 A
              p.mb-0 #[b Ritmo: ] forma en la que suceden y se alternan una serie de dinámicas, conceptos y sentires que componen la tendencia.
            li.mb-0
              .lista-ol--cuadro__vineta(style='color: black')
                span.fw-bold.mb-0 B
              p.mb-0 #[b Información: ] toda la variedad de información que pueda complementar el concepto de la tendencia.
            li.mb-0
              .lista-ol--cuadro__vineta(style='color: black')
                span.fw-bold.mb-0 C
              p.mb-0 #[b Diversificación: ] diferentes variables en donde se puede manifestar la tendencia, sus conceptos e historias.
            li.mb-0 
              .lista-ol--cuadro__vineta(style='color: black')
                span.fw-bold.mb-0 D
              p.mb-0 #[b Tecnología: ] medios por los cuales se revela la información y su implementación.
    

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 ¿Cómo identificar una tendencia?

    .tarjeta--container.row.mb-5
      .col-md-4.col-lg.tarjeta.color-acento-contenido.p-lg-5.p-4
        .row.justify-content-center.mb-4
          .col-4.col-md-6.col-lg-5
            img(src='@/assets/curso/temas/tema1/tarjeta6/imagen1.png')
        h2.text-center Metatendencias
        p “Una metatendencia significa un cambio multidimensional, por oposición a un cambio lineal o secuencial. Son los cambios sustanciales en nuestra estructura socioeconómica” (Blink Design – Laura Novik).
      .col-md-4.col-lg.tarjeta.color-primario.p-lg-5.p-4
        .row.justify-content-center.mb-4
          .col-4.col-md-6.col-lg-5
            img(src='@/assets/curso/temas/tema1/tarjeta6/imagen2.png')
        h2.text-center Macrotendencias
        p Son las tendencias donde se involucran muchas áreas, sistemas productivos y aspectos emocionales.
      .col-md-4.col-lg.tarjeta.color-acento-contenido.p-lg-5.p-4
        .row.justify-content-center.mb-4
          .col-4.col-md-6.col-lg-5
            img(src='@/assets/curso/temas/tema1/tarjeta6/imagen3.png')
        h2.text-center Microtendencias
        p Son las que dan origen a las llamadas “modas pasajeras”, cambian cada temporada, revolucionan el mercado, abren un abanico de posibilidades y promueven el consumo.

    .subt.mb-4(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 ¿Quiénes estudian las tendencias?

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-5.col-md-6.col-11.mb-4
        .crd_hover_txt(data-aos="fade-left")
          .crd_hover_txt--img
            img(src="@/assets/curso/temas/tema1/tarjeta9/imagen1.png")
            .row.bg2claro.p-4
              ul.lista-ul--color.mb-0
                li.mb-0 
                  i.fas.fa-caret-up.texamarillooscuro
                  span.h4.mb-0.text-capitalize #[b Inexmoda]
                    p.mb-0 https://www.inexmoda.org.co/
      .col-xl-4.col-lg-5.col-md-6.col-11.mb-4
        .crd_hover_txt(data-aos="fade-left")
          .crd_hover_txt--img
            img(src="@/assets/curso/temas/tema1/tarjeta9/imagen2.png")
            .row.bg2claro.p-4
              ul.lista-ul--color.mb-0
                li.mb-0 
                  i.fas.fa-caret-up.texamarillooscuro
                  span.h4.mb-0.text-capitalize #[b Premiére vision paris]
                    p.mb-0 https://www.premierevision.com/en/
      .col-xl-4.col-lg-5.col-md-6.col-11.mb-4
        .crd_hover_txt(data-aos="fade-left")
          .crd_hover_txt--img
            img(src="@/assets/curso/temas/tema1/tarjeta9/imagen3.png")
            .row.bg2claro.p-4
              ul.lista-ul--color.mb-0
                li.mb-0 
                  i.fas.fa-caret-up.texamarillooscuro
                  span.h4.mb-0.text-capitalize #[b Fashion trendsetter]
                    p.mb-0 https://www.fashiontrendsetter.com/v2/
      .col-xl-4.col-lg-5.col-md-6.col-11.mb-4
        .crd_hover_txt(data-aos="fade-left")
          .crd_hover_txt--img
            img(src="@/assets/curso/temas/tema1/tarjeta9/imagen4.png", alt="alt")
            .row.bg2claro.p-4
              ul.lista-ul--color.mb-0
                li.mb-0 
                  i.fas.fa-caret-up.texamarillooscuro
                  span.h4.mb-0.text-capitalize #[b Fashion snoops]
                    p.mb-0 https://www.fashionsnoops.com/
      .col-xl-4.col-lg-5.col-md-6.col-11.mb-4
        .crd_hover_txt(data-aos="fade-left")
          .crd_hover_txt--img
            img(src="@/assets/curso/temas/tema1/tarjeta9/imagen5.png", alt="alt")
            .row.bg2claro.p-4
              ul.lista-ul--color.mb-0
                li.mb-0 
                  i.fas.fa-caret-up.texamarillooscuro
                  span.h4.mb-0.text-capitalize #[b WGSN ]
                    p.mb-0 https://www.wgsn.com/es/wgsn/
      .col-xl-4.col-lg-5.col-md-6.col-11.mb-4
        .crd_hover_txt(data-aos="fade-left")
          .crd_hover_txt--img
            img(src="@/assets/curso/temas/tema1/tarjeta9/imagen6.png", alt="alt")
            .row.bg2claro.p-4
              ul.lista-ul--color.mb-0
                li.mb-0 
                  i.fas.fa-caret-up.texamarillooscuro
                  span.h4.mb-0.text-capitalize #[b Peclersparis]
                    p.mb-0 https://www.peclersparis.com/fr/

    .bg3.p-4.mb-5(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-5.col-md-4.col-lg-2.mb-3.mb-md-0
          img(src='@/assets/curso/temas/tema1/signo-de-interrogacion.png')
        .col-sm-12.col-md-7.col-lg-7
          p #[b La clave es: ] identifiquemos los principales factores que afectan el pronóstico de las tendencias. <br>
          p.mb-0 #[b Estaciones: ] las tendencias se basan en las estaciones de primavera (#[em Spring]), verano (#[em Summer]), otoño (#[em Autumn]) e invierno (#[em Winter]). 

    .row.justify-content-center.align-items-center
      p.mb-4 Revisa el siguiente video que puede resultar útil para aprender más sobre el entorno de las tendencias.
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/cjhRls-yhvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Tendencias
    

    Separador
    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5 #[em Moodboard ] - #[b Cuadro metamórfico ]

    p.mb-4.mb-lg-5 Los moodboards son tableros creativos que permiten visualizar y conceptualizar ideas para el desarrollo de productos o servicios; consisten en recolectar imágenes que muestran lo que se quiere expresar. Esta es una forma implementada en las áreas de diseño para dar a conocer las ideas de una manera mucho más dinámica.

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-10.position-relative
        .avatar
          img(src="@/assets/curso/temas/tema1/imagen14.svg", alt="").img-avatar
        .crd.crd--avatarHorizontal.crd--first.ps-4.ps-lg-5.py-4
          .row.align-items-center
            .col
              h4.mb-2 ¿Qué es un  #[em moodboard?]
              p.mb-0 Como su nombre lo indica, es un tablero de inspiración visual que logra conectar las ideas en un solo espacio por medio visual o físico. Reúne imágenes, colores, texturas, frases... con la intención de hacer tangible un concepto o un ambiente.
        .crd.crd--avatarHorizontal.crd--sec.ps-4.ps-lg-5.py-4
          .row.align-items-center
            .col
              h4.mb-2 ¿Para qué sirve?
              p.mb-0 Para generar una inspiración conceptual donde se plasman sentimientos o estados de ánimo que desean evocar.
        .crd.crd--avatarHorizontal.crd--last.ps-4.ps-lg-5.py-4
          .row.align-items-center
            .col
              h4.mb-2 ¿Cómo se hace?
              p.mb-0 #[b Físico: ] recortes de revista, texturas, elementos.
              p.mb-0 #[b Digital: ] imágenes digitales, complementos.

    .subt.mb-5(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 Proceso para desarrollar un  #[em moodboard ]
    
    .row.justify-content-center.mb-5
      .col-md-6.col-xl.mb-3.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.h-100.p-5
          .tarjeta-numerada__numero.t1
            img(src="@/assets/curso/temas/tema1/tarjeta10/icono1.png", alt="")
          h4.text-center Palabras claves
          p.text-center.mb-0 Defina las palabras esenciales, frases y/o conceptos.
      .col-md-6.col-xl.mb-3.mb-xl-0
        .tarjeta-numerada.color-primario.h-100.p-5
          .tarjeta-numerada__numero.t1
            img(src="@/assets/curso/temas/tema1/tarjeta10/icono2.png", alt="")
          h4.text-center Imágenes
          p.text-center.mb-0 Realice un banco de imágenes acorde a los conceptos, referentes, paleta de color y demás.
      .col-md-6.col-xl.mb-3.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.h-100.p-5
          .tarjeta-numerada__numero.t1
            img(src="@/assets/curso/temas/tema1/tarjeta10/icono3.png", alt="")
          h4.text-center Diagramación
          p.text-center.mb-0 Empiece con la diagramación en su #[em moodboard]; puede hacerlo lineal o abstracto. Herramientas: Canva - PowerPoint.

    .subt.mb-5(data-aos="fade-right")
      .d-flex.align-items-center.mb-1
        img(src='@/assets/curso/temas/tema1/subt.svg', alt='')
        h3.mb-0.ms-2 ¿Qué es un cuadro metamórfico?
    
    p Es una metodología de diseño que permite mostrar fácilmente un concepto definido y que se vea reflejado armónicamente en los productos realizados. Metodología tomada del diseño industrial.

    TabsA.color-acento-botones.mb-5(data-aos="fade")
      .tarjeta.p-4.bg2(titulo="¿Para qué sirve?")
        .row.align-items-center
          .col-lg-9
            p Esta metodología permite lograr variedad de diseños rápidamente, facilita la realización de evoluciones y modificaciones de diseño en una colección sin que se pierda la coherencia conceptual.
          .col-lg-2.d-none.d-lg-block.mb-0
            img(src='@/assets/curso/temas/tema1/tarjeta8/imagen1.png')
      .tarjeta.p-4.bg2(titulo="¿Cómo iniciar?")
        .row.align-items-center
          .col-lg-9
            p #[b Tipologías: ] elegir las tipologías a trabajar.
            p #[b Siluetas: ] definir el tipo de silueta de la prenda.
            p #[b Visualizar ] partes de las prendas por separado: cuellos, bolsillos, mangas, escotes, sistema de cierre, sistema de ajuste.
          .col-lg-2.d-none.d-lg-block.mb-0
            img(src='@/assets/curso/temas/tema1/tarjeta8/imagen2.png')
      .tarjeta.p-4.bg2(titulo="¿Cómo se realiza?")    
        .row.align-items-center
          .col-lg-9
            p Se organizan las ideas utilizando un esquema tipo tabla, para generar varias opciones de cada una de esas partes (estas siempre deben comunicar el concepto de la marca).
          .col-lg-2.d-none.d-lg-block.mb-0
            img(src='@/assets/curso/temas/tema1/tarjeta8/imagen3.png')

    .tarjeta.color-acento-contenido.p-4.p-lg-5.mb-5(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-5.col-md-3.col-lg-2.mb-3.mb-md-0
          img(src='@/assets/curso/temas/tema1/signo-de-interrogacion2.png')
        .col-sm-12.col-md-8.col-lg-7
          p #[b La clave es: ] cada variación debe ser coherente con el concepto, las siluetas, formas, sensibilidad y demás percepciones definidas en los conceptos.
          p.mb-0 #[b Estaciones: ] las tendencias se basan en las estaciones de primavera (#[em Spring]), verano (#[em Summer]), otoño (#[em Autumn]) e invierno (#[em Winter]). 

    p Revisa el documento que puede resultar útil  para aprender más sobre la creación de un #[em moodboard] y  cuadro metamórfico.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/QhPE0_P4R3M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. #[em Moodboard] y cuadro metamórfico



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    indicadorTarjetaSlide: true,
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
