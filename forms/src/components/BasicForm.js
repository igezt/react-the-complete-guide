import useInput from "../hooks/use-input";
import "../index.css";

const BasicForm = (props) => {


  const {value: firstName, valueIsValid: firstNameIsValid, hasError: firstNameHasError, valueChangeHandler: firstNameValueChangeHandler, inputBlurHandler: firstNameInputBlurHandler, reset: firstNameReset} = useInput(value => value.trim() !== '');
  const {value: lastName, valueIsValid: lastNameIsValid, hasError: lastNameHasError, valueChangeHandler: lastNameValueChangeHandler, inputBlurHandler: lastNameInputBlurHandler, reset: lastNameReset} = useInput(value => value.trim() !== '');
  const {value: email, valueIsValid: emailIsValid, hasError: emailHasError, valueChangeHandler: emailValueChangeHandler, inputBlurHandler: emailInputBlurHandler, reset: emailReset} = useInput(value => value.trim() !== '' && value.includes('@'));

  const formIsValid = !firstNameHasError && !lastNameHasError && !emailHasError;

  const onFormSubmitHandler = (event) => {

    email.preventDefault();
    
    if (!formIsValid) {
      console.log("The form is not valid!");
      return;
    }
    
    console.log("Hello!");
    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const firstNameClasses = "form-control " + (firstNameHasError && "invalid");
  const lastNameClasses = "form-control " + (lastNameHasError && "invalid");
  const emailClasses = "form-control " + (emailHasError && "invalid");

  return (
    <form>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={firstName} onChange={firstNameValueChangeHandler} onBlur={firstNameInputBlurHandler}/>
          {firstNameHasError && <p>Your first name must not be empty!</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lastName} onChange={lastNameValueChangeHandler} onBlur={lastNameInputBlurHandler}/>
          {lastNameHasError && <p>Your last name must not be empty!</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={email} onChange={emailValueChangeHandler} onBlur={emailInputBlurHandler}/>
        {emailHasError && <p>Email must not be empty!</p>}
      </div>
      <div className='form-actions'>
        <button disabled={formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
