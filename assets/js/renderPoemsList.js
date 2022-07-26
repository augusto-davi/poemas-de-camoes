import poems from "./poemsList.js";

const renderList = () => {
  return poems
    .map((poem) => {
      return `
          <a href poem="${poem.path}">
            <li class="list__poem">${poem.title}</li>
          </a>
        `;
    })
    .join("");
};

const $list = document.querySelector(".works-section__list");
const $poems = document.querySelectorAll("[poem]");

export { renderList, $list };
