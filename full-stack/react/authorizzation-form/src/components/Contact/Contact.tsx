import React, { FormEvent, useState } from 'react';
import ContactDetails from '../ContactDetails/ContactDetails';
import LoginForm from '../LoginForm/LoginForm';

function Contact() {
  const [authorized, setAuthorized] = useState<boolean>(false);
  const correctPassword = "bigKahuha";

  function handleSubmit(event: FormEvent<HTMLFormElement> | any): void {
    const enteredPassword: string = event.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword == correctPassword;
    setAuthorized(auth)
  }

  const login = (
      <div id="authorization">
        <h1>Enter the Password</h1>
        <form action='#' onSubmit={handleSubmit}>
          <input type="password" placeholder='Password'></input>
          <input type="submit" />
        </form>
      </div>
    );

  if (!authorized) {
    // return <LoginForm auth={authorized}/>
    return <>{login}</>
  }
  return <ContactDetails />;
}

export default Contact;
