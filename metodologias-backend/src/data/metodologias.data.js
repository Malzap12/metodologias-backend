/**
 * CAPA DE DATOS - METODOLOGIAS DE DESARROLLO DE SOFTWARE
 * Fuente unica de la verdad (SSOT) para toda la investigacion academica formal.
 */

const rawData = require("./data.json");

// Mapeo detallado y enriquecido de las 22 metodologias para el Frontend
const metodologias = [
  {
    id: "scrum",
    nombre: "Scrum",
    tipo: "agil",
    categoria: "agil",
    lema: "Entregas iterativas de alto valor, control empírico e inspección continua",
    descripcionCorta: "Marco de trabajo ágil iterativo e incremental basado en sprints de 1 a 4 semanas para resolver problemas complejos adaptativos.",
    descripcionCompleta: "Scrum es el framework ágil más adoptado a nivel global. Se fundamenta en la teoría del control empírico de procesos (Transparencia, Inspección y Adaptación). Estructura el trabajo en ciclos cortos llamados Sprints, orientados a producir un incremento de producto potencialmente desplegable que cumpla la Definición de Terminado (DoD).",
    complejidad: "Media",
    frecuenciaEntrega: "Iterativa (1 a 4 semanas)",
    flexibilidad: "Alta (Adaptativa)",
    enfoque: "Adaptativo / Empírico",
    fases: [
      { nombre: "Sprint Planning", descripcion: "Definición del objetivo del sprint (Sprint Goal) y selección y descomposición de historias del Product Backlog." },
      { nombre: "Daily Scrum", descripcion: "Sincronización diaria de 15 minutos para inspeccionar el avance y detectar impedimentos operativos." },
      { nombre: "Sprint Review", descripcion: "Demostración funcional del incremento terminado frente a los stakeholders para validar valor." },
      { nombre: "Sprint Retrospective", descripcion: "Análisis reflexivo interno del equipo sobre personas, relaciones, procesos y herramientas para mejora continua." }
    ],
    rolesClave: ["Product Owner", "Scrum Master", "Developers"],
    ventajas: [
      "Respuesta inmediata ante requerimientos cambiantes y volatilidad de mercado.",
      "Visibilidad total mediante ceremonias y artefactos transparentes (Burndown Chart).",
      "Mitigación temprana de riesgos al validar incrementos funcionales frecuentemente.",
      "Alta motivación y autoorganización del equipo multidisciplinario."
    ],
    desventajas: [
      "Riesgo de desvío de alcance (Scope Creep) si el Product Owner carece de autoridad o visión clara.",
      "Requiere alto compromiso y madurez técnica de todos los participantes.",
      "Dificultad de estimación presupuestaria fija a muy largo plazo."
    ],
    casosUsoIdeales: "Productos digitales, plataformas SaaS, aplicaciones móviles y web con requerimientos dinámicos y entornos de alta innovación.",
    origen: "Ken Schwaber y Jeff Sutherland (1995)",
    colorHex: "#06b6d4"
  },
  {
    id: "waterfall",
    nombre: "Cascada (Waterfall)",
    tipo: "tradicional",
    categoria: "tradicional",
    lema: "Secuencia lineal y rigurosa basada en especificación exhaustiva previa",
    descripcionCorta: "Modelo secuencial clásico donde cada fase de ingeniería debe completarse y validarse formalmente antes de iniciar la siguiente.",
    descripcionCompleta: "Conceptualizado formalmente por Winston Royce en 1970, el modelo en cascada organiza el desarrollo en etapas estrictamente consecutivas gobernadas por compuertas de decisión documental. Asume que los requisitos pueden congelarse al inicio.",
    complejidad: "Media",
    frecuenciaEntrega: "Lineal (Al final del proyecto)",
    flexibilidad: "Rígida",
    enfoque: "Predictivo",
    fases: [
      { nombre: "1. Ingeniería de Requisitos", descripcion: "Captura y firma formal de especificaciones completas (SRS / IEEE 830) sin margen de ambigüedad." },
      { nombre: "2. Diseño del Sistema", descripcion: "Arquitectura técnica, modelos ER de base de datos y diagramas UML de componentes." },
      { nombre: "3. Implementación / Codificación", descripcion: "Construcción estricta del código ejecutable siguiendo al pie de la letra el diseño." },
      { nombre: "4. Verificación y Pruebas", descripcion: "Pruebas de integración, sistema y aceptación contra los pliegos de diseño." },
      { nombre: "5. Despliegue y Mantenimiento", descripcion: "Pase a producción y corrección de defectos residuales post-lanzamiento." }
    ],
    rolesClave: ["Project Manager (PM)", "Analista de Requisitos", "Arquitecto de Software", "Lead QA / Testers"],
    ventajas: [
      "Control administrativo y presupuestario sencillo en proyectos cerrados.",
      "Claridad absoluta en cronogramas, fechas de entrega e hitos contractuales.",
      "Estructura ideal para auditorías legales y licitaciones públicas inmutables."
    ],
    desventajas: [
      "Trampa de la integración tardía: defectos conceptuales emergen hasta las pruebas finales.",
      "Costo exponencial de reparación de errores según la Curva de Barry Boehm (hasta 200x más caro).",
      "Incapacidad estructural para responder a cambios de mercado durante el desarrollo."
    ],
    casosUsoIdeales: "Licitaciones públicas gubernamentales, proyectos de infraestructura física y software con requisitos matemáticamente estables.",
    origen: "Winston W. Royce (1970)",
    colorHex: "#64748b"
  },
  {
    id: "xp",
    nombre: "Extreme Programming (XP)",
    tipo: "agil",
    categoria: "agil",
    lema: "Excelencia técnica, prácticas extremas de codificación y feedback ininterrumpido",
    descripcionCorta: "Metodología ágil centrada en las mejores prácticas de ingeniería de software: TDD, Pair Programming, integración continua y diseño simple.",
    descripcionCompleta: "Formulada por Kent Beck, Extreme Programming lleva las prácticas de ingeniería al extremo. Se orienta a reducir el costo del cambio mediante pruebas automáticas, refactorización preventiva y programación en parejas.",
    complejidad: "Alta",
    frecuenciaEntrega: "Continua / Semanal",
    flexibilidad: "Alta (Adaptativa)",
    enfoque: "Adaptativo / Empírico",
    fases: [
      { nombre: "Test-Driven Development (TDD)", descripcion: "Ciclo Red-Green-Refactor: escribir la prueba unitaria antes del código de producción." },
      { nombre: "Pair Programming", descripcion: "Dos desarrolladores colaborando en una terminal: Driver escribe y Navigator analiza arquitectura." },
      { nombre: "Integración Continua (CI)", descripcion: "Fusión y verificación automatizada del código en el repositorio central múltiples veces al día." },
      { nombre: "Diseño Simple y Refactoring", descripcion: "Eliminar duplicidad y código superfluo adhiriéndose estrictamente al principio YAGNI." }
    ],
    rolesClave: ["Programmer / Pair Partner", "Customer On-Site", "Tracker", "Coach"],
    ventajas: [
      "Tasa de defectos residuales prácticamente nula gracias a TDD y cobertura estricta.",
      "Código altamente modular, limpio y sostenible a largo plazo sin deuda técnica.",
      "Transferencia de conocimiento constante entre ingenieros gracias al pair programming."
    ],
    desventajas: [
      "Resistencia cultural al pair programming por costo percibido de dos ingenieros en una máquina.",
      "Demanda desarrolladores con alta madurez técnica y disciplina de testing."
    ],
    casosUsoIdeales: "Módulos transaccionales bancarios, algoritmos criptográficos críticos, startups de ingeniería y sistemas con tolerancia cero a fallos.",
    origen: "Kent Beck (1999)",
    colorHex: "#8b5cf6"
  },
  {
    id: "kanban",
    nombre: "Kanban",
    tipo: "agil",
    categoria: "agil",
    lema: "Visualización del flujo de valor y limitación estricta del trabajo en progreso (WIP)",
    descripcionCorta: "Método visual de gestión del flujo de trabajo que optimiza la eficiencia operativa, elimina cuellos de botella y entrega valor continuo.",
    descripcionCompleta: "Adaptado de la manufactura esbelta de Toyota por David J. Anderson, Kanban optimiza el flujo continuo de valor técnico a través de procesos existentes. Se apoya en la Ley de Little (Cycle Time = WIP / Throughput) para acelerar entregas reduciendo la multitarea.",
    complejidad: "Baja",
    frecuenciaEntrega: "Flujo Continuo (Pull System)",
    flexibilidad: "Alta (Adaptativa)",
    enfoque: "Adaptativo / Empírico",
    fases: [
      { nombre: "Visualizar el Trabajo", descripcion: "Mapeo completo de cada etapa de desarrollo en columnas del tablero visual." },
      { nombre: "Limitar el WIP", descripcion: "Restricción cuantitativa del número máximo de tareas simultáneas por columna." },
      { nombre: "Gestionar el Flujo", descripcion: "Monitorización continua del Cycle Time y Lead Time para neutralizar cuellos de botella." },
      { nombre: "Políticas Explícitas", descripcion: "Definición objetiva y auditada de los criterios de entrada y salida de cada columna." }
    ],
    rolesClave: ["Service Delivery Manager", "Service Request Manager", "Equipo Multidisciplinario Autónomo"],
    ventajas: [
      "Flexibilidad absoluta para reordenar prioridades en cualquier momento.",
      "Reducción drástica del estrés laboral al eliminar la sobrecarga cognitiva de la multitarea.",
      "Fácil adopción evolutiva sobre la estructura organizacional ya existente."
    ],
    desventajas: [
      "Falta de cadencia fija que puede complicar previsiones comerciales a largo plazo.",
      "Exige rigor del equipo para actualizar el estado del tablero en tiempo real."
    ],
    casosUsoIdeales: "Operaciones de mantenimiento de software, soporte técnico L2/L3, infraestructura DevOps y flujos de incidentes continuos.",
    origen: "David J. Anderson (2010), basado en Taiichi Ohno (Toyota)",
    colorHex: "#10b981"
  },
  {
    id: "modelo-v",
    nombre: "Modelo en V (V-Model)",
    tipo: "tradicional",
    categoria: "tradicional",
    lema: "Correspondencia simétrica y directa entre fases de descomposición y fases de prueba",
    descripcionCorta: "Variante rigurosa de cascada donde cada etapa descendente de diseño tiene una fase ascendente correspondiente de aseguramiento y pruebas.",
    descripcionCompleta: "Surgido en industrias de defensa y aeroespacial, el Modelo en V pliega la secuencia lineal para diseñar la estrategia de aseguramiento de calidad en paralelo a la especificación técnica, situando la codificación en el vértice inferior.",
    complejidad: "Alta",
    frecuenciaEntrega: "Lineal / Por etapas verificadas",
    flexibilidad: "Rígida",
    enfoque: "Predictivo",
    fases: [
      { nombre: "Requisitos de Negocio <-> Pruebas de Aceptación (UAT)", descripcion: "Los criterios de aceptación del cliente se escriben junto con los requerimientos." },
      { nombre: "Requisitos del Sistema <-> Pruebas del Sistema", descripcion: "La arquitectura funcional define el plan de pruebas integradas de extremo a extremo." },
      { nombre: "Diseño Arquitectural <-> Pruebas de Integración", descripcion: "Las interfaces de componentes definen los casos de prueba de comunicación entre módulos." },
      { nombre: "Diseño Detallado <-> Pruebas Unitarias", descripcion: "El código fuente se valida inmediatamente contra su especificación funcional." }
    ],
    rolesClave: ["Arquitecto de Solución", "Ingeniero de Validación y Verificación (V&V)", "Lead QA Engineer"],
    ventajas: [
      "Garantía extrema de calidad y cobertura de pruebas desde la fase de concepción.",
      "Detección temprana de defectos conceptuales antes de llegar a la codificación física.",
      "Trazabilidad documental total entre necesidades y baterías de pruebas."
    ],
    desventajas: [
      "Cero tolerancia a cambios dinámicos una vez completada la rama descendente.",
      "Tiempo prolongado antes de contar con un binario ejecutable en manos del usuario final."
    ],
    casosUsoIdeales: "Sistemas embebidos automotrices (ISO 26262), aviónica civil, dispositivos médicos de soporte vital y plantas nucleares.",
    origen: "Paul Rook (1986) / Industrias Militares",
    colorHex: "#38bdf8"
  },
  {
    id: "modelo-travel-v",
    nombre: "Modelo Travel V y Modelo en W",
    tipo: "tradicional",
    categoria: "tradicional",
    lema: "Verificación transversal temprana mediante simulación y modelos ejecutables",
    descripcionCorta: "Evolución avanzada del Modelo en V que incorpora rutas cruzadas de comprobación dinámica sin esperar a la integración final.",
    descripcionCompleta: "El Modelo Travel V solventa la rigidez del flujo temporal del V-Model tradicional incorporando comprobaciones cruzadas transversales (cross-travel checks) mediante prototipos ejecutables y simulación de lazo cerrado (HIL) durante el diseño conceptual.",
    complejidad: "Alta",
    frecuenciaEntrega: "Etapas con validación transversal",
    flexibilidad: "Moderada",
    enfoque: "Predictivo / Simulación",
    fases: [
      { nombre: "Modelado Conceptual y Simulación", descripcion: "Validación temprana con prototipos ejecutables de lazo cerrado." },
      { nombre: "Comprobaciones Cruzadas (Cross-Travel)", descripcion: "Rutas intermedias de verificación entre diseño preliminar y casos de estrés." },
      { nombre: "Integración Simétrica Guiada", descripcion: "Ascenso por la jerarquía de validación con certidumbre previa de diseño." }
    ],
    rolesClave: ["Ingeniero de Simulación", "Arquitecto de Sistemas Embebidos", "Lead V&V"],
    ventajas: [
      "Mitigación temprana de errores semánticos sin sacrificar la gobernanza documental.",
      "Reducción drástica del riesgo en integraciones de alta complejidad física y de software."
    ],
    desventajas: [
      "Demanda costosas herramientas CASE de simulación matemática y bancos de prueba."
    ],
    casosUsoIdeales: "Sistemas de frenado autónomo, aviónica de última generación y plataformas transaccionales de compensación bancaria en tiempo real.",
    origen: "Industrias Aeroespacial y de Sistemas Embebidos (1993)",
    colorHex: "#0ea5e9"
  },
  {
    id: "espiral",
    nombre: "Modelo Espiral de Boehm",
    tipo: "tradicional",
    categoria: "tradicional",
    lema: "Gestión rigurosa y continua del riesgo como motor central del ciclo iterativo",
    descripcionCorta: "Modelo iterativo estructurado en 4 cuadrantes donde cada ciclo reduce sistemáticamente la incertidumbre técnica y financiera.",
    descripcionCompleta: "Propuesto en 1988 por Barry Boehm, amalgama la disciplina formal tradicional con el refinamiento iterativo. La dimensión radial mide el costo acumulado, y la angular refleja el progreso en reducción de riesgos mediante prototipos.",
    complejidad: "Alta",
    frecuenciaEntrega: "Iterativa por hitos mayores de riesgo",
    flexibilidad: "Moderada",
    enfoque: "Predictivo / Gestión de Riesgos",
    fases: [
      { nombre: "1. Determinación de Objetivos", descripcion: "Identificación de metas del incremento, restricciones y arquitecturas viables." },
      { nombre: "2. Evaluación y Mitigación de Riesgos", descripcion: "Análisis probabilístico de riesgos y desarrollo de prototipos exploratorios." },
      { nombre: "3. Desarrollo y Verificación", descripcion: "Construcción del incremento mediante el modelo técnico idóneo para el riesgo residual." },
      { nombre: "4. Planificación del Próximo Giro", descripcion: "Revisión formal con clientes, balance presupuestario y diseño del siguiente ciclo." }
    ],
    rolesClave: ["Risk Manager", "Arquitecto Principal", "Project Manager Senior"],
    ventajas: [
      "Gestión insuperable de riesgos técnicos, operativos y financieros complejos.",
      "Incorporación temprana de prototipos para validar la viabilidad con clientes."
    ],
    desventajas: [
      "Exige especialistas de altísimo calibre en análisis cuantitativo de riesgos.",
      "Modelo costoso y de difícil formalización contractual para clientes pequeños."
    ],
    casosUsoIdeales: "Desarrollo de nuevos motores de videojuegos, exploración aeroespacial, sistemas operativos y proyectos con alta incertidumbre tecnológica.",
    origen: "Barry W. Boehm (1988)",
    colorHex: "#f59e0b"
  },
  {
    id: "rup",
    nombre: "Rational Unified Process (RUP)",
    tipo: "tradicional",
    categoria: "tradicional",
    lema: "Proceso iterativo guiado por Casos de Uso, centrado en la arquitectura y modelado UML",
    descripcionCorta: "Marco metodológico formal bidimensional para el desarrollo orientado a objetos, estructurado en 4 fases continuas y 9 disciplinas.",
    descripcionCompleta: "Consolidado por Ivar Jacobson, Grady Booch y James Rumbaugh en Rational Software (IBM), RUP representa la madurez metodológica del modelado UML. Se rige por tres principios: guiado por Casos de Uso, centrado en la arquitectura y articulado en iteraciones e incrementos.",
    complejidad: "Alta",
    frecuenciaEntrega: "Iterativa por compuertas formales",
    flexibilidad: "Moderada",
    enfoque: "Híbrido / Arquitectural",
    fases: [
      { nombre: "Incepción (Inception)", descripcion: "Caso de negocio, alcance y viabilidad económica. Hito: Life-Cycle Objectives (LCO)." },
      { nombre: "Elaboración (Elaboration)", descripcion: "Mitigación de riesgos técnicos y línea base de arquitectura ejecutable. Hito: LCA." },
      { nombre: "Construcción (Construction)", descripcion: "Desarrollo iterativo de la totalidad de los casos de uso restantes. Hito: IOC." },
      { nombre: "Transición (Transition)", descripcion: "Despliegue productivo, beta testing y transferencia operativa. Hito: Product Release." }
    ],
    rolesClave: ["Arquitecto de Software", "Analista de Negocio / Casos de Uso", "Ingeniero de Componentes", "Administrador de Configuración"],
    ventajas: [
      "Marco exhaustivo y formalmente probado para proyectos corporativos de gran escala.",
      "Trazabilidad completa entre casos de uso, modelos UML y código ejecutable."
    ],
    desventajas: [
      "Sobrecarga burocrática y documental si no se adapta y parametriza adecuadamente.",
      "Curva de aprendizaje pronunciada para los integrantes del equipo."
    ],
    casosUsoIdeales: "Core bancario, ERPs industriales corporativos, plataformas de telecomunicaciones y sistemas empresariales de alta criticidad.",
    origen: "Jacobson, Booch y Rumbaugh (Rational Software / IBM, 1998)",
    colorHex: "#6366f1"
  },
  {
    id: "cleanroom",
    nombre: "Cleanroom Software Engineering",
    tipo: "tradicional",
    categoria: "tradicional",
    lema: "Prevención matemática absoluta de defectos mediante métodos formales y verificación estadística",
    descripcionCorta: "Enfoque de ingeniería rigurosa que busca cero defectos mediante demostraciones lógicas de corrección y pruebas operacionales estadísticas.",
    descripcionCompleta: "Inspirada en las salas limpias de microelectrónica y formulada por Harlan Mills en IBM, Cleanroom prescinde de las pruebas unitarias tradicionales hechas por programadores. El código se somete a demostraciones matemáticas de corrección, y un equipo independiente realiza pruebas estadísticas.",
    complejidad: "Alta",
    frecuenciaEntrega: "Incrementos certificados estadísticamente",
    flexibilidad: "Rígida",
    enfoque: "Predictivo / Métodos Formales",
    fases: [
      { nombre: "Especificación por Estructuras de Caja", descripcion: "Modelado formal mediante cajas negras, de estado y transparentes." },
      { nombre: "Verificación Formal de Corrección", descripcion: "Demostraciones matemáticas y lógica formal de teoremas en lugar de unit testing." },
      { nombre: "Certificación Estadística", descripcion: "Pruebas basadas en perfiles operacionales de uso para calcular confiabilidad (MTBF)." }
    ],
    rolesClave: ["Ingeniero de Especificación Formal", "Verificador Lógico", "Analista de Pruebas Estadísticas"],
    ventajas: [
      "Tasas de defectos residuales en producción cercanas a cero absoluto.",
      "Certificación cuantitativa demostrable de la confiabilidad del software."
    ],
    desventajas: [
      "Requiere personal con formación matemática muy avanzada en métodos formales.",
      "Inviable para proyectos comerciales cotidianos con requerimientos dinámicos."
    ],
    casosUsoIdeales: "Sistemas de control nuclear, dispositivos de soporte vital médico, satélites espaciales y aviónica militar.",
    origen: "Harlan Mills (IBM Federal Systems, 1987)",
    colorHex: "#1e293b"
  },
  {
    id: "rad",
    nombre: "Rapid Application Development (RAD)",
    tipo: "tradicional",
    categoria: "tradicional",
    lema: "Desarrollo acelerado mediante talleres JAD, herramientas CASE y prototipado visual continuo",
    descripcionCorta: "Metodología predictiva acelerada que comprime el ciclo a 60-90 días usando generación automática de código y prototipos activos.",
    descripcionCompleta: "Popularizada por James Martin en 1991, RAD prioriza la velocidad de entrega en sistemas administrativos mediante talleres interactivos conjuntos (JAD), herramientas visuales de modelado CASE y reutilización de componentes.",
    complejidad: "Media",
    frecuenciaEntrega: "Cadencias de 60 a 90 días",
    flexibilidad: "Moderada",
    enfoque: "Predictivo Acelerado",
    fases: [
      { nombre: "Planificación de Requerimientos", descripcion: "Acuerdo ejecutivo de alto nivel sobre metas y alcance del sistema." },
      { nombre: "Diseño de Usuario (Talleres JAD)", descripcion: "Modelado interactivo y prototipado rápido en pantallas con los usuarios finales." },
      { nombre: "Construcción Rápida", descripcion: "Generación automática de código mediante herramientas CASE y pruebas inmediatas." },
      { nombre: "Corte y Transición", descripcion: "Instalación en producción, pruebas finales y capacitación." }
    ],
    rolesClave: ["Facilitador JAD", "Especialista CASE", "Desarrollador de Prototipos"],
    ventajas: [
      "Reducción radical de tiempos de entrega en comparación con la cascada tradicional.",
      "Participación activa y visible de los usuarios durante todo el diseño de pantallas."
    ],
    desventajas: [
      "Exige dedicación casi a tiempo completo de los líderes de negocio del cliente.",
      "Riesgo de arquitecturas técnicas frágiles si se abusa de componentes autogenerados."
    ],
    casosUsoIdeales: "Sistemas de gestión empresarial departamentales con requerimientos bien acotados y plazos de entrega perentorios.",
    origen: "James Martin (1991)",
    colorHex: "#d97706"
  },
  {
    id: "rop",
    nombre: "Requirements-Oriented Process (ROP)",
    tipo: "tradicional",
    categoria: "tradicional",
    lema: "Trazabilidad bidireccional total y gobernanza matemática estricta de requerimientos",
    descripcionCorta: "Disciplina formal donde la descomposición y trazabilidad vertical de requisitos rige de forma inmutable cada fase del desarrollo.",
    descripcionCompleta: "En el marco ROP, la arquitectura y el código no se conciben de forma abstracta, sino como la materialización rigurosa de requisitos formales vinculantes. Impone trazabilidad bidireccional desde la norma legal hasta el caso de prueba.",
    complejidad: "Alta",
    frecuenciaEntrega: "Por hitos de cobertura formal",
    flexibilidad: "Rígida",
    enfoque: "Predictivo / Trazabilidad",
    fases: [
      { nombre: "Elicitación Formal y Modelado Matemático", descripcion: "Captura exhaustiva y formalización sin ambigüedades de especificaciones." },
      { nombre: "Matrices de Consistencia y Descomposición", descripcion: "Mapeo bidireccional hacia casos de uso, arquitectura y contratos de datos." },
      { nombre: "Auditoría de Trazabilidad y Cobertura", descripcion: "Verificación de que cada línea de código tenga un requisito y prueba asociada." }
    ],
    rolesClave: ["Ingeniero de Requisitos Formal", "Auditor de Trazabilidad", "Lead Software Quality"],
    ventajas: [
      "Gobernanza absoluta, cumplimiento regulatorio irrefutable y respaldo legal.",
      "Prevención total de funcionalidad innecesaria (gold plating) y omisiones críticas."
    ],
    desventajas: [
      "Rigidez procedimental extrema que ralentiza la respuesta a innovaciones de mercado."
    ],
    casosUsoIdeales: "Sistemas bancarios centrales, compensación y liquidación fiscal, infraestructura gubernamental y telecomunicaciones reguladas.",
    origen: "Estándares Militares y Regulaciones de Alta Exigencia (1995)",
    colorHex: "#475569"
  },
  {
    id: "ssadm",
    nombre: "Structured Systems Analysis and Design Method (SSADM)",
    tipo: "tradicional",
    categoria: "tradicional",
    lema: "Análisis estructurado basado en la triangulación de datos, procesos y eventos temporales",
    descripcionCorta: "Estándar formal en cascada del Reino Unido basado en DER, diagramas de flujo de datos (DFD) e historias de vida de entidades.",
    descripcionCompleta: "Formalizado por el gobierno británico en 1980, SSADM analiza los sistemas desde tres ópticas complementarias: la estructura de datos (DER), el flujo de información (DFD) y el comportamiento dinámico en el tiempo (ELH).",
    complejidad: "Media",
    frecuenciaEntrega: "Lineal por etapas modulares",
    flexibilidad: "Rígida",
    enfoque: "Predictivo / Estructurado",
    fases: [
      { nombre: "Estudio de Viabilidad", descripcion: "Evaluación técnica y económica de las opciones de solución." },
      { nombre: "Análisis y Especificación de Requisitos", descripcion: "Construcción de DFDs y modelos DER lógicos del estado actual y futuro." },
      { nombre: "Diseño Lógico y Físico de Datos", descripcion: "Estructuración de esquemas de datos e historias de vida de entidades (ELH)." }
    ],
    rolesClave: ["Analista de Sistemas Estructurado", "Diseñador de Base de Datos Relacional", "Auditor CCTA"],
    ventajas: [
      "Comprensión profunda y exhaustiva del flujo de datos y dependencias institucionales.",
      "Independencia absoluta del diseño lógico frente al hardware y software de implementación."
    ],
    desventajas: [
      "Enorme sobrecarga documental y falta de integración nativa con la programación orientada a objetos."
    ],
    casosUsoIdeales: "Grandes sistemas de información gubernamentales, ministerios civiles y bases de datos públicas históricas.",
    origen: "Central Computer and Telecommunications Agency (CCTA, Reino Unido, 1980)",
    colorHex: "#71717a"
  },
  {
    id: "lean",
    nombre: "Lean Software Development",
    tipo: "agil",
    categoria: "agil",
    lema: "Maximización del valor para el cliente mediante la erradicación implacable del desperdicio (Muda)",
    descripcionCorta: "Traducción de los principios de Manufactura Esbelta (Toyota) al software, acelerando entregas y construyendo calidad integrada.",
    descripcionCompleta: "Formulado por Mary y Tom Poppendieck, Lean concibe el desarrollo de software como una cadena de flujo de valor ininterrumpida. Promueve eliminar desperdicios (código superfluo, traspasos excesivos y demoras) y amplificar el aprendizaje continuo.",
    complejidad: "Media",
    frecuenciaEntrega: "Flujo continuo optimizado",
    flexibilidad: "Alta (Adaptativa)",
    enfoque: "Lean / Cadena de Valor",
    fases: [
      { nombre: "Eliminar el Desperdicio (Muda)", descripcion: "Identificar y suprimir todo proceso, documento o código que no aporte valor directo." },
      { nombre: "Decidir en el Último Momento Responsable", descripcion: "Postergar decisiones arquitecturales irreversibles hasta contar con datos empíricos." },
      { nombre: "Entregar Rápido y Amplificar Aprendizaje", descripcion: "Acelerar el ciclo de feedback del usuario mediante iteraciones cortas." },
      { nombre: "Optimizar la Totalidad (Systems Thinking)", descripcion: "Mejorar la cadena de valor completa de punta a punta, no silos aislados." }
    ],
    rolesClave: ["Lean Coach", "Value Stream Manager", "Equipo Empoderado"],
    ventajas: [
      "Optimización económica excepcional y maximización del retorno de inversión (ROI).",
      "Erradicación de burocracia inútil y reducción radical del tiempo de ciclo de entrega."
    ],
    desventajas: [
      "Exige un cambio de cultura gerencial profundo en la organización para descentralizar decisiones."
    ],
    casosUsoIdeales: "Transformación digital empresarial, factorías de software modernas y startups Lean en escalamiento comercial.",
    origen: "Mary y Tom Poppendieck (2003)",
    colorHex: "#ea580c"
  },
  {
    id: "crystal",
    nombre: "Familia Crystal",
    tipo: "agil",
    categoria: "agil",
    lema: "Calibración del método según el tamaño del equipo y la criticidad del sistema",
    descripcionCorta: "Enfoque ágil humano que cataloga métodos por colores según el número de personas y el impacto potencial de un fallo.",
    descripcionCompleta: "Alistair Cockburn concibe el desarrollo como un juego cooperativo de invención y comunicación. Crystal no es una fórmula fija, sino una familia adaptable (Clear, Yellow, Orange, Red) que ajusta el peso del proceso al tamaño y criticidad (Comodidad a Vidas Humanas).",
    complejidad: "Variable (Baja a Alta)",
    frecuenciaEntrega: "Iteraciones cortas y frecuentes",
    flexibilidad: "Alta (Adaptativa)",
    enfoque: "Adaptativo Centrado en Humanos",
    fases: [
      { nombre: "Entrega Frecuente de Código", descripcion: "Despliegues reales y usables ante clientes en ciclos regulares." },
      { nombre: "Mejora Reflexiva", descripcion: "Reuniones periódicas del equipo para ajustar la dinámica de comunicación y métodos." },
      { nombre: "Comunicación Osmótica", descripcion: "Transmisión natural y fluida de información en espacios físicos o virtuales compartidos." }
    ],
    rolesClave: ["Patrocinador", "Usuario Experto Integrado", "Líder Técnico de Coordinación"],
    ventajas: [
      "Adaptabilidad perfecta al contexto: no impone una solución rígida a todas las situaciones.",
      "Enfoque altamente humanista que reduce la fricción y fomenta la seguridad psicológica."
    ],
    desventajas: [
      "Menor estandarización comercial y escasez de herramientas corporativas cerradas en el mercado."
    ],
    casosUsoIdeales: "Organizaciones con equipos diversos que desarrollan desde pequeñas aplicaciones móviles hasta módulos de criticidad financiera media.",
    origen: "Alistair Cockburn (1998)",
    colorHex: "#0284c7"
  },
  {
    id: "dsdm",
    nombre: "Dynamic Systems Development Method (DSDM / AgilePM)",
    tipo: "agil",
    categoria: "agil",
    lema: "Fijación innegociable de tiempo, costo y calidad, ajustando el alcance funcional mediante MoSCoW",
    descripcionCorta: "Marco ágil pionero con gobernanza formal corporativa que garantiza entregas a tiempo usando timeboxes y priorización estricta.",
    descripcionCompleta: "Surgido en 1994 en el Reino Unido, DSDM invierte el triángulo de hierro tradicional: fija el tiempo, el presupuesto y la calidad, convirtiendo al alcance funcional en la única variable de ajuste mediante la técnica de priorización MoSCoW.",
    complejidad: "Media",
    frecuenciaEntrega: "Timeboxes estructurados",
    flexibilidad: "Moderada (Alcance adaptable)",
    enfoque: "Gobernanza Ágil Formal",
    fases: [
      { nombre: "Viabilidad y Fundamentos", descripcion: "Establecimiento del caso de negocio y definición de la arquitectura base." },
      { nombre: "Ingeniería e Iteraciones (Timeboxes)", descripcion: "Desarrollo iterativo aplicando rigurosamente la regla MoSCoW (Must, Should, Could, Won't have)." },
      { nombre: "Despliegue y Fase Post-Proyecto", descripcion: "Lanzamiento productivo y auditoría formal del valor devengado." }
    ],
    rolesClave: ["Business Sponsor", "Business Visionary", "Technical Coordinator", "Team Leader"],
    ventajas: [
      "Garantía inquebrantable de cumplimiento de cronogramas y presupuestos económicos.",
      "Gobernanza formal muy atractiva para directores de proyectos y organizaciones corporativas."
    ],
    desventajas: [
      "Requiere un compromiso maduro del cliente para aceptar que requerimientos 'Could have' se omitan."
    ],
    casosUsoIdeales: "Proyectos con plazos de lanzamiento regulatorios o comerciales improrrogables (campañas globales, eventos mundiales, normativas fiscales).",
    origen: "DSDM Consortium (Reino Unido, 1994)",
    colorHex: "#2563eb"
  },
  {
    id: "fdd",
    nombre: "Feature-Driven Development (FDD)",
    tipo: "agil",
    categoria: "agil",
    lema: "Desarrollo ágil estructurado guiado por rasgos y modelado formal de objetos de dominio",
    descripcionCorta: "Metodología orientada a objetos que descompone el desarrollo en pequeños rasgos funcionales entregables en menos de dos semanas.",
    descripcionCompleta: "Diseñado por Jeff De Luca y Peter Coad, FDD articula 5 procesos claros centrados en el cliente. Combina modelado de objetos de dominio con equipos dinámicos de desarrollo asignados por rasgos específicos.",
    complejidad: "Media",
    frecuenciaEntrega: "Iteraciones cortas por rasgos (<2 semanas)",
    flexibilidad: "Moderada",
    enfoque: "Adaptativo Orientado a Objetos",
    fases: [
      { nombre: "1. Desarrollar Modelo Global", descripcion: "Construcción del modelo conceptual de objetos con expertos de dominio." },
      { nombre: "2. Construir Lista de Rasgos", descripcion: "Descomposición del sistema en una lista priorizada de pequeñas funcionalidades." },
      { nombre: "3. Planificar por Rasgo", descripcion: "Secuenciación de desarrollo y asignación de clases a propietarios (Class Owners)." },
      { nombre: "4. Diseñar y Construir por Rasgo", descripcion: "Inspecciones de diseño UML, codificación, pruebas unitarias y fusión de componentes." }
    ],
    rolesClave: ["Project Manager", "Chief Architect", "Chief Programmer", "Class Owners"],
    ventajas: [
      "Excelente escalabilidad para grandes equipos que trabajan sobre arquitecturas orientadas a objetos.",
      "Métricas de progreso transparentes y comprensibles para la alta dirección técnica."
    ],
    desventajas: [
      "Alta dependencia de la pericia inicial del arquitecto en el modelo global de objetos.",
      "La propiedad individual de clases puede generar cuellos de botella si no se gestiona bien."
    ],
    casosUsoIdeales: "Grandes sistemas empresariales desarrollados en Java, .NET o C++ con modelos transaccionales ricos y equipos numerosos.",
    origen: "Jeff De Luca y Peter Coad (1997)",
    colorHex: "#7c3aed"
  },
  {
    id: "asd",
    nombre: "Adaptive Software Development (ASD)",
    tipo: "agil",
    categoria: "agil",
    lema: "Sustitución del determinismo por la dinámica adaptativa Especular, Colaborar y Aprender",
    descripcionCorta: "Marco conceptual que modela el desarrollo de software como la gestión de sistemas adaptativos complejos ante la incertidumbre.",
    descripcionCompleta: "Formulado por Jim Highsmith, ASD rechaza la ilusión de predictibilidad en entornos tecnológicos dinámicos. Sustituye el ciclo tradicional por la tríada Especular-Colaborar-Aprender, priorizando la autoorganización y la innovación continua.",
    complejidad: "Media",
    frecuenciaEntrega: "Iteraciones adaptativas continuas",
    flexibilidad: "Alta (Adaptativa)",
    enfoque: "Sistemas Complejos Adaptativos",
    fases: [
      { nombre: "Especulación", descripcion: "Definición de hipótesis operativas, limitaciones de tiempo y objetivos exploratorios." },
      { nombre: "Colaboración", descripcion: "Cooperación multidisciplinaria intensiva para resolver desafíos técnicos imprevistos." },
      { nombre: "Aprendizaje", descripcion: "Evaluación honesta de resultados, sesiones de feedback reflexivo y ajuste del rumbo." }
    ],
    rolesClave: ["Líder Facilitador", "Equipo Autónomo de Colaboración", "Cliente Patrocinador"],
    ventajas: [
      "Mentalidad óptima para proyectos altamente disruptivos y tecnologías emergentes.",
      "Promueve la resiliencia organizativa y la experimentación sin temor al fallo."
    ],
    desventajas: [
      "Escasez de procedimientos operacionales estandarizados y artefactos documentales rígidos."
    ],
    casosUsoIdeales: "Investigación y desarrollo (I+D), desarrollo de productos con inteligencia artificial y proyectos pioneros de frontera tecnológica.",
    origen: "Jim Highsmith (2000)",
    colorHex: "#c026d3"
  },
  {
    id: "safe",
    nombre: "Scaled Agile Framework (SAFe)",
    tipo: "agil",
    categoria: "escalado",
    lema: "Alineación estratégica y ejecución técnica para sincronizar cientos de ingenieros a escala empresarial",
    descripcionCorta: "Marco líder para grandes corporaciones que alinea estrategia, portafolio y entrega técnica mediante trenes de liberación (ART).",
    descripcionCompleta: "Diseñado por Dean Leffingwell, SAFe proporciona una base de conocimiento para aplicar agilidad, Lean y DevOps a nivel corporativo masivo. Organiza múltiples equipos Scrum/Kanban en trenes ágiles (Agile Release Trains) sincronizados mediante eventos de PI Planning.",
    complejidad: "Alta",
    frecuenciaEntrega: "Cadencias trimestrales (Program Increment) y CI/CD continuo",
    flexibilidad: "Moderada (Estructura corporativa)",
    enfoque: "Agilidad a Escala Empresarial",
    fases: [
      { nombre: "PI Planning (Program Increment)", descripcion: "Evento de 2 días donde los equipos del ART sincronizan dependencias y fijan metas trimestrales." },
      { nombre: "Ejecución de Sprints Sincronizados", descripcion: "Iteraciones coordinadas con cadencia compartida entre todos los equipos del tren." },
      { nombre: "Iteración IP (Innovation & Planning)", descripcion: "Período reservado para capacitación, innovación libre y planificación del siguiente PI." },
      { nombre: "Gestión de Portafolio Lean", descripcion: "Alineación de presupuestos estratégicos y flujos de valor mediante tableros Kanban ejecutivos." }
    ],
    rolesClave: ["Release Train Engineer (RTE)", "Product Management", "System Architect", "Epic Owner"],
    ventajas: [
      "Capacidad demostrada para gobernar dependencias entre cientos de desarrolladores en corporaciones gigantes.",
      "Excelente conexión entre los objetivos estratégicos de la junta directiva y el código en producción."
    ],
    desventajas: [
      "Riesgo de burocratización excesiva y percepción de 're-jerarquización' de la cultura ágil.",
      "Inversión económica muy alta en consultoría, adopción y certificaciones oficiales."
    ],
    casosUsoIdeales: "Bancos multinacionales, compañías aseguradoras globales, consorcios automotrices y organismos gubernamentales con más de 100 desarrolladores.",
    origen: "Dean Leffingwell (2011)",
    colorHex: "#15803d"
  },
  {
    id: "less",
    nombre: "Large-Scale Scrum (LeSS)",
    tipo: "agil",
    categoria: "escalado",
    lema: "Desescalar la complejidad burocrática aplicando Scrum puro a múltiples equipos",
    descripcionCorta: "Enfoque minimalista para escalar Scrum que mantiene un solo Product Backlog y un solo Product Owner para varios equipos.",
    descripcionCompleta: "Craig Larman y Bas Vodde postulan que la solución para escalar no es añadir roles y comités, sino desescalar la burocracia organizacional. Múltiples equipos interdependientes construyen un único producto ejecutable compartiendo Sprint y Product Owner.",
    complejidad: "Media",
    frecuenciaEntrega: "Sprint sincronizado único",
    flexibilidad: "Alta (Adaptativa)",
    enfoque: "Scrum a Escala Minimalista",
    fases: [
      { nombre: "Sprint Planning Conjunto", descripcion: "Representantes de todos los equipos seleccionan ítems del Product Backlog único." },
      { nombre: "Coordinación Descentralizada", descripcion: "Comunicación directa inter-equipos sin intermediarios gerenciales durante el Sprint." },
      { nombre: "Sprint Review y Retrospectiva Global", descripcion: "Inspección integrada del producto terminado y retrospectiva del sistema completo." }
    ],
    rolesClave: ["Product Owner Único", "Scrum Masters", "Equipos Scrum Interconectados"],
    ventajas: [
      "Preserva la ligereza, autonomía y bajo coste operativo del Scrum tradicional a gran escala.",
      "Fomenta una visión sistémica global del producto en lugar de feudos departamentales."
    ],
    desventajas: [
      "Demanda una madurez técnica y disciplina de integración continua excepcionales en todo el personal."
    ],
    casosUsoIdeales: "Compañías de producto de 2 a 8 equipos interdependientes que ya dominan Scrum y buscan coordinarse sin capas intermedias.",
    origen: "Craig Larman y Bas Vodde (2005)",
    colorHex: "#047857"
  },
  {
    id: "spotify",
    nombre: "Modelo Spotify",
    tipo: "agil",
    categoria: "escalado",
    lema: "Cultura de alta autonomía local y estricta alineación estratégica en células multidisciplinarias",
    descripcionCorta: "Modelo organizativo orgánico estructurado en Squads, Tribes, Chapters y Guilds para empresas de crecimiento exponencial.",
    descripcionCompleta: "Documentado por Henrik Kniberg y Anders Ivarsson en Spotify, organiza a los desarrolladores en Squads (pequeñas células autónomas de producto), agrupadas en Tribes por dominio funcional, coordinadas en Chapters por oficio técnico e interconectadas en Guilds de interés transversal.",
    complejidad: "Media",
    frecuenciaEntrega: "Despliegues continuos mediante Feature Toggles",
    flexibilidad: "Alta (Adaptativa)",
    enfoque: "Cultura Organizacional Ágil",
    fases: [
      { nombre: "Operación de Squads Autónomas", descripcion: "Células multidisciplinarias deciden cómo construir y desplegar su microservicio." },
      { nombre: "Alineación en Chapters", descripcion: "Reuniones de oficio técnico para asegurar estándares de calidad y mentoría profesional." },
      { nombre: "Innovación en Guilds", descripcion: "Comunidades abiertas para compartir mejores prácticas en seguridad, DevOps y arquitectura." }
    ],
    rolesClave: ["Product Owner de Squad", "Chapter Lead", "Tribe Lead", "Agile Coach"],
    ventajas: [
      "Cultura vibrante de alta autonomía, rapidez de experimentación y orgullo de pertenencia.",
      "Excelente adaptabilidad a arquitecturas de microservicios y despliegues desacoplados."
    ],
    desventajas: [
      "Fue un registro de cultura interna particular, difícil de replicar como 'metodología' rígida.",
      "Riesgo de inconsistencias arquitecturales si los Chapters técnicos no son suficientemente sólidos."
    ],
    casosUsoIdeales: "Fintechs, plataformas de contenido digital, startups tecnológicas consolidadas y empresas con cultura de confianza abierta.",
    origen: "Henrik Kniberg y Anders Ivarsson (Spotify, 2012)",
    colorHex: "#16a34a"
  },
  {
    id: "shape-up",
    nombre: "Shape Up",
    tipo: "agil",
    categoria: "contemporaneo",
    lema: "Ciclos de 6 semanas de concentración absoluta, apetito acotado y eliminación radical de ceremonias",
    descripcionCorta: "Metodología moderna de producto (Basecamp) que suprime backlogs interminables dividiendo el trabajo en Shaping, Betting y Building.",
    descripcionCompleta: "Creada por Ryan Singer en Basecamp, Shape Up desafía las ceremonias ágiles tradicionales. El trabajo se estructura en ciclos de 6 semanas seguidos de 2 semanas de Cool-down (tiempo libre para refactorizar y saldar deuda técnica). Se separan las fases de moldeado conceptual (Shaping) y asignación autónoma (Betting & Building).",
    complejidad: "Media",
    frecuenciaEntrega: "Ciclos de 6 semanas con entregas terminadas",
    flexibilidad: "Alta en Shaping / Fija en Building",
    enfoque: "Orientado a Producto e Innovación",
    fases: [
      { nombre: "1. Shaping (Moldeado)", descripcion: "Los líderes técnicos definen el apetito de tiempo (2 o 6 semanas) y eliminan incógnitas conceptuales." },
      { nombre: "2. Betting (Mesa de Apuestas)", descripcion: "Directivos asignan proyectos cerrados a equipos autónomos; no existen backlogs acumulativos." },
      { nombre: "3. Building (Construcción)", descripcion: "Equipos de 2-3 ingenieros con autonomía total para diseñar y codificar, monitoreando con Hill Charts." },
      { nombre: "4. Cool-down (Estabilización)", descripcion: "2 semanas libres de tareas asignadas para refactorizar, resolver bugs y preparar el siguiente ciclo." }
    ],
    rolesClave: ["Shapers (Líderes de Producto/Diseño)", "Betting Table (Directivos)", "Equipos Autónomos de Construcción"],
    ventajas: [
      "Erradica la fatiga por reuniones y microgestión, brindando semanas enteras de trabajo profundo (Deep Work).",
      "Garantía de que las funcionalidades aprobadas se entregan terminadas y operativas en 6 semanas."
    ],
    desventajas: [
      "Exige líderes de diseño con altísima visión técnica para realizar un shaping preciso sin ambigüedades.",
      "Poco tolerante a cambios sobre la marcha una vez que el equipo inicia las 6 semanas de construcción."
    ],
    casosUsoIdeales: "Compañías de producto SaaS maduras, empresas tecnológicas con ingenieros senior y organizaciones que buscan máxima productividad sin burocracia.",
    origen: "Ryan Singer (Basecamp, 2019)",
    colorHex: "#b45309"
  },
  {
    id: "devops-devsecops",
    nombre: "DevOps y DevSecOps",
    tipo: "agil",
    categoria: "contemporaneo",
    lema: "Integración continua de Desarrollo, Seguridad y Operaciones bajo el modelo cultural CALMS",
    descripcionCorta: "Filosofía metodológica y de ingeniería que unifica la creación de código, las pruebas de seguridad y el despliegue continuo en la nube.",
    descripcionCompleta: "DevOps derriba las barreras tradicionales entre los programadores (Dev) y los administradores de sistemas (Ops), incorporando la seguridad desde el origen (DevSecOps / Shift-Left Security). Se sustenta en el modelo CALMS y en la automatización absoluta de pipelines de CI/CD e Infraestructura como Código (IaC).",
    complejidad: "Alta",
    frecuenciaEntrega: "Despliegues continuos múltiples veces al día",
    flexibilidad: "Alta (Adaptativa)",
    enfoque: "Flujo Continuo y Confiabilidad Operativa",
    fases: [
      { nombre: "Integración Continua (CI)", descripcion: "Compilaciones automáticas, pruebas unitarias y análisis estático de seguridad (SAST) en cada commit." },
      { nombre: "Seguridad Integrada (Shift-Left)", descripcion: "Análisis dinámico (DAST), escaneo de vulnerabilidades en dependencias (SCA) y gestión de secretos." },
      { nombre: "Entrega Continua (CD)", descripcion: "Despliegues automatizados reproducibles mediante contenedores (Docker/Kubernetes) e IaC." },
      { nombre: "Observabilidad Proactiva", descripcion: "Monitoreo continuo de métricas en producción, tracing distribuido, logs y alertas automáticas." }
    ],
    rolesClave: ["DevOps / Platform Engineer", "Site Reliability Engineer (SRE)", "DevSecOps Specialist"],
    ventajas: [
      "Tiempos de entrega (Lead Time) reducidos de meses a cuestión de minutos u horas.",
      "Resiliencia sistémica sobresaliente y resolución casi instantánea de incidencias productivas (MTTR mínimo)."
    ],
    desventajas: [
      "Curva de aprendizaje tecnológica alta en herramientas de nube y orquestación de contenedores.",
      "Requiere transformación cultural profunda entre equipos de desarrollo y operaciones."
    ],
    casosUsoIdeales: "Cualquier desarrollo moderno en la nube, arquitecturas de microservicios, comercio electrónico transaccional y banca digital.",
    origen: "Patrick Debois, Gene Kim, Jez Humble y John Willis (2009)",
    colorHex: "#059669"
  }
];

