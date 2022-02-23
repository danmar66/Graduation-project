import React, {useState} from "react";
import {Button, Card, Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {PRODUCT_ROUTE} from "../utils/consts";
import {addToBasket} from "../store/action-creators/basket";
import {useDispatch} from "react-redux";

function ProductItem({product, addProductToBasket}: any) {
    // @todo убрать any
    const navigate = useNavigate();
    const dispath = useDispatch();

    // let items = JSON.parse(localStorage.getItem("product"));
    // let newProduct = JSON.parse(localStorage.getItem('product')) || [];

    // const addProductToBasket = (product: any) => {
    //     dispath(addToBasket(product))

    //     newProduct.push(product)
    //     console.log(newProduct);

    //     localStorage.setItem('product', JSON.stringify(newProduct))
    // }

    return (
        <Col md={6} sm={12} lg={4} className="mb-3">
            <Card border={"black"} style={{width: "100%"}}>
                <Card.Img
                    onClick={() => {
                        navigate(PRODUCT_ROUTE + "/" + product.slug);
                    }}
                    style={{cursor: "pointer", height: 200, objectFit: "contain"}}
                    src={process.env.REACT_APP_API_URL + product.img}
                />
                <Card.Body>
                    <Card.Title
                        style={{
                            color: "black",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {product.title}
                    </Card.Title>
                    <Card.Text
                        style={{
                            color: "gray",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {product.description}
                    </Card.Text>
                    <Card.Subtitle>Price: {product.price} $</Card.Subtitle>
                    <div style={{display: "flex"}}>
                        <Button
                            className="mt-2"
                            variant="outline-success"
                            style={{width: "100vh"}}
                            onClick={() => {
                                addProductToBasket(product)
                            }}
                        >
                            Buy
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ProductItem;
