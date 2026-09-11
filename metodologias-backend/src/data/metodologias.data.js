/**
 * ==========================================================================
 * CAPA DE DATOS - INVESTIGACION: METODOLOGIAS DE SOFTWARE
 * ==========================================================================
 * Este archivo funciona como "fuente de la verdad" (mock/dataset) de toda
 * la investigacion. En una arquitectura real, esta informacion podria vivir
 * en una base de datos (MongoDB/PostgreSQL); aqui se modela como estructura
 * en memoria para mantener el backend ligero, desacoplado y facil de
 * conectar por el equipo de Frontend sin depender de infraestructura extra.
 * ==========================================================================
 */

const concepto = {
  definicion:
    "Una metodologia de software es un conjunto estructurado y coherente de fases, " +
    "procesos, procedimientos, tecnicas, herramientas y documentacion que guian a " +
    "un equipo de desarrollo durante todo el ciclo de vida de un sistema de " +
    "software, desde el levantamiento de requisitos hasta el mantenimiento post " +
    "entrega. No es una simple lista de pasos, sino un marco de trabajo (framework " +
    "conceptual) que define QUE se debe hacer, COMO se debe hacer, QUIEN es " +
    "responsable de cada actividad y CUANDO debe ejecutarse, con el fin de " +
    "producir software de calidad de forma predecible, repetible y medible.",
  proposito: [
    "Reducir la incertidumbre y el riesgo en proyectos de software.",
    "Estandarizar el trabajo en equipo bajo un lenguaje y proceso comun.",
    "Garantizar la trazabilidad entre requisitos, diseno, codigo y pruebas.",
    "Optimizar tiempos, costos y uso de recursos humanos y tecnicos.",
    "Facilitar el control de calidad y la mejora continua del producto."
  ],
  origen:
    "Surgen en los anos 70 como respuesta a la llamada 'crisis del software', " +
    "un periodo en el que los proyectos se entregaban tarde, sobrepasaban el " +
    "presupuesto y no cumplian los requisitos del cliente debido a la falta de " +
    "procesos disciplinados de ingenieria."
};

const caracteristicas = [
  {
    id: "c1",
    nombre: "Estructura por fases",
    descripcion:
      "Organizan el trabajo en etapas claramente definidas (analisis, diseno, " +
      "construccion, pruebas, despliegue y mantenimiento), con entradas y " +
      "salidas especificas en cada una."
  },
  {
    id: "c2",
    nombre: "Documentacion formal",
    descripcion:
      "Generan artefactos (actas, especificaciones, diagramas, manuales) que " +
      "sirven como evidencia del proceso y soporte para auditorias de calidad."
  },
  {
    id: "c3",
    nombre: "Roles y responsabilidades definidos",
    descripcion:
      "Asignan funciones claras al equipo (analista, arquitecto, desarrollador, " +
      "tester, Scrum Master, Product Owner, etc.) evitando ambiguedades."
  },
  {
    id: "c4",
    nombre: "Repetibilidad y estandarizacion",
    descripcion:
      "Permiten aplicar el mismo proceso en distintos proyectos, facilitando la " +
      "comparacion de metricas y la mejora continua (madurez de procesos, CMMI)."
  },
  {
    id: "c5",
    nombre: "Gestion del cambio y del riesgo",
    descripcion:
      "Incluyen mecanismos para anticipar, evaluar y responder a cambios en " +
      "requisitos, tecnologia o contexto del negocio."
  },
  {
    id: "c6",
    nombre: "Orientacion a la calidad",
    descripcion:
      "Incorporan actividades de verificacion y validacion (pruebas, revisiones, " +
      "control de versiones) para asegurar que el producto cumple los " +
      "requisitos funcionales y no funcionales."
  },
  {
    id: "c7",
    nombre: "Escalabilidad y adaptabilidad",
    descripcion:
      "Pueden ajustarse al tamano del equipo, la complejidad del proyecto y el " +
      "nivel de incertidumbre de los requisitos (mas rigidas o mas flexibles)."
  }
];

/**
 * Clasificacion principal: se agrupan en dos grandes familias segun su
 * filosofia de gestion del cambio: PREDICTIVAS (tradicionales/tipo cascada)
 * y ADAPTATIVAS (agiles). Cada una contiene sus metodologias mas relevantes.
 */
