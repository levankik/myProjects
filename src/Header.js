import {Container, DropdownButton, Dropdown, Nav, Navbar, Form} from "react-bootstrap";
import {Link} from 'react-router-dom';
import React from 'react';
import {useUserContext} from "./UserContext";
import {useThemeContext} from "./ThemeContext";
import {PersonCircle as UserIcon} from "react-bootstrap-icons";


function Header({onThemeChange}) {
    const {user} = useUserContext();
    const theme = useThemeContext();

    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }
    return (
        <Navbar bg="dark" sticky='top' variant="dark" expand="md">
            <Container fluid>
                <Navbar.Brand as={Link} to="#home">Navbar</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/website/">Website</Nav.Link>
                        <Nav.Link as={Link} to="/users">Users</Nav.Link>
                        <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                        <Nav.Link as={Link} to="/todo">Todo</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Text className="me-4">
                    <Form.Switch
                        className="me-0"
                        label="dark"
                        checked={theme === 'dark'}
                        onChange={e => onThemeChange(e.target.checked ? 'dark' : 'light')}
                    />
                </Navbar.Text>
                <DropdownButton variant="outline-primary" title={(<><UserIcon className="me-1"/>{user.username}</>)}>
                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>

                </DropdownButton>
                <Navbar.Text></Navbar.Text>
            </Container>
        </Navbar>
    )
}

export default Header;