"use client";
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import menuItems from "@/helpers/data/dashboard-menu.json";

const DashboardMenu = ({ children }) => {
  return (
    <Navbar expand="lg" className="bg-warning mb-3">
      <Container fluid>
        <Navbar.Brand 
        className="productsHeader"
        style={{fontSize:"50px"}}
        href="/dashboard"
        as={Link}>
          SARI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="dashboard-menu" />
        <Navbar.Offcanvas
          id="dashboard-menu"
          aria-labelledby="dashboard-menu-label"
          placement="end"
        >
          <Offcanvas.Header closeButton className="swiper">
            <Offcanvas.Title id="dashboard-menu-label">MENU</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 swiper">
              {menuItems.map((item) => (
                <Nav.Link className="menu"
                  key={item.id}
                  href={item.url}
                  as={Link}
                  prefetch={item.prefetch}
                >
                  {item.title}
                </Nav.Link>
              ))}
            </Nav>
            {children}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default DashboardMenu;
