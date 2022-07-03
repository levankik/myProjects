import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom';
import React from 'react';
import UsersView from "./UsersView";

function Header() {
    return (
        <Navbar bg="dark" sticky='top' variant="dark" expand="md">
            <Container fluid>
                <Navbar.Brand as={Link} to="#home">Navbar</Navbar.Brand>
                <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/website/">Website</Nav.Link>
                            <Nav.Link as={Link} to="#pricing">Pricing</Nav.Link>
                            <Nav.Link as={Link} to="/fancy-border">Fancy Border</Nav.Link>
                            <Nav.Link as={Link} to="/users">Users</Nav.Link>
                            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                            <Nav.Link as={Link} to="/todo">Todo</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}
export default Header;