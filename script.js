icons.addEventListener("click", () => {
    nav.classList.toggle("active")
})
// Désactiver le défilement horizontal
function disableHorizontalScroll() {
    // Écoutez l'événement de défilement sur la fenêtre
    window.addEventListener('scroll', function() {
        // Si le défilement horizontal est détecté
        if (window.scrollX !== 0) {
            // Réinitialisez la position de défilement horizontal à 0
            window.scrollTo(0, window.scrollY);
        }
    });
}

// Appel de la fonction pour désactiver le défilement horizontal
disableHorizontalScroll();