// Comparativa global estructurada para el Frontend
const tablaComparativa = [
  {
    id: "tol-cambio",
    criterio: "Tolerancia al Cambio",
    descripcion: "Capacidad de absorber modificaciones en requerimientos durante el ciclo de vida del software.",
    tradicional: "Baja y costosa. Requiere un proceso formal de control de cambios (Change Request) y renegociación contractual.",
    agil: "Bienvenida y adaptativa. Los cambios son vistos como oportunidades competitivas para aportar más valor al cliente.",
    ganadorEnfoque: "agil"
  },
  {
    id: "documentacion",
    criterio: "Documentación vs Software Funcional",
    descripcion: "Prioridad asignada a la generación de artefactos formales versus entregables operativos.",
    tradicional: "Exhaustiva y mandatoria previa a la codificación (SRS, diagramas UML, manuales extensos).",
    agil: "Suficiente y orientada al código. Se prioriza el software funcionando sobre la documentación comprensiva.",
    ganadorEnfoque: "agil"
  },
  {
    id: "entrega-valor",
    criterio: "Entrega de Valor al Negocio",
    descripcion: "Momento y frecuencia en que el cliente recibe software operativo y usable.",
    tradicional: "Tardía. Todo el valor se entrega al final del ciclo de vida (Big Bang release). Alto riesgo de desfase con el mercado.",
    agil: "Temprana y continua. Se entregan incrementos de producto potencialmente desplegables cada 1 a 4 semanas.",
    ganadorEnfoque: "agil"
  },
  {
    id: "participacion-cliente",
    criterio: "Participación del Cliente / Stakeholder",
    descripcion: "Nivel de interacción y feedback del usuario final durante el desarrollo.",
    tradicional: "Puntual y contractual. Participa al inicio (firma de requisitos) y al final (pruebas de aceptación / UAT).",
    agil: "Continua y colaborativa. El Product Owner o cliente interactúa diariamente o en cada revisión de sprint.",
    ganadorEnfoque: "agil"
  },
  {
    id: "metricas-control",
    criterio: "Métricas de Control y Éxito",
    descripcion: "Indicadores utilizados para evaluar el avance y la salud del proyecto.",
    tradicional: "Cumplimiento del plan base: Diagramas de Gantt, apego estricto a fechas, costes devengados y hitos de entregables.",
    agil: "Velocidad del equipo, Burn-down charts, Lead/Cycle Time y valor de negocio efectivamente entregado y utilizado.",
    ganadorEnfoque: "depende"
  },
  {
    id: "gestion-riesgos",
    criterio: "Gestión y Mitigación de Riesgos",
    descripcion: "Estrategia para identificar y neutralizar desviaciones técnicas o de producto.",
    tradicional: "Análisis de riesgos analítico y preventivo en la fase inicial de planificación mediante matrices formales.",
    agil: "Descubrimiento empírico continuo. Las hipótesis se prueban directamente con software real en producción o demos.",
    ganadorEnfoque: "agil"
  },
  {
    id: "estrategia-calidad",
    criterio: "Aseguramiento de Calidad (Testing)",
    descripcion: "Filosofía y momento de ejecución de pruebas de verificación y validación.",
    tradicional: "Pruebas masivas formales pospuestas hacia fases tardías o compuertas simétricas de verificación.",
    agil: "Calidad integrada continua desde el origen mediante TDD, pruebas unitarias automatizadas y pipelines de CI/CD.",
    ganadorEnfoque: "agil"
  },
  {
    id: "arquitectura-diseño",
    criterio: "Diseño Arquitectural",
    descripcion: "Estrategia para concebir y evolucionar la arquitectura de software.",
    tradicional: "Big Design Up Front (BDUF): La arquitectura completa se especifica antes de escribir código.",
    agil: "Arquitectura emergente y evolutiva guiada por prototipos tempranos y refactorización continua.",
    ganadorEnfoque: "depende"
  },
  {
    id: "estructura-equipo",
    criterio: "Estructura Organizacional y Equipos",
    descripcion: "Modelo de asignación de responsabilidades y dinamismo laboral.",
    tradicional: "Especialistas en silos funcionales dirigidos jerárquicamente por un Project Manager.",
    agil: "Equipos multidisciplinarios autónomos y autoorganizados guiados por liderazgo servicial.",
    ganadorEnfoque: "agil"
  }
];

