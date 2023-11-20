import React, { useEffect, useReducer, useState,useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../Input/Input';
const emailReducer =(state,action) => {
  if(action.type === 'USER_INPUT'){
    return {value: action.val,isValid:action.valid.includes('@')}
  }
  if(action.type === 'INPUT-BLUR'){
    return {value: state.value,isValid:state.valid.includes('@')}
  }
  return { value: '' ,isValid : false}
}


const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  //const [enteredPassword, setEnteredPassword] = useState('');
  //const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

const [emailState,dispatchEmail]=useReducer(emailReducer,{
value:'',
isValid:null,

})

const authctx=useContext(AuthContext)
  const emailInputRef=useRef()
  const passwordInputRef= useRef()
  useEffect(()=>{
  
    console.log('effect running')
    return ()=>{
      console.log('effect cleanup')
    }
  },[enteredPassword])

  // useEffect(()=>{
  //   setTimeout(()=>{
  //   console.log('checking form validity')
  //   setFormIsValid(
  //      enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //   )},500)

  //   return () => {
  //     console.log('cleanup')
  //     clearTimeout(identifier)
  //   }
  // },[setFormIsValid,enteredEmail,enteredPassword])

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT',val:event.target.value});

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && emailState.value.includes('@') > 6
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR',})
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      authctx.onLogin(emailState.value,passwordState.value)
    } else if (!emailIsValid){
       emailInputRef.current.focus()
    } else {
passwordInputRef.current.focus()
    }
    authctx.onLogin(emailState.value, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
        ref={emailInputRef}
         id="email" 
        label="E-mail" 
        type="email" 
        isValid={emailIsValid} 
        value={emailState.value}
        onChange={emailChaneHandler}
        onBlur={validateEmailHandler}
        />
         <Input 
         ref={passwordInputRef}
         id="password" 
        label="Password" 
        type="password" 
        isValid={passwordIsValid} 
        value={passwordState.value}
        onChange={passwordChaneHandler}
        onBlur={validatePasswordHandler}
        />
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
