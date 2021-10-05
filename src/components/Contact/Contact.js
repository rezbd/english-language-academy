import React from 'react';
import { Form } from 'react-bootstrap';
import "./Contact.css";

// contact us page form
const Contact = () => {
    return (
        <div className="contact">
            <h2 className="py-5">How Can We Help?</h2>
            <p className="fs-5">Please give us feedback or ask your query.</p>
            <Form className="w-50 mx-auto mt-5 mb-2">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <h6 className="contact-text">Name</h6>
                    <Form.Control type="email" placeholder="your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <h6 className="contact-text">Email Address</h6>
                    <Form.Control type="email" placeholder="your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <h6 className="contact-text">Your feedback or query</h6>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
            <button className="btn btn-dark contact-btn mb-5">Submit</button>
        </div>
    );
};

export default Contact;