# Gestor de Contactos con Filtros

Prueba técnica desarrollada en React, TypeScript y Tailwind CSS.

## Características
- Lista de contactos con soporte de estado de carga (Skeleton Loader) y estado vacío (Empty State).
- Formulario de creación de contacto utilizando Formik y Yup para validaciones en tiempo real.
- Filtrado reactivo combinado: búsqueda por nombre (texto) y por departamento (chips).
- Identificadores únicos generados con UUID.
- Diseño responsivo y moderno (glassmorphism, transiciones, etc.) usando Tailwind CSS y Lucide React.

## Tecnologías Utilizadas
- **React** (Hooks: `useState`, `useEffect`, `useMemo`)
- **TypeScript** (Tipado estricto para `Contact` y `Department`)
- **Vite** (Bundler ultrarrápido)
- **Tailwind CSS** (Framework de utilidades CSS para diseño ágil)
- **Formik & Yup** (Manejo y validación de formularios)
- **Lucide React** (Iconografía limpia y escalable)
- **UUID** (Generación de identificadores)

## Requisitos Previos
- Node.js (v16+)
- npm (v7+)

## Instrucciones de Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Blader-1/Gestor-contactos
   cd gestor-contactos
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en la URL indicada en la terminal (usualmente `http://localhost:5173`).

## Notas sobre la Publicación (GitHub)

Para subir este proyecto a un repositorio público en GitHub, puedes seguir estos pasos si ya tienes inicializado el repositorio de forma local:

1. Ve a GitHub y crea un nuevo repositorio público (sin inicializar README, .gitignore o license).
2. Conecta este repositorio local a GitHub:
   ```bash
   git remote add origin https://github.com/TuUsuario/gestor-contactos.git
   git branch -M main
   git push -u origin main
   ```

O bien, si usas GitHub CLI:
```bash
gh repo create gestor-contactos --public --source=. --remote=origin --push
```
