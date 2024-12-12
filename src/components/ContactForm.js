import React, { useState } from 'react';
import './ContactForm.css'; // Import the CSS file

const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const [errors, setErrors] = useState({
      name: '',
      email: '',
    });
  
    // Handle changes in form fields
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    // Handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
  
      console.log('Form submission triggered'); // Debugging line
  
      const { name, email } = formData;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      const newErrors = {
        name: '',
        email: '',
      };
  
      if (!name) {
        newErrors.name = 'Name is required';
      }
  
      if (!email || !emailRegex.test(email)) {
        newErrors.email = 'Please enter a valid email address';
      }
  
      console.log('Errors:', newErrors); // Check errors object
  
      setErrors(newErrors);
  
      // Only reset form data if there are no errors
      if (newErrors.name === '' && newErrors.email === '') {
        // Log the form data and reset the form
        console.log('Form submitted:', formData);
  
        // Reset form fields after submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        console.log('Form has errors, validation failed.');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
  
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
  
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
  
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default ContactForm;