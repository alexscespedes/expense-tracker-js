// Get DOM elements

const expenseDescriptionInput = document.getElementById("expense-description");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseCategoryInput = document.getElementById("expense-category");

const incomeDescriptionInput = document.getElementById("income-description");
const incomeAmountInput = document.getElementById("income-amount");

const transactionList = document.getElementById("transaction-history");
const totalIncome = document.getElementById("total-income");
const totalExpense = document.getElementById("total-expenses");
const balance = document.getElementById("balance");

// eslint-disable-next-line no-unused-vars
function addExpense() {
  const description = expenseDescriptionInput.value.trim();
  const amount = parseFloat(expenseAmountInput.value.trim());
  const category = expenseCategoryInput.value;

  if (description === "" || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid expense description and amount.");
    return;
  }

  addTransaction(description, amount, category, "Expense");
  clearExpenseInputs();
  updateSummary();
}

// eslint-disable-next-line no-unused-vars
function addIncome() {
  const description = incomeDescriptionInput.value.trim();
  const amount = parseFloat(incomeAmountInput.value.trim());

  if (description === "" || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid income description and amount.");
    return;
  }

  addTransaction(description, amount, "-", "Income");
  clearIncomeInputs();
  updateSummary();
}

function addTransaction(description, amount, category, type) {
  const transactionRow = document.createElement("tr");

  transactionRow.innerHTML = `
    <td>${description}</td>
    <td>${type === "Income" ? "-" : category}</td>
    <td>${amount.toFixed(2)}</td>
    <td>${type}</td>
    <td><button class="delete-btn">Delete</button></td>
    `;

  transactionRow
    .querySelector(".delete-btn")
    .addEventListener("click", function () {
      transactionRow.remove();
      updateSummary();
    });

  transactionList.appendChild(transactionRow);
}

function updateSummary() {
  let totalIncomeSummary = 0;
  let totalExpensesSummary = 0;

  const rows = transactionList.querySelectorAll("tr");

  rows.forEach((row) => {
    const amount = parseFloat(row.children[2].textContent);
    const type = row.children[3].textContent;

    if (type === "Income") {
      totalIncomeSummary += amount;
    } else {
      totalExpensesSummary += amount;
    }
  });

  totalIncome.textContent = totalIncomeSummary.toFixed(2);
  totalExpense.textContent = totalExpensesSummary.toFixed(2);
  balance.textContent = (totalIncomeSummary - totalExpensesSummary).toFixed(2);
}

function clearExpenseInputs() {
  expenseDescriptionInput.value = "";
  expenseAmountInput.value = "";
  expenseCategoryInput.value = "Housing";
}

function clearIncomeInputs() {
  incomeDescriptionInput.value = "";
  incomeAmountInput.value = "";
}

// eslint-disable-next-line no-unused-vars
function clearAll() {
  transactionList.innerHTML = "";
  updateSummary();
}
