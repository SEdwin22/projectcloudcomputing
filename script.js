const form = document.getElementById("itemForm");
const tableBody = document.getElementById("itemTableBody");

let items = JSON.parse(localStorage.getItem("items")) || [];

function renderItems() {
  tableBody.innerHTML = "";
  items.forEach((item, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.qty}</td>
      <td><button class="delete-btn" onclick="deleteItem(${index})">Hapus</button></td>
    `;

    tableBody.appendChild(row);
  });
}

function deleteItem(index) {
  items.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(items));
  renderItems();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("itemName").value;
  const qty = parseInt(document.getElementById("itemQty").value);
  if (!name || qty <= 0) return;
  items.push({ name, qty });
  localStorage.setItem("items", JSON.stringify(items));
  renderItems();
  form.reset();
});

renderItems();
