"use client";
import React from 'react'
import { Nav } from 'react-bootstrap'
import metuItems from "@/helpers/data/main-menu.json";
import Link from 'next/link';
import { Linker } from './linker';

const MainMenuFooter= (props) => {
  return (
    <Nav className="me-auto" {...props}>
      {metuItems.map((item) => (
        <Linker
          style={{
            color: "#ffeb3b",
            textDecoration: "none",
            padding: "5px 16px",
            fontWeight: "bold",
            fontSize: "1rem",
            fontFamily: "Rock Salt",
          }}
          href={item.url}
          key={item.id}
          prefettch={item.prefettch}
          as={Link}
        >
          {item.title}
        </Linker>
      ))}
    </Nav>
  );
}

export default MainMenuFooter