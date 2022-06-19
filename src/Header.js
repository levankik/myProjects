import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom';
import React from 'react';


function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/website/">Website</Nav.Link>
                    <Nav.Link as={Link} to="#pricing">Pricing</Nav.Link>
                    <Nav.Link as={Link} to="/fancy-border">Fancy Border</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default Header;