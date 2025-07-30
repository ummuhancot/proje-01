"use client";
import React from "react";
import {Button, Col, Row } from "react-bootstrap";
import cat from "@/helpers/data/products-cat.json";
import { useRouter } from "next/navigation";

const ProductDetails = ({ user }) => {

  const product = cat.find((item, index) => index + 1 === Number(user.id));

  const { title, text } = user;

  const rou  = useRouter();

  return (
    <Row
      className="productsHeader"
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontSize: "100px",
        margin: "10px",
        padding: "10px",
      }}
    >
      <Col
        md={5}
        style={{
          backgroundColor: "yellow",
          marginBottom: "20px",
          padding: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={product?.img || "/products-cat.json"}
          alt={title || "Cat image"}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <h2 style={{ marginTop: "10px" }}>{title || "Unnamed Cat"}</h2>
        <p>{text || "No description available."}</p>

        

        <Button variant="secondary"  
        style={{backgroundColor:"black",
            fontSize:"40px",
           display:"flex",
           justifyContent:"center"
        }}
        onClick={() => rou.back()}>Return Back</Button>
      </Col>
    </Row>
  );
};

export default ProductDetails;
