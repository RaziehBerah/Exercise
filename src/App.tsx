import React, { useState } from "react";
import ExpenseList from "./Components/ExpenseList";
import ExpenseCategory from "./Components/ExpenseCategory";

import { categories } from "./Components/Category";
import ExpensesForm from "./Components/ExpensesForm";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Shampoo", amount: 5, category: "Bath" },
    { id: 2, description: "Bread", amount: 4, category: "Kitchen" },
    { id: 3, description: "Candle", amount: 80, category: "Beauty" },
    { id: 4, description: "Fruit", amount: 10, category: "Kitchen" },
    { id: 5, description: "Wine", amount: 5, category: "Hobby" },
    { id: 6, description: "Flower", amount: 5, category: "Beauty " },
    { id: 7, description: "ِChips", amount: 5, category: "Hobby" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const visible = selectedCategory
    ? expenses.filter((e) => e.category == selectedCategory)
    : expenses;
  return (
    <>
      <div className="mb-3">
        <ExpensesForm
          onSubmitForm={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseCategory
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visible}
        ondelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
};

export default App;
