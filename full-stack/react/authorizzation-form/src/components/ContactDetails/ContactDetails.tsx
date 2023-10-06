import React, { FormEvent, useState } from 'react';

const contactInfo = {
  email: "client@example.com",
  phone: "555.555.5555",
}

export default function ContactDetails() {
    return (
        <div id="authorization">
            <h1>Contact</h1> <ul>
            <li>{contactInfo.email}</li>
            <li>{contactInfo.phone}</li>
            </ul>
        </div>
    );
}