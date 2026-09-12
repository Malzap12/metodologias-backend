# API REST — Investigación de Metodologías de Software (Backend)

Backend del proyecto **"Investigación de Metodologías de Software"**, correspondiente
al rol de **Ingeniero de Backend y Arquitectura de Datos**. Expone mediante una API
REST toda la investigación (concepto, características, clasificación, tabla
comparativa y roles del equipo) para que el Frontend la consuma y la muestre en la
página web de sustentación (dinámica tipo *Shark Tank*).

---

## 1. Arquitectura del proyecto

Se aplicó una **arquitectura en capas (layered architecture)**, un estándar de buenas
prácticas en ingeniería de software que separa responsabilidades y facilita el
mantenimiento, las pruebas y el escalamiento del sistema:

```
metodologias-backend/
├── server.js                      # Punto de entrada: levanta el servidor
├── package.json
├── .env.example                   # Plantilla de variables de entorno
├── .gitignore
├── README.md
└── src/
    ├── app.js                     # Configuración central de Express
    ├── config/
    │   └── cors.config.js         # Política de CORS (seguridad)
    ├── routes/                    # Definición de endpoints (capa de rutas)
    │   ├── metodologias.routes.js
    │   └── equipo.routes.js
    ├── controllers/               # Lógica de negocio de cada endpoint
    │   ├── metodologias.controller.js
    │   └── equipo.controller.js
    ├── data/                      # Fuente de datos (investigación en JSON/JS)
    │   ├── metodologias.data.js
    │   └── equipo.data.js
    ├── middlewares/               # Manejo transversal de errores
    │   ├── notFound.js
    │   └── errorHandler.js
    └── utils/
        └── response.js            # Formato estándar de respuestas JSON
```

**¿Por qué esta arquitectura?**
- **Rutas → Controladores → Datos**: cada capa tiene una única responsabilidad
  (principio de responsabilidad única, SOLID).
- **Middlewares centralizados**: el manejo de errores y de rutas no encontradas
  vive en un solo lugar, evitando duplicar `try/catch` por todos lados.
- **Respuestas estandarizadas**: toda la API responde siempre con la misma forma:

```json
{
  "ok": true,
  "message": "Texto descriptivo",
  "data": { }
}
```

Esto le facilita muchísimo la vida al compañero de Frontend, porque siempre sabe
qué estructura esperar, sin importar el endpoint.

---

## 2. Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| Node.js | Entorno de ejecución del servidor |
| Express.js | Framework para construir la API REST |
| CORS | Seguridad para permitir/restringir el consumo desde el Frontend |
| Dotenv | Manejo de variables de entorno (`.env`) |

---

## 3. Instalación y ejecución local

```bash
# 1. Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd metodologias-backend

# 2. Instalar dependencias
npm install

# 3. Crear el archivo de variables de entorno
cp .env.example .env

# 4. Levantar el servidor
npm start
# o en modo desarrollo (recarga automática)
npm run dev
```

El servidor queda disponible en: **http://localhost:4000**

---

## 4. Documentación de Endpoints

### Base URL local
```
http://localhost:4000
```

### 4.1 Salud del servicio

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/` | Verifica que la API está activa |
| GET | `/api/health` | Health check simple (`status: UP`) |

### 4.2 `/api/metodologias` — Metodologías de Software (22 Metodologías)

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/metodologias` | Devuelve el **listado de las 22 metodologías** como arreglo estructurado (formato directo para consumo del Frontend). Soporta `?tipo=agil\|tradicional`, `?categoria=...` y `?search=texto` |
| GET | `/api/metodologias/:id` | Devuelve el detalle completo de una metodología por su identificador (ej: `scrum`, `waterfall`, `xp`, `kanban`, `modelo-v`, `espiral`, `rup`, `cleanroom`, `safe`, `shape-up`, etc.) |
| GET | `/api/metodologias/investigacion` | Devuelve el objeto completo de la investigación teórica unificada |
| GET | `/api/metodologias/concepto` | Concepto epistemológico y delimitación de proceso, SDLC y metodología |
| GET | `/api/metodologias/caracteristicas` | Listado de características nucleares de las metodologías |
| GET | `/api/metodologias/clasificacion` | Clasificación en tradicionales, ágiles, escaladas y contemporáneas |
| GET | `/api/metodologias/referencias` | Bibliografía formal canónica (Royce, Boehm, Jacobson, Beck, Schwaber, etc.) |

