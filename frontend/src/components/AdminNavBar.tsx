import React, {useState} from 'react';
import {Button, ButtonGroup, Col, Container, Navbar, Offcanvas, Row} from "react-bootstrap";

const AdminNavBar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const styleButton = {width: "18rem", marginBottom: "0.5rem", borderRadius: "0.3rem"}

    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Row className='d-flex'>
                    <Offcanvas show={show} onHide={handleClose} style={{width: "300px"}}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Select table</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="d-flex align-items-start justify-content-center">
                            <ButtonGroup vertical>
                                <Button
                                    variant="outline-dark"
                                    style={styleButton}
                                >
                                    Admins
                                </Button>
                                <Button
                                    variant="outline-dark"
                                    style={styleButton}
                                >
                                    Products
                                </Button>
                                <Button
                                    variant="outline-dark"
                                    style={styleButton}
                                >
                                    Orders
                                </Button>
                                <Button
                                    variant="outline-dark"
                                    style={styleButton}
                                >
                                    Tags
                                </Button>
                                <Button
                                    variant="outline-dark"
                                    style={styleButton}
                                >
                                    Types
                                </Button>
                            </ButtonGroup>
                        </Offcanvas.Body>
                    </Offcanvas>


                        <Button
                            style={{width: "100%"}}
                            variant="outline-light"
                            onClick={handleShow}
                        >
                            Select table
                        </Button>
                </Row>
            </Container>
        </Navbar>
    );
};

export default AdminNavBar;