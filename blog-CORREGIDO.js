/* ==========================================================================
   CORRECCIÓN BLOG.JS - Reemplazar código inseguro
   ========================================================================== */

// ❌ CÓDIGO ACTUAL (INSEGURO - ELIMINAR)
// document.body.innerHTML = tempDoc.body.innerHTML;

// ✅ CÓDIGO CORREGIDO (SEGURO - USAR)

// Manejar las transiciones de vista para los enlaces de artículos
document.addEventListener('DOMContentLoaded', () => {
    const articleLinks = document.querySelectorAll('[data-article-link]');

    articleLinks.forEach(link => {
        link.addEventListener('click', handleArticleClick);
    });
});

async function handleArticleClick(e) {
    // Solo si el navegador soporta View Transitions
    if (!document.startViewTransition) return;

    e.preventDefault();

    const url = e.currentTarget.href;

    // Iniciar la transición de vista
    const transition = document.startViewTransition(async () => {
        // Cargar el nuevo contenido
        const response = await fetch(url);
        const text = await response.text();
        
        // Crear un DOM temporal para parsear el contenido
        const tempDoc = new DOMParser().parseFromString(text, 'text/html');
        
        // Actualizar el título de la página
        document.title = tempDoc.title;
        
        // ✅ SOLUCIÓN 1: Actualizar clase del HTML
        document.documentElement.className = tempDoc.documentElement.className;
        
        // ✅ SOLUCIÓN 2: Reemplazar body de forma segura
        // En lugar de innerHTML, usamos replaceChild
        const newBody = document.adoptNode(tempDoc.body);
        document.documentElement.replaceChild(newBody, document.body);

        // Actualizar la URL
        window.history.pushState({}, '', url);
    });

    // Opcional: Agregar clases para personalizar la animación
    transition.ready.then(() => {
        document.documentElement.classList.add('view-transition-active');
    });

    transition.finished.then(() => {
        document.documentElement.classList.remove('view-transition-active');
        // Reinicializar los event listeners después de la transición
        reinitializeScripts();
    });
}

// Manejar la navegación del historial
window.addEventListener('popstate', () => {
    if (document.startViewTransition) {
        document.startViewTransition(() => {
            location.reload();
        });
    }
});

function reinitializeScripts() {
    // Reinicializar los scripts necesarios después de la transición
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        // Remover listeners anteriores para evitar duplicados
        const newThemeToggle = themeToggle.cloneNode(true);
        themeToggle.parentNode.replaceChild(newThemeToggle, themeToggle);
        
        newThemeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        });
    }

    // Reinicializar los enlaces de artículos en la página del blog
    const articleLinks = document.querySelectorAll('[data-article-link]');
    articleLinks.forEach(link => {
        // Remover listener anterior si existe
        const newLink = link.cloneNode(true);
        link.parentNode.replaceChild(newLink, link);
        newLink.addEventListener('click', handleArticleClick);
    });
}
