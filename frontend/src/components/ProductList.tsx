import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import ProductItem from "./ProductItem";

const ProductList: React.FC = () => {
  const { products, error, loading, page, limit } = useTypedSelector((state) => state.product);

  const { fetchProducts } = useActions();

  useEffect(() => {
    fetchProducts(page, limit);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
  <Row className="d-flex">
    {products.map((product, i) => 
      <ProductItem key={i} product={product} />
      )}
  </Row>)
};

export default ProductList;
