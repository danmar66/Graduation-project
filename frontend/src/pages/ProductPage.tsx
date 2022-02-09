import React, { useEffect, useMemo, useState } from "react";
import { Breadcrumb, Button, Card, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

function ProductPage() {
  const location = useLocation();
  const dispatch = useDispatch()
  const slugName = location.pathname.split("/")[2];
  const [qty, setQty] = useState(1);
  const { fetchOneProduct } = useActions();

  const { addToBasket } = useActions();

  useMemo(() => {
    fetchOneProduct(slugName);
  }, [slugName]);
  const { product, loading, error } = useTypedSelector((state) => state.oneProduct);
  const navigate = useNavigate();

  const addToBasketHandler = () => {
    addToBasket(product._id, qty);
  };

  if (loading) {
    return <Spinner animation="border" />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    // @todo перенести всё в отдельный component
    <Container>
      <Breadcrumb className="mt-3">
        <Breadcrumb.Item onClick={() => navigate("/")}>Shop</Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => navigate("/products")}>Product</Breadcrumb.Item>
        <Breadcrumb.Item active>{product.title}</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Col md={6} className="mt-3">
          <Image width="100%" src={process.env.REACT_APP_API_URL + product.img} />
        </Col>
        <Col md={6} style={{ display: "flex", alignItems: "center" }} className="mt-3">
          <Card style={{ width: "80%", height: "100%" }} className="d-flex justify-content-center">
            <Card.Header style={{ fontWeight: "900", fontSize: "1.5rem" }}>
              {product.title.toUpperCase()}
            </Card.Header>
            <Card.Body className="d-flex align-items-center">
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
            <Card.Footer style={{ backgroundColor: "white", fontWeight: "700" }}>
              Price: {product.price}$
            </Card.Footer>
            <Card.Footer className="d-flex justify-content-md-between">
              <Button
                variant="outline-success"
                onClick={() => {
                  addToBasketHandler();
                }}
              >
                Add to Card
              </Button>
              <Button variant="outline-primary" onClick={() => navigate("/")}>
                Back to Store
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductPage;
