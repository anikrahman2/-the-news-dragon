import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const handelRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(email, password)
    createUser(email, password)
      .then(result => {
        const createdUser = result.user;
      })
      .catch(error => {
        console.log(error.message)
      })
  }
  const handelAccepted = event => {
    setAccepted(event.target.checked)
  }
  return (
    <Container className=' w-25 mx-auto'>
      <h3>Please Register</h3>
      <Form onSubmit={handelRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name='photo' placeholder="Enter Photo URL" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handelAccepted}
            type="checkbox"
            name='accept'
            label={<>Accept <Link to='/terms'>Terms & Condition</Link></>} />
        </Form.Group>
        <Button
          disabled={!accepted}
          variant="primary"
          type="submit">
          Register
        </Button>
        <Form.Text className="text-secondary d-block">
          Already Have An Account?
          <Link to='/login'>Login</Link>
        </Form.Text>
        <Form.Text className="text-success d-block">
        </Form.Text>
        <Form.Text className="d-block text-danger">

        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;