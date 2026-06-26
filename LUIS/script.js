window.addEventListener("load", () => {

    const intro = document.getElementById("intro");
    const video = document.getElementById("introVideo");

    if (!intro || !video) return;

    if (localStorage.getItem("introVista")) {
        intro.remove();
        return;
    }

    document.body.style.overflow = "hidden";

    video.play().catch(() => {
        intro.remove();
        document.body.style.overflow = "auto";
    });

    video.addEventListener("ended", () => {
        localStorage.setItem("introVista", "true");

        intro.classList.add("ocultar");

        setTimeout(() => {
            intro.remove();
            document.body.style.overflow = "auto";
        }, 800);
    });

    video.addEventListener("error", () => {
        intro.remove();
        document.body.style.overflow = "auto";
    });

    // Seguridad: si después de 10 segundos sigue la intro, la elimina.
    setTimeout(() => {
        if (document.getElementById("intro")) {
            intro.remove();
            document.body.style.overflow = "auto";
        }
    }, 10000);

});