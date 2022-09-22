import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';
const SignUp = () => {
  return (
    <div className="container mt-5 col-6">
      <h3 className="text-primary">SignUp</h3>
      <hr></hr>
      <Form className="container mt-5 col-6">

        <Form.Group className="mb-4" controlId="emailId">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="Fname" placeholder="Enter First Name" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="emailId">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="Lname" placeholder="Enter Last Name" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="emailId">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="emailId">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="Pnumber" placeholder="Enter Phone Number" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className=" d-grid gap-3">
        <Button variant="primary" type="submit" className="d-grid mt-2">
           Submit
        </Button>
        </Form.Group>

      </Form>
    </div>
  )
}

export default SignUp