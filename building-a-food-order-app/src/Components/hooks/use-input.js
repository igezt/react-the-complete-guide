import { useState } from "react";

const useInput = (validate) => {

    const [value, setValue] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [isTouched, setIsTouched] = useState(false);

    const isError = isTouched && !isValid;

    const changeValueHandler = (event) => {
        setValue(event.target.value);
        setIsValid(validate(value));
    };

    const onBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setValue("");
        setIsValid(false);
        setIsTouched(false);
    }

    return {value, isTouched, isError, changeValueHandler, onBlurHandler, reset, isValid};
}

export default useInput;