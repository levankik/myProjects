import {Alert, Button, Container, Form} from 'react-bootstrap';
import {useState} from "react";
import axios from "axios";

function LoginView({error, onError}) {
    const initialValues = {
        username: '',
        password: ''
    }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async (event) => {
        event.preventDefault();
        try {
        const {data} = await axios.post('http://localhost:3030/login', {username, password});
        localStorage.setItem('token', data.token);
        window.location.reload();
    } catch(err){
        onError && onError(err)};
    }
    return (
        <Container>
            {
                error && <Alert variant="danger">{error}</Alert>
            }
            <Form onSubmit={login}>
                <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit" className="mt-3">Login</Button>
            </Form>
        </Container>
    )
}

export default LoginView;