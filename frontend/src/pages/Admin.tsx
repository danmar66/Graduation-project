import React, {useState} from 'react';
import {ButtonGroup, Button, Col, Container, Row, Offcanvas} from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import ProductList from "../components/ProductList";
import AdminsList from "../components/AdminPanelLIsts/AdminsList";

function Admin() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const styleButton = {width: "18rem", marginBottom: "0.5rem", borderRadius: "0.3rem"}

    return <Container>
        <Row className="mt-3">
            <Offcanvas show={show} onHide={handleClose} style={{maxWidth: "30vh"}}>
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

            <Col md={2}>
                    <Button
                        style={{width: "100%"}}
                        variant="dark"
                        className='mb-2'
                        onClick={handleShow}
                    >
                        Select table
                    </Button>
            </Col>
            <Col md={10}>
                <AdminsList />
            </Col>
        </Row>
    </Container>;
}

export default Admin;
