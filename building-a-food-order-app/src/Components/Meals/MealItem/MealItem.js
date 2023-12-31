import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/CartContext";

const MealItem = (props) => {

    const cartContext = useContext(CartContext);
    const addToCartHandler = amount => {
        cartContext.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    const price = `$${props.price}`

    return <li className={classes.meal}>
        <div>
            <h3 className={classes.h3}>
                {props.name}
            </h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCartHandler}/>
        </div>
    </li>
}

export default MealItem;