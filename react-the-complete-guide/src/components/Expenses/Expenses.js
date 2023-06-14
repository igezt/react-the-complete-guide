import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

    const [filteredYear, setfilteredYear] = useState("2020");
    const filterSelectHandler = (newFilter) => {
        setfilteredYear(newFilter);
    }
    const filteredList = props.expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear);
    
    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter onFilterSelect={filterSelectHandler} selected={filteredYear}/>
                <ExpensesChart expenses={filteredList}/>
                <ExpensesList filteredList={filteredList}/>
            </Card>
        </div>
    )
}

export default Expenses;