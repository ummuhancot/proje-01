import React from "react";
import SweetMenu from "@/components/sweetMenu";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <div>
      <SweetMenu />
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;

