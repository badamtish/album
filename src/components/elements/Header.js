import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <Navbar id="header" expand="lg" sticky="top">
            <Navbar.Brand href="/" id="navbar-brand">N&A</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/" style={{ color: "#e4e3e3" }}>Home</Nav.Link>
                    <NavDropdown title="Albums" id="header-dropdown">
                        <NavDropdown.Item href="/nischal">Nischal</NavDropdown.Item>
                        <NavDropdown.Item href="/aparna">Aparna</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;