import MilkMenu from '@/components/milkMenu';
import React from 'react'
import { Container } from 'react-bootstrap';

const Layout = ({children}) => {
  return (
    <div>
      <MilkMenu />
      <Container>
        {children}
      </Container>
    </div>
  );
}

export default Layout