import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(filteredYear);
  };

  const filteredItems = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeYear={changedYearHandler}
        />
        <ExpensesList items={filteredItems} />
      </Card>
    </div>
  );
};

export default Expenses;