// Metadatos y conceptos complementarios para endpoints de investigacion profunda
const concepto = {
  titulo: "Concepto de Metodología de Desarrollo de Software",
  definicion: "Una metodología de desarrollo de software es un marco de trabajo prescriptivo, disciplinado e integral que concreta el proceso y el ciclo de vida (SDLC). Amalgama procedimientos operativos, técnicas formales de modelado (como UML), estándares de documentación técnica, herramientas CASE y una asignación precisa de roles y responsabilidades.",
  distincionConceptual: rawData.fundamentos.delimitacion_conceptual,
  crisisSoftware: rawData.fundamentos.conferencia_otan_1968
};

const caracteristicas = [
  { nombre: "Estructura Procedimental", descripcion: "Define las fases o iteraciones mediante las cuales avanza el software." },
  { nombre: "Técnicas de Modelado", descripcion: "Emplea notaciones semánticas (Casos de Uso, Historias de Usuario, DFD, DER) para representar el dominio." },
  { nombre: "Gobernanza y Roles", descripcion: "Asigna explícitamente quién hace qué, cómo se toman decisiones y cómo se rinde cuentas." },
  { nombre: "Criterios de Calidad", descripcion: "Establece métricas objetivas (DoD, cobertura de código, MTBF) para validar entregables." },
  { nombre: "Gestión de Configuración", descripcion: "Norma el control de versiones, líneas base de arquitectura y despliegue." }
];

