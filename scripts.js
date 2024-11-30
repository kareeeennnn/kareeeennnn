$(window).on("load", function () {
    $("body").animate(
        {
         top:"15px" ,       // Mover hacia arriba
            opacity: 1       // Hacer visible
        },
        1500, // Duración: 1.5 segundos
        // Efecto de animación (opcional)
        function () {
            console.log("Animación completa");
        }
    );
});