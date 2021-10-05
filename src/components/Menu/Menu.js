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
                    <NavLink to="/" activeStyle={{ color: 'white', fontSize: '1.03em' }}><i className="fas fa-book-reader page-icon"></i></NavLink>
                    <NavLink to="/home" activeStyle={{ color: 'white', fontSize: '1.03em' }}>Home</NavLink>
                </Nav>
                <Nav className="ms-auto fs-5">
                    <NavLink to="/services" activeStyle={{ color: 'white', fontSize: '1.03em' }}>Services</NavLink>
                    <NavLink to="/about" activeStyle={{ color: 'white', fontSize: '1.03em' }}>About</NavLink>
                    <NavLink to="/contact" activeStyle={{ color: 'white', fontSize: '1.03em' }}>Contact Us</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Menu;