const input = document.querySelector("#newItem");
const btnSubmit = document.querySelector(".btn-submit");
const shoppingList = document.querySelector("ul");
const alertElement = document.querySelector("#alert");

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const itemName = input.value.trim();
  if (itemName === ''){
    alert("Digite o nome do item");
    return;
  }

  //li
  const item = document.createElement("li");

  //form
  const form = document.createElement("form");
  const label = document.createElement("label");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const checkmark = document.createElement("div");
  checkmark.classList.add("checkmark");
  const p = document.createElement("p");
  p.textContent = itemName;
  
  label.append(checkbox, checkmark, p);
  form.append(label);

  //img
  const img = document.createElement("img");
  img.src = "./assets/delete.svg";
  img.alt = "Ícone de lixeira";

  //add item in the shopping list
  item.append(form, img);
  shoppingList.appendChild(item);

  //clear input
  input.value = '';
  input.focus();
})

shoppingList.addEventListener("click", (event) => {
  const delBtn = event.target.closest('img');
  if (!delBtn) return;

  const li = delBtn.closest('li');
  li.remove();

  //show alert
  alertElement.classList.remove("hide");
})

alertElement.addEventListener("click", (event) => {
  const delBtn = event.target.closest('img[src*="alert-delete"]');
  if (!delBtn) return;

  const div = delBtn.closest('div');
  div.classList.add("hide");
})

shoppingList.addEventListener("change", (event) => {
  const checkbox = event.target.closest('input[type="checkbox"]');
  if (!checkbox) return;

  const li = checkbox.closest('li');
  if (checkbox.checked) {
    li.classList.add('purchased');
  } else {
    li.classList.remove('purchased');
  }
})






