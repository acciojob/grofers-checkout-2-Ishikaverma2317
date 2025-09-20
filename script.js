// Get all price elements
const priceElements = document.querySelectorAll('[data-ns-test="prices"]');

// Convert NodeList to Array and calculate sum
let total = 0;
priceElements.forEach(priceCell => {
  total += Number(priceCell.textContent);
});

// Create a new row
const table = document.getElementById("groceryTable");
const totalRow = document.createElement("tr");
const totalCell = document.createElement("td");

// Set attributes for test case
totalCell.setAttribute("colspan", "2");
totalCell.setAttribute("data-ns-test", "grandTotal");

// Add text
totalCell.textContent = `Total Price: ${total}`;

// Append row to table
totalRow.appendChild(totalCell);
table.appendChild(totalRow);
