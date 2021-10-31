import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (


        <>
            <Navbar className="p-4 navbar" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="head-title" href="#home">The Travel</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end fs-4 fw-2 nav-link">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>


                        {user?.email ?
                            <span className="private-link">
                                <button><Nav.Link as={Link} to="/addservice">Add New Services</Nav.Link></button>

                                <button><Nav.Link as={Link} to="/myorders">My order</Nav.Link></button>
                                <button><Nav.Link as={Link} to="/allorder">Manage All orders</Nav.Link></button>
                                <button onClick={logOut} variant="light">Logout</button>
                            </span>
                            :


                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            <a className="user-name" href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>



    );
};

export default Header;