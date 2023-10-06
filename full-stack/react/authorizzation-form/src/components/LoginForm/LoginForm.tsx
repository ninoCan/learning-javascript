import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react'

interface LoginFormProps {
  setAuthorized: Dispatch<SetStateAction<boolean>>;
}

function LoginForm({setAuthorized}: LoginFormProps) {
  const correctPassword = "tuna";

  function handleSubmit(event: FormEvent<HTMLFormElement> | any): void {
    const enteredPassword: string = event.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword == correctPassword;
    setAuthorized(auth)
  }

    return (
      <div id="authorization">
        <h1>Enter the Password</h1>
        <form action='#' onSubmit={handleSubmit}>
          <input type="password" placeholder='Password'></input>
          <input type="submit" />
        </form>
      </div>
    );
}

export default LoginForm;