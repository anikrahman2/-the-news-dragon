import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'
  const navigate = useNavigate();
  const handelLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then(result => {
        const loggedUser = result.user;
        navigate(from, { replace: true })
      })
      .catch(error => {
        console.log(error.message)
      })
  }
  return (
    <Container className=' w-25 mx-auto'>
      <h3>Please Login</h3>
      <Form onSubmit={handelLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Text className="text-secondary d-block">
          Don't Have An Account?
          <Link to='/register'>Register</Link>
        </Form.Text>
        <Form.Text className="text-success d-block">

        </Form.Text>
        <Form.Text className="d-block text-danger">

        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;