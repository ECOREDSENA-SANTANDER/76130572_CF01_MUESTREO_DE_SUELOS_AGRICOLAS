<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos del suelo agrícola y su caracterización
      
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        p.mb-4 El suelo es uno de los recursos naturales más importantes para el desarrollo de la agricultura, ya que constituye el medio donde las plantas obtienen el soporte físico, el agua, el oxígeno y los nutrientes necesarios para completar su ciclo de vida. Su calidad influye directamente en la productividad de los cultivos, la sostenibilidad de los sistemas agrícolas y la conservación de los recursos naturales. Por esta razón, el conocimiento de sus características constituye el punto de partida para la toma de decisiones relacionadas con el manejo agronómico, la fertilización, la conservación y el aprovechamiento eficiente del terreno. 
        .bg1.p-4
          p.mb-0.mx-lg-2.mb-lg-1.mt-lg-1 Los suelos agrícolas presentan una gran diversidad de propiedades originadas por la interacción de factores como el material parental, el clima, los organismos vivos, el relieve y el tiempo de formación. Estas condiciones determinan diferencias en la textura, estructura, profundidad, fertilidad, capacidad de retención de agua y contenido de materia orgánica, aspectos que inciden en el desarrollo de los cultivos y en la respuesta a las prácticas de manejo implementadas por el productor.
      .col-lg-5
        img(src='@/assets/curso/tema1/1.png')

    p.mb-5 Antes de realizar un muestreo de suelos es indispensable comprender cómo está conformado el suelo, cuáles son sus principales propiedades y de qué manera estas pueden variar dentro de un mismo lote agrícola. La identificación de áreas homogéneas y el reconocimiento de las características físicas, químicas y morfológicas permiten planificar adecuadamente el proceso de muestreo, garantizando que las muestras obtenidas sean representativas y que los resultados del análisis de laboratorio reflejen las condiciones reales del terreno.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Importancia del suelo en la producción agrícola

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        .bg2.p-4.mb-0
          p.mb-0.mt-lg-1.mb-lg-1 El suelo constituye el principal recurso sobre el cual se desarrolla la actividad agrícola. Además de servir como soporte para las plantas, proporciona agua, nutrientes y oxígeno a las raíces, participa en el reciclaje de la materia orgánica, regula el movimiento del agua y actúa como hábitat de una gran diversidad de organismos que intervienen en los procesos biológicos responsables de mantener su fertilidad.
      .col-lg-4
        img(src='@/assets/curso/tema1/2.svg')
      .col-lg-4
        img.img-t.mb-4(src='@/assets/curso/tema1/3.svg')
        p.mb-0 La productividad de un cultivo depende en gran medida de las condiciones físicas, químicas y biológicas del suelo. Un suelo con buena estructura, adecuada disponibilidad de nutrientes y correcta capacidad de retención de agua favorece el crecimiento de las plantas y mejora el rendimiento de las cosechas. En contraste, suelos degradados, compactados o con deficiencias nutricionales limitan el desarrollo radicular y disminuyen la productividad agrícola.

    .tit1.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub1.svg')")
      h4.mb-0 a) Concepto de suelo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema1/4.png')
      .col-lg-7
        p.mb-4 El suelo puede definirse como un cuerpo natural dinámico formado por partículas minerales, materia orgánica, agua, aire y organismos vivos que interactúan continuamente bajo la influencia del clima, el relieve, el material parental y el tiempo. Es el resultado de procesos físicos, químicos y biológicos que transforman las rocas y los residuos orgánicos hasta formar un medio capaz de sostener el crecimiento de las plantas.
        p.mb-4 Desde la perspectiva agrícola, el suelo constituye el principal recurso para la producción vegetal, ya que proporciona soporte mecánico a las raíces y suministra los elementos esenciales requeridos para el desarrollo de los cultivos. 
        .bg1.p-4
          p.mb-0.mx-lg-1.mt-lg-2 El suelo no debe considerarse únicamente como un depósito de nutrientes, sino como un ecosistema vivo donde millones de microorganismos participan en procesos como la descomposición de la materia orgánica, el reciclaje de nutrientes, la fijación biológica de nitrógeno y la regulación de diversas reacciones químicas indispensables para la fertilidad.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.mb-4
          h5 Tabla 1.
          | Composición aproximada de un suelo agrícola ideal
        .tabla-a.tabla-peq.tabla1
          table
            thead
              tr
                th Componente
                th Porcentaje aproximado
                th Función principal
            tbody
              tr
                td Material mineral
                td.text-center 45 %
                td Soporte estructural y reserva de minerales.
              tr
                td Agua
                td.text-center 25 %
                td Disolución y transporte de nutrientes.
              tr
                td Aire
                td.text-center 25 %
                td Intercambio gaseoso para raíces y microorganismos.
              tr
                td Materia orgánica
                td.text-center 25 %
                td Fuente de nutrientes y mejoramiento de las propiedades físicas y biológicas.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema1/5.png')

    p.mb-4 Es importante señalar que estas proporciones cambian según el tipo de suelo, las condiciones climáticas, el manejo agrícola y la época del año.

    p.mb-5 El suelo, como sistema vivo, está conformado por componentes que interactúan permanentemente.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        SlyderF(columnas="col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/6.svg')
            h4.text-center.mb-4 Componentes minerales
            p.mb-0 Corresponden a las partículas provenientes de la meteorización de las rocas y comprenden arena, limo y arcilla. Estas partículas determinan la textura del suelo y gran parte de sus propiedades físicas.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/7.svg')
            h4.text-center.mb-4 Materia orgánica
            p.mb-0 Está constituida por residuos vegetales y animales en diferentes estados de descomposición. Favorece la fertilidad, mejora la estructura, incrementa la retención de agua y constituye la principal fuente de energía para los microorganismos del suelo.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/8.svg')
            h4.text-center.mb-4 Agua
            p.mb-0 Ocupa parte de los espacios porosos del suelo y transporta los nutrientes hacia las raíces. Su disponibilidad depende de la textura, la estructura y el contenido de materia orgánica.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/9.svg')
            h4.text-center.mb-4 Aire
            p.mb-0 El oxígeno contenido en los poros del suelo es indispensable para la respiración de las raíces y la actividad de los microorganismos beneficiosos.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/10.svg')
            h4.text-center.mb-4 Organismos vivos
            p.mb-0 Incluyen bacterias, hongos, actinomicetos, algas, protozoarios, lombrices, insectos y otros organismos que participan en la descomposición de la materia orgánica y en el reciclaje de nutrientes.

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-3
        img(src='@/assets/curso/tema1/11.png')
      .col-lg-9
        .tarjeta.color-acento-coo.p-lg-1.p-4.mb-4(data-aos="fade-left")
          .row.justify-content-around.align-items-center
            .col-lg-5.col-md-7.col-8.mb-4.mb-lg-0
              img.img-t.img-a(src='@/assets/curso/tema1/12.svg')
            .col-lg-7
              p.mb-0 El suelo cumple funciones ecológicas, ambientales y productivas esenciales para el equilibrio de los ecosistemas y el desarrollo de la actividad agrícola. Proporciona soporte físico para el anclaje y la expansión de las raíces, almacena y suministra agua de acuerdo con las necesidades de los cultivos y retiene, transforma y libera los nutrientes indispensables para el crecimiento vegetal. Estas funciones favorecen la fertilidad del suelo y la productividad agrícola.
        p.mb-0 Asimismo, facilita el intercambio gaseoso entre la atmósfera y las raíces, garantizando la disponibilidad de oxígeno para los procesos biológicos que ocurren en el subsuelo. También protege el sistema radicular frente a cambios extremos de temperatura y humedad. Además, constituye el hábitat de microorganismos, hongos, bacterias, lombrices y otros organismos que intervienen en la descomposición de la materia orgánica, el reciclaje de nutrientes y el mantenimiento del equilibrio biológico.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema1/13.png')
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-2
            img.img-t(src='@/assets/curso/tema1/14.svg')
          .col-lg-10.ps-lg-0
            p.mb-0 Desde el punto de vista ambiental, el suelo regula el ciclo hidrológico al favorecer la infiltración, el almacenamiento y la circulación del agua hacia los acuíferos. También funciona como un filtro natural que retiene sedimentos y sustancias contaminantes antes de que lleguen a las fuentes hídricas. De igual manera, almacena importantes cantidades de carbono en la materia orgánica, lo que contribuye a reducir la concentración de dióxido de carbono en la atmósfera y a mitigar los efectos del cambio climático.
        p.mb-0 Estas funciones convierten al suelo en un recurso estratégico para la producción agrícola sostenible, la conservación de la biodiversidad y el mantenimiento de los servicios ecosistémicos. Su calidad influye directamente en la productividad: un suelo fértil favorece el desarrollo de sistemas radiculares vigorosos, el aprovechamiento eficiente del agua y los nutrientes, y una mayor resistencia de los cultivos frente a condiciones adversas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema1/15.png ')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Cuando el suelo presenta limitaciones físicas, químicas o biológicas, pueden identificarse efectos como:
            br
            br
            .row.justify-content-center.align-items-center.mb-0.d-flex
              .col-lg-12
                ul.lista-ul.mb-0
                  li.d-flex.mb-0
                    i.fas.fa-check
                    p.mb-0 Crecimiento reducido. 
                  li.d-flex.mb-0
                    i.fas.fa-check
                    p.mb-0 Clorosis. 
                  li.d-flex.mb-0
                    i.fas.fa-check
                    p.mb-0 Desarrollo radicular limitado.
                  li.d-flex.mb-0
                    i.fas.fa-check
                    p.mb-0 Baja producción. 
                  li.d-flex.mb-0
                    i.fas.fa-check
                    p.mb-0 Mayor susceptibilidad a enfermedades. 
                  li.d-flex.mb-0
                    i.fas.fa-check
                    p.mb-0 Menor eficiencia en el aprovechamiento de fertilizantes. 

    p.mb-5 Por esta razón, antes de establecer un programa de fertilización o aplicar correctivos, es indispensable conocer las condiciones reales del suelo mediante un muestreo técnicamente planificado y el correspondiente análisis de laboratorio.

    .tit1.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub1.svg')")
      h4.mb-0 b) Formación y origen de los suelos

    p.mb-4 El suelo no se forma de manera inmediata. Su desarrollo es el resultado de procesos naturales que ocurren durante largos períodos y que transforman gradualmente las rocas en un medio apto para el crecimiento vegetal. Este proceso recibe el nombre de pedogénesis.

    p.mb-5 Durante la formación del suelo intervienen procesos físicos, químicos y biológicos que modifican el material parental hasta originar diferentes horizontes y propiedades.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 2.
          | Factores de formación
        .tabla-a.tab1
          table
            thead
              tr
                th Factor de formación
                th Descripción
                th Influencia sobre el suelo
            tbody
              tr
                td Material parental
                td Corresponde a la roca, sedimento o material geológico a partir del cual se forma el suelo mediante procesos de meteorización física, química y biológica.
                td Determina la textura, la composición mineral, el pH y la fertilidad inicial del suelo.
              tr
                td Clima
                td Comprende las condiciones de temperatura, precipitación, humedad y viento que actúan sobre el material parental a lo largo del tiempo.
                td Controla la velocidad de formación del suelo, la meteorización de las rocas, la descomposición de la materia orgánica y la disponibilidad de agua para los organismos.
              tr
                td Organismos
                td Incluye la vegetación, los microorganismos, la fauna del suelo y las actividades humanas que intervienen en los procesos de formación y transformación del suelo.
                td Favorecen la incorporación de materia orgánica, la formación de humus, el reciclaje de nutrientes y el desarrollo de la estructura del suelo.
              tr
                td Relieve
                td Hace referencia a la forma del terreno, la pendiente y la posición del paisaje donde se desarrolla el suelo.
                td Influye en el drenaje, la infiltración del agua, la erosión, la acumulación de sedimentos y el espesor del suelo.
              tr
                td Tiempo
                td Es el período durante el cual actúan de manera conjunta los demás factores de formación del suelo.
                td Determina el grado de evolución del suelo, el desarrollo de sus horizontes y la diferenciación de sus propiedades físicas, químicas y biológicas.

    .tit1.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub1.svg')")
      h4.mb-0 c) Funciones del suelo en los sistemas agrícolas

    .row.fondo1.p-4.p-lg-5.p-md-4.mb-0(data-aos="fade-right")
      .col-lg-12
        .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
          .col-lg-4.im1.d-none.d-lg-block
            img(src='@/assets/curso/tema1/16.svg')
          .col-lg-8
            p.mb-4.text-white El suelo constituye la base del funcionamiento de cualquier sistema agrícola sostenible.
            SlyderF(columnas="col-md-6 col-xl-4")
              .tarjeta.tarjeta--slyder.b2.p-lg-3.p-4
                .row.justify-content-center.align-items-center.mb-4.mt-3
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/tema1/17.svg')
                p.mb-0 #[b Soporte físico:] permite el anclaje de las raíces y proporciona estabilidad a las plantas.
              .tarjeta.tarjeta--slyder.b2.p-lg-3.p-4
                .row.justify-content-center.align-items-center.mb-4.mt-3
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/tema1/18.svg')
                p.mb-0 #[b Reserva de agua:] almacena agua proveniente de la lluvia o del riego y la suministra gradualmente a los cultivos.
              .tarjeta.tarjeta--slyder.b2.p-lg-3.p-4
                .row.justify-content-center.align-items-center.mb-4.mt-3
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/tema1/19.svg')
                p.mb-0 #[b Fuente de nutrientes:] contiene macro y micronutrientes esenciales como nitrógeno, fósforo, potasio, calcio, magnesio, azufre, hierro, zinc y boro.
              .tarjeta.tarjeta--slyder.b2.p-lg-3.p-4
                .row.justify-content-center.align-items-center.mb-4.mt-3
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/tema1/20.svg')
                p.mb-0 #[b Regulación biológica:] favorece la actividad de microorganismos que participan en la transformación de nutrientes.
              .tarjeta.tarjeta--slyder.b2.p-lg-3.p-4
                .row.justify-content-center.align-items-center.mb-4.mt-3
                  .col-12
                    img.img-a.img-t(src='@/assets/curso/tema1/21.svg')
                p.mb-0 #[b Regulación ambiental:] contribuye al almacenamiento de carbono, la regulación del ciclo hidrológico y la disminución de procesos erosivos.


    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Clasificación y propiedades del suelo

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        .bg2.p-4.p-lg-3.mb-3
          p.mb-0.mx-lg-1 Los suelos presentan una amplia diversidad de características físicas, químicas y biológicas que determinan su capacidad para sustentar el crecimiento de las plantas y responder a las prácticas de manejo agrícola. Estas diferencias son el resultado de los procesos de formación del suelo, la influencia del clima, el relieve, el material parental, los organismos vivos y el tiempo. Por esta razón, no todos los suelos poseen el mismo potencial productivo ni requieren las mismas estrategias de manejo. 
        p.mb-0 La clasificación de los suelos permite agruparlos de acuerdo con sus propiedades y comportamiento, facilitando la identificación de sus fortalezas, limitaciones y aptitudes para diferentes usos agrícolas. Asimismo, el conocimiento de las propiedades físicas y químicas constituye una herramienta indispensable para interpretar los resultados de los análisis de laboratorio y formular recomendaciones relacionadas con la fertilización, el uso de correctivos y las prácticas de conservación.
      .col-lg-5
        img(src='@/assets/curso/tema1/22.png')
    
    p.mb-5 En el proceso de muestreo de suelos, comprender estas propiedades es fundamental, ya que permite delimitar áreas homogéneas, seleccionar adecuadamente los puntos de muestreo y garantizar que las muestras obtenidas representen las condiciones reales del lote agrícola.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 a) Clasificación de los suelos agrícolas

    p.mb-5 La clasificación de los suelos consiste en organizarlos de acuerdo con características comunes relacionadas con su origen, composición, propiedades físicas, químicas, mineralógicas y capacidad de uso. Esta clasificación facilita la evaluación de su potencial agrícola y la planificación de prácticas de manejo sostenibles.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 1. 
          | Características de los tipos de suelos agrícolas 
        img(src='@/assets/curso/tema1/23.jpg', alt='Se presentan cuatro tipos de suelos agrícolas: arenoso, franco, limoso y arcilloso, diferenciados según su textura, capacidad de drenaje, retención de agua y nutrientes, fertilidad y tendencia a la compactación.')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        img(src='@/assets/curso/tema1/24.png')
      .col-lg-9
        p.mb-4 Existen diversos sistemas de clasificación empleados a nivel mundial. Entre los más utilizados se encuentran la Taxonomía de Suelos del Departamento de Agricultura de los Estados Unidos (USDA Soil Taxonomy) y la Base Referencial Mundial del Recurso Suelo (WRB, por sus siglas en inglés), desarrollada por la Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). En Colombia, estas clasificaciones son utilizadas por entidades como el Instituto Geográfico Agustín Codazzi (IGAC) para los estudios de suelos y zonificación agroecológica.
        p.mb-0 Desde un enfoque práctico para la producción agrícola, los suelos también pueden clasificarse de acuerdo con su textura, fertilidad, drenaje, profundidad y capacidad de uso.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 3.
          | Clasificación de los suelos según la textura
        .tabla-a.tab3
          table
            thead
              tr
                th Tipo de suelo
                th Descripción
                th Características
                th Ventajas
                th Limitaciones
            tbody
              tr
                td Suelos arenosos
                td Presentan predominio de partículas de arena, lo que les confiere una textura gruesa y alta porosidad.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Alta permeabilidad.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Excelente drenaje.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Baja capacidad de retención de agua.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Baja retención de nutrientes.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Fácil laboreo.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Favorecen el desarrollo radicular.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Se calienten rápidamente.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Facilitan el establecimiento de algunos cultivos hortícolas.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Requieren riegos frecuentes.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Presentan mayor riesgo de lixiviación de nutrientes.
              tr
                td Suelos limosos
                td Contienen una mayor proporción de limo, con una textura suave y buena capacidad para retener humedad.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Textura suave.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Buena capacidad de retención de agua.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Fertilidad moderada.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Susceptibles a la erosión.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Favorecen el crecimiento de numerosos cultivos.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Buena disponibilidad de agua para las plantas.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Son relativamente fáciles de trabajar.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Se erosionan con facilidad por acción del agua y el viento.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Pueden compactarse cuando se manejan inadecuadamente.
              tr
                td Suelos arcillosos
                td Predominan las partículas de arcilla, de tamaño muy fino, lo que incrementa su capacidad de retener agua y nutrientes.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Alta capacidad de retención de agua.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Elevada capacidad de intercambio de nutrientes.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Drenaje lento.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Mayor riesgo de compactación.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0  Buena reserva de nutrientes.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Alta fertilidad potencial.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Mantienen la humedad durante más tiempo.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Difíciles de trabajar cuando están húmedos.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Pueden presentar problemas de aireación y drenaje.
              tr
                td Suelos francos
                td Presentan un equilibrio adecuado entre arena, limo y arcilla, por lo que son considerados los más aptos para la agricultura.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Excelente estructura.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Buena infiltración.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Adecuada retención de agua.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Alta productividad.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Favorecen el desarrollo de la mayoría de los cultivos.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Facilitan las labores agrícolas.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Mantienen un adecuado equilibrio entre aire, agua y nutrientes.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Requieren prácticas de manejo y conservación para mantener sus propiedades físicas y químicas a largo plazo.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 b) Propiedades físicas del suelo

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1
        img(src='@/assets/curso/tema1/25.svg')
      .col-lg-11
        p.mb-0 Las propiedades físicas del suelo determinan su comportamiento frente al movimiento y la retención del agua, la circulación del aire y el crecimiento de las raíces. Su conocimiento permite evaluar las condiciones del terreno e identificar posibles limitaciones para el desarrollo de los cultivos.

    p.mb-5 Le invitamos a consultar el video 
      strong.blue Fundamentos de evaluación física y química del suelo,
      | en el que encontrará conceptos esenciales para identificar y analizar las propiedades del suelo, comprender su influencia en la producción agrícola y fortalecer la toma de decisiones relacionadas con su manejo adecuado.

    .row.justify-content-center.align-items-center.mb-5            
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/njQH2osDZFg?si=vpHXirexDmHTxqqB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Fundamentos de evaluación física y química del suelo

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 4.
          | Propiedades físicas del suelo
        .tabla-a.tab1
          table
            thead
              tr
                th Propiedad física
                th Descripción
                th Importancia agrícola
            tbody
              tr
                td Textura
                td Es la proporción relativa de arena, limo y arcilla presentes en el suelo.
                td Determina la retención de agua, la aireación, la infiltración, la disponibilidad de nutrientes y la facilidad para realizar las labores agrícolas.
              tr
                td Estructura
                td Corresponde a la forma en que las partículas del suelo se agrupan formando agregados o unidades estructurales.
                td Favorece la infiltración del agua, la aireación, el desarrollo del sistema radicular y la actividad de los organismos del suelo.
              tr
                td Color
                td Es una característica visible que refleja la composición y las condiciones del suelo.
                td Permite identificar el contenido de materia orgánica, el drenaje, la presencia de óxidos de hierro y el grado de humedad del suelo.
              tr
                td Densidad aparente
                td Corresponde al peso del suelo por unidad de volumen, incluyendo los espacios porosos.
                td Permite evaluar el grado de compactación del suelo; valores elevados limitan el crecimiento de las raíces, reducen la infiltración y dificultan el movimiento del agua y del aire.
              tr
                td Porosidad
                td Es el porcentaje de espacios vacíos existentes entre las partículas del suelo.
                td Facilita la circulación del aire, el movimiento del agua y el crecimiento de las raíces, además de favorecer la actividad biológica.
              tr
                td Consistencia
                td Es la resistencia que presenta el suelo frente a la deformación o ruptura cuando se encuentra seco, húmedo o saturado.
                td Permite determinar la facilidad de laboreo y las condiciones más apropiadas para realizar actividades agrícolas y de muestreo.
              tr
                td Infiltración
                td Corresponde a la velocidad con la que el agua penetra y se desplaza dentro del suelo.
                td Una adecuada infiltración reduce la escorrentía, la erosión y el encharcamiento, favoreciendo un mejor aprovechamiento del agua por los cultivos.
              tr
                td Capacidad de retención de agua
                td Es la cantidad de agua que el suelo puede almacenar y mantener disponible para las plantas después del drenaje.
                td Influye directamente en la disponibilidad hídrica de los cultivos y depende principalmente de la textura, la estructura y el contenido de materia orgánica del suelo.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 c) Propiedades químicas del suelo
    
    p.mb-5 Las propiedades químicas determinan la disponibilidad de nutrientes y la fertilidad del suelo. Son evaluadas mediante análisis de laboratorio.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 5.
          | Principales propiedades químicas del suelo
        .tabla-a.tab1
          table
            thead
              tr
                th Propiedad química
                th Descripción
                th Importancia agrícola
            tbody
              tr
                td pH
                td Expresa el grado de acidez o alcalinidad del suelo y se mide en una escala de 0 a 14. Los valores menores de 7 indican suelos ácidos; el valor 7 corresponde a un suelo neutro; y los valores superiores a 7 indican suelos alcalinos. Muchos cultivos presentan condiciones favorables para su desarrollo en un rango de pH entre 5,5 y 7,0, aunque los valores óptimos varían según la especie y las condiciones del suelo.
                td Regula la disponibilidad de nutrientes para las plantas, influye en la actividad microbiológica y en la eficiencia de los fertilizantes aplicados al suelo.
              tr
                td Materia orgánica
                td Está constituida por residuos vegetales y animales en diferentes estados de descomposición que se incorporan al suelo de forma natural o mediante prácticas agrícolas.
                td Mejora la estructura del suelo, incrementa la fertilidad, favorece la actividad biológica, aumenta la capacidad de retención de agua y facilita la disponibilidad de nutrientes.
              tr
                td Capacidad de intercambio catiónico (CIC)
                td Es la capacidad que tiene el suelo para retener e intercambiar cationes nutrientes como calcio (Ca), magnesio (Mg), potasio (K) y sodio (Na).
                td Un suelo con alta CIC presenta mayor capacidad para almacenar nutrientes y suministrarlos progresivamente a las plantas, favoreciendo la fertilidad del suelo.
              tr
                td Macronutrientes
                td Son los nutrientes que las plantas requieren en mayores cantidades para completar su ciclo de crecimiento y desarrollo. Incluyen nitrógeno (N), fósforo (P), potasio (K), calcio (Ca), magnesio (Mg) y azufre (S).
                td Favorecen el crecimiento vegetativo, el desarrollo radicular, la floración, la formación de frutos y el rendimiento de los cultivos.
              tr
                td Micronutrientes
                td Son elementos esenciales requeridos en pequeñas cantidades, entre ellos hierro (Fe), zinc (Zn), cobre (Cu), manganeso (Mn), boro (B) y molibdeno (Mo).
                td Participan en procesos metabólicos, enzimáticos y fisiológicos indispensables para el crecimiento y desarrollo normal de las plantas.
              tr
                td Conductividad eléctrica (CE)
                td Es una medida de la concentración de sales solubles presentes en la solución del suelo.
                td Permite evaluar el nivel de salinidad del suelo. Valores elevados pueden afectar la germinación, disminuir la absorción de agua y limitar el crecimiento de los cultivos.
              tr
                td Salinidad y sodicidad
                td La salinidad corresponde a la acumulación de sales solubles, mientras que la sodicidad se relaciona con el exceso de sodio intercambiable en el suelo.
                td Ambas condiciones afectan la estructura del suelo, disminuyen la infiltración del agua, reducen la disponibilidad de nutrientes y limitan el desarrollo y productividad de los cultivos, especialmente en zonas bajo riego.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 d) Relación suelo - planta 

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-4
        .bg1.p-4.mb-0
          p.mb-0.mt-lg-1.mb-lg-1 La relación entre el suelo y las plantas constituye la base de la producción agrícola y del funcionamiento de los ecosistemas terrestres. El suelo proporciona a las plantas el soporte físico necesario para el anclaje y desarrollo de sus raíces, además de suministrar el agua, los nutrientes minerales y el oxígeno indispensables para el crecimiento, la fotosíntesis y el cumplimiento de sus funciones fisiológicas. La disponibilidad y el equilibrio de estos recursos determinan el desarrollo de los cultivos, su productividad y la calidad de las cosechas. 
      .col-lg-4
        img(src='@/assets/curso/tema1/26.png')
      .col-lg-4
        p.mb-0 A su vez, las plantas desempeñan un papel fundamental en la conservación y mejoramiento del suelo. La cobertura vegetal protege la superficie del terreno frente a la acción de la lluvia y el viento, reduciendo los procesos de erosión. Asimismo, la incorporación de residuos vegetales aporta materia orgánica que mejora la fertilidad y la estructura del suelo. El crecimiento de las raíces favorece la actividad de microorganismos benéficos, mejora la porosidad y facilita la circulación del agua y del aire. De igual manera, mediante la descomposición de los residuos vegetales, las plantas contribuyen al reciclaje de nutrientes, manteniendo la productividad y el equilibrio del ecosistema agrícola.

    p.mb-4 Cuando el suelo presenta condiciones adecuadas de fertilidad, estructura y humedad, los cultivos desarrollan un sistema radicular vigoroso y alcanzan mayores niveles de productividad.

    p.mb-5 Por el contrario, problemas como compactación, acidez, deficiencias nutricionales o mal drenaje afectan la absorción de agua y nutrientes, reduciendo el crecimiento y el rendimiento de los cultivos.

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-0
      .col-lg-12
        .bloque-texto-g.color-acento-contenido.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema1/27.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 En este contexto, el muestreo de suelos constituye una herramienta técnica indispensable para evaluar el estado del suelo y generar recomendaciones que permitan corregir limitaciones mediante prácticas como la aplicación de fertilizantes, correctivos y enmiendas, contribuyendo a una agricultura más eficiente, rentable y sostenible.


    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 Morfología y perfil del suelo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-4 La morfología del suelo comprende el estudio de las características visibles y medibles que permiten describir su estructura, organización y composición. El análisis morfológico constituye una de las principales herramientas para comprender el comportamiento del suelo frente al desarrollo de los cultivos, el movimiento del agua, la disponibilidad de nutrientes y el crecimiento del sistema radicular.
        .bg2.p-4.mb-0
          p.mb-0.mx-lg-3.mb-lg-1 Antes de realizar un muestreo de suelos es indispensable conocer cómo está conformado el perfil del terreno y cuáles son sus horizontes, ya que estas características permiten definir la profundidad de muestreo, identificar limitaciones físicas y reconocer condiciones que pueden afectar la representatividad de las muestras.
      .col-lg-5
        img(src='@/assets/curso/tema1/28.png')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1
        img(src='@/assets/curso/tema1/29.svg')
      .col-lg-11
        p.mb-0 El estudio de la morfología del suelo facilita la interpretación de procesos como la acumulación de materia orgánica, la lixiviación de minerales, la compactación, la presencia de capas endurecidas y el drenaje natural del terreno. Asimismo, proporciona información útil para la planificación de labores agrícolas, la selección de cultivos y la formulación de estrategias de manejo y conservación del recurso suelo.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 a) Horizontes del suelo
    
    p.mb-4 Los horizontes del suelo son capas aproximadamente paralelas a la superficie terrestre que presentan características físicas, químicas y biológicas diferentes como consecuencia de los procesos de formación del suelo. Cada horizonte posee propiedades particulares relacionadas con el contenido de materia orgánica, color, textura, estructura, actividad biológica y composición mineral.

    p.mb-5 El conjunto de estos horizontes conforma el perfil del suelo y refleja la evolución del material parental a lo largo del tiempo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.mb-4
          h5 Figura 2. 
          | Horizontes o capas del suelo
        img(src='@/assets/curso/tema1/30.svg', alt='Perfil del suelo organizado en cuatro horizontes: O, compuesto por mantillo y hojarasca; A, capa superficial rica en humus; B, con menor contenido de materia orgánica y mayor presencia de raíces; y C, formado por fragmentos de roca desintegrada, sin nutrientes.')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 6.
          | Principales horizontes del suelo
        .tabla-a.tab6
          table
            thead
              tr
                th Horizonte
                th Descripción
                th Características principales
                th Importancia agrícola
            tbody
              tr
                td Horizonte O
                td Es la capa más superficial del suelo, formada principalmente por residuos vegetales y animales en diferentes estados de descomposición.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Alto contenido de materia orgánica.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Color oscuro.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Gran actividad biológica.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Presencia de microorganismos y fauna del suelo.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Común en ecosistemas forestales y sistemas agroforestales.
                td Aporta nutrientes, favorece la actividad biológica y protege la superficie del suelo. En muchos sistemas agrícolas puede ser muy delgado o inexistente debido al laboreo continuo.
              tr
                td Horizonte A
                td Conocido como suelo superficial o capa arable, es el horizonte de mayor importancia para la agricultura.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Elevado contenido de materia orgánica.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Alta actividad microbiológica.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Mayor concentración de raíces.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Buena disponibilidad de nutrientes.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Color oscuro o café.
                td Es el horizonte donde se desarrolla la mayor parte del sistema radicular de los cultivos y el que normalmente se utiliza para el muestreo de fertilidad en cultivos anuales.
              tr
                td Horizonte E
                td Horizonte de eluviación, caracterizado por la pérdida de arcillas, hierro, aluminio y materia orgánica debido al lavado por el agua. No está presente en todos los suelos.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Color gris claro.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Baja fertilidad.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Escaso contenido de materia orgánica.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Alta concentración de sílice.
                td Indica procesos intensos de lavado del suelo y generalmente presenta baja disponibilidad de nutrientes para las plantas.
              tr
                td Horizonte B
                td Horizonte de acumulación, donde se depositan materiales provenientes de los horizontes superiores.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Mayor contenido de arcilla.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Acumulación de hierro y aluminio.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Menor contenido de materia orgánica.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Color rojizo o amarillento.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Mayor compactación.
                td Su profundidad y características físicas influyen en el crecimiento radicular, el drenaje y el almacenamiento de agua y nutrientes.
              tr
                td Horizonte C
                td Está constituido por el material parental parcialmente meteorizado a partir del cual se desarrolla el suelo.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Baja actividad biológica.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Escasa alteración química.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Presencia de fragmentos de roca.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Poca influencia de las raíces.
                td Representa la transición entre el suelo desarrollado y la roca madre, proporcionando información sobre el origen geológico del suelo.
              tr
                td Horizonte R
                td Corresponde a la roca madre consolidada que da origen al suelo mediante procesos de meteorización.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Material sin alterar.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Alta dureza.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 No presenta actividad biológica significativa.
                td Constituye el sustrato geológico del suelo y determina, en gran medida, las características mineralógicas del material parental.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 b) Descripción del subsuelo

    p.mb-5 El subsuelo corresponde a la porción del perfil ubicada por debajo del horizonte superficial y comprende principalmente los horizontes B y C. Aunque posee menor contenido de materia orgánica, desempeña un papel importante en el almacenamiento de agua, la estabilidad del perfil y el desarrollo profundo de las raíces. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema1/31.png')
      .col-lg-7
        p.mb-4 El subsuelo corresponde a las capas ubicadas por debajo del horizonte superficial y presenta características físicas, químicas y biológicas diferentes a las del suelo cultivable. En general, se caracteriza por tener una menor fertilidad natural debido a su reducido contenido de materia orgánica y a una menor disponibilidad de nutrientes. Asimismo, presenta una mayor densidad y un mayor contenido de arcillas, condiciones que pueden limitar la circulación del aire, el movimiento del agua y el crecimiento de las raíces. La actividad biológica también es menor, ya que existe una menor presencia de microorganismos y organismos del suelo en comparación con los horizontes superficiales.
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-9
            p.mb-0 A pesar de estas limitaciones, el subsuelo desempeña un papel importante dentro de los sistemas agrícolas, ya que contribuye a la estabilidad estructural del perfil del suelo y puede actuar como una reserva de humedad durante períodos de escasez de agua. En cultivos perennes, como frutales, café, cacao o sistemas agroforestales, las raíces pueden explorar estas capas profundas para aprovechar el agua y algunos nutrientes disponibles, favoreciendo la resistencia de las plantas frente a condiciones de sequía y mejorando la estabilidad del cultivo a largo plazo.
          .col-lg-3
            img(src='@/assets/curso/tema1/32.png')

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 7.
          | Factores que deben evaluarse
        .tabla-a.tab6
          table
            thead
              tr
                th Característica del subsuelo
                th Descripción
                th Factores o causas
                th Importancia agrícola / Efectos
            tbody
              tr
                td Profundidad efectiva
                td Corresponde a la distancia comprendida entre la superficie del suelo y la primera capa que limita el crecimiento y desarrollo del sistema radicular de los cultivos.
                td Puede verse restringida por la presencia de roca madre, capas endurecidas, compactación del suelo o saturación permanente de agua.
                td Determina el volumen de suelo que pueden explorar las raíces para absorber agua y nutrientes. Una baja profundidad efectiva limita el desarrollo de los cultivos y reduce su productividad.
              tr
                td Drenaje interno
                td Es la capacidad del suelo para permitir el movimiento del agua a través de los diferentes horizontes del perfil.
                td Depende de la textura, la estructura, la porosidad y la presencia de capas impermeables o compactadas.
                td Un drenaje deficiente puede provocar asfixia radicular, favorecer la aparición de enfermedades y disminuir la absorción de agua y nutrientes por las plantas.
              tr
                td Compactación
                td Es el aumento de la densidad del suelo debido a la reducción de los espacios porosos ocasionada por presión mecánica o tránsito frecuente de maquinaria y animales.
                td Se produce principalmente por el uso intensivo de maquinaria agrícola, labores en condiciones de alta humedad y sobrepastoreo.
                td Disminuye la porosidad, reduce la infiltración y el movimiento del aire, restringe el crecimiento de las raíces y limita el desarrollo de los cultivos.
              tr
                td Pedregosidad
                td Hace referencia a la cantidad y tamaño de piedras o fragmentos rocosos presentes en el perfil del suelo.
                td Depende del material parental, los procesos de formación del suelo y las condiciones geológicas del terreno.
                td Una alta pedregosidad dificulta la preparación del terreno, limita el desarrollo radicular, reduce la capacidad de almacenamiento de agua y puede afectar las labores agrícolas y el establecimiento de los cultivos.


    separador
    #t_1_3.titulo-segundo.mb-5
      h2 1.3 Caracterización del lote agrícola
    
    p.mb-5 La caracterización del lote agrícola constituye una de las etapas más importantes dentro de la planificación del muestreo de suelos, ya que permite conocer las condiciones físicas, ambientales y productivas del terreno antes de realizar la toma de muestras. Un lote raramente presenta características completamente uniformes; por el contrario, existen diferencias en relieve, textura, drenaje, fertilidad, manejo agronómico, cultivos anteriores y otros factores que generan variabilidad en las propiedades del suelo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        .bg2.p-4.mb-0
          p.mb-0.mt-lg-2.mb-lg-1.mx-lg-2 Estas diferencias deben identificarse previamente para delimitar áreas homogéneas y definir un plan de muestreo que garantice la representatividad de las muestras. Una caracterización adecuada permite disminuir errores en la interpretación de los análisis de laboratorio y mejorar la precisión de las recomendaciones relacionadas con la fertilización, el encalado y el manejo agronómico de los cultivos. 
      .col-lg-3
        img(src='@/assets/curso/tema1/33.png')
      .col-lg-5
        img.img-t.mb-4(src='@/assets/curso/tema1/34.svg')
        p.mb-0 La caracterización del lote combina la observación directa del terreno, la recopilación de información histórica, el análisis de las condiciones ambientales y el reconocimiento de las prácticas agrícolas desarrolladas en el predio. De esta manera, el técnico obtiene una visión integral del sistema productivo y puede diseñar un proceso de muestreo acorde con las condiciones reales del terreno.
    
    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Variabilidad del suelo
    
    p.mb-4 La variabilidad del suelo hace referencia a las diferencias que presentan sus propiedades físicas, químicas y biológicas dentro de un mismo lote agrícola. Estas diferencias pueden observarse incluso en áreas relativamente pequeñas y obedecen tanto a procesos naturales como a las actividades desarrolladas por el ser humano.

    p.mb-5 El reconocimiento de esta variabilidad es fundamental para evitar que una única muestra represente condiciones muy diferentes entre sí, situación que puede generar resultados de laboratorio poco confiables y conducir a decisiones equivocadas sobre fertilización o aplicación de correctivos.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-9
        .titulo-sexto.mb-4
          h5 Tabla 8.
          | Factores que deben evaluarse
        .tabla-a.tab8
          table
            thead
              tr
                th Tipo de variabilidad
                th Descripción
                th Factores o ejemplos
            tbody
              tr
                td Variabilidad natural
                td Es la variabilidad originada por los procesos naturales de formación y evolución del suelo, sin intervención directa de las actividades humanas.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Material parental.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Relieve.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Pendiente.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Clima.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Drenaje.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Procesos de erosión.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Deposición de sedimentos.
              tr
                td Variabilidad inducida por el manejo agrícola
                td Corresponde a las modificaciones de las propiedades del suelo ocasionadas por las prácticas agrícolas desarrolladas durante el manejo del cultivo.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Diferentes dosis de fertilizantes.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Aplicación localizada de cal.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Sistemas de riego.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Tránsito de maquinaria.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Rotación de cultivos.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Labranza.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Aplicación de materia orgánica.
      .col-lg-3
        img(src='@/assets/curso/tema1/35.png')

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 9.
          | Variables que generan diferencias dentro del lote agrícola
        .tabla-a.tab9
          table
            thead
              tr
                th Variable
                th Influencia sobre el suelo y el cultivo
            tbody
              tr
                td Color del suelo
                td Indica diferencias en el contenido de materia orgánica, drenaje y procesos de oxidación.
              tr
                td Textura
                td Determina la capacidad de retención de agua, la aireación y la disponibilidad de nutrientes.
              tr
                td Pendiente
                td Influye en la escorrentía, la erosión y la pérdida de suelo fértil.
              tr
                td Profundidad efectiva
                td Define el volumen de suelo disponible para el crecimiento del sistema radicular.
              tr
                td Drenaje
                td Afecta el movimiento del agua y la disponibilidad de oxígeno para las raíces.
              tr
                td Presencia de piedras
                td Puede limitar el desarrollo de las raíces y dificultar las labores agrícolas.
              tr
                td Compactación
                td Reduce la porosidad, limita la infiltración y restringe el crecimiento radicular.
              tr
                td Cobertura vegetal
                td Protege el suelo contra la erosión y contribuye a conservar la humedad y la materia orgánica.
              tr
                td Historial del cultivo
                td Permite conocer el manejo previo del lote y las posibles variaciones en fertilidad y productividad.
              tr
                td Manejo agronómico
                td Incluye prácticas como fertilización, riego y labranza que modifican las propiedades del suelo.
              tr
                td Fertilidad
                td Determina la disponibilidad de nutrientes necesarios para el crecimiento y desarrollo de los cultivos.
              tr
                td Presencia de erosión
                td Evidencia pérdida de suelo superficial y nutrientes, disminuyendo el potencial productivo del lote.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
