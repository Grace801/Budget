const sideMenu = document.querySelector("aside")
const menuBtn = document.querySelector("#btn-menu")
const closeBtn = document.querySelector("#btn-close")
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none'
})


themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // On change l’icône active
    themeToggle.querySelectorAll("span").forEach(icon => icon.classList.toggle("active"));
});
