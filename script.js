// Selecciona todos los elementos del menú
const menuItems = document.querySelectorAll('.menu-item');

// Detectar qué elemento está en el centro
const detectCenterItem = () => {
    const windowHeight = window.innerHeight;

    menuItems.forEach(item => {
        const rect = item.getBoundingClientRect(); // Obtiene la posición del elemento
        const itemCenter = rect.top + rect.height / 2; // Centro del elemento

        // Verifica si el centro del elemento está cerca del centro de la pantalla
        if (itemCenter > windowHeight * 0.4 && itemCenter < windowHeight * 0.6) {
            item.classList.add('center'); // Agrega la clase para escalar
        } else {
            item.classList.remove('center'); // Remueve la clase si no está en el centro
        }
    });
};

// Ejecuta la función al hacer scroll
window.addEventListener('scroll', detectCenterItem);

// Ejecuta la función al cargar la página
window.addEventListener('load', detectCenterItem);
