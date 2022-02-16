import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ProductList from "../components/ProductList";
import Sidebar from "../components/Sidebar";

function Catalog() {
    return (
        <Container>
            <Row className="mt-3">
                <Col md={3}>
                    <Sidebar/>
                </Col>
                <Col md={9}>
                    <ProductList/>
                </Col>
            </Row>
        </Container>
    );
}

export default Catalog;
