
import React from "react";
import { Container } from "react-bootstrap";

const layout = ({ children }) => {
  return (
    <div>
      
      <Container>{children}</Container>
    </div>
  );
};

export default layout;
