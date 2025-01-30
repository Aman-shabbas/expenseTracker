const addExpenses = (expenses) => {
  const totalExpense = expenses.reduce(
    (cumulativeSum, expense) => cumulativeSum + +expense
  );

  return totalExpense.toFixed(2);
};

console.log(addExpenses([1.0, 2.129, 45, 2.0]));
