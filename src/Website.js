import {Container, Row, Col, Nav} from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import React from 'react';

function Website() {
    return (
        <Container fluid>
            <Row className="bg-primary">
                <Col className="col-12 col-sm-4"> <Image src="./logo192.png" alt="Logo"/> </Col>
                <Col className="col-12 col-sm-8 d-flex align-items-center "><h1> My Website! </h1></Col>
            </Row>
            <Row>
                <Col className="col-12 col-lg-4">
                    <Row>
                        <Col className="col-12 col-sm-4 col-lg-12">
                            <Nav className="flex-column mt-2">
                                <Nav.Link href="#">Home</Nav.Link>
                                <Nav.Link href="#">About</Nav.Link>
                                <Nav.Link href="#">Interesting Things</Nav.Link>
                                <Nav.Link href="#">Boring Things</Nav.Link>
                                <Nav.Link href="#">Contact</Nav.Link>
                            </Nav>
                        </Col>
                        <Col className="col-12 col-sm-8 col-lg-12">
                            <p className="mt-2">
                                asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf

                                asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf

                                asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf

                                asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf

                                asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf

                                asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf

                                asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col className="col-12 col-lg-8">
                    <h1>Lorem Ipsum</h1>
                    <p>
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                    </p>
                    <p>
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                    </p>
                    <p>
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                    </p>
                    <p>
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                    </p>
                    <p>
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                    </p>
                    <p>
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                        asdf adfs asdf asdf asdf asdf asdf asdf adf adf adf adf adf adf asdf
                    </p>
                </Col>
            </Row>
            <Row className="bg-warning">
                <Col className="text-center p-4">Footer</Col>
            </Row>
        </Container>
    );
}

export default Website;

