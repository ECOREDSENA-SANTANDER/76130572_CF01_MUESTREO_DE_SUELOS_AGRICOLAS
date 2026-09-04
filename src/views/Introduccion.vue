<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/intro/1.png')
      .col-lg-7
        .bg1.p-4.p-lg-3.mb-3
          p.mb-0.mx-lg-1 El suelo es un recurso esencial para la producción agrícola, pues proporciona soporte, agua, aire y nutrientes a los cultivos. Sus propiedades físicas, químicas y morfológicas varían según los factores de formación, el relieve y las prácticas de manejo, por lo que su caracterización permite reconocer las condiciones productivas del terreno e identificar áreas homogéneas.
        p.mb-0 La planificación del muestreo es fundamental para obtener muestras representativas y resultados confiables. Este proceso comprende la delimitación del lote agrícola, la selección del método, la definición del recorrido, el número y la profundidad de las submuestras, así como el alistamiento de herramientas, equipos, insumos y registros.

    p.mb-5 Este componente formativo busca desarrollar las capacidades necesarias para planificar y preparar el muestreo de suelos agrícolas de acuerdo con criterios técnicos, las buenas prácticas agrícolas, la seguridad y salud en el trabajo y la gestión ambiental. Su adecuada aplicación permite organizar el trabajo de campo y generar información útil para orientar el manejo sostenible de la fertilidad del suelo.

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
