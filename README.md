# 🍽️ Lumière & Cinder

Landing page elegante para un restaurante de alta cocina con estética oscura y moderna.

## 📋 Descripción Corta

Landing page de restaurante premium que combina diseño minimalista con animaciones fluidas, sistema de reservas interactivo y una experiencia visual inmersiva inspirada en la cocina francesa moderna.

## 📖 Descripción Detallada

**Lumière & Cinder** es una landing page completa para un restaurante de alta gastronomía que fusiona la intensidad de la cocina a fuego abierto con la precisión de la gastronomía francesa moderna.

### Características Principales

- **Hero Section**: Pantalla completa con imagen de fondo, overlay degradado y llamadas a la acción prominentes
- **Navegación Inteligente**: Navbar con efecto de transparencia que cambia al hacer scroll, menú responsive para móviles
- **Sección About**: Historia del restaurante con grid de imágenes y iconografía descriptiva
- **Menú Destacado**: Tarjetas interactivas con hover effects, imágenes y precios de platos signature
- **Testimonios**: Reseñas de clientes con sistema de rating de estrellas
- **Sistema de Reservas**: Formulario completo con validación, selección de fecha/hora/invitados y confirmación animada
- **Footer**: Información de contacto, horarios y redes sociales

### Experiencia de Usuario

- Animaciones de scroll reveal en todas las secciones
- Transiciones suaves y hover effects elegantes
- Diseño totalmente responsive (mobile-first)
- Paleta de colores oscura con acentos dorados
- Tipografía serif para títulos y sans-serif para contenido

## 🛠️ Tecnologías

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **React** | 19.2.3 | Biblioteca principal de UI |
| **TypeScript** | 5.8.2 | Tipado estático |
| **Vite** | 6.2.0 | Build tool y dev server |
| **Tailwind CSS** | 4.1.18 | Framework de estilos utility-first |
| **Lucide React** | 0.561.0 | Iconografía |
| **PostCSS** | 8.5.6 | Procesamiento de CSS |

## 📁 Estructura del Proyecto

```
├── components/
│   ├── About.tsx          # Sección historia del restaurante
│   ├── Footer.tsx         # Pie de página con contacto
│   ├── Hero.tsx           # Sección principal con CTA
│   ├── Menu.tsx           # Menú de platos destacados
│   ├── Navbar.tsx         # Navegación responsive
│   ├── ReservationForm.tsx # Formulario de reservas
│   └── Testimonials.tsx   # Reseñas de clientes
├── hooks/
│   └── useScrollReveal.ts # Hook para animaciones de scroll
├── public/
│   └── images/            # Imágenes estáticas
├── App.tsx                # Componente raíz
├── index.tsx              # Entry point
├── index.css              # Estilos globales
├── types.ts               # Definiciones de TypeScript
├── tailwind.config.js     # Configuración de Tailwind
└── vite.config.ts         # Configuración de Vite
```

## 🚀 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 🎨 Paleta de Colores

| Color | Uso |
|-------|-----|
| `brand-dark` | Fondo principal |
| `brand-charcoal` | Fondos secundarios |
| `brand-cream` | Texto principal |
| `brand-gray` | Texto secundario |
| `brand-gold` | Acentos y CTAs |

## 📱 Responsive Design

- **Mobile**: Menú hamburguesa, layout de una columna
- **Tablet**: Grid de 2 columnas en menú y testimonios
- **Desktop**: Layout completo con navegación horizontal

## ✨ Animaciones

- Fade-in-up en carga inicial del hero
- Scroll reveal progresivo en secciones
- Hover effects en tarjetas y botones
- Bounce animation en indicador de scroll
- Transiciones suaves en navegación

---

Desarrollado con ❤️ usando React + TypeScript + Tailwind CSS
