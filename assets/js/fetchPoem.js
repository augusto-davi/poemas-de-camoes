const $poemField = document.querySelector(".poem__content");
import { hideMenu } from "./handleMenuButton.js";

const fetchPoem = (link) => {
  link.onclick = (e) => {
    e.preventDefault();
    if (window.innerWidth < 770) hideMenu();

    fetch(link.getAttribute("poem"))
      .then((response) => response.text())
      .then((poem) => ($poemField.textContent = poem));
  };
};

export default fetchPoem;
