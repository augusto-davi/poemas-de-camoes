import poemsList from "./poems.js";

const content = document.querySelector(".poem__content");
const list = document.querySelector(".works-section__list");
const btn = document.querySelector(".button");

function generateList() {
  return poemsList
    .map((poem) => {
      return `
      <a href poem="${poem.archive}">
      <li class="list__poem">${poem.name}</li>
      </a>
    `;
    })
    .join("");
}

function renderPage() {
  list.innerHTML = generateList();
}

renderPage();

const poems = document.querySelectorAll("[poem]");
const menu = document.querySelector(".menu-show");

poems.forEach((link) => {
  link.onclick = function (e) {
    e.preventDefault();
    hideMenu();

    fetch(link.getAttribute("poem"))
      .then((resp) => resp.text())
      .then((html) => (content.innerHTML = html));
  };
});

function flexMenu() {
  btn.addEventListener("click", () => {
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
