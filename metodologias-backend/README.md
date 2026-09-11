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

### 4.2 `/api/metodologias` — Investigación

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/metodologias` | Devuelve **toda** la investigación en un solo JSON (concepto + características + clasificación + tabla comparativa + referencias) |
| GET | `/api/metodologias/concepto` | Devuelve solo el concepto de Metodologías de Software |
| GET | `/api/metodologias/caracteristicas` | Devuelve el listado de características |
| GET | `/api/metodologias/clasificacion` | Devuelve la clasificación principal (Tradicionales y Ágiles) |
| GET | `/api/metodologias/clasificacion?tipo=agiles` | Filtra la clasificación (`tradicionales` o `agiles`) |
| GET | `/api/metodologias/comparativa` | Devuelve la tabla comparativa Tradicionales vs Ágiles |
| GET | `/api/metodologias/referencias` | Devuelve las referencias bibliográficas |

**Ejemplo de respuesta — `GET /api/metodologias/concepto`:**
```json
{
  "ok": true,
  "message": "Concepto de Metodologias de Software",
  "data": {
    "definicion": "Una metodologia de software es un conjunto estructurado...",
    "proposito": ["Reducir la incertidumbre...", "..."],
    "origen": "Surgen en los anos 70 como respuesta a la 'crisis del software'..."
  }
}
```

### 4.3 `/api/equipo` — Roles del equipo

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/equipo` | Devuelve la información del proyecto y todos los integrantes |
| GET | `/api/equipo/:id` | Devuelve un integrante puntual (ej: `back-01`, `front-01`) |

**Ejemplo:** `GET /api/equipo/back-01` devuelve el rol, responsabilidades,
entregables y tecnologías del Ingeniero de Backend.

> Nota: el objeto `front-01` queda con estado `"Pendiente de informacion del companero"`
> listo para completarse en `src/data/equipo.data.js` en cuanto el compañero de
> Frontend envíe su descripción de rol — no requiere tocar ninguna otra parte
> del backend.

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
