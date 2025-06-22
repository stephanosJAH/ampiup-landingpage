// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Manejo del tema claro/oscuro
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Verificar preferencia del sistema
if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    html.classList.remove('dark');
}

// Toggle del tema
themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    // Guardar preferencia en localStorage
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});

// Recuperar preferencia guardada
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    html.classList.toggle('dark', savedTheme === 'dark');
}

// Manejo del menú móvil
const mobileMenuButton = document.getElementById('mobile-menu-button');
const closeMobileMenu = document.getElementById('close-mobile-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
const mobileMenuLinks = mobileMenu.querySelectorAll('a');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
}

mobileMenuButton.addEventListener('click', toggleMobileMenu);
closeMobileMenu.addEventListener('click', toggleMobileMenu);
mobileMenuBackdrop.addEventListener('click', toggleMobileMenu);

// Cerrar menú móvil al hacer clic en un enlace
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', toggleMobileMenu);
});

// Animación del navbar al hacer scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg');
    } else {
        nav.classList.remove('shadow-lg');
    }
});

// Animación del hero section
gsap.from('#inicio h1', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5
});

gsap.from('#inicio p', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.8
});

gsap.from('#inicio .flex', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1.1
});

// Animación de las cards de servicios
gsap.from('.service-card', {
    scrollTrigger: {
        trigger: '#servicios',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2
});

// Animación de los pasos del proceso
gsap.from('.process-step', {
    scrollTrigger: {
        trigger: '#proceso',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.15
});

// Animación del formulario de contacto
gsap.from('#contacto form', {
    scrollTrigger: {
        trigger: '#contacto',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 0.8
});

// Animación flotante continua para el contenedor de animación
gsap.to('.animation-container', {
    y: 20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
});
