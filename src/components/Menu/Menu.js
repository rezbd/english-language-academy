import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Menu.css";

// menubar developed by bootstrap and custom styles
const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto fs-5">
                    <NavLink to="/home"><i className="fas fa-book-reader"></i></NavLink>
                    <NavLink to="/home">Home</NavLink>
                </Nav>
                <Nav className="ms-auto fs-5">
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Menu;