"use client";
import Link from "next/link";
import React from "react";
import { Badge, Card } from "react-bootstrap";

const CardProducts = ({ user }) => {
  const { title, text, img, price, id } = user;

  return (
    <Card href={`/products/${id}`} as={Link}
      className="shadow-sm  overflow-hidden  h-100"
      style={{
        borderRadius: "8px ",
        boxShadow: "0 10px 20px  rgba(82, 65, 161, 0.72)",
        margin: "20px",
      }}
    >
      <Card.Img
        variant="top"
        src={img}
        style={{
          objectFit: "cover",
          height: "50%",
          width: "50%",
          margin: "20px",
          boxShadow: "0 10px 20px  rgba(255, 242, 0, 0.89)",
        }}
      />
      <Card.Body
        className="d-flex flex-column justify-content-between text-center productsHeader"
        style={{
          margin: " 10px",
          padding: "10px",
          borderRadius: "10px",
          fontSize: "50px",
          backgroundColor: "rgba(98, 82, 165, 0.72) ",
        }}
      >
        <Card.Title
          style={{
            color: "white",
            backgroundColor: "rgba(33, 32, 34, 1)",
            padding: "10px",
            borderRadius: "10px",
            fontSize:"40px",
            margin:"20px"
          }}
        >
          Cat name : {title}
        </Card.Title>
        <Badge bg="dark" className="mb-2 ">
          {text}
        </Badge>
        <strong
          style={{
            position: "absolute",
            top: "40px",
            right: "10px",
            borderRadius: "8px",
            boxShadow: "0 10px 20px  rgba(255, 242, 0, 0.89)",
            backgroundColor: "rgba(98, 82, 165, 0.72)",
            width: "100px",
            height: "50px",
            textAlign: "center",
            fontSize: "28px",
          }}
        >
          ${price}
        </strong>
      </Card.Body>
    </Card>
  );
};

export default CardProducts;
