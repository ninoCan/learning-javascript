import React, { FormEvent, useState } from 'react'

interface LoginFormProps {
  auth: boolean;
}

function LoginForm({auth}: LoginFormProps) {
  const correctPassword = "bigKahuha";
  const [authorized, setAuthorized] = useState<boolean>(auth);

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