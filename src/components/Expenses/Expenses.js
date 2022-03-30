import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [filteredMonth, setFilteredMonth] = useState("none");

  const changedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const changeMonthHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
  };

  let filteredItems = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let filteredYearAndMonthItems = filteredItems.filter((expense) => {
    return expense.date.getMonth().toString() == filteredMonth;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          year_selected={filteredYear}
          onChangeYear={changedYearHandler}
          onChangeMonth={changeMonthHandler}
        />
        <ExpensesChart
          expenses={
            filteredMonth === "none" ? filteredItems : filteredYearAndMonthItems
          }
        />
        <ExpensesList
          items={
            filteredMonth === "none" ? filteredItems : filteredYearAndMonthItems
          }
        />
      </Card>
    </div>
  );
};

export default Expenses;
