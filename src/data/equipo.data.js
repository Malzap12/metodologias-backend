/**
 * CAPA DE DATOS - EQUIPO DE TRABAJO (Single Source of Truth)
 * Sincronizado 100% con la investigacion formal y requerimientos de sustentacion.
 */

const rawData = require("./data.json");

const equipo = {
  proyecto: rawData.proyecto.titulo,
  subtitulo: rawData.proyecto.subtitulo,
  asignatura: rawData.proyecto.asignatura,
  dinamica: "Sustentacion tipo Shark Tank - Ingenieria de Software",
  integrantes: [
    {
      id: "erika",
      nombre: "Erika Yuliana Gómez Rodríguez",
      alias: "Investigadora Principal",
      rol: "Líder de Investigación y Arquitectura de Contenidos",
      tituloEspecialidad: "Content & Research Architect",
      descripcion: "Responsable de estructurar y profundizar en el marco teórico de las metodologías de desarrollo de software (Unidad 4). Diseña los esquemas y modelos lógicos en formato JSON estructurado, asegurando el cumplimiento de la rúbrica y alimentando la base de datos y la API.",
      responsabilidades: [
        "Investigación rigurosa del marco teórico de la Unidad 4 (tradicionales vs. ágiles).",
        "Estructuración del modelo de datos formal (data.json) para la API del Backend.",
        "Elaboración del documento formal en LaTeX y PDF de 18 páginas con referencias canónicas.",
        "Preparación del guion técnico y argumentación conceptual para la sustentación Shark Tank."
      ],
      tecnologias: ["LaTeX / TeX", "JSON Schema", "Research SDLC", "Technical Writing", "UML Conceptual"],
      entregable: "Documento formal de investigación (PDF) + data.json estructurado para Backend",
      fechaCompromiso: "Viernes 11:59 PM",
      estado: "Completado",
      colorAcento: "#ec4899"
    },
    {
      id: "andrey",
      nombre: "Alixon Andrey López León",
      alias: "Lead Backend Engineer",
      rol: "Ingeniero de Backend y Arquitectura de Datos",
      tituloEspecialidad: "Backend & API Architect",
      descripcion: "Encargado del diseño, programación y estabilidad de la lógica del servidor y la capa de datos. Construye la API REST modular, limpia y escalable que expone los endpoints oficiales (/api/metodologias, /api/equipo) con manejo de CORS y documentación técnica.",
      responsabilidades: [
        "Diseño y programación de la lógica del servidor y capa de datos modular en Express / Node.",
        "Construcción de API REST escalable que expone la totalidad de la investigación.",
        "Implementación de arquitectura limpia en capas (rutas, controladores, datos, middlewares).",
        "Configuración de políticas CORS seguras para integración fluida con el Frontend en Vercel.",
        "Suministro de la única fuente de la verdad (SSOT) evitando textos quemados en el cliente."
      ],
      tecnologias: ["Node.js", "Express.js", "CORS Security", "JSON Architecture", "RESTful APIs", "Dotenv"],
      entregable: "Repositorio del servidor funcional + Endpoints documentados + Mock local",
      fechaCompromiso: "Sábado 4:00 PM",
      estado: "Completado",
      colorAcento: "#3b82f6"
    },
    {
      id: "miguel",
      nombre: "Miguel Ángel Alza Sanabria",
      alias: "Senior Frontend Developer",
      rol: "Ingeniero de Frontend y Experiencia de Usuario",
      tituloEspecialidad: "UI/UX & Frontend Lead (Responsable de Envío)",
      descripcion: "Líder del diseño e implementación de la interfaz visual moderna, interactiva y responsiva estilo Linear/Vercel. Conecta dinámicamente con la API del Backend garantizando Single Source of Truth, componentes reactivos y la entrega oficial del código ante el docente.",
      responsabilidades: [
        "Construcción de la interfaz interactiva con React 18, TypeScript, Tailwind CSS y Lucide Icons.",
        "Consumo dinámico de los endpoints del backend con fallback automático y manejo de errores.",
        "Desarrollo del switch interactivo, modales dinámicos y tabla comparativa para Shark Tank.",
        "Responsable operativo de la entrega oficial del Frontend ante el jurado/docente."
      ],
      tecnologias: ["React 18", "TypeScript", "Tailwind CSS", "Lucide Icons", "Vite"],
      entregable: "Interfaz UI terminada, responsiva, conectada al Back y lista para pase a producción",
      fechaCompromiso: "Domingo 2:00 PM",
      estado: "Completado",
      colorAcento: "#06b6d4"
    },
    {
      id: "sergio",
      nombre: "Sergio Adolfo Hernández Millán",
      alias: "DevOps & QA Specialist",
      rol: "Especialista en QA, DevOps y Despliegue Cloud",
      tituloEspecialidad: "Cloud, DevOps & Quality Assurance",
      descripcion: "Encargado del diseño y ejecución de pruebas funcionales para validar tanto los endpoints del backend como la reactividad de la UI. Lidera el despliegue en producción en la nube (Vercel / Render), la verificación de URLs públicas sin errores de CORS y el README técnico.",
      responsabilidades: [
        "Diseño y ejecución de pruebas funcionales y de integración UI/API.",
        "Despliegue automatizado del Frontend en Vercel y Backend en Render / Cloud.",
        "Verificación de comunicación cross-origin sin fallos de CORS en dominios públicos.",
        "Elaboración del README técnico final de arquitectura y despliegue."
      ],
      tecnologias: ["Vercel", "Render", "QA Testing", "CI/CD Pipeline", "CORS Troubleshooting"],
      entregable: "Back y Front desplegados en la nube, URLs públicas operativas y README técnico",
      fechaCompromiso: "Lunes 9:00 AM",
      estado: "En Progreso",
      colorAcento: "#10b981"
    }
  ]
};

module.exports = { equipo };
