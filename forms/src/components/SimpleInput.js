import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const { value: enteredName, isValid: nameIsValid, hasError: nameInputHasError, valueChangeHandler: nameChangedHandler, inputBlurHandler: nameBlurHandler, reset: nameReset} = useInput(value => value.trim() !== '');
  const { value: enteredEmail, isValid: emailIsValid, hasError: emailInputHasError, valueChangeHandler: emailChangedHandler, inputBlurHandler: emailBlurHandler, reset: emailReset} = useInput(value => value.trim() !== '' && value.includes('@'));

  let formIsValid = nameIsValid && emailIsValid;

  const formSubmissionHandler = event => {
    event.preventDefault();
    
    if (!nameIsValid) {
      return;
    }

    nameReset();
    emailReset();
  }

  const inputCSS = nameInputHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputCSS}>
        <label htmlFor='name' className="invalid">Your Name</label>
        <input type='text' id='name' onChange={nameChangedHandler} value={enteredName} onBlur={nameBlurHandler}/>
        <input type='text' id='email' onChange={emailChangedHandler} value={enteredEmail} onBlur={emailBlurHandler}/>
        {nameInputHasError && <p>Names should not be empty</p>}
        {emailInputHasError && <p>Emails should not be empty and include an @ symbol</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
