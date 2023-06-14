import React, { useContext, useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../Context/auth-context';
import Input from '../UI/Input/Input';


const emailReducer = (state, action) => {

  if (action.type === 'USER_INPUT') {
    return {
      value: action.value,
      isValid: action.value.includes('@'),
    }
  } else if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid: state.isValid
    }
  }

  return {
    value:'',
    isValid: false,
  }
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.value,
      isValid: action.value.trim().length > 6,
    }
  } else if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid: state.isValid
    }
  }
}


const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: false,})
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: false });

  const { isValid: emailIsValid } = emailState.isValid;
  const { isValid: passwordIsValid } = passwordState.isValid;

  const authCtx = useContext(AuthContext);

  useEffect(() => {

    const identifer = setTimeout(() => {
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500)
  
    return () => {
      clearTimeout(identifer);
    }
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {

    dispatchEmail({type: 'USER_INPUT', value: event.target.value})

    setFormIsValid(
            passwordState.value.trim().length > 6 && emailState.value.includes('@')
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', value: event.target.value});
    setFormIsValid(
      emailState.value.includes('@') && passwordState.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input id="email" label="E-mail" type="email" isValid={emailIsValid} value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler}/>
        <Input  id="password" label="Password" type="password" isValid={passwordIsValid} value={passwordState.value} onChange={passwordChangeHandler} onBlur={validatePasswordHandler}/>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
