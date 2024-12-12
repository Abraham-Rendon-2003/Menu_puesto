// Selecciona todos los elementos del menú
const menuItems = document.querySelectorAll('.menu-item');

// Detectar qué elemento está en el centro del viewport
const detectCenterItem = () => {
    const windowHeight = window.innerHeight; // Altura del viewport

    menuItems.forEach(item => {
        const rect = item.getBoundingClientRect(); // Obtiene la posición del elemento
        const itemCenter = rect.top + rect.height / 2; // Centro del elemento

        // Verifica si el centro del elemento está cerca del centro del viewport
        if (itemCenter > windowHeight * 0.4 && itemCenter < windowHeight * 0.6) {
            item.classList.add('center'); // Aplica escala
            console.log(`Elemento central detectado: ${item.querySelector('h2').innerText}`);
        } else {
            item.classList.remove('center'); // Restaura el tamaño
        }
    });
};

// Ejecuta la función al hacer scroll
window.addEventListener('scroll', detectCenterItem);

// Ejecuta la función al cargar la página
window.addEventListener('load', detectCenterItem);
