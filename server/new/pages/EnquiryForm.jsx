import React from 'react';
import emailjs from 'emailjs-com';

const EnquiryForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_7w040re', 'template_f5l9xbd', e.target, 'NrggkZIu0ufDSreuy') // put in dot env before going live 
      .then((result) => {
        alert('Email sent successfully');
      }, (error) => {
        alert('Error sending email');
      });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          required
          type="text"
          name="name"
        />
        <label htmlFor="phone">Phone:</label>
        <input
          required
          type="number"
          name="phone"
        />
        <label htmlFor="email">Email:</label>
        <input
          required
          type="email"
          name="email"
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default EnquiryForm;
