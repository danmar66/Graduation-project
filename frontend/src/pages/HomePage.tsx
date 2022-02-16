import React from 'react';
import SliderMain from "../components/SliderMain";
import {Row, Col, Container} from "react-bootstrap";

const HomePage = () => {
    return (
        <Container>
            <Row className="mt-3">
                <Col md={9}>
                    <SliderMain/>

                </Col>
            </Row>
        </Container>

    );
};

export default HomePage;