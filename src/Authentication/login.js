import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (details.valueOf.length === 0) {
      alert("Please enter valid email");
    } else {
      console.log(details);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel
        controlId='floatingInput'
        label='Email address'
        className='mb-3'>
        <Form.Control
          type='email'
          name='email'
          placeholder='name@example.com'
          required
          onChange={handleChange}
        />
      </FloatingLabel>
      <FloatingLabel controlId='floatingPassword' label='Password'>
        <Form.Control
          type='password'
          name='password'
          placeholder='Password'
          required
          onChange={handleChange}
        />
      </FloatingLabel>
      <Button variant='success' type='submit'>
        Success
      </Button>
    </Form>
  );
};

export default Login;
