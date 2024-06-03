import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
      }, error => {
        console.log('FAILED...', error);
        alert('Failed to send email.');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Get in touch</h3>
      <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
      <br />
      <input type="email" name="email" placeholder="Email id" value={formData.email} onChange={handleChange} required />
      <br />
      <input type="text" name="phone" placeholder="Phone no." value={formData.phone} onChange={handleChange} required />
      <br />
      <textarea name="message" rows="4" placeholder="How can we help you?" value={formData.message} onChange={handleChange} required></textarea>
      <br />
      <button type="submit">Send</button>
    </form>
  );
};

export default EmailForm;