### 4.3 `/api/comparativa` — Matriz Comparativa Tradicional vs. Ágil

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/comparativa` | Matriz de 9 criterios analíticos (tolerancia al cambio, documentación, entrega de valor, cliente, métricas, riesgos, calidad, arquitectura, estructura) |

### 4.4 `/api/equipo` — Roles de los 4 Integrantes

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/equipo` | Devuelve el listado de los 4 integrantes con sus roles, responsabilidades, tecnologías, entregables formales y fechas de entrega para la sustentación Shark Tank |
| GET | `/api/equipo/:id` | Devuelve la ficha técnica individual (`erika`, `andrey`, `miguel`, `sergio`) |

### 4.5 Endpoints Avanzados de Investigación Profunda

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/fundamentos` | Crisis del software (OTAN 1968), definiciones ISO/IEC/IEEE 12207 y tabla canónica completa de fases del SDLC |
| GET | `/api/modelado-funcional` | Casos de uso estructurados (Ivar Jacobson), relaciones UML, matriz REQ vs. HU vs. CU y trazabilidad bancaria |
| GET | `/api/criterios-seleccion` | Modelo Radar de Boehm-Turner (niveles de Cockburn) y Matriz de Complejidad de Stacey |
| GET | `/api/caso-estudio` | Arquitectura metodológica híbrida de la Plataforma Nacional de Pagos Electrónicos |
| GET | `/api/investigacion` | Paquete global con el 100% de la investigación y datos |
| GET | `/api/raw-data` | Contenido en bruto del archivo `data.json` |

### 4.4 Manejo de errores (ejemplos reales probados)

**Ruta inexistente → 404 controlado:**
```json
{ "ok": false, "message": "Recurso no encontrado: GET /api/lo-que-sea", "data": null }
```

**Parámetro inválido → 404 controlado:**
```
GET /api/metodologias/clasificacion?tipo=inventado
```
```json
{ "ok": false, "message": "Tipo de clasificacion 'inventado' no existe. Usa 'tradicionales' o 'agiles'.", "data": null }
```

---

## 5. Seguridad — Configuración de CORS

El archivo `src/config/cors.config.js` define una **lista blanca de orígenes**
permitidos (en vez de abrir la API a `*`), incluyendo:
- `http://localhost:3000` y `http://localhost:5173` (React/Vite en local)
- `http://127.0.0.1:5500` (Live Server de VSCode, típico para HTML/CSS/JS plano)
- La URL de producción del Frontend, definida en la variable `FRONTEND_URL` del `.env`

**Para el Frontend:** cuando desplieguen la página (Netlify, Vercel, GitHub Pages),
avísenme la URL para agregarla a `FRONTEND_URL` en el `.env`, o dejarla en el
arreglo `ORIGENES_PERMITIDOS` directamente en el código.

---

## 6. Guía paso a paso para subir el proyecto a Git

```bash
# 1. Posicionarse en la carpeta del proyecto
cd metodologias-backend

# 2. Inicializar el repositorio (si aún no existe)
git init

# 3. Agregar todos los archivos (el .gitignore ya excluye node_modules y .env)
git add .

# 4. Hacer el primer commit
git commit -m "feat: backend API REST de metodologias de software"

# 5. Conectar con el repositorio remoto (crear antes el repo vacio en GitHub)
git branch -M main
git remote add origin https://github.com/<tu-usuario>/<nombre-del-repo>.git

# 6. Subir el codigo
git push -u origin main
```

**Recomendación para el trabajo en equipo:**
- Si van a compartir un solo repositorio con el Frontend, usen **carpetas separadas**
  en la raíz: `/backend` y `/frontend`.
- Si prefieren repos separados, aquí les dejo listo el mío (backend); solo
  necesito el link del repo del Frontend para documentar la integración final.

---

## 7. Cómo debe conectarse el Frontend

Desde JavaScript (fetch), el compañero de Front puede consumir así:

```javascript
fetch("http://localhost:4000/api/metodologias")
  .then(res => res.json())
  .then(({ data }) => {
    console.log(data.concepto);
    console.log(data.clasificacion);
    console.log(data.tablaComparativa);
  });

fetch("http://localhost:4000/api/equipo")
  .then(res => res.json())
  .then(({ data }) => console.log(data.integrantes));
```

Mientras el servidor de Node esté corriendo (`npm start`), el enlace local
`http://localhost:4000` funciona como el **mock/API real** para que el Front
empiece a maquetar y conectar sin necesidad de esperar nada más de mi parte.

---

## 8. Checklist de entregables (rol Backend) ✅

- [x] Repositorio del servidor terminado.
- [x] Endpoints funcionales y documentados (`/api/metodologias`, `/api/equipo`).
- [x] Enlace local (`http://localhost:4000`) listo para que el Front empiece a conectar.
- [x] Arquitectura en capas, manejo de errores y CORS configurado.
