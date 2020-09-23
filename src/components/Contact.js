import React from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';

function Contact() {
  return (
    <div id="contact" className="container mb-3">
      <Form>
        <FormGroup>
          <input type="text" placeholder="your name" className="form-control" />
        </FormGroup>
        <FormGroup>
          <input
            type="text"
            placeholder="enter email"
            className="form-control"
          />
        </FormGroup>
        <FormGroup>
          <textarea
            name=""
            id=""
            cols="30"
            className="form-control"
            rows="10"
          ></textarea>
        </FormGroup>
        <Button className="btn btn-info">Submit</Button>
      </Form>
    </div>
  );
}

export default Contact;
