import { Fragment, useContext, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
import useHttp from "../hooks/use-http";
import Checkout from "./Checkout";

const Cart = (props) => {

    const cartContext = useContext(CartContext);
    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;

    const removeItemHandler = (id) => {
        cartContext.removeItem(id);
    } 

    const addItemHandler = (item) => {
        cartContext.addItem({...item, amount: 1})
    }

    const cartItems = (
        <ul>
            {cartContext.items.map(item => (
                <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} onRemove={removeItemHandler.bind(null, item.id)} onAdd={addItemHandler.bind(null, item)}/>
            ))}
        </ul>
    );

    const {isLoading, error, sendRequest} = useHttp();

    const [isCheckout, setIsCheckout] = useState(false);

    const orderItemsHandler = () => {
        const order = cartContext.items;

        const placeholder = (data) => {console.log("Success!")}

        sendRequest(placeholder, {
            link: "https://react-guide-8c237-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
            method: 'POST',
            body: order,
        });
        props.onCloseCart();
    }

    const checkOutHandler = () => {
        setIsCheckout(true);
    }

    return (
        <Modal onCloseModal={props.onCloseCart}>
            
            {isCheckout && <Checkout onCancel={props.onCloseCart} onOrder={orderItemsHandler}/>}
            {!isCheckout && <Fragment>
                {cartItems}
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
                    {hasItems && <button className={classes.button} onClick={checkOutHandler}>Order</button>}
                </div>
            </Fragment>}
        </Modal>
    );
}

export default Cart;