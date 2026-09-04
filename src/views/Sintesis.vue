<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La planificación del muestreo de suelos agrícolas requiere conocer las propiedades del suelo, caracterizar el lote y delimitar áreas homogéneas. También comprende la definición de métodos, recorridos y profundidades, así como la selección y preparación de herramientas e insumos. La aplicación de protocolos técnicos, normativa, medidas de seguridad y criterios ambientales garantiza un proceso organizado, confiable y responsable.
    
    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Organización temática de la planificación y preparación del muestreo de suelos agrícolas en cuatro aspectos: fundamentos y caracterización del suelo, planificación técnica, selección y preparación de herramientas e insumos, y aplicación de protocolos de alistamiento, seguridad y protección ambiental.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
