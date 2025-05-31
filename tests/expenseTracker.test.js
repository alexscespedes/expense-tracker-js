/* eslint-disable no-undef */
const { addExpense, getExpenses } = require("../expenseTracker");

describe("Expense Tracker", () => {
  test("adds a valid expense", () => {
    const result = addExpense("coffee", 3.5);
    expect(result.description).toBe("coffee");
    expect(result.amount).toBe(3.5);
    expect(getExpenses().length).toBeGreaterThan(0);
  });

  test("throws error on invalid input", () => {
    expect(() => addExpense("", -2)).toThrow("Invalid input");
    expect(() => addExpense(null, "free")).toThrow("Invalid input");
  });
});
