"use client"; //burayı yazmazsak React-Bootstrap bileşenleri çalışmaz, çünkü bu bileşenler istemci tarafında etkileşimli özellikler içerir.
//run time error verir, bu yüzden "use client" ifadesi zorunludur.
/* 
Sunucu tarafı (Server Component): Daha hızlı, daha az JavaScript gönderir.
İstemci tarafı (Client Component): Etkileşimli, tarayıcıya özel kodlar için gereklidir. 
*/
/*
NOTLAR:
- "use client" ifadesi, bu dosyanın istemci tarafında (tarayıcıda) çalışacağını belirtir.
- Next.js'de varsayılan olarak bileşenler sunucu tarafında render edilir.
- Eğer React durum yönetimi, etkileşimli UI veya tarayıcıya özel API'ler kullanacaksan "use client" eklenmelidir.
- Bu dosyada React-Bootstrap gibi etkileşimli bileşenler kullanıldığı için "use client" zorunludur.
- Sunucu tarafı bileşenlerde etkileşimli özellikler çalışmaz; bu yüzden istemci bileşeni olarak işaretlenir.
*/
import { PiBowlSteam } from "react-icons/pi";
import metuItems from "@/helpers/data/main-menu.json";
import Link from 'next/link';
import React from 'react'
import { Container, Nav, Navbar, NavDropdown, Badge } from 'react-bootstrap';
import minato  from "../../public/img/minato.png";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-warning-subtle" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/" as={Link} className="d-flex align-items-center">
          <img
            src="/img/minato.png"
            alt="minato"
            width="150"
            height="150"
            className="d-inline-block align-top me-5 "
            style={{ borderRadius: "50%" }}
          />
          <Badge
            bg="warning"
            text="dark"
            className="me-2 py-2 px-3 d-flex align-items-center"
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}
          >
            SARI
          </Badge>
          <Badge
            bg="dark"
            className="d-flex align-items-center "
            style={{ borderRadius: "8px", padding: "4px" }}
          >
            <PiBowlSteam color="#ffeb3b" size={30} />
          </Badge>
          <Badge
            bg="warning"
            text="dark"
            className="ms-2 py-2 px-3 d-flex align-items-center"
            style={{ fontWeight: "bold", fontSize: "1.2rem" }}
          >
            黄色
          </Badge>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {metuItems.map((item) => (
              <Nav.Link
                href={item.url}
                key={item.id}
                prefettch={item.prefettch}
                as={Link}
              >
                {item.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header