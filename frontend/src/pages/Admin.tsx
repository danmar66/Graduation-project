import React, {useState} from 'react';
import {ButtonGroup, Button, Col, Container, Row, Offcanvas, Pagination} from "react-bootstrap";
import AdminsTable from "../components/AdminPanel/AdminPanelTables/AdminsTable";
import TagsTable from "../components/AdminPanel/AdminPanelTables/TagsTable";
import TypesTable from "../components/AdminPanel/AdminPanelTables/TypesTable";
import ProductsTable from "../components/AdminPanel/AdminPanelTables/ProductsTable";

function Admin() {

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

    return (
        <>
            <Row>
                <Col md={12}>
                    <ProductsTable/>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex align-items-center justify-content-center'>
                    <Pagination>{items}</Pagination>
                </Col>
            </Row>
        </>
    )
}

export default Admin;
