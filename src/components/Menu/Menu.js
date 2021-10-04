import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/home">Home</Nav.Link>
                    <Nav.Link to="/services">Services</Nav.Link>
                    <Nav.Link to="/about">About</Nav.Link>
                    <Nav.Link to="/contact">Contact Us</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Menu;