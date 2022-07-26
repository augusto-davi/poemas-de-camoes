const $btn = document.querySelector(".button");
const menu = document.querySelector(".menu-show");

function flexMenu() {
  $btn.addEventListener("click", () => {
    if (menu.classList.toggle("menu-show")) {
      showMenu();
    } else {
      hideMenu();
    }
  });
}

function hideMenu() {
  menu.classList.remove("menu-show");
  menu.classList.add("menu-hide");
}

function showMenu() {
  menu.classList.add("menu-show");
  menu.classList.remove("menu-hide");
}

export { flexMenu, hideMenu, showMenu };
