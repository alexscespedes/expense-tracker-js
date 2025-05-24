const expenses = [];

function addExpense(description, amount) {
  if (
    typeof description !== "string" ||
    typeof amount !== "number" ||
    amount <= 0
  ) {
    throw new Error("Invalid input");
  }

  const expense = {
    id: expenses.length + 1,
    description,
    amount,
    date: new Date().toISOString(),
  };

  expenses.push(expense);
  return expense;
}

function getExpenses() {
  return expenses;
}

// eslint-disable-next-line no-undef
module.exports = {
  addExpense,
  getExpenses,
};
