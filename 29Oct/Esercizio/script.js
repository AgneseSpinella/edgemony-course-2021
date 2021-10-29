const body = document.body;
const insertText = document.querySelector(".insert-text");
const wrapper = document.querySelector(".intestazione");
const h1 = document.querySelector("h1");
const h1RenameBtn = document.querySelector(".button-name");
const h1RemoveBtn = document.querySelector(".button-remove");
const h1ListBtn = document.querySelector(".button-list");
const list= document.querySelector(".list")

let input = prompt ("Inserisci un testo che sostituisca il titolo");

h1RemoveBtn.addEventListener(
    "click",
    () => {
      wrapper.removeChild(h1);
    },
    { once: true }
  );
  
h1RenameBtn.addEventListener(
    "click",
    () => {
      h1.textContent = input;
    },
    { once: true }
  );

h1ListBtn.addEventListener(
    "click",
    () => {
        const newLi = document.createElement("li");
        newLi.className = "element-list";
        newLi.textContent ="Questo è un nuovo elemento della lista. Puoi aggiungerne ancora!";
        list.appendChild(newLi);
    },
  );

