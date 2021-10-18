import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Images/footer-logo.png'
import './Header.css'

const Header = () => {
    const { user, logout } = useAuth()
    return (
        <div>
            <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="light" className='py-2'>
                <Container>
                    <Navbar.Brand as={Link} to="/home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto ">
                            <Nav.Link className='text-white res-align-center' as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className='text-white res-align-center' as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link className='text-white res-align-center' as={HashLink} to="/home#blog">Blog</Nav.Link>
                            {user.email
                                ?
                                <Nav.Link className='me-2 res-me-null text-white ms-2 px-4 simple-border fw-bold res-align-center' as={Link} onClick={logout} to="/login">Logout</Nav.Link>
                                :
                                <Nav.Link className='me-2 res-me-null text-white ms-2 px-4 simple-border fw-bold res-mb-2 res-align-center' as={Link} to="/login">Login</Nav.Link>
                            }
                            {user.email ? '' : <Nav.Link as={Link} to='/register' className='default-btn-regular ms-2 res-align-center text-white px-4 rounded-pill' >Sign Up</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;