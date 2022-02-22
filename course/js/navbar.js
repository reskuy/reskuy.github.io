var header = document.getElementById("header");
var menu = document.querySelector("header .menu");
var openBar = document.querySelector(".show-bar");
var menuShadow = document.querySelector(".menu-shadow");
var title = "Rifka Karin Afinda"
document.getElementById("title-type").innerText = title
home = function(){
  window.scrollTo(0,0);
}
function openMenu() {
  menu.classList.add("menu-active");
  openBar.classList.add("hide-bar");
  menuShadow.classList.add("shadow-active");
}
function closeMenu() {
  menu.classList.remove("menu-active");
  openBar.classList.remove("hide-bar");
  menuShadow.classList.remove("shadow-active");
}
window.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
