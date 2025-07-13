"use client";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import MilkMenuData from "@/helpers/data/milk-menu.json";

const SweetMenu = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "32px",
          marginTop: "32px",
        }}
      >
        <img
          src="/minato/sweetMinato.jpeg"
          alt="Welcome"
          style={{
            width: "84px",
            height: "84px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "1px solid #FFD600",
          }}
        />
        <div>
          <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Minato</div>
          <div style={{ color: "#666", fontSize: "0.95rem" }}>Hoşgeldin!</div>
        </div>
      </div>

      <Row xs={1} md={3} className="g-4" style={{ paddingBottom: "80px" }}>
        {MilkMenuData.map((item) => (
          <Col key={item.id}>
            <Card
              className="h-100 mt-2"
              as={Link}
              href={item.url}
              prefetch={item.prefetch}
              style={{ textDecoration: "none" }}
            >
              <Card.Img
                className="object-fit-cover w-100"
                variant="top"
                src={item.img}
                style={{ height: "500px" }}
              />
              <Card.Body
                className="d-flex flex-column"
                style={{ padding: "16px" }}
              >
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
                <div
                  style={{
                    fontWeight: "bold",
                    color: "#FFD600",
                    fontSize: "1.15rem",
                    marginTop: "16px",
                    alignSelf: "flex-end",
                    background: "#fffde7",
                    padding: "6px 18px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(255,214,0,0.08)",
                  }}
                >
                  {item.price ? `Fiyat: ${item.price}₺` : ""}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default SweetMenu;
