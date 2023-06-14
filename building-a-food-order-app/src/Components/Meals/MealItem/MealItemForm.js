
import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css"

const MealItemForm = (props) => {
    
    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
        } else {
            setAmountIsValid(true);

        }
        props.onAddToCart(enteredAmountNumber);
    }
    
    return(
        <form className={classes.form}>
            <Input label="Amount" ref={amountInputRef} input = {{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
            }}/>
            <button className={classes.button} onClick={submitHandler}>+Add</button>
            {!amountIsValid && <p>Please enter a valid amount!</p>}
        </form>
    );
}

export default MealItemForm;