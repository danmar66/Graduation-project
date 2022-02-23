import React, {useState} from 'react';
import {Button, ButtonGroup, Col, Container, Navbar, Offcanvas, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE} from "../utils/consts";

const AdminNavBar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const styleButton = {width: "18rem", marginBottom: "0.5rem", borderRadius: "0.3rem"}

    const navigate = useNavigate();

    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Offcanvas show={show} onHide={handleClose} style={{width: "300px"}}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Select table</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="d-flex align-items-start justify-content-center">
                        <ButtonGroup vertical>
                            <Button
                                variant="outline-dark"
                                style={styleButton}
                                onClick={() => {
                                    navigate(ADMIN_ROUTE + "/admins");
                                }}
                            >
                                Admins
                            </Button>
                            <Button
                                variant="outline-dark"
                                style={styleButton}
                                onClick={() => {
                                    navigate(ADMIN_ROUTE + "/products");
                                }}
                            >
                                Products
                            </Button>
                            <Button
                                variant="outline-dark"
                                style={styleButton}
                                onClick={() => {
                                    navigate(ADMIN_ROUTE + "/orders");
                                }}
                            >
                                Orders
                            </Button>
                            <Button
                                variant="outline-dark"
                                style={styleButton}
                                onClick={() => {
                                    navigate(ADMIN_ROUTE + "/tags");
                                }}
                            >
                                Tags
                            </Button>
                            <Button
                                variant="outline-dark"
                                style={styleButton}
                                onClick={() => {
                                    navigate(ADMIN_ROUTE + "/types");
                                }}
                            >
                                Types
                            </Button>
                        </ButtonGroup>
                    </Offcanvas.Body>
                </Offcanvas>
                <Row style={{width: "100%"}}>
                    <Col className='d-flex justify-content-between'>
                        <div>
                            <Button
                                style={{width: "150px"}}
                                variant="outline-light"
                                onClick={handleShow}
                            >
                                Select table
                            </Button>
                        </div>
                        <div>
                            <Button
                                style={{width: "150px"}}
                                variant="outline-danger"
                            >
                                Log Out
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default AdminNavBar;