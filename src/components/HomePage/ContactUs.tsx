import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, TextField, Input } from '@mui/material';

// Styles
const ContactContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px 20px;
  background-color: white;
  margin-top: 30px;
  flex-wrap: wrap;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ContactDetails = styled.div`
  max-width: 50%;
  text-align: left;

  h2 {
    color: #0a583a;
    margin-bottom: 10px;
    font-size: 1.5rem;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    margin-bottom: 20px;
  }

  a {
    font-size: 1.2rem;
    color: #0a583a;
    text-decoration: none;
    display: block;
    margin-bottom: 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContactForm = styled.div`
  max-width: 40%;
  background-color: #201658;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  input,
  textarea {
    width: 100%;
    border: none;
    border-radius: 5px;
  }

  textarea {
    height: 100px;
    resize: none;
  }

  button {
    width: 100%;
    margin-top: 20px;
    background-color: #a7e6ff;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #3572ef;
    }
  }

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    background-color: white;

    & fieldset {
      border-color: #3572ef; // Border color
    }

    &:hover fieldset {
      border-color: #3572ef; // Hover border color
    }
  }

  & .MuiInputBase-input {
    color: black; // Text color
  }

  & .MuiInputLabel-root {
    color: white; // Placeholder color
  }
`;

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
  };

  return (
    <ContactContainer>
      <ContactDetails>
        <h2>Contact Us</h2>
        <h1>Reach Out With Your Enquiries</h1>
        <p>Call us for immediate support to this number</p>
        <a href="tel:+94761234567">+94761234567</a>
        <a href="mailto:support@votezone.com">support@votezone.com</a>
      </ContactDetails>

      <ContactForm>
        <form onSubmit={handleSubmit}>
          <StyledTextField
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <StyledTextField
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <StyledTextField
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Button type="submit">Send Message</Button>
        </form>
      </ContactForm>
    </ContactContainer>
  );
};

export default ContactUsPage;
