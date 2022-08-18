let editor = document.getElementById("editor");
let button = document.getElementById("clear");
let text = localStorage.getItem("textEditor");

window.addEventListener("load", () =>
  editor.value = text);

window.addEventListener("beforeunload", () =>
  localStorage.setItem("textEditor", editor.value));

button.addEventListener("click", () => editor.value = "");