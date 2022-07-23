import poems from "./poems.js";

function renderList() {
  return poems
    .map((poem) => {
      return `
          <a href poem="${poem.path}">
            <li class="list__poem">${poem.title}</li>
          </a>
        `;
    })
    .join("");
}

export default renderList;
