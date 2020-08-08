import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

function Header() {
    return (    
        <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Brand href="home" style={{fontFamily:"Alex Brush, cursive"}}>N & A</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="home">Home</Nav.Link>
                    <NavDropdown title="Albums" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/nischal">Nischal</NavDropdown.Item>
                        <NavDropdown.Item href="/aparna">Aparna</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
  );
}

export default Header;