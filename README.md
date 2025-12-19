# 🎯 Conoce a los Candidatos a Fondo

Landing page para **Agency Recruitment Community Spain** - AI's Workshops.

Un sistema de 3 pasos con IA para evaluar soft skills, preparar entrevistas y conocer lo que realmente valoran tus candidatos.

## 🚀 Demo

Esta landing presenta el sistema de evaluación de candidatos usando:
- **Gem DISC de Gemini** - Análisis de comportamiento
- **Gem Talk Track** - Guidelines de conversación
- **Granola IA** - Captura y análisis de reuniones

## 🛠️ Tecnologías

- **React 18** - Framework de UI
- **Vite** - Build tool ultra rápido
- **Tailwind CSS** - Estilos utility-first
- **JavaScript/JSX** - Lenguaje de programación

## 📦 Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/TU_USUARIO/landing-conoce-candidatos.git

# Entrar al directorio
cd landing-conoce-candidatos

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🏗️ Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Genera build de producción |
| `npm run preview` | Previsualiza build de producción |

## 🌐 Deploy en Vercel

### Opción 1: Deploy Automático (Recomendado)

1. Sube este proyecto a un repositorio de GitHub
2. Ve a [vercel.com](https://vercel.com) e inicia sesión
3. Click en **"Add New Project"**
4. Importa tu repositorio de GitHub
5. Vercel detectará automáticamente que es un proyecto Vite
6. Click en **"Deploy"**

### Opción 2: Deploy Manual

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Hacer login
vercel login

# Deploy (desde la raíz del proyecto)
vercel
```

### Configuración Automática

Vercel detectará automáticamente:
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 📁 Estructura del Proyecto

```
landing-conoce-candidatos/
├── public/
│   └── vite.svg          # Favicon
├── src/
│   ├── App.jsx           # Componente principal (Landing Page)
│   ├── main.jsx          # Entry point de React
│   └── index.css         # Estilos globales + Tailwind
├── index.html            # HTML template
├── package.json          # Dependencias y scripts
├── vite.config.js        # Configuración de Vite
├── tailwind.config.js    # Configuración de Tailwind
├── postcss.config.js     # Configuración de PostCSS
├── vercel.json           # Configuración de Vercel
└── README.md             # Este archivo
```

## ✨ Características de la Landing

- 🎨 **Diseño moderno** con gradientes y efectos glassmorphism
- 📱 **Totalmente responsive** para móvil, tablet y desktop
- ⚡ **Animaciones suaves** con CSS y React
- 🧭 **Navegación smooth scroll** entre secciones
- 🌙 **Tema oscuro** elegante y profesional

## 🔧 Personalización

### Cambiar colores
Edita las clases de Tailwind en `src/App.jsx`. Los colores principales son:
- `violet` - Color primario
- `blue/cyan` - Colores secundarios
- `emerald` - Color de acento (Granola)

### Cambiar contenido
Todo el contenido está en `src/App.jsx`:
- Textos del hero
- Pasos del sistema
- Comparativa de herramientas
- Links de CTAs

## 📄 Licencia

Este proyecto es parte de los workshops de Agency Recruitment Community Spain.

---

Desarrollado con 💜 para ARC Spain
