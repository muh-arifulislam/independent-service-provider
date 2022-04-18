import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css';
const Header = () => {
    const [user, loading, error] = useAuthState(auth, { onUserChanged: true });
    return (
        <header className=''>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Ash-Shifa Hijama Services</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='nav-item' to='/'>Home</Link>
                            <Link className='nav-item' to='/checkout'>Checkout</Link>
                            <Link className='nav-item' to='/blog'>Blog</Link>
                            <Link className='nav-item' to='/about'>About</Link>
                        </Nav>
                        <Nav>
                            {
                                !user ? <Link className='nav-item' to='/login'>Login</Link> : <div>
                                    <button onClick={() => signOut(auth)} className='btn btn-primary'>Sign out</button>
                                </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;