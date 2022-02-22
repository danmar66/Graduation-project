import React, {useState} from 'react';
import {ButtonGroup, Button, Col, Container, Row, Offcanvas, Pagination} from "react-bootstrap";
import AdminsList from "../components/AdminPanelLIsts/AdminsList";
import TagsList from "../components/AdminPanelLIsts/TagsList";

function Admin() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const styleButton = {width: "18rem", marginBottom: "0.5rem", borderRadius: "0.3rem"}

    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === active}
            >
                {number}
            </Pagination.Item>,
        );
    }

    return <Container>
        <Row className="mt-3">
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
        </Row>
        <Row>
            <Col md={12}>
                <TagsList/>
            </Col>
        </Row>
        <Row>
            <Col className='d-flex align-items-center justify-content-center'>
                <Pagination>{items}</Pagination>
            </Col>
        </Row>
    </Container>;
}

export default Admin;
