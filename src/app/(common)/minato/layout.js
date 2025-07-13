import React from 'react'
import { Container } from 'react-bootstrap';

const Layout = ({children}) => {
  return (
    <div>
      
      <Container>
        {children}
        </Container>
    </div>
  );
}

export default Layout