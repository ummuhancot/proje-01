
import Dashboard from "@/components/dashboard";
import React from "react";
import { Container } from "react-bootstrap";

const layout = ({ children }) => {
  return (
    <div>
      <Dashboard/>
      <Container>{children}</Container>
    </div>
  );
};

export default layout;
