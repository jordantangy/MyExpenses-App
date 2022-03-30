import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const displayForm = () => {
    setShowForm(true);
  };
  const stopEditing = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {showForm === false ? (
        <button onClick={displayForm}> Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
