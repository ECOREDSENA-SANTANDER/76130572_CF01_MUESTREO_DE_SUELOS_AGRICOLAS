<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Protocolos para el alistamiento del muestreo

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-5.mb-lg-0.mb-4
        img(src='@/assets/curso/tema4/1.png')
      .col-lg-7
        p.mb-0 Los protocolos de alistamiento establecen las actividades previas necesarias para desarrollar el muestreo de manera organizada, segura y conforme con los criterios técnicos. Comprenden la preparación del personal, la verificación de las condiciones del terreno y la disponibilidad de herramientas, equipos, insumos y documentos, en concordancia con las buenas prácticas agrícolas (BPA), la seguridad y salud en el trabajo (SST) y la gestión ambiental. Su aplicación permite prevenir errores, optimizar los recursos y asegurar que el trabajo de campo se inicie en las condiciones previstas en el plan de muestreo.


    separador
    #t_4_1.titulo-segundo.mb-5
      h2 4.1 Protocolos técnicos de preparación

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-terciario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema4/2.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 Los protocolos técnicos de preparación corresponden al conjunto de procedimientos organizados que deben ejecutarse antes de iniciar el muestreo de suelos. Su finalidad es garantizar que el personal, las herramientas, los equipos, los insumos y la documentación requerida se encuentren preparados para desarrollar el trabajo de campo de manera eficiente, segura y conforme a los criterios técnicos establecidos. 
            br 
            p.mb-0 La aplicación de protocolos permite estandarizar las actividades, reducir errores operativos y asegurar la calidad de las muestras obtenidas. Además, facilita la trazabilidad del proceso y contribuye al cumplimiento de las normas relacionadas con la producción agrícola sostenible.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 a) Concepto de protocolo técnico

    p.mb-5 Un protocolo técnico es un documento o procedimiento estandarizado que describe de manera secuencial las actividades necesarias para ejecutar correctamente una labor específica.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-md-2.col-5.mb-lg-0.mb-4.mb-md-0
        img(src='@/assets/curso/tema4/3.svg')
      .col-lg-11.col-md-10
        p.mb-0 En el caso del muestreo de suelos, el protocolo establece las acciones que deben realizarse antes, durante y después de la toma de muestras, indicando responsabilidades, recursos, medidas de seguridad y controles de calidad. Su aplicación garantiza que todas las actividades se desarrollen de forma uniforme, independientemente de la persona encargada del procedimiento, además, los protocolos buscan:

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-3.col-md-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/4.svg')
          .tarjeta.tarjeta--azul
            .p-2
              p.mb-0.my-lg-0.my-3.my-md-0 Estandarizar el proceso de muestreo.
      .col-lg-3.col-md-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/5.svg')
          .tarjeta.tarjeta--azul
            .p-2
              p.mb-0.my-lg-0.my-3.my-md-0 Garantizar la calidad de las muestras.
      .col-lg-3.col-md-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/6.svg')
          .tarjeta.tarjeta--azul
            .p-2
              p.mb-0.my-lg-0.my-3.my-md-0 Reducir errores operativos.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      .col-lg-3.col-md-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/7.svg')
          .tarjeta.tarjeta--azul
            .p-2
              p.mb-0.my-lg-0.my-3.my-md-0 Facilitar la capacitación del personal.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-3.col-md-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/8.svg')
          .tarjeta.tarjeta--azul
            .p-2
              p.mb-0.my-lg-0.my-3.my-md-0 Mejorar la eficiencia del trabajo.
      .col-lg-3.col-md-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/9.svg')
          .tarjeta.tarjeta--azul
            .p-2
              p.mb-0.my-lg-0.my-2.my-md-0 Asegurar el cumplimiento de la normativa.
      .col-lg-3.col-md-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/10.svg')
          .tarjeta.tarjeta--azul
            .p-2
              p.mb-0.my-lg-0.my-3.my-md-0 Mantener la trazabilidad del proceso.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 b) Etapas del protocolo de preparación

    p.mb-4 El alistamiento para el muestreo comprende varias etapas que deben ejecutarse de manera secuencial.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema4/11.png')
      .col-lg-9
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="Primera etapa")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                h5.mb-2 Planeación del trabajo. 
                p.mb-3 Consiste en organizar las actividades antes del desplazamiento al lote.
                ul.lista-ul.mb-0
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Definir el objetivo del muestreo.
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Revisar el plan de trabajo.
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Identificar el predio.
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Confirmar la ubicación del lote.
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Programar la fecha de ejecución.
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Consultar las condiciones climáticas.
          .tarjeta.color-a.p-4(titulo="Segunda etapa")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                h5.mb-2 Verificación de herramientas y equipos. 
                p.mb-3 Antes de salir al campo se debe comprobar que todas las herramientas se encuentren completas, limpias y en buen estado. Se recomienda revisar:
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-4
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.lista-ul__vineta
                        p.mb-0 Barrenos.
                      li.d-flex.mb-0
                        i.lista-ul__vineta
                        p.mb-0 Palas.
                      li.d-flex.mb-0
                        i.lista-ul__vineta
                        p.mb-0 Palines.
                      li.d-flex.mb-0
                        i.lista-ul__vineta
                        p.mb-0 Baldes.
                      li.d-flex.mb-0
                        i.lista-ul__vineta
                        p.mb-0 Cepillos.
                  .col-lg-8
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.lista-ul__vineta
                        p.mb-0 Cintas métricas.
                      li.d-flex.mb-0
                        i.lista-ul__vineta
                        p.mb-0 GPS (si aplica).
                      li.d-flex.mb-0
                        i.lista-ul__vineta
                        p.mb-0 Bolsas para muestras.
                      li.d-flex.mb-0
                        i.lista-ul__vineta
                        p.mb-0 Etiquetas.
                      li.d-flex.mb-0
                        i.lista-ul__vineta
                        p.mb-0 Marcadores.
          .tarjeta.color-a.p-4(titulo="Tercera etapa")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                h5.mb-2 Revisión de insumos.
                p.mb-3 Los materiales de consumo deben verificarse previamente para asegurar su disponibilidad.
                ul.lista-ul.mb-0
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Bolsas para muestras.
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Etiquetas.
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Formularios.
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Cinta adhesiva.
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Marcadores permanentes.
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Guantes desechables.
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Material para limpieza.
          .tarjeta.color-a.p-4(titulo="Cuarta etapa")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                h5.mb-2 Preparación del personal.
                p.mb-3 Antes del inicio del trabajo es necesario verificar que el equipo de trabajo:
                ul.lista-ul.mb-0
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Conozca el procedimiento.
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Disponga de los elementos de protección personal.
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Haya recibido instrucciones de seguridad.
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Conozca las características del lote.
                  li.d-flex.mb-0
                    i.lista-ul__vineta
                    p.mb-0 Comprenda el plan de muestreo.


    separador
    #t_4_2.titulo-segundo.mb-5
      h2 4.2 Protección ambiental durante el muestreo de suelos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-md-2.col-5.mb-lg-0.mb-4.mb-md-0
        img(src='@/assets/curso/tema4/12.svg')
      .col-lg-11.col-md-10
        p.mb-0 La planificación del muestreo debe incorporar medidas orientadas a prevenir impactos sobre el suelo, el agua, la vegetación y demás recursos del predio, en concordancia con la normativa ambiental y las buenas prácticas agrícolas (BPA). Para ello, antes del trabajo de campo se deben identificar las áreas sensibles, prever el manejo de los residuos y definir acciones que reduzcan las alteraciones innecesarias del terreno.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p.mb-4 Entre las principales medidas de protección ambiental se encuentran:
        ul.lista-ul.mb-0
          li.d-flex.mb-2
            i.fas.fa-check.arba
            p.mb-0 Planificar recorridos que reduzcan el tránsito sobre áreas cultivadas o ambientalmente sensibles.
          li.d-flex.mb-2
            i.fas.fa-check.arba
            p.mb-0 Evitar la apertura innecesaria de excavaciones y prever la restitución del suelo removido.
          li.d-flex.mb-2
            i.fas.fa-check.arba
            p.mb-0 Conservar la cobertura vegetal y prevenir procesos de compactación y erosión.
          li.d-flex.mb-2
            i.fas.fa-check.arba
            p.mb-0 Mantener una distancia adecuada de nacimientos, quebradas, ríos y canales.
          li.d-flex.mb-2
            i.fas.fa-check.arba
            p.mb-0 Evitar el lavado de herramientas o el vertimiento de sustancias contaminantes en fuentes hídricas.
          li.d-flex.mb-2
            i.fas.fa-check.arba
            p.mb-0 Preparar recipientes para separar y disponer correctamente los residuos ordinarios, reciclables y peligrosos.
          li.d-flex.mb-2
            i.fas.fa-check.arba
            p.mb-0 Controlar el transporte y manejo de combustibles, lubricantes u otras sustancias que puedan contaminar el suelo o el agua.
          li.d-flex.mb-0
            i.fas.fa-check.arba
            p.mb-0 Informar al personal sobre sus responsabilidades ambientales y los procedimientos aplicables.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema4/13.png')

    p.mb-0 La incorporación de estas medidas en el plan de muestreo permite organizar la actividad bajo los principios de prevención, conservación, uso sostenible y responsabilidad ambiental. Su aplicación durante la recolección y el manejo de las muestras se desarrolla en el componente correspondiente a la ejecución del muestreo.


    separador
    #t_4_3.titulo-segundo.mb-5
      h2 4.3 Lista de verificación para el alistamiento de herramientas e insumos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema4/14.png')
      .col-lg-7
        p.mb-4 El alistamiento de herramientas, equipos e insumos constituye la última etapa antes de iniciar el trabajo de campo para el muestreo de suelos agrícolas. Una preparación adecuada permite garantizar que todos los recursos necesarios se encuentren disponibles, en buen estado y organizados conforme a los protocolos técnicos establecidos. Esta verificación previa disminuye la probabilidad de errores durante la toma de muestras, optimiza el tiempo de trabajo y asegura el cumplimiento de los criterios de calidad requeridos para obtener resultados confiables.
        .bg1.p-4.mb-0
          p.mb-0.mx-lg-1 Una de las herramientas más utilizadas para controlar esta etapa es la lista de verificación, la cual permite confirmar, de forma ordenada y sistemática, que cada elemento indispensable para el desarrollo del muestreo ha sido revisado antes del desplazamiento al lote. Además de facilitar la organización del trabajo, las listas de verificación fortalecen la trazabilidad del proceso, promueven el cumplimiento de los procedimientos técnicos y apoyan la implementación de sistemas de gestión de calidad.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="a) Objetivos de una lista de verificación")
            .col-lg-12
              ul.lista-ul.mb-4
                li.d-flex.mb-1
                  i.fas.fa-check.arba
                  p.mb-0 Confirmar la disponibilidad de herramientas e insumos.
                li.d-flex.mb-1
                  i.fas.fa-check.arba
                  p.mb-0 Detectar oportunamente faltantes o daños.
                li.d-flex.mb-1
                  i.fas.fa-check.arba
                  p.mb-0 Organizar las actividades previas al trabajo de campo.
                li.d-flex.mb-1
                  i.fas.fa-check.arba
                  p.mb-0 Garantizar el cumplimiento de los protocolos técnicos.
                li.d-flex.mb-1
                  i.fas.fa-check.arba
                  p.mb-0 Facilitar la supervisión de las actividades.
                li.d-flex.mb-0
                  i.fas.fa-check.arba
                  p.mb-0 Mejorar la calidad del proceso de muestreo.
              p.mb-0 El uso sistemático de listas de chequeo permite reducir olvidos e interrupciones durante el trabajo, favorece la planificación y mejora la eficiencia del equipo de trabajo. Además, facilita la trazabilidad de las actividades realizadas y contribuye al fortalecimiento de una cultura de calidad en los procesos de muestreo de suelos agrícolas.
          .row.align-items-center(titulo="b) Componentes de una lista de verificación")
            .col-lg-12
              p.mb-4 Una lista de verificación debe ser clara, sencilla y contener únicamente la información necesaria para facilitar el control de las actividades. Generalmente incluye los siguientes elementos:
              ul.lista-ul.mb-4
                li.d-flex.mb-1
                  i.fas.fa-check.arba
                  p.mb-0 Identificación del predio.
                li.d-flex.mb-1
                  i.fas.fa-check.arba
                  p.mb-0 Fecha del muestreo.
                li.d-flex.mb-1
                  i.fas.fa-check.arba
                  p.mb-0 Responsable.
                li.d-flex.mb-1
                  i.fas.fa-check.arba
                  p.mb-0 Área o lote.
                li.d-flex.mb-1
                  i.fas.fa-check.arba
                  p.mb-0 Actividades a verificar.
                li.d-flex.mb-1
                  i.fas.fa-check.arba
                  p.mb-0 Estado de cumplimiento.
                li.d-flex.mb-0
                  i.fas.fa-check.arba
                  p.mb-0 Observaciones.
              p.mb-0 Estos componentes permiten documentar el proceso y conservar evidencia del alistamiento realizado.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema4/15.png')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 12.
          | Modelo de lista de verificación
        .tabla-a.tab12.table-responsive
          table
            thead
              tr
                th.text-center Ítem
                th Aspecto a verificar
                th Cumple
                th No cumple
                th Observaciones
            tbody
              tr
                td.text-center 1
                td Barreno limpio y en buen estado.
                td
                td
                td
              tr
                td.text-center 2
                td Pala disponible
                td
                td
                td
              tr
                td.text-center 3
                td Balde limpio
                td
                td
                td
              tr
                td.text-center 4
                td Bolsas para muestras
                td
                td
                td
              tr
                td.text-center 5
                td Etiquetas disponibles
                td
                td
                td
              tr
                td.text-center 6
                td Marcador permanente
                td
                td
                td
              tr
                td.text-center 7
                td Croquis del lote
                td
                td
                td
              tr
                td.text-center 8
                td Plan de muestreo
                td
                td
                td
              tr
                td.text-center 9
                td Formatos de registro
                td
                td
                td
              tr
                td.text-center 10
                td GPS o dispositivo de ubicación
                td
                td
                td
              tr
                td.text-center 11
                td Guantes
                td
                td
                td
              tr
                td.text-center 12
                td Botas de seguridad
                td
                td
                td
              tr
                td.text-center 13
                td Gafas de protección
                td
                td
                td
              tr
                td.text-center 14
                td Agua para hidratación
                td
                td
                td
              tr
                td.text-center 15
                td Botiquín de primeros auxilios
                td
                td
                td

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-terciario.p-lg-5.p-4
          p.mb-0 #[b Nota:] este formato puede adaptarse según las características del predio, el cultivo y el procedimiento de muestreo.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-7
        .bg2.p-4.mb-4
          p.mb-0.mx-lg-2.mb-lg-1.mt-lg-2 Para obtener mejores resultados en el alistamiento del muestreo, se recomienda diligenciar la lista de verificación antes de salir al campo y realizar la revisión de manera ordenada, asignando un responsable para su control. Es importante registrar cualquier novedad, corregir las inconsistencias antes de iniciar el trabajo y conservar el formato como evidencia del proceso, fortaleciendo así la trazabilidad y facilitando las auditorías o los procesos de control de calidad.
        p.mb-0 La utilización de listas de chequeo contribuye a disminuir errores, mejorar la organización y optimizar el tiempo y los recursos disponibles. Además, favorece el cumplimiento de los protocolos técnicos, reduce los costos asociados a reprocesos y aumenta la confiabilidad de las muestras obtenidas durante el muestreo de suelos agrícolas.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema4/16.png')


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
