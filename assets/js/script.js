import renderList from "./renderPoemsList.js";

const $poemField = document.querySelector(".poem__content");
const $list = document.querySelector(".works-section__list");
const $btn = document.querySelector(".button");
const menu = document.querySelector(".menu-show");

$list.insertAdjacentHTML("afterbegin", renderList());

const poems = document.querySelectorAll("[poem]");

function fetchPoem(link) {
  link.onclick = (e) => {
    e.preventDefault();
    if (window.innerWidth < 770) hideMenu();

    fetch(link.getAttribute("poem"))
      .then((response) => response.text())
      .then((poem) => ($poemField.textContent = poem));
  };
}

poems.forEach(fetchPoem);

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

window.addEventListener("load", flexMenu);
