window.onload = function () {

    const intro = document.getElementById("intro");
    const video = document.getElementById("introVideo");

    if (localStorage.getItem("introVista")) {
        intro.style.display = "none";
        return;
    }

    video.onended = function () {
        localStorage.setItem("introVista", "true");
        intro.style.display = "none";
    };

};