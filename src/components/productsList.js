import React from "react";
import { Col, Row } from "react-bootstrap";
import CardProducts from "./cardProducts"; 
const ProductsList = ({ user }) => {
  return (
    <Row className="productList">
      {user.map((item) => (
        <Col key={item.id} md={4} className="mb-5">
          <CardProducts user={item} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductsList;
