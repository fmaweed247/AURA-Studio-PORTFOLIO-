document.addEventListener('DOMContentLoaded', () => {

  // --- Lógica para el Modo Oscuro ---
  const darkToggle = document.getElementById('darkToggle');
  const htmlElement = document.documentElement;

  // Función para aplicar el tema y la animación del botón
  const applyTheme = (theme) => {
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
      darkToggle.textContent = '☀️';
    } else {
      htmlElement.classList.remove('dark');
      darkToggle.textContent = '🌙';
    }
    // Añadir animación de rotación al botón
    darkToggle.style.transform = 'rotate(360deg)';
    darkToggle.addEventListener('transitionend', () => {
      darkToggle.style.transform = 'rotate(0deg)';
    }, { once: true });
  };

  // Cargar tema guardado o preferido por el sistema al iniciar
  const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(savedTheme);

  // Evento de clic para cambiar el tema
  darkToggle.addEventListener('click', () => {
    const isDark = htmlElement.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });


  // --- Lógica para el Menú Móvil ---
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = mobileMenuButton.querySelector('i');

  mobileMenuButton.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('opacity-0');
    mobileMenu.classList.toggle('opacity-100');
    
    // Cambiar icono de hamburguesa a X y viceversa
    if (!isHidden) {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-times');
    } else {
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    }
  });


  // --- Lógica para Animaciones al Hacer Scroll ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Cuando el elemento es visible
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Dejar de observar una vez animado
      }
    });
  }, {
    threshold: 0.1 // Activar cuando el 10% del elemento sea visible
  });

  // Observar todos los elementos con la clase 'animate-on-scroll'
  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
  elementsToAnimate.forEach(el => observer.observe(el));


  // --- Efecto Parallax para la Portada (solo en index.html) ---
  const heroImage = document.querySelector('.hero-parallax-img');
  if (heroImage) {
    window.addEventListener('scroll', () => {
      const offset = window.pageYOffset;
      // Mueve la imagen más lento que el scroll para crear profundidad
      heroImage.style.transform = `translateY(${offset * 0.4}px)`;
    });
  }

});

