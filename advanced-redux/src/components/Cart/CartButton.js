import { cartActions } from '../../store';
import classes from './CartButton.module.css';
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {

  const dispatch = useDispatch();

  const onCartClickHandler = (event) => {
    event.preventDefault();
    dispatch(cartActions.toggleShow());
  };


  return (
    <button className={classes.button} onClick={onCartClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
