import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginImage from "../Components/Assests/images/Login.svg";
import WfmLogo from "../Components/Assests/images/logo-white.png";
import "./login.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [regDetails, setregDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setregDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(regDetails);
  };

  return (
    <>
      <Container className='loginPage mt-5 border rounded'>
        <Row>
          <Col sm={6}>
            <Row className='justify-content-md-center'>
              <Col sm={8}>
                <img
                  src={WfmLogo}
                  className='my-3 w-100'
                  alt='WFM Technologies'
                />
                <h5 className='mb-4'>We are The WFM Team </h5>
                <p>Please register here..</p>
              </Col>
            </Row>

            <Row className='justify-content-md-center'>
              <Col sm={8}>
                <div className='mt-3'>
                  <Form onSubmit={handleSubmit}>
                    <FloatingLabel
                      controlId='floatingInputName'
                      label='Name'
                      className='mb-3'>
                      <Form.Control
                        type='name'
                        name='name'
                        placeholder='Name'
                        autoComplete='off'
                        required
                        onChange={handleChange}
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId='floatingEmail'
                      label='Email address'
                      className='mb-3'>
                      <Form.Control
                        type='email'
                        name='email'
                        autoComplete='off'
                        placeholder='name@example.com'
                        required
                        onChange={handleChange}
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId='floatingPassword'
                      label='Password'>
                      <Form.Control
                        type='password'
                        name='password'
                        autoComplete='off'
                        placeholder='Password'
                        className='mb-3'
                        required
                        onChange={handleChange}
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId='floatingConfirmPassword'
                      label='Confirm Password'>
                      <Form.Control
                        type='password'
                        name='confirmPassword'
                        placeholder='Confirm Password'
                        autoComplete='off'
                        required
                        onChange={handleChange}
                      />
                    </FloatingLabel>
                    <Row>
                      <Col sm={12} className='my-4'>
                        <div className='d-grid'>
                          <Button
                            variant='outline-primary'
                            type='submit'
                            disabled={
                              regDetails.password !== regDetails.confirmPassword
                                ? true
                                : false
                            }
                            className='gradient-login-1 text-uppercase btn-login'>
                            Sign Up
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
              <Col sm={8} className='my-5'>
                <div>
                  Already have an account?
                  <Link to='/login'>
                    <Button
                      variant='outline-danger'
                      className='btn-sm mx-2 my-1 text-uppercase px-5'>
                      Login
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm={6} className='gradient-login-1'>
            <img className='w-100' src={LoginImage} alt='HR Tool' />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
