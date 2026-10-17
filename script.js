const homeScreen = document.querySelector("#home-screen");
const listScreen = document.querySelector("#list-screen");
const input = document.querySelector("#newItem");
const addItemForm = document.querySelector("#add-item-form");
const shoppingList = document.querySelector("ul");
const alertElement = document.querySelector("#alert");
const startListButton = document.querySelector("#start-list");
const backButton = document.querySelector("#back-button");

const storageKey = "shopping-list-items";
let items = loadItems();

function showListScreen() {
  homeScreen.classList.add("hide");
  listScreen.classList.remove("hide");
  alertElement.classList.add("hide");
  input.focus();
}

function showHomeScreen() {
  listScreen.classList.add("hide");
  homeScreen.classList.remove("hide");
  startListButton.focus();
}

function loadItems() {
  try {
    const savedItems = JSON.parse(localStorage.getItem(storageKey)) || [];

    if (!Array.isArray(savedItems)) return [];

    return savedItems
      .filter((item) => item && typeof item.name === "string")
      .map((item) => ({
        id: item.id || createId(),
        name: item.name.trim(),
        purchased: Boolean(item.purchased),
      }));
  } catch {
    return [];
  }
}

function saveItems() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(items));
  } catch {
    // The list remains usable when browser storage is unavailable.
  }
}

function createId() {
  return globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`;
}

function renderItems() {
  shoppingList.replaceChildren();

  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.dataset.itemId = item.id;
    listItem.classList.toggle("purchased", item.purchased);

    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.purchased;
    checkbox.setAttribute("aria-label", `Marcar ${item.name} como comprado`);

    const checkmark = document.createElement("span");
    checkmark.className = "checkmark";

    const name = document.createElement("p");
    name.textContent = item.name;
    label.append(checkbox, checkmark, name);

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-item";
    deleteButton.setAttribute("aria-label", `Remover ${item.name}`);
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "./assets/delete.svg";
    deleteIcon.alt = "";
    deleteButton.append(deleteIcon);

    listItem.append(label, deleteButton);
    shoppingList.append(listItem);
  });
}

function addItem(event) {
  event.preventDefault();
  const name = input.value.trim();

  if (!name) {
    input.focus();
    return;
  }

  items.push({ id: createId(), name, purchased: false });
  saveItems();
  renderItems();
  addItemForm.reset();
  input.focus();
}

function removeItem(event) {
  const deleteButton = event.target.closest(".delete-item");
  if (!deleteButton) return;

  const listItem = deleteButton.closest("li");
  items = items.filter((item) => item.id !== listItem.dataset.itemId);
  saveItems();
  renderItems();
  alertElement.classList.remove("hide");
}

function togglePurchased(event) {
  const checkbox = event.target.closest('input[type="checkbox"]');
  if (!checkbox) return;

  const listItem = checkbox.closest("li");
  const item = items.find((item) => item.id === listItem.dataset.itemId);
  if (!item) return;

  item.purchased = checkbox.checked;
  saveItems();
  renderItems();
}

function closeAlert() {
  alertElement.classList.add("hide");
}

addItemForm.addEventListener("submit", addItem);
shoppingList.addEventListener("click", removeItem);
shoppingList.addEventListener("change", togglePurchased);
document.querySelector(".alert-close").addEventListener("click", closeAlert);
startListButton.addEventListener("click", showListScreen);
backButton.addEventListener("click", showHomeScreen);

renderItems();
