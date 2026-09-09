<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Planificación técnica del muestreo de suelos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-md-2.col-5.mb-lg-0.mb-4.mb-md-0
        img(src='@/assets/curso/tema2/1.svg')
      .col-lg-11.col-md-10
        p.mb-0 La planificación técnica del muestreo de suelos constituye una de las etapas más importantes dentro del proceso de evaluación de la fertilidad de un terreno agrícola. La confiabilidad de los resultados obtenidos en el laboratorio depende, en gran medida, de que las muestras recolectadas representen adecuadamente las condiciones reales del lote. Una muestra mal tomada, aunque sea analizada por un laboratorio altamente especializado, generará resultados poco representativos que pueden conducir a decisiones erróneas sobre fertilización, aplicación de correctivos y manejo agronómico del cultivo.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Fundamentos del muestreo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-md-2.col-5.mb-lg-0.mb-4.mb-md-0
        img(src='@/assets/curso/tema2/2.svg')
      .col-lg-11.col-md-10
        p.mb-0 El muestreo de suelos es el procedimiento técnico mediante el cual se recolectan pequeñas porciones de suelo, denominadas submuestras, provenientes de diferentes puntos de un lote agrícola. Estas submuestras se mezclan y homogenizan para obtener una muestra compuesta, que será enviada al laboratorio para determinar sus propiedades físicas, químicas y, en algunos casos, biológicas. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-4.p-lg-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema2/3.png ')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 El propósito del muestreo no es analizar todo el terreno, sino obtener una muestra que represente fielmente las condiciones promedio del área evaluada. Por esta razón, la planificación y la ejecución del muestreo son determinantes para garantizar la confiabilidad de los resultados.

    .bg3.p-lg-2.p-4.mb-5(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-lg-5.col-md-7.col-8.mb-4.mb-lg-0
          img.img-t.img-a(src='@/assets/curso/tema2/4.svg')
        .col-lg-7
          p.mb-4 Una muestra de suelo se considera representativa cuando:
          ul.lista-ul.mb-0
            li.d-flex.mb-2
              i.fas.fa-check
              p.mb-0 Corresponde a un área homogénea del lote. 
            li.d-flex.mb-2
              i.fas.fa-check
              p.mb-0 Se obtiene mediante un procedimiento técnico estandarizado.
            li.d-flex.mb-2
              i.fas.fa-check
              p.mb-0 Está libre de contaminantes externos. 
            li.d-flex.mb-2
              i.fas.fa-check
              p.mb-0 Refleja las condiciones reales del suelo.
            li.d-flex.mb-2
              i.fas.fa-check
              p.mb-0 Es suficiente para realizar los análisis requeridos.
            li.d-flex.mb-0
              i.fas.fa-check
              p.mb-0 Ha sido correctamente identificada y conservada. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-0(data-aos="fade-left")
          .row.justify-content-center.align-items-center(titulo="a) Importancia del muestreo de suelos")
            .col-lg-11
              p.mb-4 El análisis de laboratorio únicamente es útil cuando la muestra enviada representa las condiciones reales del terreno. Por esta razón, el muestreo constituye la fase más crítica de todo el proceso de evaluación de la fertilidad del suelo. Una adecuada planificación del muestreo permite:
              .row.justify-content-center.align-items-center.mb-4
                .col-lg-7.mb-lg-0.mb-4
                  ul.lista-ul.mb-0
                    li.d-flex.mb-1
                      i.fas.fa-check
                      p.mb-0 Conocer el estado nutricional del suelo. 
                    li.d-flex.mb-1
                      i.fas.fa-check
                      p.mb-0 Determinar la disponibilidad de macro y micronutrientes. 
                    li.d-flex.mb-1
                      i.fas.fa-check
                      p.mb-0 Identificar problemas de acidez o alcalinidad. 
                    li.d-flex.mb-1
                      i.fas.fa-check
                      p.mb-0 Detectar deficiencias o excesos de nutrientes.
                    li.d-flex.mb-1
                      i.fas.fa-check
                      p.mb-0 Formular recomendaciones de fertilización. 
                    li.d-flex.mb-1
                      i.fas.fa-check
                      p.mb-0 Definir necesidades de encalado o aplicación de enmiendas. 
                    li.d-flex.mb-1
                      i.fas.fa-check
                      p.mb-0 Optimizar el uso de fertilizantes. 
                    li.d-flex.mb-1
                      i.fas.fa-check
                      p.mb-0 Reducir costos de producción. 
                    li.d-flex.mb-1
                      i.fas.fa-check
                      p.mb-0 Disminuir impactos ambientales derivados del uso inadecuado de insumos. 
                    li.d-flex.mb-0
                      i.fas.fa-check
                      p.mb-0 Incrementar la productividad de los cultivos. 
                .col-lg-5.col-md-8.col-10
                  img(src='@/assets/curso/tema2/5.png')
              p.mb-0 Asimismo, el muestreo periódico facilita el seguimiento de la fertilidad del suelo y la evaluación de la eficacia de las prácticas de manejo implementadas en el predio.
          .row.justify-content-center.align-items-center(titulo="b) Objetivos del muestreo de suelos")
            .col-lg-11
              p.mb-4 La planificación del muestreo debe partir de objetivos claramente definidos, ya que estos determinan el tipo de análisis requerido y la metodología que se empleará.
              .row.justify-content-center.align-items-start.mb-0
                .col-lg-7.mb-lg-0.mb-4
                  p.mb-4 #[b Objetivo general]
                  p.mb-4 Obtener una muestra representativa del suelo que permita evaluar sus características y generar información confiable para la toma de decisiones relacionadas con el manejo agrícola.
                  p.mb-4 #[b Objetivos específicos]
                  ul.lista-ul.mb-0
                    li.d-flex.mb-1
                      i.fas.fa-check
                      p.mb-0 Evaluar la fertilidad del suelo. 
                    li.d-flex.mb-1
                      i.fas.fa-check
                      p.mb-0 Conocer el contenido de nutrientes disponibles. 
                    li.d-flex.mb-1
                      i.fas.fa-check
                      p.mb-0 Determinar el pH y la acidez. 
                    li.d-flex.mb-1
                      i.fas.fa-check
                      p.mb-0 Evaluar la materia orgánica. 
                    li.d-flex.mb-1
                      i.fas.fa-check
                      p.mb-0 Diagnosticar limitaciones para el crecimiento de los cultivos. 
                    li.d-flex.mb-1
                      i.fas.fa-check
                      p.mb-0 Formular planes de fertilización. 
                    li.d-flex.mb-1
                      i.fas.fa-check
                      p.mb-0 Definir dosis de correctivos y fertilizantes. 
                    li.d-flex.mb-1
                      i.fas.fa-check
                      p.mb-0 Monitorear cambios en las propiedades del suelo. 
                    li.d-flex.mb-1
                      i.fas.fa-check
                      p.mb-0 Apoyar programas de agricultura de precisión. 
                    li.d-flex.mb-0
                      i.fas.fa-check
                      p.mb-0 Contribuir al manejo sostenible del recurso suelo. 
                .col-lg-5.col-md-8.col-10
                  img(src='@/assets/curso/tema2/6.png')
          .row.justify-content-center.align-items-center(titulo="c) Principios técnicos del muestreo")
            .col-lg-11
              p.mb-4 El muestreo de suelos debe realizarse siguiendo criterios técnicos que garanticen la representatividad y calidad de la información obtenida.
              .row.justify-content-center.align-items-start.mb-0
                .col-lg-7.mb-lg-0.mb-4
                  ul.lista-ul.mb-0
                    li.d-flex.mb-4
                      i.fas.fa-check
                      p.mb-0 #[b Representatividad:] la muestra debe reflejar las condiciones promedio del lote o del área homogénea evaluada.
                    li.d-flex.mb-4
                      i.fas.fa-check
                      p.mb-0 #[b Homogeneidad:] solo deben mezclarse submuestras provenientes de áreas con características similares en cuanto a relieve, tipo de suelo, manejo agronómico y cultivo.
                    li.d-flex.mb-4
                      i.fas.fa-check
                      p.mb-0 #[b Aleatoriedad:] los puntos de muestreo deben distribuirse de manera que representen toda el área de estudio, evitando concentrarlos en un solo sector.
                    li.d-flex.mb-4
                      i.fas.fa-check
                      p.mb-0 #[b Repetibilidad:] el procedimiento debe poder repetirse en futuras evaluaciones para comparar resultados y hacer seguimiento a la evolución del suelo.
                    li.d-flex.mb-0
                      i.fas.fa-check
                      p.mb-0 #[b Trazabilidad:] cada muestra debe estar plenamente identificada y asociada con la información del lote, la fecha, el cultivo y la ubicación de los puntos de muestreo.
                .col-lg-5.col-md-8.col-10
                  img(src='@/assets/curso/tema2/7.png')

    p.mb-0 Una adecuada planificación del muestreo de suelos permite obtener resultados analíticos confiables y diagnósticos precisos de la fertilidad, facilitando la toma de decisiones y el manejo agronómico de acuerdo con las condiciones reales del suelo. Además, contribuye a optimizar el uso y la inversión en fertilizantes, mejorar la productividad y reducir pérdidas por deficiencias nutricionales. Desde el punto de vista ambiental, favorece el uso racional de los insumos, disminuye el riesgo de contaminación y contribuye a la conservación de la fertilidad natural del suelo.


    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Diseño del plan de muestreo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-4
        img(src='@/assets/curso/tema2/8.png')
      .col-lg-7
        p.mb-4 El plan de muestreo organiza y documenta las actividades previas a la recolección de las muestras de suelo. En su elaboración se deben considerar las características del sistema productivo, el historial del lote, el tipo de cultivo y el objetivo del análisis. Asimismo, se definen las áreas homogéneas, el recorrido, el número y la profundidad de las submuestras, los recursos necesarios y los registros que garantizarán la trazabilidad.
        p.mb-0 Una planificación adecuada favorece la representatividad de las muestras, optimiza el tiempo y los recursos y permite repetir el procedimiento en futuras evaluaciones para comparar resultados y hacer seguimiento a la fertilidad del suelo.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-8
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="a) Delimitación del lote")
            .col-lg-12
              p.mb-4 La delimitación consiste en definir el área que será objeto del muestreo e identificar sectores con condiciones diferentes. Durante el reconocimiento inicial se deben considerar:
              ul.lista-ul.mb-4
                li.d-flex.mb-2
                  i.fas.fa-check
                  p.mb-0 Límites, caminos, cercas y canales de drenaje.
                li.d-flex.mb-2
                  i.fas.fa-check
                  p.mb-0 Pendiente, relieve y sectores erosionados o encharcados.
                li.d-flex.mb-2
                  i.fas.fa-check
                  p.mb-0 Cambios en el color, la textura y la cobertura vegetal.
                li.d-flex.mb-0
                  i.fas.fa-check
                  p.mb-0 Tipo de cultivo, historial de manejo, fertilización y productividad.
              p.mb-0 Cuando se identifiquen diferencias significativas, el lote debe dividirse en áreas homogéneas independientes. Cada una deberá contar con su propia muestra compuesta, sin mezclar submuestras provenientes de sectores con características distintas.
          .row.align-items-center(titulo="b) Elaboración del croquis")
            .col-lg-12
              p.mb-4 El croquis es una representación gráfica del lote que permite registrar sus límites, las áreas homogéneas, el recorrido y la ubicación aproximada de los puntos de muestreo. Debe incluir, como mínimo:
              .row.justify-content-center.align-items-center.mb-4
                .col-lg-6
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Nombre y área del predio.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Fecha y responsable del muestreo.
                    li.d-flex.mb-0
                      i.fas.fa-check
                      p.mb-0 Norte geográfico.
                .col-lg-6
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Límites, caminos, cercas y fuentes de agua.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Áreas homogéneas.
                    li.d-flex.mb-0
                      i.fas.fa-check
                      p.mb-0 Recorrido y puntos de muestreo.
              p.mb-0 El croquis puede elaborarse manualmente o mediante receptores GPS, aplicaciones móviles o sistemas de información geográfica (SIG).
          .row.align-items-center(titulo="c) Número y distribución de las submuestras")
            .col-lg-12
              p.mb-4 El número de submuestras debe definirse según el tamaño y la variabilidad de cada área homogénea. Como orientación general, pueden considerarse los siguientes valores:
              ul.lista-ul.mb-4
                li.d-flex.mb-2
                  i.fas.fa-check
                  p.mb-0 Hasta 2 hectáreas: de 10 a 15 submuestras.
                li.d-flex.mb-2
                  i.fas.fa-check
                  p.mb-0 Entre 2 y 5 hectáreas: de 15 a 20 submuestras.
                li.d-flex.mb-2
                  i.fas.fa-check
                  p.mb-0 Entre 5 y 10 hectáreas: de 20 a 25 submuestras.
                li.d-flex.mb-0
                  i.fas.fa-check
                  p.mb-0 Más de 10 hectáreas: dividir el terreno en nuevas áreas homogéneas.
              p.mb-4 Estas cantidades deben ajustarse de acuerdo con el cultivo, las condiciones del terreno y las recomendaciones del laboratorio. Las submuestras deben distribuirse uniformemente mediante recorridos en zigzag, cuadrícula, transectos o líneas paralelas.
              p.mb-0 La extracción, integración y homogeneización de las submuestras se desarrollan en el componente formativo correspondiente a la ejecución del muestreo.
          .row.align-items-center(titulo="d) Profundidad de muestreo")
            .col-lg-12
              p.mb-4 La profundidad debe definirse según el tipo de cultivo, el desarrollo del sistema radicular, el objetivo del análisis y las orientaciones del laboratorio.
              .titulo-sexto.mb-4
                h5 Tabla 10.
                | Factores de formación
              .tabla-a.tab10.mb-4.tabla-peq
                table
                  thead
                    tr
                      th Tipo de cultivo
                      th Profundidad orientativa
                      th Consideraciones
                  tbody
                    tr
                      td Cultivos transitorios
                      td 0 a 20 cm
                      td Aplicable a cultivos como maíz, frijol, arroz y hortalizas.
                    tr
                      td Pasturas
                      td 0 a 10 cm
                      td Corresponde a la capa donde se concentra gran parte de la actividad radicular.
                    tr
                      td Cultivos permanentes
                      td 0 a 20 cm y 20 a 40 cm
                      td Puede requerir muestreos separados para evaluar diferentes capas del suelo.
              p.mb-0 #[b Nota.] Los valores son orientativos y pueden variar según el cultivo, el objetivo del análisis y las indicaciones del laboratorio. Todas las submuestras de una misma área homogénea deben obtenerse a la profundidad previamente definida.
          .row.align-items-center(titulo="e) Planeación logística")
            .col-lg-12
              p.mb-4 El plan debe especificar los recursos y condiciones necesarios para desarrollar el muestreo:
              .row.justify-content-center.align-items-center.mb-4
                .col-lg-6
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Fecha y condiciones climáticas previstas.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Personal responsable.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Herramientas, equipos y elementos de protección.
                    li.d-flex.mb-0
                      i.fas.fa-check
                      p.mb-0 Recipientes, etiquetas y materiales de empaque.
                .col-lg-6
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Formatos de registro.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Medio de transporte.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Tiempo estimado del recorrido.
                    li.d-flex.mb-0
                      i.fas.fa-check
                      p.mb-0 Laboratorio y condiciones de entrega.
              p.mb-0 Esta organización permite prevenir retrasos, pérdidas, contaminación de las muestras y dificultades durante el trabajo de campo.
          .row.align-items-center(titulo="f) Registro de la información")
            .col-lg-12
              p.mb-4 El formato de campo debe permitir identificar la procedencia de cada muestra y relacionarla con el área representada. Como mínimo, debe contener:
              .row.justify-content-center.align-items-start.mb-4
                .col-lg-6
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Código de la muestra.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Nombre y ubicación del predio.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Fecha y responsable.
                    li.d-flex.mb-0
                      i.fas.fa-check
                      p.mb-0 Cultivo.
                .col-lg-6
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Área homogénea representada.
                    li.d-flex.mb-2
                      i.fas.fa-check
                      p.mb-0 Profundidad y método de muestreo.
                    li.d-flex.mb-0
                      i.fas.fa-check
                      p.mb-0 Observaciones relevantes.
              p.mb-0 La preparación previa de estos registros garantiza la trazabilidad y facilita la interpretación posterior de los resultados del laboratorio.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema2/9.png')


    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Normativa aplicable al muestreo de suelos agrícolas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-0 El muestreo de suelos agrícolas es una actividad técnica que debe ejecutarse siguiendo procedimientos estandarizados y cumpliendo la normatividad vigente relacionada con la producción agropecuaria, la protección del medio ambiente y la seguridad y salud en el trabajo. El cumplimiento de estas disposiciones garantiza que las actividades de campo se desarrollen de manera segura, eficiente y responsable, minimizando los riesgos para las personas, los cultivos y los recursos naturales. En Colombia, diversas normas e instrumentos técnicos establecen lineamientos para las buenas prácticas agrícolas (BPA), la gestión ambiental, el manejo adecuado de residuos y la prevención de riesgos laborales. Aunque no existe una norma exclusiva para el muestreo de suelos, esta actividad hace parte de los procesos de producción agrícola y, por tanto, debe ajustarse a la legislación vigente y a los protocolos institucionales establecidos por las entidades competentes. 
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/10.png')

    p.mb-5 El conocimiento de esta normativa permite al aprendiz ejecutar el muestreo de acuerdo con criterios técnicos y legales, fortaleciendo la calidad del proceso y promoviendo una agricultura sostenible.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        TabsC.color-primario
          .p-lg-5.p-4.fd3(titulo="Buenas prácticas agrícolas (BPA)")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-4.d-none.d-lg-block
                img.img-t(src='@/assets/curso/tema2/11.png')
              .col-lg-8
                p.mb-4 Las buenas prácticas agrícolas son el conjunto de principios, normas  y procedimientos orientados a garantizar una producción agrícola inocua, sostenible y ambientalmente responsable.
                p.mb-4 Durante el muestreo de suelos, las BPA contribuyen a asegurar que las muestras obtenidas representen adecuadamente las condiciones del terreno y que el procedimiento no genere contaminación ni afectaciones al cultivo. 
                p.mb-4 Los objetivos de las BPA:
                .row.justify-content-center.align-items-center.mb-5
                  .col-lg-6
                    ul.lista-ul.mb-0
                      li.d-flex.mb-1
                        i.fas.fa-point
                        p.mb-0 Proteger la salud de los trabajadores.
                      li.d-flex.mb-1
                        i.fas.fa-point
                        p.mb-0 Garantizar la inocuidad de la producción agrícola.
                      li.d-flex.mb-0
                        i.fas.fa-point
                        p.mb-0 Promover el uso sostenible de los recursos naturales.
                  .col-lg-6
                    ul.lista-ul.mb-0
                      li.d-flex.mb-1
                        i.fas.fa-point
                        p.mb-0 Reducir los impactos ambientales.
                      li.d-flex.mb-1
                        i.fas.fa-point
                        p.mb-0 Mejorar la calidad de los procesos productivos.
                      li.d-flex.mb-0
                        i.fas.fa-point
                        p.mb-0 Favorecer la trazabilidad de las actividades agrícolas.
                p.mb-4 Principios de las BPA aplicados al muestreo:
                .row.justify-content-center.align-items-start.mb-0
                  .col-lg-6
                    ul.lista-ul.mb-0
                      li.d-flex.mb-1
                        i.fas.fa-point
                        p.mb-0 Utilizar herramientas limpias y en buen estado.
                      li.d-flex.mb-1
                        i.fas.fa-point
                        p.mb-0 Evitar la contaminación cruzada entre muestras.
                      li.d-flex.mb-1
                        i.fas.fa-point
                        p.mb-0 Mantener registros del procedimiento realizado.
                      li.d-flex.mb-0
                        i.fas.fa-point
                        p.mb-0 Identificar correctamente cada muestra.
                  .col-lg-6
                    ul.lista-ul.mb-0
                      li.d-flex.mb-1
                        i.fas.fa-point
                        p.mb-0 Utilizar elementos de protección personal.
                      li.d-flex.mb-1
                        i.fas.fa-point
                        p.mb-0 Respetar las recomendaciones técnicas de profundidad y método de muestreo. 
                      li.d-flex.mb-0
                        i.fas.fa-point
                        p.mb-0 Proteger las áreas intervenidas durante el recorrido.
          .p-lg-5.p-4.fd3(titulo="Seguridad y salud en el trabajo (SST)")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/tema2/12.png')
              .col-lg-8
                p.mb-0 Las actividades de muestreo implican desplazamientos por terrenos agrícolas, manipulación de herramientas manuales y exposición a diferentes condiciones ambientales, por lo que es indispensable aplicar las normas de seguridad y salud en el trabajo. El objetivo es prevenir accidentes, enfermedades laborales y situaciones que puedan afectar la integridad del personal encargado del muestreo.
          .p-lg-5.p-4.fd3(titulo="Gestión ambiental aplicable al muestreo")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/tema2/13.png')
              .col-lg-8
                p.mb-4 El muestreo de suelos debe desarrollarse procurando el menor impacto posible sobre el ambiente. Aunque se trata de una actividad de baja intervención, es necesario aplicar criterios de manejo ambiental que contribuyan a la conservación del recurso suelo y de los ecosistemas asociados. Durante el proceso se recomienda:
                .row.justify-content-center.align-items-start.mb-4
                  .col-lg-6
                    ul.lista-ul.mb-0
                      li.d-flex.align-items-start.mb-1
                        i.fas.fa-point
                        p.mb-0 Evitar la alteración innecesaria del terreno.
                      li.d-flex.mb-1
                        i.fas.fa-point
                        p.mb-0 Minimizar la generación de residuos.
                      li.d-flex.mb-1
                        i.fas.fa-point
                        p.mb-0 Proteger la cobertura vegetal.
                      li.d-flex.mb-0
                        i.fas.fa-point
                        p.mb-0 No contaminar fuentes de agua.
                  .col-lg-6
                    ul.lista-ul.mb-0
                      li.d-flex.align-items-start.mb-1
                        i.fas.fa-point
                        p.mb-0 Restaurar el sitio de muestreo cuando sea necesario.
                      li.d-flex.mb-0
                        i.fas.fa-point
                        p.mb-0 Utilizar racionalmente los recursos empleados durante la actividad.
                p.mb-0 Durante el muestreo de suelos agrícolas se deben manejar adecuadamente los residuos generados, como bolsas, etiquetas, guantes, plásticos y empaques, clasificándolos y disponiéndolos conforme a los procedimientos de la organización y la normativa ambiental vigente. Asimismo, es fundamental proteger los recursos naturales evitando la remoción innecesaria de la vegetación, la disposición de residuos en el terreno, la alteración de cauces de agua, la generación de erosión y la contaminación del suelo con combustibles o sustancias químicas
          .p-lg-5.p-4.fd3(titulo="Normatividad técnica relacionada con el muestreo de suelos")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/tema2/14.png')
              .col-lg-8
                p.mb-4 El personal encargado del muestreo debe conocer y aplicar la legislación vigente relacionada con la actividad agrícola y la prevención de riesgos. Entre las principales referencias normativas colombianas se encuentran:
                ul.lista-ul.mb-0
                  li.d-flex.mb-1
                    i.fas.fa-point
                    p.mb-0 Resolución 30021 de 2017 del Instituto Colombiano Agropecuario (ICA), mediante la cual se establecen los requisitos para la Certificación en Buenas Prácticas Agrícolas para la producción primaria de vegetales y otras especies para consumo humano.
                  li.d-flex.mb-1
                    i.fas.fa-point
                    p.mb-0 Decreto 1072 de 2015, Decreto Único Reglamentario del Sector Trabajo, que establece los lineamientos para el Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST).
                  li.d-flex.mb-1
                    i.fas.fa-point
                    p.mb-0 Resolución 0312 de 2019, que define los estándares mínimos del Sistema de Gestión de Seguridad y Salud en el Trabajo.
                  li.d-flex.mb-1
                    i.fas.fa-point
                    p.mb-0 Decreto 1076 de 2015, Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible, que reúne la normativa ambiental aplicable.
                  li.d-flex.mb-0
                    i.fas.fa-point
                    p.mb-0 Protocolos técnicos establecidos por laboratorios acreditados para la recepción y análisis de muestras de suelo.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
