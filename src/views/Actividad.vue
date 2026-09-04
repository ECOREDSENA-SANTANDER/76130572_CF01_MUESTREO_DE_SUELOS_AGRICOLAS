<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos y planificación del muestreo de suelos agrícolas.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar los conocimientos del aprendiz sobre las características, propiedades y variabilidad del suelo agrícola, así como los fundamentos, métodos, planificación, herramientas, equipos, insumos y protocolos técnicos y ambientales relacionados con la preparación del muestreo de suelos agrícolas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál opción describe adecuadamente las principales funciones del suelo en los sistemas agrícolas?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Servir únicamente como soporte físico para las plantas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Proporcionar soporte, agua, aire y nutrientes, y favorecer el desarrollo de las raíces.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Controlar exclusivamente la temperatura ambiental.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Producir directamente todos los nutrientes requeridos por los cultivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes corresponde a un factor de formación del suelo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Fertilización.', esCorrecta: false },
            { id: 'b', texto: 'Labranza.', esCorrecta: false },
            { id: 'c', texto: 'Clima.', esCorrecta: true },
            { id: 'd', texto: 'Comercialización.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
        },
        {
          id: 3,
          texto:
            '¿Qué factor de formación del suelo corresponde a la roca o sedimento a partir del cual se origina el suelo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Relieve.', esCorrecta: false },
            { id: 'b', texto: 'Material parental.', esCorrecta: true },
            { id: 'c', texto: 'Tiempo.', esCorrecta: false },
            { id: 'd', texto: 'Organismos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
        },
        {
          id: 4,
          texto: '¿Qué característica es propia de los suelos arenosos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alta retención de agua y drenaje lento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alta compactación y baja infiltración.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elevada capacidad de intercambio catiónico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Alta permeabilidad y baja capacidad de retención de agua.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de suelo se caracteriza por presentar un equilibrio entre arena, limo y arcilla?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Suelo arenoso.', esCorrecta: false },
            { id: 'b', texto: 'Suelo arcilloso.', esCorrecta: false },
            { id: 'c', texto: 'Suelo limoso.', esCorrecta: false },
            { id: 'd', texto: 'Suelo franco.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
        },
        {
          id: 6,
          texto:
            '¿Qué propiedad física del suelo corresponde a la proporción de arena, limo y arcilla?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Estructura.', esCorrecta: false },
            { id: 'b', texto: 'Textura.', esCorrecta: true },
            { id: 'c', texto: 'Porosidad.', esCorrecta: false },
            { id: 'd', texto: 'Consistencia.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
        },
        {
          id: 7,
          texto:
            '¿Qué indica generalmente una densidad aparente elevada en el suelo?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Alta actividad biológica.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Mayor contenido de materia orgánica.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Posible compactación.', esCorrecta: true },
            { id: 'd', texto: 'Excelente infiltración.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
        },
        {
          id: 8,
          texto:
            '¿Qué indica la capacidad de intercambio catiónico (CIC) del suelo?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de agua presente en el suelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La capacidad del suelo para retener e intercambiar cationes nutrientes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La profundidad efectiva del suelo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La velocidad de infiltración del agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
        },
        {
          id: 9,
          texto: '¿Qué expresa el pH del suelo?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de materia orgánica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El grado de acidez o alcalinidad del suelo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La cantidad de agua disponible.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'La concentración de arena.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es el horizonte del suelo que generalmente presenta mayor importancia para el muestreo de fertilidad en cultivos anuales?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Horizonte R.', esCorrecta: false },
            { id: 'b', texto: 'Horizonte C.', esCorrecta: false },
            { id: 'c', texto: 'Horizonte B.', esCorrecta: false },
            { id: 'd', texto: 'Horizonte A.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
        },
        {
          id: 11,
          texto: '¿Qué representa el horizonte C dentro del perfil del suelo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La roca madre consolidada.', esCorrecta: false },
            {
              id: 'b',
              texto: 'El horizonte superficial con mayor actividad biológica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El material parental parcialmente meteorizado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La zona de acumulación de materia orgánica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
        },
        {
          id: 12,
          texto:
            '¿Qué se busca principalmente al caracterizar un lote agrícola antes del muestreo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicar fertilizantes de manera inmediata.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar la variabilidad y delimitar áreas homogéneas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar toda la cobertura vegetal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Determinar únicamente el color del suelo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
        },
        {
          id: 13,
          texto:
            '¿Cuál de los siguientes es un ejemplo de variabilidad natural del suelo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicación de fertilizantes.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Tránsito de maquinaria.', esCorrecta: false },
            { id: 'c', texto: 'Material parental.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Aplicación de materia orgánica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es el principal objetivo del muestreo de suelos agrícolas?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Obtener una muestra que permita representar las condiciones del área evaluada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Remover la mayor cantidad de suelo posible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identificar únicamente la presencia de piedras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplazar el análisis de laboratorio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
        },
        {
          id: 15,
          texto:
            '¿Qué información permite obtener principalmente la observación del perfil del suelo durante la caracterización de un lote agrícola?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La cantidad exacta de fertilizante que debe aplicarse al cultivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La identificación de los horizontes y sus características dentro del perfil del suelo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El rendimiento esperado de la cosecha.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de agua utilizada durante el riego.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es la finalidad de considerar la normativa aplicable durante la planificación del muestreo de suelos agrícolas?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Establecer criterios y procedimientos que orienten la realización adecuada de las actividades de muestreo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Determinar exclusivamente el precio de los análisis de laboratorio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Seleccionar el cultivo que debe establecerse en el lote.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir los resultados obtenidos mediante análisis de laboratorio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
        },
        {
          id: 17,
          texto:
            '¿Por qué es importante consultar los manuales técnicos de las herramientas y equipos utilizados para el muestreo de suelos?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque permiten conocer únicamente el precio de adquisición de los equipos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque contienen información sobre su uso, operación, mantenimiento y condiciones de utilización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Porque reemplazan la necesidad de realizar el plan de muestreo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque permiten determinar directamente la fertilidad del suelo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es la principal finalidad de utilizar una lista de verificación antes de realizar el muestreo de suelos?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Determinar las propiedades químicas del suelo antes de tomar las muestras.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Registrar únicamente las condiciones climáticas del día del muestreo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Comprobar que las herramientas, equipos e insumos requeridos estén disponibles y en condiciones adecuadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Establecer automáticamente las dosis de fertilizantes para el cultivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es una herramienta ampliamente utilizada para extraer columnas de suelo a una profundidad determinada?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Barreno de suelos.', esCorrecta: true },
            { id: 'b', texto: 'Rastrillo.', esCorrecta: false },
            { id: 'c', texto: 'Machete.', esCorrecta: false },
            { id: 'd', texto: 'Regadera.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el propósito principal de utilizar una lista de verificación durante el alistamiento del muestreo?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituir los manuales técnicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir olvidos, verificar los elementos requeridos y fortalecer la trazabilidad del proceso.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar la inspección de las herramientas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la necesidad de aplicar protocolos ambientales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la planificación y preparación del muestreo de suelos agrícolas.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre la planificación y preparación del muestreo de suelos agrícolas.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