const clasificacion = [
  {
    id: "tradicionales",
    nombre: "Metodologías Tradicionales / Predictivas",
    descripcion: "Enfoques deterministas orientados a planes rígidos, documentación contractual exhaustiva y seguimiento estricto de cronogramas. Asumen que los requisitos pueden congelarse al inicio.",
    ejemplos: ["Cascada", "Modelo en V", "Modelo en W", "Travel V", "Modelo Espiral", "RUP", "Cleanroom", "RAD", "ROP", "SSADM"]
  },
  {
    id: "agiles",
    nombre: "Metodologías Ágiles / Adaptativas",
    descripcion: "Enfoques adaptativos basados en control empírico de procesos, iteraciones cortas, entrega temprana y continua de código funcional, y colaboración estrecha con el usuario.",
    ejemplos: ["Scrum", "Kanban", "Extreme Programming (XP)", "Lean Software Development", "Familia Crystal", "DSDM", "FDD", "ASD"]
  },
  {
    id: "escaladas",
    nombre: "Agilidad a Escala Empresarial",
    descripcion: "Marcos diseñados para alinear decenas de equipos y cientos de ingenieros en grandes corporaciones manteniendo principios Lean y ágiles.",
    ejemplos: ["SAFe (Scaled Agile Framework)", "LeSS (Large-Scale Scrum)", "Modelo Spotify", "Disciplined Agile (DA)"]
  },
  {
    id: "contemporaneas",
    nombre: "Modelos de Flujo y Producto Contemporáneos",
    descripcion: "Modelos de ingeniería modernos enfocados en erradicar la fatiga de ceremonias, integrar operaciones en la nube y maximizar la entrega continua.",
    ejemplos: ["Shape Up (Basecamp)", "DevOps y DevSecOps"]
  }
];

