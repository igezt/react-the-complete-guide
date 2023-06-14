import './NewExpense.css';

import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setShowAddExpenseForm(false);
    }

    const addExpenseFormButtonHandler = (event) => {
        setShowAddExpenseForm(true);
    }

    const closeExpenseForm = () => {
        setShowAddExpenseForm(false);
    }

    const [showAddExpenseForm, setShowAddExpenseForm] = useState(false);

    return(
        <div className="new-expense">
            {
                showAddExpenseForm ? (
                    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCloseSaveExpenseForm={closeExpenseForm}/>
                ) : (
                    <button onClick={addExpenseFormButtonHandler}> Add New Expense </button>
                )
            }
        </div>
    )
};

export default NewExpense;