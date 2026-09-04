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

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 5.
          | Ejemplo de organización de datos en una tabla
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-6
        .tabla-a.tabla-peq.tabla1
          table
            thead
              tr
                th Punto de monitoreo
                th Número de plagas
            tbody
              tr
                td Punto 1
                td 3
              tr
                td Punto 2
                td 5
              tr
                td Punto 3
                td 2
              tr
                td Punto 4
                td 8
              tr
                td Punto 5
                td 4
      .col-lg-6.d-none.d-lg-block
        img(src='@/assets/curso/tema1/5.png')




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
