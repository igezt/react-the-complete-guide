import { useReducer, useState } from "react";

const initialInputState = {
    value: '',
    isTouched: false,
};

const inputStateReducer = (state, action) => {

    if (action.type === "CHANGE_VALUE") {
        return {
            value: action.newValue,
            isTouched: state.isTouched,
        }
    } else if (action.type === "TOUCHED") {
        return {
            value: state.value,
            isTouched: true,
        }
    } if (action.type === "RESET") {
        return {
            value: '',
            isTouched: false,
        }
    }


    return initialInputState;
}

const useInput = (validateValue) => {

    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

    const [enteredValue, setEnteredValue] = useState("");
    const [valueIsTouched, setValueIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    
    const hasError = !valueIsValid && valueIsTouched;

    const valueChangeHandler = (event) => {
        dispatch({
            type: "CHANGE_VALUE",
            newValue: event.target.value,
        })
    }

    const inputBlurHandler = (event) => {
        dispatch({
            type: "TOUCHED",
            newValue: true,
        })
    }

    const reset = () => {
        dispatch({
            type: "RESET",
        })
    }

    return {
        value: enteredValue, valueIsValid, hasError, valueChangeHandler, inputBlurHandler, reset
    }


};



export default useInput;






