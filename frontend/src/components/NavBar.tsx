import React, {useState} from "react";
import {Button, Card, Container, FormControl, InputGroup, Navbar, Offcanvas} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {CATALOG_ROUTE} from "../utils/consts";

// @todo Обернуть в функцию useEffect

function NavBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let isAuth = false;
    const navigate = useNavigate();
    // @todo получение user context для определения авторизован ли пользователь
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink style={{color: "white", textDecoration: "none"}} to={CATALOG_ROUTE}>
                        <h2>Sound Magazine</h2>
                    </NavLink>
                    <InputGroup style={{maxWidth: "400px"}}>
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Search
                        </InputGroup.Text>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <Button
                        variant="outline-success"
                        style={{
                            marginLeft: "50px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        // onClick={() => navigate(BASKET_ROUTE)}
                        onClick={handleShow}

                    >
                        Basket
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-cart4"
                            viewBox="0 0 16 16"
                            style={{marginLeft: "10px"}}
                        >
                            <path
                                d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                        </svg>
                    </Button>
                </Container>
            </Navbar>
            <Offcanvas
                show={show}
                onHide={handleClose}
                style={{maxWidth: "70vh"}}
                placement={"end"}
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Your goods</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="d-flex flex-column  align-items-center justify-content-start">
                    <Card
                        style={{width: "100%", minHeight: "2rem"}}
                        className='d-flex justify-content-center'
                    >
                        <h1>Product</h1>
                    </Card>

                    <Button variant="outline-success" className='mt-3'>
                        Proceed to checkout
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default NavBar;
