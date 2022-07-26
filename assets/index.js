import { renderList, $list } from "./js/renderPoemsList.js";
import fetchPoem from "./js/fetchPoem.js";
import { flexMenu } from "./js/handleMenuButton.js";

$list.insertAdjacentHTML("afterbegin", renderList());

const $poems = document.querySelectorAll("[poem]");

$poems.forEach(fetchPoem);

if (window.innerWidth < 770) flexMenu();
