"use client";
import Link from 'next/link'
import React from 'react'
import { Card, CardBody, Nav } from 'react-bootstrap'


const ClassicMenu = () => {
  return (
    <Card>
      <CardBody>
        <Nav className="flex-column">
          <Nav.Link href="/cold/espresso " as={Link}>
            Espresso
          </Nav.Link>
          <Nav.Link href="/cold/americano" as={Link}>
            Americano
          </Nav.Link>
          <Nav.Link href="/cold/turkishcoffee " as={Link}>
            Turkish Coffee
          </Nav.Link>
          <Nav.Link href='/cold/filtercoffee' as={Link}>
            Filter Coffee
          </Nav.Link>
        </Nav>
      </CardBody>
    </Card>
  );
}

export default ClassicMenu