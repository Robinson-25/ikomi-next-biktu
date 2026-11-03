# Decisiones del proyecto IKOMI Perú

Este documento registra las decisiones del proyecto y sus motivos.
Las decisiones se actualizarán durante el desarrollo.


## 1. Función de los archivos y comandos

- src/app/layout.tsx: define el diseño compartido. En este proyecto coloca Navbar y Footer alrededor del contenido de cada página.
- src/app/page.tsx: contiene la página de inicio, correspondiente a la ruta /.
- public/: almacena archivos públicos, como imágenes. Una imagen guardada en public/images se utiliza con la ruta /images/nombre-del-archivo.
- next.config.ts: permite configurar opciones de Next.js. Por ejemplo, podría autorizar servidores externos si utilizara imágenes alojadas fuera del proyecto.
- npm run dev: inicia el servidor de desarrollo para trabajar y ver los cambios.
- npm run build: genera la versión de producción y permite comprobar si el proyecto compila.
- npm run start: ejecuta la versión de producción después de generar el build.

## 2. Next.js frente a una SPA de React

Next.js permite generar el HTML de las páginas en el servidor o durante
la compilación. En una SPA que depende del renderizado en el navegador,
el contenido se construye principalmente después de cargar JavaScript.

Para IKOMI, una página de producto puede entregar desde el inicio su
nombre, descripción y contenido, junto con un título y una descripción
de metadata propios. Esto facilita que los buscadores interpreten la
página, aunque no garantiza una posición en los resultados.

Los Server Components también permiten mantener parte del código fuera
del JavaScript enviado al navegador. Esto puede ayudar al rendimiento,
pero todavía debo optimizar las imágenes y comprobar la carga del sitio.

## 3. Organización de componentes

Las páginas se guardan en src/app y las piezas reutilizables en
src/components.

Por ejemplo, contacto/page.tsx utiliza ContactForm y SectionTitle.
Navbar y Footer se colocan en el layout raíz para compartirlos entre
todas las páginas.

Navbar es un Client Component porque utiliza useState para abrir el
menú móvil y usePathname para identificar la ruta actual.

Los demás componentes creados pueden permanecer como Server Components.
ContactForm solo muestra la interfaz y actualmente no envía mensajes.


## 4. Estilos e interacción

Los colores se definen una sola vez en globals.css mediante el tema
de Tailwind. La fuente se configura con next/font en el layout raíz.

Hero y ProductCard utilizan next/image con texto alternativo y
dimensiones. Esto permite aprovechar la optimización de imágenes de
Next.js y reservar espacio para reducir movimientos del contenido.
Todavía falta integrar las imágenes reales en las páginas.


## 7. Verificaciones pendientes

- Ejecutar npm run build y comprobar que finalice sin errores.
- Guardar la captura del resultado en evidencias/.
- Revisar las páginas en 375 px, 768 px y 1280 px.
- Completar y comprobar las rutas y sus metadata.