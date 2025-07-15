"use client";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Link from "next/link";
import ColdMenuData from "@/helpers/data/cold-menu.json";

const ColdMenu = () => {
  return (
    <div className="mt-5">
      <Row xs={2} md={3} className="g-4" style={{ paddingBottom: "80px" }}>
        {ColdMenuData.map((item) => (
          <Col key={item.id}>
            <Card
              style={{
                textDecoration: "none",
                backgroundColor: "#FFD600",
                color: "#000",
                boxSizing: "border-box",
                borderRadius: "8px",
                padding: "5px",
                
                boxShadow: "0 5px 10px rgba(255, 21, 0, 0.72)",
              }}
              className="h-100 mt-2"
              as={Link}
              href={item.url}
              prefetch={item.prefetch}
             
            >
              <Card.Img
                className="object-fit-cover w-100"
                variant="top"
                src={item.img}
                style={{ height: "250px", borderRadius: "12px" }}
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
    </div>
  );
};

export default ColdMenu;