const clasificacion = [
  {
    id: "tradicionales",
    tipo: "Metodologias Tradicionales (Predictivas o en Cascada)",
    descripcion:
      "Se basan en una planificacion detallada y secuencial. Los requisitos se " +
      "definen al inicio del proyecto y se espera que cambien lo menos posible. " +
      "Cada fase debe finalizar antes de iniciar la siguiente. Son ideales para " +
      "proyectos con requisitos estables, normativos o de alto riesgo " +
      "(aeroespacial, salud, sistemas bancarios core).",
    ventajas: [
      "Documentacion exhaustiva y trazabilidad total.",
      "Planificacion de costos y tiempos mas precisa desde el inicio.",
      "Adecuada para equipos grandes y contratos con alcance fijo."
    ],
    desventajas: [
      "Poca flexibilidad ante cambios de requisitos.",
      "El cliente ve resultados funcionales muy tarde en el proyecto.",
      "Alto costo de corregir errores detectados en fases finales."
    ],
    metodologias: [
      {
        nombre: "Cascada (Waterfall)",
        descripcion:
          "Modelo secuencial y lineal propuesto por Winston Royce (1970). Cada " +
          "fase (requisitos, diseno, implementacion, pruebas, mantenimiento) se " +
          "completa por completo antes de pasar a la siguiente."
      },
      {
        nombre: "Modelo en V",
        descripcion:
          "Evolucion de la cascada que asocia cada fase de desarrollo con una " +
          "fase de prueba correspondiente, reforzando la verificacion y " +
          "validacion temprana del diseno."
      },
      {
        nombre: "Modelo en Espiral",
        descripcion:
          "Propuesto por Barry Boehm (1986). Combina el desarrollo iterativo con " +
          "el analisis sistematico de riesgos en cada vuelta de la espiral, " +
          "ideal para proyectos grandes y de alto riesgo."
      },
      {
        nombre: "RUP (Rational Unified Process)",
        descripcion:
          "Proceso iterativo e incremental dirigido por casos de uso y centrado " +
          "en la arquitectura, dividido en 4 fases: Inicio, Elaboracion, " +
          "Construccion y Transicion."
      }
    ]
  },
  {
    id: "agiles",
    tipo: "Metodologias Agiles (Adaptativas)",
    descripcion:
      "Nacen formalmente con el Manifiesto Agil (2001) y priorizan la entrega " +
      "continua de valor, la colaboracion con el cliente y la respuesta rapida " +
      "al cambio por encima de procesos rigidos y documentacion exhaustiva. " +
      "Trabajan con ciclos cortos (iteraciones o sprints) que generan " +
      "incrementos funcionales del producto.",
    ventajas: [
      "Alta adaptabilidad a cambios de requisitos.",
      "Entregas frecuentes de valor funcional al cliente.",
      "Fomenta la comunicacion constante entre equipo y cliente.",
      "Deteccion temprana de errores gracias a ciclos cortos."
    ],
    desventajas: [
      "Menor documentacion formal, lo que puede afectar la trazabilidad.",
      "Requiere alta disciplina y madurez del equipo.",
      "Dificulta la estimacion de costo/tiempo total desde el inicio."
    ],
    metodologias: [
      {
        nombre: "Scrum",
        descripcion:
          "Framework agil basado en sprints (ciclos de 1 a 4 semanas), con " +
          "roles definidos (Scrum Master, Product Owner, Equipo de Desarrollo) " +
          "y eventos clave: Sprint Planning, Daily Scrum, Sprint Review y " +
          "Retrospectiva."
      },
      {
        nombre: "Extreme Programming (XP)",
        descripcion:
          "Se enfoca en la calidad tecnica del codigo mediante practicas como " +
          "programacion en pareja, integracion continua, refactorizacion y " +
          "desarrollo guiado por pruebas (TDD)."
      },
      {
        nombre: "Kanban",
        descripcion:
          "Metodo visual de gestion de flujo de trabajo mediante tableros " +
          "(To Do / Doing / Done) y limites de trabajo en progreso (WIP), " +
          "orientado a la mejora continua del flujo, sin sprints fijos."
      },
      {
        nombre: "Lean Software Development",
        descripcion:
          "Adapta los principios de manufactura esbelta (Toyota) al software: " +
          "eliminar desperdicios, amplificar el aprendizaje y entregar rapido."
      },
      {
        nombre: "Crystal",
        descripcion:
          "Familia de metodologias agiles ligeras que se adaptan segun el " +
          "tamano del equipo y la criticidad del proyecto (Crystal Clear, " +
          "Yellow, Orange, etc.)."
      }
    ]
  }
];

/**
 * Tabla comparativa: la investigacion pide comparar los dos enfoques
 * principales frente a criterios de calidad de software.
 */
const tablaComparativa = {
  criterios: [
    "Enfoque de planificacion",
    "Gestion del cambio",
    "Documentacion",
    "Entrega de valor",
    "Interaccion con el cliente",
    "Tipo de proyecto ideal"
  ],
  filas: [
    {
      metodologia: "Tradicionales (Cascada, V, Espiral, RUP)",
      valores: [
        "Secuencial y detallada desde el inicio",
        "Rigida, cambios costosos en fases avanzadas",
        "Extensa y formal",
        "Al final del proyecto",
        "Principalmente al inicio y al final",
        "Requisitos estables, alta regulacion"
      ]
    },
    {
      metodologia: "Agiles (Scrum, XP, Kanban, Lean)",
      valores: [
        "Iterativa e incremental",
        "Flexible, cambios bienvenidos en cualquier momento",
        "Minima, justo lo necesario",
        "Continua, en cada iteracion/sprint",
        "Constante y colaborativa",
        "Requisitos cambiantes, entornos de innovacion"
      ]
    }
  ]
};

const referencias = [
  "Pressman, R. S. (2015). Ingenieria del Software: Un Enfoque Practico (8a ed.). McGraw-Hill.",
  "Sommerville, I. (2016). Software Engineering (10a ed.). Pearson.",
  "Beck, K. et al. (2001). Manifiesto por el Desarrollo Agil de Software. agilemanifesto.org",
  "Schwaber, K. & Sutherland, J. (2020). La Guia de Scrum.",
  "Boehm, B. (1986). A Spiral Model of Software Development and Enhancement."
];

module.exports = {
  concepto,
  caracteristicas,
  clasificacion,
  tablaComparativa,
  referencias
};
