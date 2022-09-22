import React from 'react'
import { Form, Button } from 'react-bootstrap';
import './Login.css';

const Logi = () => {
  return (
    <>

      <div className="container">
        <div className="container1">
          <h3 className="text-primary">Login</h3>
          <hr></hr>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
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

      </div>
    </>
  )
}

export default Logi
