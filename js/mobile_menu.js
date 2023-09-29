const button = document.querySelector(".mobile__menu_button");
const menu = document.querySelector(".mobile__menu");


button.addEventListener("click", () => {
    menu.classList.toggle("active");
});