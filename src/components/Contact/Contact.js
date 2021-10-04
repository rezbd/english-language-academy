import React from 'react';
import { Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <h2 className="py-5">Contact Us</h2>
            <p>Please give us feedback or ask any question.</p>
            <Form className="w-50 mx-auto my-5">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <h6>Name</h6>
                    <Form.Control type="email" placeholder="your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <h6>Email Address</h6>
                    <Form.Control type="email" placeholder="your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <h6>Your feedback or query</h6>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </div>
    );
};

export default Contact;