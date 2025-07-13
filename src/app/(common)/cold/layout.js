import ColdMenu from '@/components/coldMenu';
import React from 'react'
import { Container } from 'react-bootstrap';

const Layout = ({children}) => {
  return (
    <div>
      <ColdMenu/>
      <Container>
        {children}
        </Container>
    </div>
  );
}

export default Layout