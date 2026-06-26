window.addEventListener("load", () => {

    const intro = document.getElementById("intro");
    const video = document.getElementById("introVideo");

    
    if (localStorage.getItem("introVista")) {
        intro.remove();
        return;
    }

    document.body.style.overflow = "hidden";

    video.play();

    video.addEventListener("ended", () => {

        localStorage.setItem("introVista", "true");

        intro.classList.add("ocultar");

        setTimeout(() => {
            intro.remove();
            document.body.style.overflow = "auto";
        }, 800);

    });

});