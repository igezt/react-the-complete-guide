import useInput from '../hooks/use-input';
import classes from './Checkout.module.css';

const Checkout = (props) => {
  
  const {value: name, isValid: nameIsValid, isError: nameIsError, changeValueHandler: nameChangeValueHandler, onBlurHandler: nameOnBlurHandler, reset: resetName} = useInput(value => value.trim() !== '');
  const {value: street, isValid: streetIsValid, isError: streetIsError, changeValueHandler: streetChangeValueHandler, onBlurHandler: streetOnBlurHandler, reset: resetStreet} = useInput(value => value.trim() !== '' && value.length !== 6);
  const {value: postal, isValid: postalIsValid, isError: postalIsError, changeValueHandler: postalChangeValueHandler, onBlurHandler: postalOnBlurHandler, reset: resetPostal} = useInput(value => value.trim() !== '');
  const {value: city, isValid: cityIsValid, isError: cityIsError, changeValueHandler: cityChangeValueHandler, onBlurHandler: cityOnBlurHandler, reset: resetCity} = useInput(value => value.trim() !== '');
  
  const formIsValid = nameIsValid && streetIsValid && postalIsValid && cityIsValid;

  const confirmHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("success");
    resetName();
    resetStreet();
    resetPostal();
    resetCity();
    props.onOrder();
  };
  
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={name} onChange={nameChangeValueHandler} onBlur={nameOnBlurHandler} />
        {nameIsError && <p>Your name needs to be not empty!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' value={street} onChange={streetChangeValueHandler} onBlur={streetOnBlurHandler}/>
        {streetIsError && <p>Your streets needs to be not empty!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' value={postal} onChange={postalChangeValueHandler} onBlur={postalOnBlurHandler}/>
        {postalIsError && <p>Your postal code needs to be not empty!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city'  value={city}  onChange={cityChangeValueHandler} onBlur={cityOnBlurHandler}/>
        {cityIsError && <p>Your city needs to be not empty!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} type='submit' disabled={!formIsValid}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;