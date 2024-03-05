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
    console.log(details);
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
                <p>Please login to your account</p>
              </Col>
            </Row>

            <Row className='justify-content-md-center'>
              <Col sm={8}>
                <div className='mt-3'>
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
                    <FloatingLabel
                      controlId='floatingPassword'
                      label='Password'>
                      <Form.Control
                        type='password'
                        name='password'
                        placeholder='Password'
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
                            className='gradient-login-1 text-uppercase btn-login'>
                            Login
                          </Button>
                        </div>
                      </Col>
                      <Col sm={12}>
                        <div>
                          <Link to='/forgotpassword'>Forgot password?</Link>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
              <Col sm={8} className='my-5'>
                <div>
                  Don't have an account?
                  <Link to='/register'>
                    <Button
                      variant='outline-danger'
                      className='btn-sm mx-2 my-1 text-uppercase px-5'>
                      Create new
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

export default Login;
