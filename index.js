document.addEventListener("DOMContentLoaded", function () {
    const movableElement = document.getElementById("shadow");
    const initialPosition = 100; // La posición inicial del elemento
  
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
  
      // Define el punto hasta el cual el elemento se moverá
      const moveUntil = 2000;
  
      // Calcula la nueva posición del elemento
      const newPosition = Math.min(initialPosition + scrollPosition, moveUntil);
  
      // Aplica la nueva posición al elemento
      movableElement.style.top = `${newPosition}px`;
    });
  });
  