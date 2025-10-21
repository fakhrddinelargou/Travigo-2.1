
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const navbar = document.querySelector(".navbar")



function openMenu() {
    open.classList.toggle("hidden");
    close.classList.toggle("hidden");
    navbar.classList.toggle("active")
}
