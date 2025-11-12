# 🎬 Theme Movie - Prueba Técnica Frontend (PÁGALO)

Aplicación web moderna desarrollada con **Angular 17**, inspirada en una experiencia cinematográfica futurista.  
Permite explorar películas actuales, populares y sus detalles, utilizando la **API pública de The Movie Database (TMDB)**.  
El sistema incluye autenticación simulada, votación, filtros por fecha, búsqueda dinámica y scroll infinito.

---

```bash
## 🚀 Instalación y configuración

### 1️⃣ Clonar el repositorio

git clone https://github.com/dev-vyn/PRUEBA_PAGALO_DEVYN_TUBAC.git
cd PRUEBA_PAGALO_DEVYN_TUBAC
2️⃣ Instalar dependencias
Asegúrate de tener Node.js (v18 o superior) y Angular CLI instalados:

bash
Copiar código
npm install -g @angular/cli
npm install
3️⃣ Configurar variables de entorno
Crea un archivo .env o usa directamente el archivo de entorno en Angular (environment.ts):

ts
Copiar código
export const environment = {
  production: false,
  apiUrl: 'https://api.themoviedb.org/3',
  apiKey: 'TU_API_KEY_AQUI', // 🔑 Clave personal de TMDB
};
🧠 Puedes obtener tu API Key registrándote en TheMovieDB.

4️⃣ Levantar el proyecto
bash
Copiar código
ng serve
El proyecto se ejecutará en:
👉 http://localhost:4200/

🧩 Arquitectura de la aplicación
El proyecto sigue una arquitectura modular y escalable, utilizando el patrón Feature-Based (por funcionalidades).

bash
Copiar código
src/
│
├── app/
│   ├── core/                # Servicios globales, guardas y utilidades
│   ├── shared/              # Componentes reutilizables (footer, navbar, carrusel, etc.)
│   ├── features/
│   │   ├── auth/            # Módulo de autenticación (login simulado)
│   │   ├── home/            # Página principal (hero animado, carrusel y descripción)
│   │   └── movies/
│   │       ├── pages/
│   │       │   ├── movie-list/        # Listado general de películas
│   │       │   ├── movie-popular/     # Listado de películas populares (scroll infinito)
│   │       │   ├── movie-detail/      # Detalle de cada película
│   │       │   └── ...
│   │       └── services/              # Conexión con la API TMDB
│   └── app.routes.ts       # Rutas principales de la aplicación
│
├── assets/                 # Imágenes y recursos estáticos
└── environments/           # Configuraciones por entorno
🎨 Diseño y experiencia de usuario
El diseño está inspirado en un ambiente futurista y cinematográfico, con una paleta de colores fría y elegante:

Color	Código	Uso principal
Azul profundo	#111440	Fondo principal
Azul oscuro	#1F2373	Secciones secundarias
Azul brillante	#2D33A6	Botones y acentos
Azul eléctrico	#343BBF	Hover e interactividad
Cian suave	#BDF2F2	Texto y detalles contrastantes

✨ Estilo visual
Animaciones suaves para transiciones y planetas flotantes en el hero section.

Carrusel dinámico con movimiento fluido tipo cartelera.

Scroll infinito para una exploración continua.

Diseño responsivo optimizado para escritorio y dispositivos móviles.

⚙️ Principales funcionalidades
✅ Inicio (Home):

Animaciones espaciales, hero 3D, y carrusel de películas destacadas.

✅ Autenticación simulada:

Formulario de login que protege rutas como “Cartelera” y “Populares”.

✅ Cartelera actual:

Listado de películas actuales con búsqueda y filtro por rango de fechas.

Scroll infinito para carga dinámica.

✅ Películas populares:

Orden descendente por popularidad global.

Ranking visual y exploración continua.

✅ Detalle de película:

Póster, descripción, reparto, equipo de producción, votación y sugerencias.

✅ Footer y Navbar modernos:

Diseño responsivo y temático con íconos dinámicos de Lucide.

🧠 Tecnologías utilizadas
Tecnología	Descripción
Angular 17+	Framework principal del frontend
TypeScript	Tipado estático y programación estructurada
TailwindCSS	Framework CSS para diseño moderno y responsivo
Lucide Angular	Librería de íconos SVG interactivos
TheMovieDB API	Fuente de datos para películas, reparto y detalles
RxJS / Observables	Manejo reactivo de datos asíncronos
Node.js / npm	Entorno de ejecución y gestión de dependencias

🧪 Ejecución de pruebas (opcional)
bash
Copiar código
ng test
📦 Construcción para producción
bash
Copiar código
ng build --configuration production
El resultado se genera en la carpeta dist/.

✍️ Autor
Devyn Orlando Tubac Gómez
📍 Guatemala
💻 Desarrollador Frontend apasionado por crear experiencias visuales interactivas y modernas.

Proyecto desarrollado como parte de la Prueba Técnica Frontend (PÁGALO).
