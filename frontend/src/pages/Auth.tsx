import React from "react";
import {Button, Card, Container, Form} from "react-bootstrap";

function Auth() {
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 500}} className="p-5">
                <h2 className="m-auto">Authorization</h2>

                <Form className="d-flex flex-column mt-3">
                    <Form.Control placeholder="Enter username..." className="mt-3"/>
                    <Form.Control placeholder="Enter password..." className="mt-3"/>
                    <Button
                        className="mt-3 align-self-end" variant={"outline-success"}>LOGIN</Button>
                </Form>
            </Card>
        </Container>
    );
}

export default Auth;
