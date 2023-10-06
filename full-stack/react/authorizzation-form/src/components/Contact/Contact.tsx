import React, { FormEvent, useState } from 'react';
import ContactDetails from '../ContactDetails/ContactDetails';
import LoginForm from '../LoginForm/LoginForm';

function Contact() {
  const [authorized, setAuthorized] = useState<boolean>(false);

  if (!authorized) {
    return <LoginForm auth={authorized}/>
  }
  return <ContactDetails />;
}

export default Contact;
