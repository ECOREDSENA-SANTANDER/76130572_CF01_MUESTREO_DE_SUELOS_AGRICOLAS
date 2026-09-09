<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Herramientas, equipos e insumos para el muestreo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema3/1.png')
      .col-lg-7
        p.mb-4 La calidad del muestreo de suelos no depende únicamente del conocimiento técnico del operador o de la correcta planificación del procedimiento. También está estrechamente relacionada con la selección, preparación y utilización adecuada de las herramientas, equipos e insumos empleados durante el trabajo de campo. El uso de implementos apropiados garantiza la obtención de muestras representativas, evita la contaminación del material recolectado y facilita el cumplimiento de los protocolos establecidos para el análisis de laboratorio.
        p.mb-0 En la actualidad existe una amplia variedad de herramientas diseñadas para la toma de muestras de suelo, las cuales se diferencian por su estructura, forma de operación y aplicación según las condiciones del terreno. La selección de cada herramienta depende de factores como la textura del suelo, la profundidad requerida, el tipo de cultivo, el tamaño del lote y el método de muestreo seleccionado. Asimismo, es indispensable que estos implementos se encuentren en óptimas condiciones de limpieza, mantenimiento y funcionamiento para asegurar la confiabilidad del proceso.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Herramientas para el muestreo

    p.mb-5 Las herramientas para el muestreo de suelos son los implementos utilizados para extraer porciones de suelo de manera uniforme, limpia y representativa. Su correcta selección influye directamente en la calidad de la muestra, ya que permite mantener una profundidad constante, evitar contaminaciones y reducir alteraciones en la estructura natural del suelo .

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 3. 
          | Herramientas para el muestreo
        img(src='@/assets/curso/tema3/2.svg', alt='Herramientas e insumos requeridos para el muestreo de suelos agrícolas: barreno, pala, balde, bolsas plásticas, cinta métrica y marcador indeleble.  ')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-4 Cada herramienta ha sido diseñada para cumplir funciones específicas y su utilización depende de las condiciones del terreno y del objetivo del análisis. Por ello, antes de iniciar el trabajo de campo, el responsable del muestreo debe conocer las características, ventajas y limitaciones de cada implemento, así como las recomendaciones para su uso seguro y eficiente.
        p.mb-4 Objetivos del uso de herramientas especializadas:
        .row.justify-content-center.align-items-center.mb-4.mb-lg-0
          .col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/tema3/4.svg')
          .col-lg-9
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Obtener muestras representativas.
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Mantener la profundidad constante durante el muestreo.
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Reducir el esfuerzo físico del operador.
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Disminuir la contaminación de las muestras.
              li.d-flex.mb-2
                i.fas.fa-check
                p.mb-0 Facilitar el trabajo en diferentes condiciones de suelo.
              li.d-flex.mb-0
                i.fas.fa-check
                p.mb-0 Incrementar la precisión del procedimiento.
      .col-lg-5
        img(src='@/assets/curso/tema3/3.png')

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 11.
          | Principales herramientas utilizadas en el muestreo
        .tabla-a.tab11.table-responsive
          table
            thead
              tr
                th Herramienta
                th Descripción y usos
                th Ventajas
                th Limitaciones / Consideraciones
            tbody
              tr
                td Barreno de suelos
                td Es una estructura metálica diseñada para penetrar el suelo y extraer columnas de tierra a una profundidad determinada. Es una de las herramientas más utilizadas en el muestreo agrícola.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Alta precisión.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Menor alteración del perfil.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Fácil limpieza.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Rapidez en el trabajo.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Puede presentar dificultad en suelos muy pedregosos.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Menor eficiencia en suelos extremadamente secos.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 La selección depende de la textura y humedad del suelo.
              tr
                td Barreno helicoidal
                td Herramienta que utiliza una hélice para penetrar y extraer el suelo.
                td Permite realizar muestreos de manera rápida y eficiente.
                td Su desempeño puede verse limitado en suelos muy pedregosos o excesivamente secos.
              tr
                td Barreno tubular
                td Está compuesto por un tubo metálico que permite extraer una porción de suelo de forma relativamente uniforme.
                td Favorece la obtención de muestras con menor alteración.
                td Requiere seleccionar adecuadamente el diámetro y la profundidad de trabajo.
              tr
                td Barreno Edelman
                td Tipo de barreno diseñado para penetrar diferentes tipos de suelo y extraer muestras mediante un sistema de cuchillas.
                td Adecuado para diferentes condiciones de suelo y fácil de utilizar.
                td Puede presentar dificultades en suelos con abundantes piedras o raíces.
              tr
                td Barreno de mediacaña
                td Herramienta con una sección abierta que permite observar y extraer el material del suelo.
                td Facilita la visualización del material extraído.
                td Puede requerir mayor esfuerzo en suelos compactados.
              tr
                td Barreno tipo rosca
                td Herramienta que penetra el suelo mediante un sistema de rosca o giro.
                td Permite extraer suelo de manera continua y eficiente.
                td Su uso depende de las características de humedad y textura del suelo.
              tr
                td Pala recta
                td Herramienta ampliamente disponible que permite abrir pequeñas calicatas y extraer porciones de suelo cuando no se dispone de barrenos.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Bajo costo.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Fácil consecución.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Adecuada para terrenos blandos.
                td
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Requiere mayor esfuerzo físico.
                    li.d-flex.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Puede alterar en mayor medida el perfil del suelo.
              tr
                td Palín
                td Palo pequeña utilizada para realizar cortes precisos en el suelo y extraer pequeñas porciones del perfil.
                td Permite ajustar la profundidad, limpiar el sitio de muestreo y realizar cortes precisos.
                td Su capacidad de extracción es limitada frente a herramientas de mayor tamaño.
              tr
                td Azadón
                td Herramienta utilizada para retirar la cobertura vegetal o remover capas superficiales de terreno con compactación.
                td Facilita la preparación del sitio de muestreo.
                td Debe utilizarse con cuidado para no alterar innecesariamente el suelo que será muestreado.
              tr
                td Cuchillo para perfil
                td Herramienta empleada para limpiar las paredes de las calicatas, observar horizontes y extraer pequeñas muestras específicas.
                td Permite realizar cortes y observaciones precisas del perfil de suelo.
                td Su uso se limita principalmente a la caracterización y toma de pequeñas muestras.
              tr
                td Cilindros para muestras inalteradas
                td Recipientes metálicos de volumen conocido que permiten conservar la estructura natural del suelo durante la toma de la muestra.
                td Adecuados para estudios físicos, investigación y caracterización avanzada del suelo.
                td Requieren una técnica cuidadosa para evitar la alteración de la estructura natural de la muestra.


    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1 Equipos, insumos y preparación de herramientas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-md-2.col-5.mb-lg-0.mb-4.mb-md-0
        img(src='@/assets/curso/tema3/5.svg')
      .col-lg-11.col-md-10
        p.mb-0 El alistamiento para el muestreo de suelos comprende la selección y verificación previa de las herramientas, equipos auxiliares e insumos necesarios para desarrollar el trabajo de campo de manera segura, organizada y conforme con el plan establecido. Estos recursos deben seleccionarse según el método de muestreo, las características del terreno, la profundidad definida y los requerimientos del laboratorio.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/6.png')
      .col-lg-8
        p.mb-4 Antes de iniciar la actividad se debe comprobar la disponibilidad y el estado de los siguientes elementos:
        ul.lista-ul.mb-0
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 Herramientas de extracción, como barrenos, palas o palines.
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 Recipientes y materiales de empaque para las muestras.
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 Etiquetas resistentes a la humedad y marcadores permanentes.
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 Formatos de campo y registro.
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 Equipos de ubicación y medición, cuando se requieran.
          li.d-flex.mb-2
            i.fas.fa-check
            p.mb-0 Elementos de protección personal.
          li.d-flex.mb-0
            i.fas.fa-check
            p.mb-0 Materiales de limpieza y mantenimiento.

    p.mb-5 Las etiquetas y los formatos deben prepararse previamente mediante un sistema de codificación que permita relacionar cada muestra con el predio, el lote, el cultivo, el área homogénea, la profundidad y el responsable del muestreo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        .bg2.p-4.mb-4.mb-lg-0
          p.mb-0.mt-lg-1.mb-lg-1 La preparación de las herramientas incluye revisar su limpieza, funcionamiento y condiciones de seguridad. Durante la inspección se deben verificar mangos, empuñaduras, piezas metálicas, filos, tornillos y uniones, así como identificar fisuras, deformaciones, desgaste, óxido o residuos adheridos. Los elementos que presenten daños deben repararse o sustituirse antes de la jornada de campo.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/7.svg')
      .col-lg-4
        img.img-t.mb-4.d-none.d-lg-block(src='@/assets/curso/tema3/8.svg')
        p.mb-0 La adecuada preparación de estos recursos previene interrupciones, reduce riesgos y contribuye a conservar la integridad de las muestras. Los procedimientos de rotulado, manejo, limpieza durante la recolección, conservación y transporte se desarrollan en el componente correspondiente a la ejecución del muestreo.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/tema3/9.svg')
        .row.justify-content-center.g-0
          .col-lg-12
            .tarjeta.color-primario.p-4.rounded-0.h-100
              .tarjeta.bg-white.p-4.p-lg-5.h-100
                TarjetaAudio.color-acento-botones.mb-0(
                texto="Del lote al alistamiento: decisiones para un muestreo confiable"
                :audio="require_src('@/assets/actividad/audio/end-game-success.mp3')"
              ).mb-4
                p.mb-0 Lo invitamos a visitar el siguiente pódcast, en el que se presentan las decisiones técnicas necesarias para planificar el muestreo de un lote agrícola y preparar las herramientas, equipos e insumos requeridos antes del trabajo de campo.


    separador
    #t_3_2.titulo-segundo.mb-5
      h2 3.2 Manuales técnicos para herramientas y equipos de muestreo de suelos

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema3/10.png')
      .col-lg-9
        .tarjeta.color-acento-coo.p-4.mb-4(data-aos="fade-left")
          .row.justify-content-around.align-items-center.mb-lg-2
            .col-lg-5.col-md-7.col-8.mb-4.mb-lg-0
              img.img-t.img-a(src='@/assets/curso/tema3/11.svg')
            .col-lg-7
              p.mb-0 El uso adecuado de las herramientas y equipos destinados al muestreo de suelos agrícolas requiere, además del conocimiento técnico del operador, la correcta interpretación de los manuales técnicos suministrados por los fabricantes. Estos documentos contienen información esencial sobre las características de los equipos, instrucciones de ensamblaje, recomendaciones de operación, mantenimiento preventivo, medidas de seguridad y procedimientos para garantizar un funcionamiento eficiente.
        p.mb-0 La consulta de los manuales técnicos permite utilizar correctamente las herramientas, prolongar su vida útil, prevenir accidentes y asegurar que el proceso de muestreo se realice conforme a las especificaciones establecidas por el fabricante. Asimismo, facilita la identificación de posibles fallas, la programación del mantenimiento y la sustitución oportuna de piezas desgastadas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-4
        img(src='@/assets/curso/tema3/12.png')
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-2.d-none.d-lg-block
            img.img-t(src='@/assets/curso/tema3/13.svg')
          .col-lg-10.ps-lg-0 
            p.mb-0 Un manual técnico es un documento elaborado por el fabricante que contiene la información necesaria para la instalación, operación, inspección, mantenimiento y almacenamiento de una herramienta o equipo. Su finalidad es orientar al usuario para que utilice el implemento de manera correcta, segura y eficiente, garantizando el cumplimiento de las especificaciones técnicas para las cuales fue diseñado.
        p.mb-0 Los manuales técnicos constituyen una fuente confiable de información y forman parte de la documentación que debe acompañar a los equipos utilizados en actividades agrícolas.

    .row.justify-content-center.mb-0(data-aos="fade-right") 
      .col-lg-6.col-md-6.mb-lg-0.mb-4.mb-md-0
        .bg4.p-4.h-100
          img.img-t.mb-4(src='@/assets/curso/tema3/14.svg')
          h4.mb-4.text-white a) Estructura de un manual técnico
          p.mb-4.text-white Aunque el contenido puede variar según el fabricante, la mayoría de los manuales incluyen información organizada en capítulos o secciones. Los componentes más comunes son:
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-6
              ul.lista-ul.mb-0.text-white
                li.d-flex.mb-0
                  i.fas.fa-check.arbv
                  p.mb-0 Presentación del equipo.
                li.d-flex.mb-1
                  i.fas.fa-check.arbv
                  p.mb-0 Descripción de sus partes.
                li.d-flex.mb-1
                  i.fas.fa-check.arbv
                  p.mb-0 Especificaciones técnicas.
                li.d-flex.mb-1
                  i.fas.fa-check.arbv
                  p.mb-0 Instrucciones de ensamblaje.
                li.d-flex.mb-0
                  i.fas.fa-check.arbv
                  p.mb-0 Procedimiento de operación.
            .col-lg-6
              ul.lista-ul.mb-0.text-white
                li.d-flex.mb-0
                  i.fas.fa-check.arbv
                  p.mb-0 Recomendaciones de seguridad.
                li.d-flex.mb-1
                  i.fas.fa-check.arbv
                  p.mb-0 Limpieza y mantenimiento.
                li.d-flex.mb-1
                  i.fas.fa-check.arbv
                  p.mb-0 Solución de problemas.
                li.d-flex.mb-1
                  i.fas.fa-check.arbv
                  p.mb-0 Lista de repuestos.
                li.d-flex.mb-0
                  i.fas.fa-check.arbv
                  p.mb-0 Garantía.
          p.mb-0.text-white Cada uno de estos apartados proporciona información específica que facilita el manejo adecuado del implemento.
      .col-lg-6.col-md-6.mb-lg-0.mb-0
        .bg5.p-4.h-100
          img.img-t.mb-4(src='@/assets/curso/tema3/15.svg')
          h4.mb-4 b) Registros de inspección y mantenimiento
          p.mb-4 La gestión adecuada de las herramientas requiere documentar las actividades de inspección y mantenimiento. Estos registros permiten conocer el estado de cada implemento y programar oportunamente las intervenciones necesarias. La información que debe registrarse es:
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-6
              ul.lista-ul.mb-0
                li.d-flex.mb-1
                  i.fas.fa-check.arbc
                  p.mb-0 Identificación de la herramienta.
                li.d-flex.mb-1
                  i.fas.fa-check.arbc
                  p.mb-0 Fecha de inspección.
                li.d-flex.mb-1
                  i.fas.fa-check.arbc
                  p.mb-0 Estado encontrado.
                li.d-flex.mb-0
                  i.fas.fa-check.arbc
                  p.mb-0 Actividades realizadas.
            .col-lg-6
              ul.lista-ul.mb-0
                li.d-flex.mb-1
                  i.fas.fa-check.arbc
                  p.mb-0 Responsable.
                li.d-flex.mb-1
                  i.fas.fa-check.arbc
                  p.mb-0 Observaciones.
                li.d-flex.mb-0
                  i.fas.fa-check.arbc
                  p.mb-0 Próxima revisión programada.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
