import { forwardRef } from "react";
import classes from "./Input.module.css";

const Input = forwardRef((props, ref) => {
    return(
        <div className={classes.input}>
            <label htmlFor={props.id}>{props.label}</label>
            <input {...props.input} ref={ref}/>
        </div>
    )
});

export default Input;