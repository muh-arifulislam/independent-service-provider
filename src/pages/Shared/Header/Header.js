import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Ash-Shifa Hijama Services</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='nav-item' to='/'>Home</Link>
                            <Link className='nav-item' to='home#services'>Services</Link>
                            <Link className='nav-item' to='/blog'>Blog</Link>
                            <Link className='nav-item' to='/about'>About</Link>
                        </Nav>
                        <Nav>
                            <Link className='nav-item' to='/login'>Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;