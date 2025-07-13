"use client";
import Link from 'next/link'
import React from 'react'
import { Card, CardBody, Nav } from 'react-bootstrap'

const MilkMenu = () => {
  return (
    <Card>
      <CardBody>
        <Nav className="flex-column">
          <Nav.Link href="/cold/latte " as={Link}>
            Latte
          </Nav.Link>
          <Nav.Link href="/cold/cappuccino " as={Link}>
            Cappuccino
          </Nav.Link>
          <Nav.Link href="/cold/flatwhite" as={Link}>
            Flat White
          </Nav.Link>
          <Nav.Link href="/cold/macchiato " as={Link}>
            Macchiato
          </Nav.Link>
        </Nav>
      </CardBody>
    </Card>
  );
}

export default MilkMenu