const referencias = [
  { autor: "Winston W. Royce", año: 1970, titulo: "Managing the Development of Large Software Systems", publicacion: "IEEE WESCON" },
  { autor: "Barry W. Boehm", año: 1988, titulo: "A Spiral Model of Software Development and Enhancement", publicacion: "IEEE Computer" },
  { autor: "Ivar Jacobson", año: 1992, titulo: "Object-Oriented Software Engineering: A Use Case Driven Approach", publicacion: "Addison-Wesley" },
  { autor: "Kent Beck", año: 1999, titulo: "Extreme Programming Explained: Embrace Change", publicacion: "Addison-Wesley" },
  { autor: "Ken Schwaber & Jeff Sutherland", año: 2020, titulo: "The Scrum Guide", publicacion: "Scrum.org" },
  { autor: "David J. Anderson", año: 2010, titulo: "Kanban: Successful Evolutionary Change for Your Technology Business", publicacion: "Blue Hole Press" },
  { autor: "Mary & Tom Poppendieck", año: 2003, titulo: "Lean Software Development: An Agile Toolkit", publicacion: "Addison-Wesley" },
  { autor: "Barry Boehm & Richard Turner", año: 2004, titulo: "Balancing Agility and Discipline", publicacion: "Addison-Wesley" },
  { autor: "Dean Leffingwell", año: 2011, titulo: "Agile Software Requirements: Lean Practices for the Enterprise", publicacion: "Addison-Wesley" },
  { autor: "Ryan Singer", año: 2019, titulo: "Shape Up: Stop Running in Circles and Ship Work that Matters", publicacion: "Basecamp" },
  { autor: "ISO/IEC/IEEE", año: 2017, titulo: "ISO/IEC/IEEE 12207:2017 Systems and software engineering -- Software life cycle processes", publicacion: "ISO Standard" }
];

module.exports = {
  metodologias,
  tablaComparativa,
  concepto,
  caracteristicas,
  clasificacion,
  referencias,
  fundamentos: rawData.fundamentos,
  modeladoFuncional: rawData.modelado_funcional,
  comparativasGlobales: rawData.comparativas_globales,
  criteriosSeleccion: rawData.criterios_seleccion,
  casoIntegradorBancario: rawData.caso_integrador_bancario,
  rawData
};
