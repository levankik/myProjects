import React from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap';
import {useState} from "react";

export default SearchForm;

function SearchForm({onSearch}) {
    const initialValues = {
        name: '',
        username: '',
        email: '',
        city: '',
    };
    const [values, setValues] = useState(initialValues);
    const reset = () => setValues(initialValues);

    const search = async (event) => {
        event.preventDefault();
        const params = removeEmptyValues(values);
        console.log(params);
        if (typeof onSearch === 'function') {
            try {
                await onSearch(params);
            } catch (e) {
                console.error(e);
            }
        }
    };

    const removeEmptyValues = (values) => {
        return Object.entries(values).reduce((params, [key, value]) => {
            return value ? {...params, [key]: value} : params;
        }, {});
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]: value});
    };

    return (
        <Form onSubmit={search} onReset={reset}>
            <Row>
                <Col lg={3}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            placeholder="Enter Name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>

                <Col lg={3}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            value={values.email}
                            name="email"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>

                <Col lg={3}>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            placeholder="Enter Username"
                            value={values.username}
                            name="username"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>

                <Col lg={3}>
                    <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            placeholder="Enter City"
                            value={values.city}
                            name="city"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <div className="d-flex bg-light justify-content-end mt-3">
                <Button variant="secondary" type="reset">Reset</Button>
                <Button variant="outline-primary" type="submit" onClick={search}>
                    Search
                </Button>
            </div>
        </Form>
    )
}