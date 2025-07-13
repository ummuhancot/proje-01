"use client";
import Link from 'next/link'
import React from 'react'
import { Card, CardBody, Nav } from 'react-bootstrap'

const SweetMenu = () => {
  return (
    <Card>
      <CardBody>
        <Nav className="flex-column">
          <Nav.Link href="/cold/mocha " as={Link}>
            Mocha
          </Nav.Link>
          <Nav.Link href="/cold/vanillalatte" as={Link}>
            Vanilla Latte
          </Nav.Link>
          <Nav.Link href="/cold/caramelmacchiato " as={Link}>
            Caramel Macchiato
          </Nav.Link>
          <Nav.Link href="/cold/frappe" as={Link}>
            Frappe / Frappuccino
          </Nav.Link>
        </Nav>
      </CardBody>
    </Card>
  );
}

export default SweetMenu