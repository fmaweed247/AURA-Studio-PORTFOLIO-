document.addEventListener('DOMContentLoaded', () => {

  // --- Lógica para el Modo Oscuro ---
  const darkToggle = document.getElementById('darkToggle');
  const htmlElement = document.documentElement;

  // Función para aplicar el tema
  const applyTheme = (theme) => {
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
      darkToggle.textContent = '☀️';
    } else {
      htmlElement.classList.remove('dark');
      darkToggle.textContent = '🌙';
    }
  };

  // Cargar tema guardado al iniciar
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);

  // Evento de clic para cambiar el tema
  darkToggle.addEventListener('click', () => {
    const isDark = htmlElement.classList.contains('dark');
    if (isDark) {
      applyTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      applyTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  });


  // --- Lógica para el Menú Móvil ---
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = mobileMenuButton.querySelector('i');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    // Cambiar icono de hamburguesa a X
    if (mobileMenu.classList.contains('hidden')) {
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    } else {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-times');
    }
  });

});