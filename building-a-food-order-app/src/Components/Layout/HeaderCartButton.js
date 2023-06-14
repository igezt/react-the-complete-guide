import { useContext, useEffect, useState } from "react";
import CartIcon from "../UI/CartIcon";
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {

    const crdCtx = useContext(CartContext);
    const numberOfCartItems = crdCtx.items.reduce((curr, item) => curr + item.amount, 0);

    
    const [btnIsHighlighted, setbtnIsHighlighted] = useState(false);
    const btnClasses = `${classes.button} ${btnIsHighlighted && classes.bump}`;

    const { items } = crdCtx;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setbtnIsHighlighted(true);

        const timer = setTimeout(() => {setbtnIsHighlighted(false)}, 300);
        return () => {
            clearTimeout(timer);
        }
    }, [items])

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton;