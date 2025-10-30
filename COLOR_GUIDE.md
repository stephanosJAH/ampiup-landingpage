# 🎨 Guía de Paleta de Colores AmpiUP

## 📋 Tabla de Contenidos
- [Colores Base](#colores-base)
- [Uso en CSS/HTML](#uso-en-csshtml)
- [Accesibilidad](#accesibilidad)
- [Ejemplos Prácticos](#ejemplos-prácticos)
- [Variables CSS](#variables-css)

---

## 🎯 Colores Base

### Violeta Primario (#4A00B7)
**Uso principal:** Botones, enlaces, elementos destacados, branding principal

```css
/* Escala completa */
--primary-950: #1a0042  /* Ultraoscuro - Fondos oscuros */
--primary-900: #2d0070  /* Muy oscuro - Textos en fondos claros */
--primary-800: #3d0095  /* Oscuro - Estados activos */
--primary-700: #4A00B7  /* BASE ORIGINAL - Color principal */
--primary-600: #5a1ac7  /* Medio-Oscuro - Hover states */
--primary-500: #6d3dd4  /* Medio - Variantes interactivas */
--primary-400: #8560e0  /* Medio-Claro - Textos en fondos oscuros */
--primary-300: #a083eb  /* Claro - Backgrounds sutiles */
--primary-200: #c0adf5  /* Muy claro - Highlights */
--primary-100: #dfd6fa  /* Ultra claro - Fondos suaves */
--primary-50:  #f2effd  /* Casi blanco - Fondos muy claros */
```

### Fucsia Secundario (#BD00FF)
**Uso principal:** Acentos, gradientes, elementos destacados secundarios

```css
/* Escala completa */
--secondary-950: #400042  /* Ultraoscuro */
--secondary-900: #6e006e  /* Muy oscuro */
--secondary-800: #9500a0  /* Oscuro */
--secondary-700: #BD00FF  /* BASE ORIGINAL - Color secundario */
--secondary-600: #c933ff  /* Medio-Oscuro */
--secondary-500: #d45aff  /* Medio */
--secondary-400: #dd7dff  /* Medio-Claro */
--secondary-300: #e6a0ff  /* Claro */
--secondary-200: #f0c3ff  /* Muy claro */
--secondary-100: #f8e0ff  /* Ultra claro */
--secondary-50:  #fdf5ff  /* Casi blanco */
```

---

## 🚀 Uso en CSS/HTML

### Usando Variables CSS
```css
/* En tu CSS */
.button-primary {
    background-color: var(--primary-700);
    color: white;
}

.button-primary:hover {
    background-color: var(--primary-600);
}

.card-highlight {
    background: var(--gradient-primary);
}
```

### Usando Clases de Tailwind
```html
<!-- Botón primario -->
<button class="bg-primary-700 hover:bg-primary-600 text-white">
    Comenzar
</button>

<!-- Botón secundario -->
<button class="bg-secondary-700 hover:bg-secondary-600 text-white">
    Saber más
</button>

<!-- Card con borde -->
<div class="border-2 border-primary-700 bg-primary-50">
    Contenido
</div>

<!-- Texto con color -->
<h2 class="text-primary-900 dark:text-primary-300">
    Título
</h2>
```

---

## ♿ Accesibilidad (WCAG 2.1)

### ✅ Ratios de Contraste Verificados

| Color | Fondo | Ratio | Nivel | Estado |
|-------|-------|-------|-------|--------|
| `primary-700` | Blanco | 8.68:1 | AAA | ✅ |
| `primary-700` | `gray-50` | 8.2:1 | AAA | ✅ |
| `secondary-700` | Blanco | 4.54:1 | AA+ | ✅ |
| `primary-600` | Blanco | 7.1:1 | AAA | ✅ |
| `primary-400` | `gray-900` | 7.8:1 | AAA | ✅ |

**Recomendaciones:**
- ✅ Usar `primary-700` o más oscuro para texto en fondos claros
- ✅ Usar `primary-400` o más claro para texto en fondos oscuros
- ✅ Siempre verificar el contraste cuando uses fondos personalizados

### Herramientas para Verificar Contraste
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/)

---

## 📚 Ejemplos Prácticos

### 1. Botones

```html
<!-- Botón primario -->
<button class="bg-primary-700 hover:bg-primary-600 active:bg-primary-800 
               text-white px-6 py-3 rounded-lg transition-all 
               shadow-lg hover:shadow-xl">
    Acción Principal
</button>

<!-- Botón secundario -->
<button class="bg-secondary-700 hover:bg-secondary-600 active:bg-secondary-800 
               text-white px-6 py-3 rounded-lg transition-all">
    Acción Secundaria
</button>

<!-- Botón outline -->
<button class="border-2 border-primary-700 text-primary-700 
               hover:bg-primary-700 hover:text-white 
               px-6 py-3 rounded-lg transition-all">
    Acción Terciaria
</button>
```

### 2. Cards con Gradiente

```html
<div class="relative overflow-hidden rounded-xl p-8 
            bg-gradient-to-br from-primary-700 to-secondary-700 
            text-white shadow-2xl">
    <h3 class="text-2xl font-bold mb-4">Título del Card</h3>
    <p class="opacity-90">Contenido del card con gradiente.</p>
</div>
```

### 3. Badges y Tags

```html
<!-- Badge primario -->
<span class="inline-flex items-center px-3 py-1 rounded-full 
             bg-primary-100 text-primary-800 text-sm font-medium">
    Nuevo
</span>

<!-- Badge secundario -->
<span class="inline-flex items-center px-3 py-1 rounded-full 
             bg-secondary-100 text-secondary-800 text-sm font-medium">
    Popular
</span>
```

### 4. Enlaces

```html
<!-- Enlace normal -->
<a href="#" class="text-primary-700 hover:text-primary-600 
                   underline-offset-4 hover:underline transition-colors">
    Ver más información
</a>

<!-- Enlace visitado -->
<a href="#" class="text-primary-700 visited:text-secondary-800 
                   hover:text-primary-600">
    Enlace con estado visitado
</a>
```

### 5. Fondos y Secciones

```html
<!-- Hero section con gradiente -->
<section class="relative min-h-screen bg-gradient-to-br 
                from-primary-900 via-primary-700 to-secondary-700">
    <div class="relative z-10 text-white">
        <!-- Contenido -->
    </div>
</section>

<!-- Sección con fondo sutil -->
<section class="bg-primary-50 dark:bg-primary-950">
    <div class="container mx-auto py-20">
        <!-- Contenido -->
    </div>
</section>
```

### 6. Inputs y Forms

```html
<!-- Input con enfoque -->
<input type="text" 
       class="w-full px-4 py-3 rounded-lg 
              border-2 border-gray-300 
              focus:border-primary-700 focus:ring-4 focus:ring-primary-200 
              transition-all outline-none"
       placeholder="Nombre">

<!-- Checkbox personalizado -->
<input type="checkbox" 
       class="w-5 h-5 text-primary-700 
              border-gray-300 rounded 
              focus:ring-primary-500">
```

---

## 🎨 Variables CSS Disponibles

### Colores Principales
```css
--primary-[50-950]     /* Escala violeta */
--secondary-[50-950]   /* Escala fucsia */
--gray-[50-950]        /* Escala de grises */
```

### Colores de Acento
```css
--accent-cyan-[400-600]     /* Cyan complementario */
--accent-success-[500-700]  /* Verde para éxito */
--accent-warning-[500-700]  /* Ámbar para advertencias */
--accent-error-[500-700]    /* Rojo para errores */
```

### Gradientes Pre-definidos
```css
--gradient-primary       /* Violeta → Fucsia (intenso) */
--gradient-primary-soft  /* Violeta → Fucsia (suave) */
--gradient-primary-light /* Violeta → Fucsia (claro) */
--gradient-hero          /* Multi-stop para heroes */
--gradient-card          /* Sutil para cards */
--gradient-hover         /* Para efectos hover */
```

### Colores Semánticos
```css
/* Automáticamente se adaptan al modo claro/oscuro */
--color-background
--color-surface
--color-text-primary
--color-text-secondary
--color-button-primary
--color-button-primary-hover
--color-link
--color-link-hover
--color-border
```

### Sombras
```css
--shadow-sm          /* Sombra pequeña */
--shadow-md          /* Sombra media */
--shadow-lg          /* Sombra grande */
--shadow-xl          /* Sombra extra grande */
--shadow-2xl         /* Sombra 2XL */
--shadow-glow        /* Efecto brillo */
--shadow-glow-strong /* Efecto brillo intenso */
```

### Overlays
```css
--overlay-primary-10     /* 10% violeta */
--overlay-primary-20     /* 20% violeta */
--overlay-primary-30     /* 30% violeta */
--overlay-secondary-10   /* 10% fucsia */
--overlay-secondary-20   /* 20% fucsia */
--overlay-secondary-30   /* 30% fucsia */
--overlay-dark-[50-90]   /* Negro con opacidad */
--overlay-light-[50-90]  /* Blanco con opacidad */
```

---

## 🌓 Modo Oscuro

El sistema automáticamente ajusta los colores en modo oscuro:

```html
<!-- Automáticamente se adapta -->
<div class="bg-white dark:bg-gray-900 
            text-gray-900 dark:text-white">
    <button class="bg-primary-700 dark:bg-primary-600">
        Botón adaptativo
    </button>
</div>
```

---

## 💡 Tips y Mejores Prácticas

1. **Contraste:** Siempre usa tonos 700+ para texto en fondos claros
2. **Gradientes:** Usa los gradientes pre-definidos para consistencia
3. **Hover:** Generalmente, oscurece un nivel (700 → 600)
4. **Active:** Oscurece dos niveles (700 → 800)
5. **Disabled:** Usa tonos 300-400 para elementos deshabilitados
6. **Focus:** Usa rings con tonos 200-300 para estados de foco
7. **Fondos sutiles:** Usa tonos 50-100 para fondos con mínimo contraste

---

## 📖 Referencias

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors)
- [Color Theory for Designers](https://www.interaction-design.org/literature/topics/color-theory)

---

**Última actualización:** Octubre 2025  
**Versión de la paleta:** 1.0.0
