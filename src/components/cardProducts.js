"use client";
import React from "react";
import { Badge, Card } from "react-bootstrap";

const CardProducts = ({ user }) => {
  const { title, text, img, price } = user;

  return (
    <Card
      className="shadow-sm rounded-4 overflow-hidden border-0 h-100"
      style={{
        borderRadius: "8px",
        boxShadow: "0 10px 20px  rgba(82, 65, 161, 0.72)",
        marginTop: "20px",
      }}
    >
      <Card.Img
        variant="top"
        src={img}
        style={{
          objectFit: "cover",
          height: "500px",
          margin: "20px",
          boxShadow: "0 10px 20px  rgba(47, 0, 255, 0.89)",
        }}
      />
      <Card.Body className="d-flex flex-column justify-content-between text-center ">
        <Card.Title >{title}</Card.Title>
        <Badge bg="dark" className="mb-2 ">
          {text}
        </Badge>
        <strong
          style={{
            position: "absolute",
            top: "40px",
            right: "10px",
            borderRadius: "8px",
            boxShadow: "0 10px 20px  rgba(71, 8, 172, 0.72)",
            backgroundColor: "rgba(82, 65, 161, 0.72)",
            width:"70px",
            height:"30px",
            textAlign:"center",
            fontSize:"18px",
          }}
        >
          ${price}
        </strong>
      </Card.Body>
    </Card>
  );
};

export default CardProducts;
